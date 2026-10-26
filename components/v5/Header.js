import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { NAV, PHONE, PHONE_HREF } from './data';
import s from './Header.module.css';

const MENU_ID = 'v5-menu';

export default function Header() {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);

    // Escape closes the menu and returns focus to the toggle.
    useEffect(() => {
        if (!open) return undefined;
        const onKeyDown = (event) => {
            if (event.key !== 'Escape') return;
            setOpen(false);
            buttonRef.current?.focus();
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open]);

    return (
        <header className={s.header} data-section="header">
            <div className={s.inner}>
                <a href="#start" aria-label="Woodspot – strona główna" className={s.logo}>
                    <img src="/logo-green.svg" alt="Woodspot bush&fun" />
                </a>
                <nav className={s.nav} aria-label="Główna nawigacja">
                    {NAV.map(({ href, label }) => (
                        <a key={href} href={href}>
                            {label}
                        </a>
                    ))}
                </nav>
                <div className={s.actions}>
                    <a className={s.tel} href={PHONE_HREF}>
                        <Icon name="phone" size={18} />
                        {PHONE}
                    </a>
                    <a className={s.telIcon} href={PHONE_HREF} aria-label={`Zadzwoń: ${PHONE}`}>
                        <Icon name="phone" size={20} />
                    </a>
                    <a className={s.book} href="#rezerwacja">
                        Zarezerwuj
                    </a>
                    <button
                        ref={buttonRef}
                        type="button"
                        className={s.menu}
                        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
                        aria-expanded={open}
                        aria-controls={MENU_ID}
                        onClick={() => setOpen((value) => !value)}
                    >
                        <Icon name={open ? 'close' : 'menu'} size={22} stroke={2} />
                    </button>
                </div>
            </div>
            {/* Not in the design: a simple panel with the nav links, shown only while the menu is open. */}
            <nav id={MENU_ID} className={s.panel} aria-label="Menu" hidden={!open}>
                {NAV.map(({ href, label }) => (
                    <a key={href} href={href} onClick={() => setOpen(false)}>
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    );
}
