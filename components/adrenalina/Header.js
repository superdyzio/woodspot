import s from './Header.module.css';
import { NAV_LINKS, PHONE } from './data';
import { CloseIcon, MenuIcon, PhoneIcon } from './ui';

export default function Header({ menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <header className={s.header} data-section="header">
      <div className={s.inner}>
        <a href="#start" aria-label="Woodspot – początek strony" className={s.logo}>
          <img src="/logo-white.svg" alt="Woodspot bush&fun" />
        </a>

        <nav aria-label="Menu główne" className={s.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a href={PHONE.href} className={s.phone}>
          <PhoneIcon stroke="var(--accent)" />
          {PHONE.label}
        </a>
        <a href={PHONE.href} aria-label={`Zadzwoń: ${PHONE.label}`} className={s.phoneIcon}>
          <PhoneIcon size={22} />
        </a>

        <a href="#rezerwacja" className={s.book}>Zarezerwuj</a>

        <button
          type="button"
          className={s.burger}
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={menuOpen}
          aria-controls="v3-menu"
          onClick={onToggleMenu}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <nav id="v3-menu" aria-label="Menu" className={s.menu}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={onCloseMenu}>{link.label}</a>
          ))}
          <a href="#rezerwacja" onClick={onCloseMenu}>Rezerwacja</a>
        </nav>
      )}
    </header>
  );
}
