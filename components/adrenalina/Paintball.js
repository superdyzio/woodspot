import s from './Paintball.module.css';
import ui from './ui.module.css';
import { PAINTBALL } from './data';
import { Copy } from './ui';
import Img from './Img';

export default function Paintball() {
  const { ranges, gear, fans } = PAINTBALL;
  return (
    <section id="paintball" className={s.paintball} data-section="paintball">
      <div className={`${ui.container} ${s.layout}`}>
        <div className={ui.sectionHead}>
          <div className={ui.headTitles}>
            <p className={ui.eyebrow}>01 / Paintball</p>
            <h2 className={`${ui.display} ${ui.lines}`}>
              <span>Dwa poligony.</span>
              <span className={ui.accentText}>Jeden las.</span>
            </h2>
          </div>
          <p className={`${ui.lead} ${s.lead}`}><Copy text={PAINTBALL.lead} /></p>
        </div>

        <div className={s.feature}>
          <div className={s.photo}>
            {/* Drawn width under object-fit: cover; a 620px tall box needs 827px of the 4:3 photo. */}
            <Img
              name={PAINTBALL.photo.image}
              alt={PAINTBALL.photo.alt}
              sizes="(max-width: 767px) calc(100vw - 40px), (min-width: 924px) and (max-width: 1099px) calc(100vw - 96px), 827px"
            />
            <p className={s.caption}>{PAINTBALL.photo.caption}</p>
          </div>
          <div className={s.details}>
            <p className={s.body}><Copy text={PAINTBALL.body} /></p>
            <dl className={s.facts}>
              {PAINTBALL.facts.map((fact) => (
                <div key={fact.value} className={s.fact}>
                  <dt><Copy text={fact.label} /></dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className={s.cards}>
          <article className={`${s.card} ${s.ranges}`}>
            <p className={s.cardEyebrow}>{ranges.eyebrow}</p>
            <h3 className={s.cardTitle}>{ranges.title}</h3>
            <p className={s.cardText}><Copy text={ranges.text} /></p>
            <a href="#rezerwacja" className={`${ui.textLink} ${s.rangesLink}`}>
              {ranges.cta} <span aria-hidden="true">→</span>
            </a>
          </article>

          <article className={`${s.card} ${s.gear}`}>
            <p className={s.cardEyebrow}>{gear.eyebrow}</p>
            <h3 className={s.cardTitle}>{gear.title}</h3>
            <div className={s.mags}>
              {gear.mags.map((mag) => (
                <div key={mag.value} className={s.mag}>
                  <span className={s.magValue}>{mag.value}</span>
                  <span className={s.magLabel}><Copy text={mag.label} /></span>
                </div>
              ))}
            </div>
            <p className={s.gearNote}>{gear.note}</p>
          </article>

          <article className={s.fans}>
            {/* Desktop: drawn width under object-fit: cover of the 460px tall card. Mobile: the box width,
                since this photo already loads with the hero and the drawn width (507px) costs 2x the bytes. */}
            <Img
              name={fans.photo.image}
              alt={fans.photo.alt}
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 839px) calc(100vw - 96px), 614px"
            />
            <div className={s.fansPanel}>
              <h3 className={s.cardTitle}>{fans.title}</h3>
              <p className={s.cardText}><Copy text={fans.text} /></p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
