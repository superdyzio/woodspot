import s from './Events.module.css';
import ui from './ui.module.css';
import { EVENTS, PHONE } from './data';
import { Copy } from './ui';
import Img from './Img';

export default function Events() {
  return (
    <section id="imprezy" className={s.events} data-section="imprezy">
      <div className={s.photo}>
        {/* Drawn width under object-fit: cover; on desktop the box is as tall as the copy (~1000px). */}
        <Img
          name={EVENTS.photo.image}
          alt={EVENTS.photo.alt}
          sizes="(max-width: 373px) 373px, (max-width: 1199px) 100vw, 1470px"
        />
      </div>
      <div className={s.content}>
        <p className={ui.eyebrow}><Copy text={EVENTS.eyebrow} /></p>
        <h2 className={`${ui.display} ${ui.lines} ${s.heading}`}>
          <span>Ekipa?</span>
          <span className={ui.accentText}>Mamy teren.</span>
        </h2>
        <p className={s.text}><Copy text={EVENTS.text} /></p>
        <ul aria-label="Rodzaje wydarzeń" className={s.types}>
          {EVENTS.types.map((type) => (
            <li key={type.label} className={type.highlight ? s.typeHighlight : undefined}>{type.label}</li>
          ))}
        </ul>
        <p className={s.extras}><Copy text={EVENTS.extras} /></p>
        <div className={s.ctas}>
          <a href="#zapytanie" className={`${ui.btnPrimary} ${s.ask}`}>Zapytaj o wydarzenie</a>
          <a href={PHONE.href} className={s.call}>albo zadzwoń: {PHONE.label}</a>
        </div>
      </div>
    </section>
  );
}
