import s from './Footer.module.css';
import { FOOTER_LINKS } from './data';

export default function Footer() {
  return (
    <footer className={s.footer} data-section="footer">
      <div className={s.inner}>
        <img src="/logo-white.svg" alt="Woodspot bush&fun" className={s.logo} />
        <nav aria-label="Stopka" className={s.nav}>
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={link.mobileOnly ? s.mobileLink : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
        <p className={s.copy}>© Woodspot Bush &amp; Fun · Siemianice, gm. Oborniki Śląskie</p>
      </div>
    </footer>
  );
}

