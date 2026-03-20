'use client';

import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        name: 'Jenny Wilson',
        role: 'Chief Marketing Officer',
        photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
        quote: '“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and faster and easier to work & increases our exposure.”',
        type: 'image-top'
    },
    {
        id: 2,
        name: 'Jacob Jones',
        role: 'Co-Founder',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
        quote: '“Awesome experience working with the team at Heroes of Digital! Always very responsive and continuously gives us suggestions to improve our business.”',
        type: 'image-top'
    },
    {
        id: 3,
        name: 'Jacob Jones',
        role: 'Co-Founder',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
        quote: '“Awesome experience working with the team at Heroes of Digital! Always very responsive and continuously gives us suggestions to improve our business.”',
        type: 'image-top'
    }
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>See what our Clients Stories</h2>
                    <p className={styles.subtitle}>Have an idea? We’re happy to discuss it — no commitment required.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`${styles.card} ${styles[`card${item.id}`]}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            {item.type === 'image-top' ? (
                                <>
                                    <div className={styles.imageWrapper}>
                                        <img src={item.photo} alt={item.name} />
                                    </div>
                                    <div className={styles.content}>
                                        <p className={styles.quote}>{item.quote}</p>
                                        <div className={styles.info}>
                                            <span className={styles.name}>{item.name}</span>
                                            <span className={styles.role}>{item.role}</span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.content}>
                                        <p className={styles.quote}>{item.quote}</p>
                                        <div className={styles.info}>
                                            <span className={styles.name}>{item.name}</span>
                                            <span className={styles.role}>{item.role}</span>
                                        </div>
                                    </div>
                                    <div className={styles.imageWrapper}>
                                        <img src={item.photo} alt={item.name} />
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
