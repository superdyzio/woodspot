import { R, cx, onlyDesktop } from './Responsive';
import { EMAIL, EMAIL_HREF, MAPS_URL, PHONE, PHONE_HREF, PRACTICAL_INFO, SOCIALS } from './data';
import ui from './ui.module.css';
import s from './Contact.module.css';

const lastMobileRow = PRACTICAL_INFO.map((row) => !row.desktopOnly).lastIndexOf(true);

export default function Contact() {
    return (
        <section id="kontakt" className={s.section} data-section="kontakt">
            <div className={s.wrap}>
                <div className={s.head}>
                    <p className={cx(ui.eyebrow, onlyDesktop)}>Kontakt</p>
                    <h2 className={cx(ui.title, s.title)}>Kontakt i dojazd</h2>
                </div>
                <div className={s.grid}>
                    <div className={s.reach}>
                        <span className={s.reachLabel}>Zadzwoń lub napisz</span>
                        <a href={PHONE_HREF} className={s.phone}>
                            {PHONE}
                        </a>
                        <a href={EMAIL_HREF} className={s.email}>
                            {EMAIL}
                        </a>
                        <div className={s.socials}>
                            {SOCIALS.map(({ href, label, icon }) => (
                                <a key={href} href={href} aria-label={label}>
                                    <img src={icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={s.map}>
                        <img
                            src="/contact-map.png"
                            alt="Mapa dojazdu: Woodspot na północ od Obornik Śląskich, nad Wrocławiem"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className={s.address}>
                            <span>
                                <strong>Poznańska, 55-120 Siemianice</strong>
                                <br />
                                gm. Oborniki Śląskie
                            </span>
                            <a href={MAPS_URL}>Wyznacz trasę</a>
                        </div>
                    </div>

                    <div className={s.info}>
                        <h3>Praktyczne informacje</h3>
                        <dl>
                            {PRACTICAL_INFO.map(({ label, value, desktopOnly }, i) => (
                                <div
                                    key={value}
                                    className={cx(s.row, i === lastMobileRow && s.lastMobile, desktopOnly && onlyDesktop)}
                                >
                                    <dt>
                                        <R v={label} />
                                    </dt>
                                    <dd>{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}
