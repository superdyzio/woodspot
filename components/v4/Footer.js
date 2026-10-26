import { FOOTER_LINKS } from './data';
import { cx } from './Variant';
import shared from './shared.module.css';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer} data-section="footer">
            <div className={cx(shared.container, styles.inner)}>
                <img src="/logo-white.svg" alt="Woodspot bush&fun" className={styles.logo} loading="lazy" decoding="async" />
                <nav aria-label="Stopka" className={styles.nav}>
                    {FOOTER_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className={styles.link}>{link.label}</a>
                    ))}
                </nav>
                <p className={styles.place}>Siemianice · gm. Oborniki Śląskie</p>
            </div>
        </footer>
    );
}
