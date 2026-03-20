import Link from 'next/link';
import styles from './PortfolioGrid.module.css';

const projects = [
    {
        id: 7,
        title: 'BFSI Skill Portal',
        image: '/portfolioimages/bfsi.svg',
        href: '/portfolio/bfsi-skill-portal',
    },
    {
        id: 6,
        title: 'Blue Cross Hyderabad',
        image: '/svg images/Blue Cross 1.svg',
        href: '/portfolio/blue-cross-hyderabad',
    },
    {
        id: 1,
        title: 'FundPitch',
        image: '/svg images/fundpitch.svg',
        href: '/portfolio/fundpitch',
    },
    {
        id: 2,
        title: 'VDTS',
        image: '/svg images/VITS.svg',
        href: '/portfolio/vits',
    },
    {
        id: 3,
        title: 'Bhoomibox',
        image: '/svg images/BhoomiBox (1).svg',
        href: '/portfolio/bhoomibox',
    },
    {
        id: 4,
        title: 'NaviPrep',
        image: '/svg images/Sailor.svg',
        href: '/portfolio/naviprep',
    },
    {
        id: 5,
        title: 'Starlink',
        image: '/svg images/starlink.svg',
        href: '/portfolio/starlink',
    },
];

export default function PortfolioGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 className={styles.title}>
                        How we transformed idea and requirement into Product
                    </h2>
                </header>

                <div className={styles.grid}>
                    {projects.map((project) => {
                        const content = (
                            <>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={styles.image}
                                    />
                                </div>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                            </>
                        );

                        return project.href ? (
                            <Link key={project.id} href={project.href} className={styles.card}>
                                {content}
                            </Link>
                        ) : (
                            <div key={project.id} className={styles.card}>
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
