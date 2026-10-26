import s from './Ewolucja.module.css';
import { NAV, PHONE } from './content';
import { cx } from './ui';

export default function Footer() {
    return (
        <footer data-section="footer" className={s.footer}>
            <div className={cx(s.container, s.footerInner)}>
                <div className={s.footerTop}>
                    <img src="/logo-white.svg" alt="Woodspot bush&fun" className={s.footerLogo} />
                    <nav aria-label="Menu w stopce" className={s.footerNav}>
                        {NAV.filter((item) => item.inFooter !== false).map((item) => (
                            <a key={item.href} href={item.href} className={s.link}>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <p className={s.copyright}>
                    © Woodspot Bush &amp; Fun
                    <span className={s.dOnly}> · Poznańska, 55-120 Siemianice · tel. {PHONE.label}</span>
                    <span className={s.mOnly}>
                        <br />
                        Poznańska, 55-120 Siemianice
                    </span>
                </p>
            </div>
        </footer>
    );
}
