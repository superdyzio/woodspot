import { useState } from 'react';
import s from './Ewolucja.module.css';
import { NAV, PHONE } from './content';
import { CloseIcon, MenuIcon, PhoneIcon } from './icons';
import { cx } from './ui';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header data-section="header" className={s.header}>
            <img src="/header-background.png" alt="" className={s.headerBg} />
            <div className={s.headerInner}>
                <a href="#start" className={s.logoLink}>
                    <img src="/logo-white.svg" alt="Woodspot bush&fun – strona główna" className={s.logo} />
                </a>
                <nav className={s.nav} aria-label="Menu główne">
                    {NAV.map((item) => (
                        <a key={item.href} href={item.href} className={s.link}>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className={s.headerActions}>
                    <a href={PHONE.href} className={cx(s.headerPhone, s.link)}>
                        <PhoneIcon />
                        {PHONE.label}
                    </a>
                    <a href={PHONE.href} aria-label={`Zadzwoń: ${PHONE.label}`} className={s.headerPhoneIcon}>
                        <PhoneIcon size={22} />
                    </a>
                    <a href="#rezerwuj" className={s.headerCta}>
                        Zarezerwuj
                    </a>
                    <button
                        type="button"
                        className={s.burger}
                        aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
                        aria-expanded={menuOpen}
                        aria-controls={menuOpen ? 'menu-mobilne' : undefined}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <nav id="menu-mobilne" className={s.menu} aria-label="Menu">
                    {NAV.map((item) => (
                        <a key={item.href} href={item.href} className={s.link} onClick={closeMenu}>
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
