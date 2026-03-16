import Link from 'next/link';
import styles from './PortfolioGrid.module.css';

const projects = [
    {
        id: 1,
        title: 'FundPitch',
        image: '/portfolioimages/fundpitch.png',
        href: '/portfolio/fundpitch',
    },
    {
        id: 2,
        title: 'VITS',
        image: '/portfolioimages/VITS 1.png',
        href: '/portfolio/vits',
    },
    {
        id: 3,
        title: 'Bhoomibox',
        image: '/portfolioimages/BhoomiBox 1.png',
        href: '/portfolio/bhoomibox',
    },
    {
        id: 4,
        title: 'NaviPrep',
        image: '/portfolioimages/Sailor 1.png',
        href: '/portfolio/naviprep',
    },
    {
        id: 5,
        title: 'Starlink',
        image: '/portfolioimages/starlink.png',
        href: '',
    },
    {
        id: 6,
        title: 'Blue Cross Hyderabad',
        image: '/portfolioimages/bluegross.png',
        href: '/portfolio/blue-cross-hyderabad',
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
