'use client';

import Image from 'next/image';
import styles from './Clients.module.css';

const clientLogos = [
  '/client logos/Screenshot 2026-03-23 122006.png',
  '/client logos/Screenshot 2026-03-23 122044.png',
  '/client logos/Screenshot 2026-03-23 122112.png',
  '/client logos/Screenshot 2026-03-23 122142.png',
  '/client logos/Screenshot 2026-03-23 122211.png',
  '/client logos/Screenshot 2026-03-23 122228.png',
  '/client logos/Screenshot 2026-03-23 122257.png',
  '/client logos/Screenshot 2026-03-23 122313.png',
  '/client logos/Screenshot 2026-03-23 122327.png',
  '/client logos/Screenshot 2026-03-23 122341.png',
  '/client logos/Screenshot 2026-03-23 122357.png',
  '/client logos/Screenshot 2026-03-23 122411.png',
];

export default function Clients() {
  // Duplicate logs to create an infinite scroll effect
  const repeatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className={styles.clientsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Clients</p>
          <h2 className={styles.title}>Trusted by visionary brands</h2>
        </div>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {repeatedLogos.map((logo, idx) => (
              <div key={idx} className={styles.logoWrapper}>
                <Image
                  src={logo}
                  alt={`Client Logo ${idx}`}
                  width={200}
                  height={120}
                  className={styles.logoImage}
                  unoptimized // Since they are raw screenshots, prevent Next over-optimization if quality degrades
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
