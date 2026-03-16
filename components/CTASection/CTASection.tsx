import Image from 'next/image';
import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection({ bgImage, noBg }: { bgImage?: string; noBg?: boolean }) {
  return (
    <section className={styles.section}>
      {/* Background Glow */}

      <div className={styles.content}>
        <h2 className={styles.heading}>
          Engineering intelligent systems <br /> for ambitious brands
        </h2>
        <p className={styles.description}>
          Ready to move beyond ordinary software? We design scalable products, AI-driven workflows, and autonomous agents
          that engage users, streamline operations, and turn bold ideas into lasting digital impact.
        </p>
        <Link href="/contact-us">
          <button className={styles.button}>
            <span>Let&apos;s Collaborate</span>
            <div className={styles.buttonIcon}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1.16663 12.8333L12.8333 1.16663M12.8333 1.16663H1.16663M12.8333 1.16663V12.8333"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
}
