'use client';

import { useState, useRef, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Upload, FileText, Download, Save, Edit, Sparkles, Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PRDGeneratorPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [prdContent, setPrdContent] = useState<string>("");
    const [isEditing, setIsEditing] = useState(false);
    const [status, setStatus] = useState<string>("waiting"); // waiting, generating, ready

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const generatePRD = () => {
        setIsGenerating(true);
        setStatus("generating");
        
        // Mock generation delay
        setTimeout(() => {
            const mockPRD = `# Product Requirements Document: ${file?.name.split('.')[0] || "New Product"}

## 1. Executive Summary
This document outlines the requirements and strategy for the product based on provided requirements.

## 2. Problem Statement
Many users struggle with manual product documentation. This tool aims to automate that process.

## 3. Goals
- Automated PRD generation
- High quality output
- Contextual understanding

## 4. User Personas
- Product Managers
- Product Engineers
- Founders

## 5. Functional Requirements
- File upload support
- Real-time editing
- Export to Markdown/PDF
`;
            setPrdContent(mockPRD);
            setIsGenerating(false);
            setStatus("ready");
        }, 3000);
    };

    const downloadPRD = () => {
        const element = document.createElement("a");
        const fileBlob = new Blob([prdContent], {type: 'text/markdown'});
        element.href = URL.createObjectURL(fileBlob);
        element.download = `${file?.name.split('.')[0] || "product"}_PRD.md`;
        document.body.appendChild(element);
        element.click();
    };

    return (
        <main className="min-h-screen bg-[#FDF8F5] relative">
            <Header />
            
            <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#ff5c35]/10 text-[#ff5c35] text-xs font-bold uppercase tracking-wider">
                            Internal Tools
                        </span>
                        <ChevronRight className="w-4 h-4 text-neutral-400" />
                        <span className="text-neutral-500 text-xs font-medium uppercase tracking-wider">
                            PRD Generator
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight text-neutral-900 mb-6">
                        AI PRD <span className="text-[#ff5c35]">Generator</span>
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
                        Transform your ideas or existing project files into comprehensive Product Requirements Documents in seconds.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Input Panel */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <Upload className="w-5 h-5 text-[#ff5c35]" />
                                Context & Assets
                            </h3>
                            
                            <div 
                                onClick={() => fileInputRef.current?.click()}
                                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all
                                ${file ? 'border-[#ff5c35] bg-[#ff5c35]/5' : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50'}`}
                            >
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    className="hidden" 
                                    onChange={handleFileUpload}
                                />
                                {file ? (
                                    <div className="space-y-2">
                                        <FileText className="w-10 h-10 text-[#ff5c35] mx-auto" />
                                        <p className="text-sm font-semibold text-neutral-900 truncate">{file.name}</p>
                                        <p className="text-xs text-neutral-500">Click to change</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <Upload className="w-10 h-10 text-neutral-400 mx-auto" />
                                        <p className="text-sm font-medium text-neutral-600">Upload context file (.txt, .md, .pdf)</p>
                                        <p className="text-xs text-neutral-400">or drag and drop here</p>
                                    </div>
                                )}
                            </div>

                            <button 
                                onClick={generatePRD}
                                disabled={!file || isGenerating}
                                className={`w-full mt-8 flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all
                                ${!file || isGenerating ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed' : 'bg-[#ff5c35] text-white hover:bg-[#e85430] shadow-lg shadow-[#ff5c35]/20'}`}
                            >
                                {isGenerating ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-5 h-5" />
                                        Generate PRD
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Output Panel */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden min-h-[600px] flex flex-col">
                            <div className="px-8 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                                <div className="flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-neutral-500" />
                                    <span className="text-sm font-bold text-neutral-700">PRD Output</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    {status === "ready" && (
                                        <>
                                            <button 
                                                onClick={() => setIsEditing(!isEditing)}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all
                                                ${isEditing ? 'bg-[#ff5c35] text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
                                            >
                                                {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                                                {isEditing ? 'Save Edits' : 'Edit PRD'}
                                            </button>
                                            <button 
                                                onClick={downloadPRD}
                                                className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-neutral-800 transition-all"
                                            >
                                                <Download className="w-4 h-4" />
                                                Download
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                            
                            <div className="flex-1 p-8 relative">
                                <AnimatePresence mode="wait">
                                    {status === "waiting" && (
                                        <motion.div 
                                            key="waiting"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 flex flex-col items-center justify-center text-center p-10"
                                        >
                                            <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mb-4">
                                                <FileText className="w-8 h-8 text-neutral-300" />
                                            </div>
                                            <h4 className="text-lg font-bold text-neutral-900 mb-2">Ready to start</h4>
                                            <p className="text-neutral-500 max-w-xs">Upload your project requirements or notes to generate a professional PRD.</p>
                                        </motion.div>
                                    )}

                                    {status === "generating" && (
                                        <motion.div 
                                            key="generating"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-white z-10"
                                        >
                                            <div className="w-20 h-20 mb-6 relative">
                                                <div className="absolute inset-0 border-4 border-neutral-100 rounded-full" />
                                                <div className="absolute inset-0 border-4 border-[#ff5c35] rounded-full border-t-transparent animate-spin" />
                                                <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-[#ff5c35] animate-pulse" />
                                            </div>
                                            <h4 className="text-xl font-bold text-neutral-900 mb-2">Analyzing Context</h4>
                                            <p className="text-neutral-500">Applying product engineering frameworks...</p>
                                        </motion.div>
                                    )}

                                    {status === "ready" && (
                                        <motion.div 
                                            key="ready"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="h-full"
                                        >
                                            {isEditing ? (
                                                <textarea 
                                                    value={prdContent}
                                                    onChange={(e) => setPrdContent(e.target.value)}
                                                    className="w-full h-full min-h-[500px] p-0 border-none focus:ring-0 text-neutral-800 font-mono text-sm leading-relaxed outline-none resize-none"
                                                />
                                            ) : (
                                                <div className="prose prose-neutral max-w-none prose-h1:text-3xl prose-h1:font-bold prose-h2:text-xl prose-h2:font-bold prose-h2:mt-8 prose-p:text-neutral-600 prose-li:text-neutral-600">
                                                    {/* Simple markdown placeholder rendering */}
                                                    {prdContent.split('\n').map((line, i) => {
                                                        if (line.startsWith('# ')) return <h1 key={i}>{line.replace('# ', '')}</h1>;
                                                        if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>;
                                                        if (line.startsWith('- ')) return <li key={i}>{line.replace('- ', '')}</li>;
                                                        return <p key={i}>{line}</p>;
                                                    })}
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
