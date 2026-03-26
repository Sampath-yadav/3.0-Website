"use client";

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const PAGE_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

.sailyour-page {
  --black: #0a0a0a;
  --white: #ffffff;
  --off-white: #fafaf8;
  --cream: #f5f3ee;
  --purple: #7c3aed;
  --purple-light: #ede9fe;
  --purple-mid: #a78bfa;
  --gray-100: #f4f4f5;
  --gray-200: #e4e4e7;
  --gray-400: #a1a1aa;
  --gray-600: #52525b;
  --gray-800: #27272a;
  --accent: #6d28d9;
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
  font-family: var(--font-body);
  color: var(--black);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

.sailyour-page ::selection {
  background: var(--purple-light);
  color: var(--accent);
}

/* ---- HERO ---- */
.sailyour-page .sy-hero {
  padding: 160px 60px 100px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.sailyour-page .sy-hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 5vw, 4.2rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--black);
  margin-bottom: 24px;
}

.sailyour-page .sy-hero-title em {
  font-style: normal;
  color: var(--purple);
}

.sailyour-page .sy-hero-desc {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--gray-600);
  margin-bottom: 40px;
  max-width: 480px;
}

.sailyour-page .sy-hero-visual {
  position: relative;
}

.sailyour-page .sy-hero-img-wrap {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.12), 0 0 0 1px var(--gray-200);
  aspect-ratio: 4/3;
  background: var(--gray-100);
}

.sailyour-page .sy-hero-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.sailyour-page .sy-hero-badge {
  position: absolute;
  bottom: -20px;
  left: -20px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 16px 20px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  gap: 12px;
}

.sailyour-page .sy-hero-badge-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--purple-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.sailyour-page .sy-hero-badge-text {
  display: flex;
  flex-direction: column;
}

.sailyour-page .sy-hero-badge-num {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--black);
  line-height: 1;
}

.sailyour-page .sy-hero-badge-sub {
  font-size: 0.75rem;
  color: var(--gray-400);
}

/* ---- SECTIONS ---- */
.sailyour-page .sy-section {
  padding: 100px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.sailyour-page .sy-section-tag {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--purple);
  margin-bottom: 16px;
}

.sailyour-page .sy-section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  letter-spacing: -0.025em;
  line-height: 1.1;
  color: var(--black);
  margin-bottom: 20px;
}

.sailyour-page .sy-section-title em {
  font-style: normal;
  color: var(--purple);
}

.sailyour-page .sy-section-lead {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--gray-600);
  max-width: 560px;
}

.sailyour-page .sy-full-divider {
  border: none;
  border-top: 1px solid var(--gray-200);
  margin: 0 60px;
}

/* ---- OVERVIEW ---- */
.sailyour-page .sy-overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.sailyour-page .sy-overview-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.sailyour-page .sy-overview-card {
  background: var(--off-white);
  border: 1px solid var(--gray-200);
  border-radius: 16px;
  padding: 24px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.sailyour-page .sy-overview-card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.sailyour-page .sy-overview-card-icon { font-size: 1.6rem; margin-bottom: 12px; }
.sailyour-page .sy-overview-card-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gray-400); font-weight: 600; margin-bottom: 4px; }
.sailyour-page .sy-overview-card-value { font-size: 0.95rem; font-weight: 600; color: var(--black); }

/* ---- SCREENS ---- */
.sailyour-page .sy-screens-section {
  padding: 100px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.sailyour-page .sy-screens-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;
}

.sailyour-page .sy-screens-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.sailyour-page .sy-screen-card {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--gray-200);
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  background: var(--gray-100);
  transition: box-shadow 0.3s, transform 0.3s;
}

.sailyour-page .sy-screen-card:hover {
  box-shadow: 0 16px 48px rgba(0,0,0,0.12);
  transform: translateY(-4px);
}

.sailyour-page .sy-screen-card-img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  object-position: top;
  display: block;
}

.sailyour-page .sy-screen-card-footer {
  padding: 20px 24px;
  background: var(--white);
  border-top: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sailyour-page .sy-screen-card-name { font-size: 0.9rem; font-weight: 600; color: var(--black); }

.sailyour-page .sy-screen-card-tag {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--purple);
  background: var(--purple-light);
  padding: 4px 10px;
  border-radius: 100px;
}

.sailyour-page .sy-screen-card-full { grid-column: 1 / -1; }
.sailyour-page .sy-screen-card-full .sy-screen-card-img { aspect-ratio: 16/7; }

