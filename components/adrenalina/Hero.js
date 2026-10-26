import s from './Hero.module.css';
import ui from './ui.module.css';
import { HERO } from './data';
import { Copy } from './ui';

export default function Hero({ quickBooking }) {
  return (
    <section id="start" className={s.hero} data-section="start">
      <div className={s.media}>
        <div className={s.mediaAccent} aria-hidden="true" />
        <img className={s.photo} src={HERO.photo.src} alt={HERO.photo.alt} />
      </div>
      <div className={s.panel} aria-hidden="true" />
      <div className={s.slash} aria-hidden="true" />

      <div className={s.inner}>
        <p className={ui.eyebrow}><Copy text={HERO.eyebrow} /></p>
        <h1 className={s.title}>
          <span>Wchodzisz</span>
          <span className={ui.accentText}>do gry?</span>
        </h1>
        <p className={s.lead}><Copy text={HERO.lead} /></p>
        <div className={s.ctas}>
          <a href="#rezerwacja" className={ui.btnPrimary}>Zarezerwuj grę</a>
          <a href="#zapytanie" className={ui.btnOutline}>Zapytaj o imprezę</a>
        </div>
        {quickBooking}
      </div>
    </section>
  );
}
