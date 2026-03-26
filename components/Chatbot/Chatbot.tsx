'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import styles from './Chatbot.module.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Resize logic
  const [chatHeight, setChatHeight] = useState(480);
  const isResizing = useRef(false);
  const startY = useRef(0);
  const startHeight = useRef(0);
  const resizingFrom = useRef<'top' | 'bottom'>('top');

  const startResizingTop = (e: React.MouseEvent) => {
    isResizing.current = true;
    resizingFrom.current = 'top';
    startY.current = e.clientY;
    startHeight.current = chatHeight;
    document.addEventListener('mousemove', handleResizing);
    document.addEventListener('mouseup', stopResizing);
    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
  };

  const startResizingBottom = (e: React.MouseEvent) => {
    isResizing.current = true;
    resizingFrom.current = 'bottom';
    startY.current = e.clientY;
    startHeight.current = chatHeight;
    document.addEventListener('mousemove', handleResizing);
    document.addEventListener('mouseup', stopResizing);
    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
  };

  const handleResizing = (e: MouseEvent) => {
    if (!isResizing.current) return;
    
    let newHeight = startHeight.current;
    if (resizingFrom.current === 'top') {
      const deltaY = startY.current - e.clientY;
      newHeight = Math.min(Math.max(300, startHeight.current + deltaY), 800);
    } else {
      const deltaY = e.clientY - startY.current;
      newHeight = Math.min(Math.max(300, startHeight.current - deltaY), 800);
    }
    setChatHeight(newHeight);
  };

  const stopResizing = () => {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResizing);
    document.removeEventListener('mouseup', stopResizing);
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  };

  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const initialQuestions = [
    'What services do you offer?',
    'Tell me about your portfolio',
    'Who founded 3.0 Labs?',
    'How can I contact you?',
    'What tech stack do you use?',
  ];

  const followUpMap: Record<string, string[]> = {
    services: [
      'Tell me about AI Agents',
      'What is Full-Stack Engineering?',
      'How does AI Automation work?',
    ],
    portfolio: [
      'What is FundPitch?',
      'Tell me about BhoomiBox',
      'What is SailYour AI?',
      'Tell me about Blue Cross app',
    ],
    founder: [
      'Where is your office?',
      'How can I contact you?',
      'What services do you offer?',
    ],
    contact: [
      'Where is your office located?',
      'What services do you offer?',
      'Tell me about your portfolio',
    ],
    tech: [
      'Tell me about your AI work',
      'What projects have you built?',
      'Who is on the team?',
    ],
    project: [
      'What other projects do you have?',
      'What services do you offer?',
      'How can I contact you?',
    ],
    team: [
      'Who founded 3.0 Labs?',
      'What services do you offer?',
      'How can I contact you?',
    ],
    default: [
      'What services do you offer?',
      'Tell me about your portfolio',
      'How can I contact you?',
    ],
  };

  const getFollowUps = (lastUserMsg: string): string[] => {
    const msg = lastUserMsg.toLowerCase();
    if (msg.includes('service') || msg.includes('offer') || msg.includes('do you do'))
      return followUpMap.services;
    if (msg.includes('portfolio') || msg.includes('project') || msg.includes('work') || msg.includes('built'))
      return followUpMap.portfolio;
    if (msg.includes('found') || msg.includes('who started') || msg.includes('ceo'))
      return followUpMap.founder;
    if (msg.includes('contact') || msg.includes('email') || msg.includes('reach'))
      return followUpMap.contact;
    if (msg.includes('tech') || msg.includes('stack') || msg.includes('tools'))
      return followUpMap.tech;
    if (msg.includes('fundpitch') || msg.includes('bhoomi') || msg.includes('sailyour') || msg.includes('blue cross') || msg.includes('bfsi') || msg.includes('vdts'))
      return followUpMap.project;
    if (msg.includes('team') || msg.includes('developer') || msg.includes('designer'))
      return followUpMap.team;
    return followUpMap.default;
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text.trim(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        let errMsg = `Server error (${response.status})`;
        try {
          const parsed = JSON.parse(text);
          if (parsed.error) errMsg = parsed.error;
        } catch {}
        throw new Error(errMsg);
      }

      if (!response.body) throw new Error('No response body');

      const assistantMessageId = `bot-${Date.now()}`;
      setMessages((prev) => [...prev, { id: assistantMessageId, role: 'assistant', content: '' }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (!value) continue;

        assistantContent += decoder.decode(value, { stream: true });
        
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId ? { ...msg, content: assistantContent } : msg
          )
        );
      }

      // Check for lead submission tag after stream finishes
      const leadMatch = assistantContent.match(/\[SUBMIT_LEAD:\s*({[\s\S]*?})\]/);
      if (leadMatch) {
        try {
          const leadData = JSON.parse(leadMatch[1]);
          // Hide the tag from the UI
          const cleanContent = assistantContent.replace(/\[SUBMIT_LEAD:[\s\S]*?\]/g, '').trim();
          setMessages(prev => prev.map(m => 
            m.id === assistantMessageId ? { ...m, content: cleanContent } : m
          ));

          // Call the contact API
          await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: leadData.firstName,
              lastName: leadData.lastName,
              email: leadData.email,
              company: leadData.company,
              service: leadData.service || 'Chatbot Lead',
              message: leadData.message
            }),
          });

          // Add a confirmation message
          setMessages(prev => [...prev, { 
            id: `sys-${Date.now()}`, 
            role: 'assistant', 
            content: "Got it! Your requirements have been submitted to our team. We'll get back to you soon." 
          }]);
        } catch (e) {
          console.error('Lead parsing/submission error:', e);
        }
      }

    } catch (err: any) {
      console.error('Chat error:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className={styles.chatbotContainer}>
      <div 
        className={`${styles.chatWindow} ${isOpen ? styles.chatWindowOpen : styles.chatWindowClosed}`}
        style={isOpen ? { height: `${chatHeight}px` } : {}}
      >
        <div 
          className={styles.resizeHandleTop} 
          onMouseDown={startResizingTop}
        />
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <div className={styles.botAvatar}>
              <img src="/images/logos/intologo.png" alt="3.0" className={styles.headerLogo} />
            </div>
            <div>
              <h3 className={styles.title}>3.0 Labs Assistant</h3>
              <p className={styles.subtitle}>Ask me about our work & services</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.messagesContainer}>
          {messages.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyAvatar}>
                <img src="/images/logos/intologo.png" alt="3.0" className={styles.mainLogo} />
              </div>
              <h4>Hi there!</h4>
              <p>I can help answer questions about 3.0 Labs. Try one of these:</p>
              <div className={styles.suggestions}>
                {initialQuestions.map((q: string) => (
                  <button
                    key={q}
                    className={styles.suggestionChip}
                    onClick={() => sendMessage(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                className={`${styles.messageWrapper} ${
                  m.role === 'user' ? styles.userMessageWrapper : styles.botMessageWrapper
                }`}
              >
                <div className={styles.messageContent}>
                  {m.role === 'assistant' && (
                    <div className={styles.messageAvatar}>
                      <img src="/images/logos/intologo.png" alt="3.0" className={styles.messageLogo} />
                    </div>
                  )}
                  <div
                    className={`${styles.messageBubble} ${
                      m.role === 'user' ? styles.userBubble : styles.botBubble
                    }`}
                  >
                    {m.content || '...'}
                  </div>
                </div>
              </div>
            ))
          )}

          {!isLoading && messages.length > 0 && messages[messages.length - 1]?.role === 'assistant' && messages[messages.length - 1]?.content && (() => {
            const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user');
            const followUps = getFollowUps(lastUserMsg?.content || '');
            return (
              <div className={styles.suggestions}>
                {followUps.map((q: string) => (
                  <button
                    key={q}
                    className={styles.suggestionChip}
                    onClick={() => sendMessage(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            );
          })()}

          {isLoading && messages[messages.length - 1]?.role === 'user' && (
            <div className={`${styles.messageWrapper} ${styles.botMessageWrapper}`}>
              <div className={styles.messageContent}>
                <div className={styles.messageAvatar}>
                  <img src="/images/logos/intologo.png" alt="3.0" className={styles.messageLogo} />
                </div>
                <div className={`${styles.messageBubble} ${styles.botBubble} ${styles.typingIndicator}`}>
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}

          {error && <div className={styles.errorText}>{error}</div>}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className={styles.input}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={styles.sendBtn}
          >
            <Send size={18} />
          </button>
        </form>
        <div 
          className={styles.resizeHandleBottom} 
          onMouseDown={startResizingBottom}
        />
      </div>

      {!isOpen && (
        <div className={styles.fabArea}>
          {showLabel && (
            <div className={styles.fabLabel}>
              Ask me anything!
            </div>
          )}
          <button onClick={() => setIsOpen(true)} className={styles.fabBtn}>
            <img src="/images/logos/intologo.png" alt="3.0" className={styles.fabLogo} />
          </button>
        </div>
      )}
    </div>
  );
}