/* ---- FEATURES ---- */
.sailyour-page .sy-features-section {
  padding: 100px 60px;
  background: var(--cream);
}

.sailyour-page .sy-features-inner { max-width: 1200px; margin: 0 auto; }
.sailyour-page .sy-features-header { text-align: center; margin-bottom: 64px; }
.sailyour-page .sy-features-header .sy-section-lead { margin: 0 auto; }

.sailyour-page .sy-features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.sailyour-page .sy-feature-card {
  background: var(--white);
  border-radius: 20px;
  padding: 36px 32px;
  border: 1px solid var(--gray-200);
  transition: box-shadow 0.2s, transform 0.2s;
}

.sailyour-page .sy-feature-card:hover {
  box-shadow: 0 12px 40px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}

.sailyour-page .sy-feature-icon {
  width: 52px; height: 52px; border-radius: 14px;
  background: var(--purple-light);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; margin-bottom: 20px;
}

.sailyour-page .sy-feature-title { font-size: 1rem; font-weight: 700; color: var(--black); margin-bottom: 10px; }
.sailyour-page .sy-feature-desc { font-size: 0.875rem; line-height: 1.7; color: var(--gray-600); }

/* ---- SOLUTION ---- */
.sailyour-page .sy-solution-section {
  padding: 100px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.sailyour-page .sy-solution-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-top: 60px;
}

.sailyour-page .sy-solution-img-wrap {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0,0,0,0.1);
  border: 1px solid var(--gray-200);
  background: var(--gray-100);
}

.sailyour-page .sy-solution-img-wrap img { width: 100%; display: block; object-fit: cover; object-position: top; }

.sailyour-page .sy-solution-points { display: flex; flex-direction: column; gap: 24px; }

.sailyour-page .sy-solution-point { display: flex; gap: 16px; align-items: flex-start; }

.sailyour-page .sy-solution-point-icon {
  width: 36px; height: 36px; border-radius: 10px;
  background: var(--purple-light);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; flex-shrink: 0; margin-top: 2px;
}

.sailyour-page .sy-solution-point-title { font-size: 0.95rem; font-weight: 700; color: var(--black); margin-bottom: 4px; }
.sailyour-page .sy-solution-point-desc { font-size: 0.875rem; line-height: 1.65; color: var(--gray-600); }

/* ---- RESULTS ---- */
.sailyour-page .sy-results-section {
  padding: 100px 60px;
  background: var(--black);
}

.sailyour-page .sy-results-inner { max-width: 1200px; margin: 0 auto; }
.sailyour-page .sy-results-section .sy-section-tag { color: var(--purple-mid); }
.sailyour-page .sy-results-section .sy-section-title { color: var(--white); }
.sailyour-page .sy-results-section .sy-section-title em { color: var(--purple-mid); }
.sailyour-page .sy-results-header { text-align: center; margin-bottom: 64px; }

.sailyour-page .sy-results-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: rgba(255,255,255,0.06);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 60px;
}

.sailyour-page .sy-result-stat {
  padding: 48px 32px;
  background: var(--black);
  display: flex; flex-direction: column; align-items: center;
  text-align: center; gap: 8px;
  transition: background 0.2s;
}

