import s from './Contact.module.css';
import ui from './ui.module.css';
import { EMAIL, MAPS_URL, PHONE, PRACTICAL, SOCIALS } from './data';
import Img from './Img';

export default function Contact() {
  return (
    <section id="kontakt" className={s.contact} data-section="kontakt">
      <div className={`${ui.container} ${s.layout}`}>
        <div className={ui.headTitles}>
          <p className={ui.eyebrow}>06 / Kontakt</p>
          <h2 className={ui.display}>Jak do nas trafić</h2>
        </div>

        <div className={s.columns}>
          <div className={`${s.column} ${s.practical}`}>
            <h3 className={s.columnTitle}>Praktycznie</h3>
            <dl className={s.facts}>
              {PRACTICAL.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`${s.column} ${s.reach}`}>
            <h3 className={`${s.columnTitle} ${ui.desktopOnly}`}>Kontakt</h3>
            <address className={s.address}>
              Woodspot Bush &amp; Fun<br />Poznańska, 55-120 Siemianice<br />gm. Oborniki Śląskie
            </address>
            <a href={PHONE.href} className={s.phone}>{PHONE.label}</a>
            <a href={EMAIL.href} className={s.email}>{EMAIL.label}</a>
            <div className={s.socials}>
              {SOCIALS.map((social) => (
                <a key={social.href + social.label} href={social.href} aria-label={social.label}>
                  <img loading="lazy" decoding="async" src={social.icon} alt="" />
                </a>
              ))}
            </div>
          </div>

          <div className={`${s.column} ${s.map}`}>
            <Img
              name="contact-map"
              alt="Mapa dojazdu: Woodspot na północ od Obornik Śląskich, Wrocław na południowym wschodzie"
              sizes="(max-width: 767px) calc(100vw - 40px), 400px"
            />
            <a href={MAPS_URL} className={`${ui.textLink} ${s.route}`}>Wyznacz trasę →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
