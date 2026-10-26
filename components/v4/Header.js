import { useState } from 'react';
import { NAV_LINKS, PHONE, PHONE_HREF } from './data';
import { BurgerIcon, CloseIcon, PhoneIcon } from './icons';
import { cx } from './Variant';
import shared from './shared.module.css';
import styles from './Header.module.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header} data-section="header">
            <div className={cx(shared.container, styles.inner)}>
                <a href="#mapa" className={styles.logoLink}>
                    <img src="/logo-white.svg" alt="Woodspot bush&fun" className={styles.logo} />
                </a>
                <nav className={styles.nav} aria-label="Główna nawigacja">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>{link.label}</a>
                    ))}
                </nav>
                <div className={styles.actions}>
                    <a href={PHONE_HREF} className={styles.phone} aria-label={`Zadzwoń: ${PHONE}`}>
                        <PhoneIcon />
                        <span className={styles.phoneText}>{PHONE}</span>
                    </a>
                    <a href="#rezerwacja" className={styles.book}>Zarezerwuj</a>
                    <button
                        type="button"
                        className={styles.burger}
                        aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
                        aria-expanded={menuOpen}
                        aria-controls="v4-menu"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <CloseIcon /> : <BurgerIcon />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <nav id="v4-menu" className={styles.menu} aria-label="Menu">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className={styles.menuLink} onClick={closeMenu}>{link.label}</a>
                    ))}
                    <a href="#rezerwacja" className={styles.menuLink} onClick={closeMenu}>Zarezerwuj</a>
                </nav>
            )}
        </header>
    );
}