.sailyour-page .sy-result-stat:hover { background: #111111; }

.sailyour-page .sy-result-num {
  font-family: var(--font-display);
  font-size: 3.2rem;
  color: var(--white);
  letter-spacing: -0.04em;
  line-height: 1;
}

.sailyour-page .sy-result-num span { color: var(--purple-mid); }

.sailyour-page .sy-result-label {
  font-size: 0.8rem; color: #71717a;
  text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500;
}

.sailyour-page .sy-results-quote {
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 48px;
  position: relative;
}

.sailyour-page .sy-results-quote-mark {
  font-family: var(--font-display);
  font-size: 6rem; color: var(--purple-mid);
  line-height: 0.8; position: absolute;
  top: 32px; left: 48px; opacity: 0.4;
}

.sailyour-page .sy-results-quote-text {
  font-family: var(--font-display);
  font-size: 1.4rem; font-weight: 500;
  color: var(--white); line-height: 1.5;
  margin-bottom: 24px; padding-top: 40px;
}

/* ---- TAKEAWAYS ---- */
.sailyour-page .sy-takeaways-section {
  padding: 100px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.sailyour-page .sy-takeaways-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 60px;
}

.sailyour-page .sy-takeaway-card {
  padding: 36px;
  border-radius: 20px;
  background: var(--off-white);
  border: 1px solid var(--gray-200);
  transition: background 0.3s, border-color 0.3s;
}

.sailyour-page .sy-takeaway-card:hover {
  background: var(--gray-600);
  border-color: var(--gray-600);
}

.sailyour-page .sy-takeaway-card:hover .sy-takeaway-title { color: var(--white); }
.sailyour-page .sy-takeaway-card:hover .sy-takeaway-desc { color: rgba(255,255,255,0.7); }
.sailyour-page .sy-takeaway-card:hover .sy-takeaway-num { color: var(--white); }

.sailyour-page .sy-takeaway-num {
  font-family: var(--font-display);
  font-size: 3rem; font-style: normal;
  color: var(--gray-200); line-height: 1; margin-bottom: 16px;
}

.sailyour-page .sy-takeaway-title { font-size: 1rem; font-weight: 700; color: var(--black); margin-bottom: 10px; }
.sailyour-page .sy-takeaway-desc { font-size: 0.875rem; line-height: 1.7; color: var(--gray-600); }

/* ---- ANIMATIONS ---- */
@keyframes syFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.sailyour-page .sy-fade-up { animation: syFadeUp 0.6s ease both; }
.sailyour-page .sy-fade-up-delay-2 { animation-delay: 0.2s; }

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .sailyour-page .sy-hero { grid-template-columns: 1fr; padding: 120px 24px 60px; gap: 40px; }
  .sailyour-page .sy-section { padding: 60px 24px; }
  .sailyour-page .sy-overview-grid { grid-template-columns: 1fr; gap: 40px; }
  .sailyour-page .sy-screens-section { padding: 60px 24px; }
  .sailyour-page .sy-screens-header { flex-direction: column; align-items: flex-start; gap: 20px; }
  .sailyour-page .sy-screens-grid { grid-template-columns: 1fr; }
  .sailyour-page .sy-screen-card-full { grid-column: auto; }
  .sailyour-page .sy-features-section { padding: 60px 24px; }
  .sailyour-page .sy-features-grid { grid-template-columns: 1fr; }
  .sailyour-page .sy-solution-section { padding: 60px 24px; }
  .sailyour-page .sy-solution-grid { grid-template-columns: 1fr; gap: 40px; }
  .sailyour-page .sy-results-section { padding: 60px 24px; }
  .sailyour-page .sy-results-grid { grid-template-columns: 1fr 1fr; }
  .sailyour-page .sy-takeaways-section { padding: 60px 24px; }
  .sailyour-page .sy-takeaways-grid { grid-template-columns: 1fr; }
  .sailyour-page .sy-full-divider { margin: 0 24px; }
}
`;

export default function SailYourAIPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLES }} />
      <Header />
      <div className="sailyour-page" style={{ background: "#fff", position: "relative", zIndex: 10 }}>

        {/* HERO */}
        <section className="sy-hero">
          <div className="sy-fade-up">
            <h1 className="sy-hero-title">
              Sailyour —<br />
              <em>AI-Powered</em><br />
              Interview Prep
            </h1>
            <p className="sy-hero-desc">
              We designed and built Sailyour, a full-stack SaaS platform that
              helps educational institutions conduct AI-driven mock interviews,
              evaluate student performance, and generate actionable insights for
              placement teams.
            </p>
          </div>
          <div className="sy-hero-visual sy-fade-up sy-fade-up-delay-2">
            <div className="sy-hero-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sailyour-ai/dashboard1.png"
                alt="Sailyour Dashboard showing student profile with AI scores"
              />
            </div>
            <div className="sy-hero-badge">
              <div className="sy-hero-badge-icon">🎯</div>
              <div className="sy-hero-badge-text">
                <span className="sy-hero-badge-num">7,265</span>
                <span className="sy-hero-badge-sub">Students onboarded</span>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <hr className="sy-full-divider" />
        <section className="sy-section" id="overview">
          <div className="sy-overview-grid">
            <div className="sy-fade-up">
              <p className="sy-section-tag">Overview</p>
              <h2 className="sy-section-title">
                Preparing students for <em>real-world</em> hiring
              </h2>
              <p className="sy-section-lead">
                Sailyour is an AI-driven interview preparation platform designed
                for colleges and universities. It automates mock interviews,
                assesses communication and soft skills using computer vision, and
                gives placement officers a bird&apos;s-eye view of cohort readiness.
              </p>
            </div>
            <div className="sy-overview-cards">
              {[
                { icon: "🎓", label: "Industry", value: "EdTech / HRTech" },
                { icon: "🏛️", label: "Target Users", value: "Colleges & Universities" },
                { icon: "🤖", label: "Core Tech", value: "AI Video Analysis" },
                { icon: "📊", label: "Primary Goal", value: "Placement Readiness" },
              ].map((c) => (
                <div className="sy-overview-card" key={c.label}>
                  <div className="sy-overview-card-icon">{c.icon}</div>
                  <div className="sy-overview-card-label">{c.label}</div>
                  <div className="sy-overview-card-value">{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCREENS */}
        <section className="sy-screens-section" id="screens">
          <div className="sy-screens-header">
            <div>
              <p className="sy-section-tag">Product Screens</p>
              <h2 className="sy-section-title">
                Designed for <em>clarity</em>
              </h2>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#a1a1aa", maxWidth: 280, textAlign: "right" }}>
              Three primary views built for admins, students, and AI assessors.
            </p>
          </div>

          <div className="sy-screens-grid">
            <div className="sy-screen-card sy-screen-card-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="sy-screen-card-img"
                src="/images/sailyour-ai/interview.png"
                alt="Sailyour live AI interview screen with avatar and video controls"
              />
              <div className="sy-screen-card-footer">
                <span className="sy-screen-card-name">Live AI Interview Session</span>
                <span className="sy-screen-card-tag">Student View</span>
              </div>
            </div>

            <div className="sy-screen-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="sy-screen-card-img"
                src="/images/sailyour-ai/admin.png"
                alt="Sailyour admin panel showing student list and statistics"
              />
              <div className="sy-screen-card-footer">
                <span className="sy-screen-card-name">Admin Dashboard</span>
                <span className="sy-screen-card-tag">Admin View</span>
              </div>
            </div>

            <div className="sy-screen-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="sy-screen-card-img"
                src="/images/sailyour-ai/Dashboard.png"
                alt="Sailyour student profile with radar chart and AI score"
              />
              <div className="sy-screen-card-footer">
                <span className="sy-screen-card-name">Student Profile & Scores</span>
                <span className="sy-screen-card-tag">Placement View</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="sy-features-section" id="features">
          <div className="sy-features-inner">
            <div className="sy-features-header">
              <p className="sy-section-tag">Key Features</p>
              <h2 className="sy-section-title">
                Everything a placement team <em>needs</em>
              </h2>
              <p className="sy-section-lead">
                Six core modules working together to automate the entire
                interview-to-insight pipeline.
              </p>
            </div>
            <div className="sy-features-grid">
              {[
                {
                  icon: "🎥",
                  title: "AI Video Interviews",
                  desc: "Students conduct live video interviews with an AI interviewer avatar. The system asks contextual follow-up questions and adapts to responses in real time.",
                },
                {
                  icon: "📡",
                  title: "Computer Vision Scoring",
                  desc: "The AI analyses posture, eye contact, confidence markers, and facial micro-expressions to generate a multidimensional professionalism score.",
                },
                {
                  icon: "🕸️",
                  title: "Skill Radar Charts",
                  desc: "Each student receives a spider/radar chart across six dimensions: Professionalism, Attitude, Creativity, Communication, Leadership, Teamwork, and Sociability.",
                },
                {
                  icon: "📋",
                  title: "Project Manager Score",
                  desc: "A composite management-readiness score presented as a gauge chart, benchmarked against domain averages for instant comparison.",
                },
                {
                  icon: "📊",
                  title: "Admin Analytics Panel",
                  desc: "Placement officers see cohort-level stats: total students, interviews conducted, pending requests, and aggregate score distributions — all in one place.",
                },
                {
                  icon: "📝",
                  title: "AI Interview Summary",
                  desc: "Each session ends with a structured AI-generated summary covering strengths, red flags, and coaching recommendations the student can act on immediately.",
                },
              ].map((f) => (
                <div className="sy-feature-card" key={f.title}>
                  <div className="sy-feature-icon">{f.icon}</div>
                  <p className="sy-feature-title">{f.title}</p>
                  <p className="sy-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="sy-solution-section" id="solution">
          <p className="sy-section-tag">Our Solution</p>
          <h2 className="sy-section-title">
            From chaos to <em>clarity</em>
          </h2>
          <div className="sy-solution-grid">
            <div className="sy-solution-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/sailyour-ai/admin.png" alt="Sailyour admin panel with student management" />
            </div>
            <div className="sy-solution-points">
              <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#52525b", marginBottom: 8 }}>
                We architected Sailyour as a three-layer platform — a student-facing
                interview app, an AI analysis engine, and an admin intelligence
                layer — all connected via a real-time API backbone.
              </p>
              {[
                {
                  icon: "⚡",
                  title: "Real-time evaluation pipeline",
                  desc: "Video frames are streamed to the AI engine mid-interview. Scores update live so admins see results the moment a session ends.",
                },
                {
                  icon: "🧩",
                  title: "Modular domain system",
                  desc: "Institutions can configure domain-specific question banks (Tech, Management, Finance) and profile types, keeping assessments relevant per cohort.",
                },
                {
                  icon: "📤",
                  title: "Bulk student management",
                  desc: "Admins can import hundreds of students via CSV, assign them to batches, and track completion status from a single dashboard view.",
                },
                {
                  icon: "🔒",
                  title: "Session integrity controls",
                  desc: "Anti-refresh guards and camera/mic state monitoring ensure data integrity throughout each interview session.",
                },
              ].map((s) => (
                <div className="sy-solution-point" key={s.title}>
                  <div className="sy-solution-point-icon">{s.icon}</div>
                  <div>
                    <p className="sy-solution-point-title">{s.title}</p>
                    <p className="sy-solution-point-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section className="sy-results-section" id="results">
          <div className="sy-results-inner">
            <div className="sy-results-header">
              <p className="sy-section-tag">Results</p>
              <h2 className="sy-section-title">
                Numbers that <em>speak</em>
              </h2>
            </div>
            <div className="sy-results-grid">
              {[
                { num: "7,265", suffix: "", label: "Students onboarded" },
                { num: "3,671", suffix: "", label: "Interviews conducted" },
                { num: "94", suffix: "%", label: "Completion rate" },
                { num: "4.8", suffix: "×", label: "Faster evaluations" },
              ].map((r) => (
                <div className="sy-result-stat" key={r.label}>
                  <p className="sy-result-num">
                    {r.num}<span>{r.suffix}</span>
                  </p>
                  <p className="sy-result-label">{r.label}</p>
                </div>
              ))}
            </div>
            <div className="sy-results-quote">
              <span className="sy-results-quote-mark">&ldquo;</span>
              <p className="sy-results-quote-text">
                Sailyour transformed how we prepare students for campus placements.
                What used to take our team weeks of manual scheduling now runs
                itself. The AI scores are surprisingly accurate — hiring partners
                have noticed the improvement in candidate quality.
              </p>
            </div>
          </div>
        </section>

        {/* TAKEAWAYS */}
        <section className="sy-takeaways-section">
          <p className="sy-section-tag">Key Learnings</p>
          <h2 className="sy-section-title">
            What we took <em>away</em>
          </h2>
          <div className="sy-takeaways-grid">
            {[
              {
                n: "01",
                title: "AI scoring needs human calibration loops",
                desc: "We found that the initial CV model needed calibration against human raters for cultural and contextual nuance. Building a feedback mechanism where placement officers could flag anomalies dramatically improved score reliability.",
              },
              {
                n: "02",
                title: "Admin trust comes from transparency",
                desc: "Placement officers were initially sceptical of AI scores. Showing the breakdown — exactly which behaviours triggered which scores — built trust faster than any aggregate number ever could.",
              },
              {
                n: "03",
                title: "Simplicity beats feature density for students",
                desc: "Early prototypes had too many controls in the interview UI. Stripping back to three buttons (end call, mute camera, mute mic) reduced drop-off significantly and improved focus.",
              },
              {
                n: "04",
                title: "Offline resilience is non-negotiable in tier-2 colleges",
                desc: "Connectivity issues in smaller colleges required us to build local buffering for video and graceful degradation paths — a constraint we hadn't anticipated in the initial architecture.",
              },
            ].map((tk) => (
              <div className="sy-takeaway-card" key={tk.n}>
                <p className="sy-takeaway-num">{tk.n}</p>
                <p className="sy-takeaway-title">{tk.title}</p>
                <p className="sy-takeaway-desc">{tk.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <div style={{ position: "relative", zIndex: 10 }}>
        <Footer />
      </div>
    </>
  );
}
