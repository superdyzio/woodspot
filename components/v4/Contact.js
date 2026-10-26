import { CONTACT_FACTS, EMAIL, MAPS_URL, PHONE, PHONE_HREF, SOCIAL_LINKS } from './data';
import { PinIcon } from './icons';
import { cx } from './Variant';
import { SIZES, lazyImage } from './images';
import shared from './shared.module.css';
import styles from './Contact.module.css';

const MAP = lazyImage('/contact-map.png', SIZES.contactMap);
const MAP_ALT = 'Mapa dojazdu: Woodspot na północ od Obornik Śląskich, w okolicy Wrocławia i Trzebnicy';

// Zone A: entrance, directions and contact. The map image sits beside the text on desktop
// and under the heading on mobile.
export default function Contact() {
    return (
        <section id="kontakt" className={styles.section} data-section="kontakt">
            <div className={shared.contours} aria-hidden="true" />
            <div className={cx(shared.container, styles.inner)}>
                <div className={cx(styles.mapColumn, shared.dOnly)}>
                    <img {...MAP} alt={MAP_ALT} className={styles.map} />
                </div>
                <div className={styles.body}>
                    <div className={styles.head}>
                        <span className={styles.zoneBadge}>A</span>
                        <p className={styles.eyebrow}>STREFA A · WEJŚCIE I DOJAZD</p>
                    </div>
                    <h2 className={styles.title}>Jak do nas trafić</h2>
                    <img {...MAP} alt={MAP_ALT} className={cx(styles.map, shared.mOnly)} />
                    <p className={styles.address}>
                        <strong>WOODSPOT BUSH &amp; FUN</strong>
                        <br />
                        Poznańska, 55-120 Siemianice, gm. Oborniki Śląskie
                    </p>
                    <dl className={styles.facts}>
                        {CONTACT_FACTS.map((fact) => (
                            <div key={fact.term} className={styles.fact}>
                                <dt>{fact.term}</dt>
                                <dd>{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className={styles.actions}>
                        <a href={MAPS_URL} target="_blank" rel="noopener" className={styles.route}>
                            <PinIcon />
                            Wyznacz trasę
                        </a>
                        <a href={PHONE_HREF} className={styles.call}>Zadzwoń: {PHONE}</a>
                        <a href={`mailto:${EMAIL}`} className={styles.mail}>{EMAIL}</a>
                    </div>
                    <div className={styles.socials}>
                        {SOCIAL_LINKS.map((link) => (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener" aria-label={link.label} className={styles.social}>
                                <img src={link.icon} alt="" className={styles.socialIcon} loading="lazy" decoding="async" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
