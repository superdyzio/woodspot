import { useEffect, useState } from 'react';
import { NAV_LINKS, PHONE } from './content';
import { CloseIcon, MenuIcon, PhoneIcon } from './icons';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) return undefined;
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    return (
        <header data-section="header" className="header">
            <div className="bar">
                <a href="#top" aria-label="Woodspot – strona główna" className="logo">
                    <img src="/logo-green.svg" alt="Woodspot bush&fun" />
                </a>

                <nav className="nav" aria-label="Główna nawigacja">
                    {NAV_LINKS.map(({ href, label }) => (
                        <a key={href} href={href}>{label}</a>
                    ))}
                </nav>

                <div className="actions">
                    <a className="phone" href={PHONE.href}>
                        <PhoneIcon size={18} />
                        {PHONE.label}
                    </a>
                    <a className="phone-icon" href={PHONE.href} aria-label={`Zadzwoń: ${PHONE.label}`}>
                        <PhoneIcon size={22} strokeWidth={1.7} />
                    </a>
                    <a className="book" href="#rezerwacja">Zarezerwuj</a>
                    <button
                        className="burger"
                        type="button"
                        aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
                        aria-expanded={menuOpen}
                        aria-controls="menu"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <CloseIcon className="burger-icon" /> : <MenuIcon className="burger-icon" />}
                    </button>
                </div>
            </div>

            <nav id="menu" className="menu" aria-label="Menu" hidden={!menuOpen}>
                {NAV_LINKS.map(({ href, label }) => (
                    <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
                ))}
            </nav>

            <style jsx>{`
              .header {
                position: relative;
                z-index: 20;
                background: #EEF2EC;
                border-bottom: 1px solid #D5DDD3;
              }

              .bar {
                max-width: 1280px;
                margin: 0 auto;
                padding: 0 var(--gutter);
                min-height: 88px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 32px;
              }

              .logo {
                display: flex;
                align-items: center;
              }

              .logo img {
                height: 44px;
                width: auto;
                display: block;
              }

              .nav {
                display: flex;
                align-items: center;
                gap: 32px;
                font-size: 15px;
                font-weight: 600;
              }

              .nav a {
                color: #0F1A10;
                text-decoration: none;
              }

              .actions {
                display: flex;
                align-items: center;
                gap: 20px;
              }

              .phone {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                min-height: 44px;
                color: #002902;
                text-decoration: none;
                font-weight: 700;
                font-size: 15px;
              }

              .phone-icon {
                display: none;
              }

              .book {
                display: inline-flex;
                align-items: center;
                min-height: 48px;
                padding: 0 24px;
                background: #002902;
                color: #FFFFFF;
                text-decoration: none;
                font-weight: 700;
                font-size: 15px;
                border-radius: 2px;
                letter-spacing: 0.01em;
              }

              .burger {
                display: none;
                width: 48px;
                height: 48px;
                padding: 0;
                align-items: center;
                justify-content: center;
                background: transparent;
                border: 1px solid #C7D2C5;
                border-radius: 2px;
                color: #002902;
              }

              .burger :global(.burger-icon) {
                width: 22px;
                height: 22px;
              }

              .menu {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                display: flex;
                flex-direction: column;
                padding: 8px var(--gutter) 20px;
                background: #EEF2EC;
                border-bottom: 1px solid #D5DDD3;
              }

              .menu[hidden] {
                display: none;
              }

              .menu a {
                display: flex;
                align-items: center;
                min-height: 52px;
                border-top: 1px solid #CBD5C9;
                font-family: var(--serif);
                font-size: 22px;
                color: #002902;
                text-decoration: none;
              }

              /* The design collapses the nav at 960px, but the full header only fits from ~1010px,
                 so the burger takes over at 1080px to avoid horizontal overflow in between. */
              @media (min-width: 1081px) {
                .menu {
                  display: none;
                }
              }

              @media (max-width: 1080px) {
                .nav,
                .phone {
                  display: none;
                }

                .burger {
                  display: inline-flex;
                }
              }

              @media (max-width: 640px) {
                .header {
                  height: 64px;
                }

                .bar {
                  height: 100%;
                  min-height: 0;
                  padding: 0 12px 0 20px;
                }

                .logo img {
                  height: 30px;
                }

                .actions {
                  gap: 4px;
                }

                .phone-icon {
                  display: inline-flex;
                  width: 44px;
                  height: 44px;
                  align-items: center;
                  justify-content: center;
                  color: #002902;
                }

                .book {
                  display: none;
                }

                .burger {
                  width: 44px;
                  height: 44px;
                  border: 0;
                }

                .burger :global(.burger-icon) {
                  width: 24px;
                  height: 24px;
                  stroke-width: 1.7;
                }
              }
            `}</style>
        </header>
    );
}
