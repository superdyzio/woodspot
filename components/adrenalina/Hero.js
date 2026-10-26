import s from './Hero.module.css';
import ui from './ui.module.css';
import { HERO } from './data';
import { Copy } from './ui';
import Img from './Img';

export default function Hero({ quickBooking }) {
  return (
    <section id="start" className={s.hero} data-section="start">
      <div className={s.media}>
        <div className={s.mediaAccent} aria-hidden="true" />
        {/* Sizes are the drawn width under object-fit: cover (the 3:2 photo fills a 300px tall box on
            mobile and an 820px+ tall one on desktop), so it can exceed the box width. */}
        <Img
          name={HERO.photo.image}
          className={s.photo}
          alt={HERO.photo.alt}
          priority
          sizes="(max-width: 449px) 450px, (max-width: 1199px) 100vw, (max-width: 2032px) 1260px, 62vw"
        />
      </div>
      {/* The slash sits under the panel: the shapes only meet at an edge, but tools that ignore
          clip-path (axe) then see the dark panel, not the yellow band, behind the heading. */}
      <div className={s.slash} aria-hidden="true" />
      <div className={s.panel} aria-hidden="true" />

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
