import s from './Ewolucja.module.css';
import { EMAIL, MAPS_URL, ON_SITE, PHONE, SOCIALS } from './content';
import { ClockIcon, PinIcon } from './icons';
import { Eyebrow, cx } from './ui';

const Block = ({ label, children }) => (
    <div className={s.contactBlock}>
        <h3 className={s.contactLabel}>{label}</h3>
        {children}
    </div>
);

export function Contact() {
    return (
        <section id="kontakt" data-section="kontakt" className={s.contact}>
            <div className={cx(s.container, s.contactInner)}>
                <div className={s.contactHead}>
                    <Eyebrow>Kontakt i dojazd</Eyebrow>
                    <h2 className={s.h2}>Jak do nas trafić</h2>
                    <p className={s.contactLead}>Siemianice, gmina Oborniki Śląskie – pod Wrocławiem.</p>
                </div>
                <div className={s.contactGrid}>
                    <img
                        src="/contact-map.png"
                        alt="Mapa dojazdu: Woodspot na północ od Obornik Śląskich, między Wołowem a Trzebnicą, nad Wrocławiem"
                        loading="lazy"
                        className={s.map}
                    />
                    <div className={s.contactCol}>
                        <Block label="Adres">
                            <p className={s.address}>
                                <strong>WOODSPOT BUSH &amp; FUN</strong>
                                <br />
                                Poznańska, 55-120 Siemianice
                                <br />
                                gm. Oborniki Śląskie
                            </p>
                            <a href={MAPS_URL} className={cx(s.mapsLink, s.link)}>
                                <PinIcon />
                                Prowadź w Mapach Google
                            </a>
                        </Block>
                        <Block label="Kiedy otwarte">
                            <p className={s.hours}>
                                <ClockIcon />
                                [GODZINY OTWARCIA]
                            </p>
                            <p className={cx(s.hours, s.season)}>Sezon: [SEZON]</p>
                        </Block>
                    </div>
                    <div className={s.contactCol}>
                        <Block label="Zadzwoń lub napisz">
                            <a href={PHONE.href} className={cx(s.bigPhone, s.link)}>
                                {PHONE.label}
                            </a>
                            <a href={`mailto:${EMAIL}`} className={cx(s.mail, s.link)}>
                                {EMAIL}
                            </a>
                            <div className={s.socials}>
                                {SOCIALS.map((social) => (
                                    <a key={social.label} href={social.href} aria-label={social.label}>
                                        <img src={social.icon} alt="" />
                                    </a>
                                ))}
                            </div>
                        </Block>
                        <Block label="Na miejscu">
                            {ON_SITE.map((item) => (
                                <p key={item} className={s.contactText}>
                                    {item}
                                </p>
                            ))}
                        </Block>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function ClosingCta() {
    return (
        <section data-section="kontakt-2" aria-labelledby="gotowi" className={s.cta}>
            <div className={s.ctaInner}>
                <h2 id="gotowi" className={s.h2}>
                    Gotowi na dzień w naturze?
                </h2>
                <p className={s.ctaText}>Wybierz atrakcję i termin – resztę przygotujemy na miejscu.</p>
                <div className={s.ctaButtons}>
                    <a href="#rezerwuj" className={s.btnDark}>
                        Sprawdź dostępność
                    </a>
                    <a href={PHONE.href} className={s.btnDarkOutline}>
                        Zadzwoń: {PHONE.label}
                    </a>
                </div>
            </div>
        </section>
    );
}
