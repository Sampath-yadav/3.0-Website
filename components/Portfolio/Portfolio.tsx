'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const projects = [
    {
        title: 'BFSI Skill Portal',
        image: '/portfolioimages/bfsi.svg',
        width: 600,
        height: 400,
        href: '/portfolio/bfsi-skill-portal'
    },
    {
        title: 'Blue Cross Hyderabad',
        image: '/svg images/Blue Cross 1.svg',
        width: 600,
        height: 400,
        href: '/portfolio/blue-cross-hyderabad'
    },
    {
        title: 'FundPitch',
        image: '/svg images/fundpitch.svg',
        width: 600,
        height: 400,
        href: '/portfolio/fundpitch'
    },
    {
        title: 'VDTS',
        image: '/svg images/VITS.svg',
        width: 600,
        height: 400,
        href: '/portfolio/vits'
    },
    {
        title: 'Bhoomibox',
        image: '/svg images/BhoomiBox (1).svg',
        width: 600,
        height: 400,
        href: '/portfolio/bhoomibox'
    },
    {
        title: 'NaviPrep',
        image: '/svg images/Sailor.svg',
        width: 600,
        height: 400,
        href: '/portfolio/naviprep'
    },
    {
        title: 'Starlink',
        image: '/svg images/starlink.svg',
        width: 600,
        height: 400,
        href: '/portfolio/starlink'
    }
];

const Portfolio = () => {
    return (
        <section className={styles.portfolio} id="work">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        How we transformed idea and <br />
                        requirement into Product
                    </h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => {
                        const content = (
                            <>
                                <div className={styles.imgWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={project.width}
                                        height={project.height}
                                        quality={100}
                                        unoptimized
                                    />
                                </div>
                                <h4 className={styles.projTitle}>{project.title}</h4>
                            </>
                        );

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
                            >
                                {project.href ? (
                                    <Link href={project.href} className={styles.card}>
                                        {content}
                                    </Link>
                                ) : (
                                    <div className={styles.card}>
                                        {content}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
