import { cx, onlyDesktop } from './Responsive';
import { EMAIL, EMAIL_HREF, FOOTER_NAV, PHONE, PHONE_HREF } from './data';
import s from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={s.footer} data-section="footer">
            <div className={s.wrap}>
                <div className={s.grid}>
                    <div className={s.brand}>
                        <img src="/logo-white.svg" alt="Woodspot bush&fun" />
                        <p>Natura i zabawa napełnia to miejsce pozytywną energią.</p>
                    </div>
                    {FOOTER_NAV.map(({ title, links }) => (
                        <nav key={title} aria-label={title} className={s.nav}>
                            <strong>{title}</strong>
                            {links.map(({ href, label, desktopOnly }) => (
                                <a key={label} href={href} className={desktopOnly ? onlyDesktop : undefined}>
                                    {label}
                                </a>
                            ))}
                        </nav>
                    ))}
                    <div className={cx(s.contact, onlyDesktop)}>
                        <strong>Kontakt</strong>
                        <span>
                            Poznańska, 55-120 Siemianice
                            <br />
                            gm. Oborniki Śląskie
                        </span>
                        <a href={PHONE_HREF} className={s.phone}>
                            {PHONE}
                        </a>
                        <a href={EMAIL_HREF}>{EMAIL}</a>
                    </div>
                </div>
                <div className={s.bottom}>
                    <span>© Woodspot bush&amp;fun · Siemianice</span>
                    <span>[Polityka prywatności – do uzupełnienia]</span>
                </div>
            </div>
        </footer>
    );
}
