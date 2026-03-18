'use client';

import styles from './ContactForm.module.css';

const CONTACT_FORM_CONFIG = {
  colors: {
    label: '#8E8E8E',
    text: '#5F5F5F',
    border: '#E5E5E5',
    primary: '#E87C52',
    placeholder: '#A1A1AA',
  },
};

const ROLE_OPTIONS = ['Founder / CEO', 'Product Manager', 'Engineer', 'Agency Partner'];
const CONTACT_EMAIL = 'threepointolabs@gmail.com';

export default function ContactForm() {
  return (
    <section className={styles.section}>
      {/* Background Glow */}
      <div className={styles.bgWrap} />

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.heading}>
            Let's Build Your <span className={styles.highlightText}>Next Product</span>
          </h1>
          <p className={styles.subtext}>
            Whether you need a full-stack app, an AI workflow, or an autonomous agent — our product engineers are ready to turn your idea into reality.
          </p>
        </div>

        <div className={styles.mainGrid}>
          {/* Left Column: Form */}
          <div className={styles.formBox}>
            <h2 className={styles.boxHeading}>Start a Conversation</h2>
            <form className={styles.form} onClick={(e) => e.preventDefault()}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>First Name *</label>
                  <input type="text" placeholder="John" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Last Name *</label>
                  <input type="text" placeholder="Smith" className={styles.input} />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Work Email *</label>
                <input type="email" placeholder="john@company.com" className={styles.input} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Company Name *</label>
                <input type="text" placeholder="Acme Corporation" className={styles.input} />
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Service of Interest</label>
                <select className={styles.select}>
                  <option>Select a service...</option>
                  <option>Full-Stack Apps</option>
                  <option>AI Workflows</option>
                  <option>Autonomous Agents</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Tell us about your project</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your idea, challenge, or what you'd like to build..."
                  className={styles.textarea}
                />
              </div>

              <button className={styles.submitBtn}>
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <p className={styles.footerNote}>
                We typically respond within 1 business day. No spam, ever.
              </p>
            </form>
          </div>

          {/* Right Column: Info */}
          <div className={styles.infoCol}>
            {/* Benefits List */}
            <div className={styles.infoSection}>
              <h3 className={styles.infoHeading}>Why Work With Us?</h3>
              <div className={styles.benefitList}>
                {[
                  "Product-first thinking — we build what matters, not just what's asked",
                  "Full-stack apps, AI workflows, and autonomous agents under one roof",
                  "Rapid iteration cycles with founder-level involvement",
                  "No obligation — just a conversation about your idea",
                  "Flexible engagement: project-based, retainer, or team augmentation"
                ].map((item, idx) => (
                  <div key={idx} className={styles.benefitItem}>
                    <div className={styles.dot} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details Card */}
            <div className={styles.infoSection}>
              <h3 className={styles.infoHeading}>Contact Details</h3>
              <div className={styles.detailCard}>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span>nithin.varma@equivas.com</span>
                </div>
                <div className={styles.detailItem}>
                  
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <span>Mon–Fri, 9AM–6PM IST</span>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className={styles.infoSection}>
              <h3 className={styles.infoHeading}>Our Office</h3>
              <div className={styles.officeList}>
                {[
                  { name: "India", address: "Fourth Floor, 604, Ace Monte Carlo, x Roads, beside TCS Kohinoor Park, Land Mark Residency, Kothaguda, Hyderabad, Telangana 500084" },
                ].map((office, idx) => (
                  <div key={idx} className={styles.officeCard}>
                    <div className={styles.officeHeader}>
                      <span className={styles.officeIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      <span className={styles.officeName}>{office.name}</span>
                    </div>
                    <p className={office.address ? styles.officeAddress : "hidden"}>{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
