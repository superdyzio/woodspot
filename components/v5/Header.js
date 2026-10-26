import Icon from './Icon';
import { NAV, PHONE, PHONE_HREF } from './data';
import s from './Header.module.css';

export default function Header() {
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
                    {/* The design defines no menu behaviour for this button. */}
                    <button type="button" className={s.menu} aria-label="Otwórz menu">
                        <Icon name="menu" size={22} stroke={2} />
                    </button>
                </div>
            </div>
        </header>
    );
}
