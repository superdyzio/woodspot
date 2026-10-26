import s from './Grounds.module.css';
import ui from './ui.module.css';
import { GROUNDS, GROUNDS_CTA } from './data';
import { CompassIcon, Copy, TreeIcon } from './ui';

function Badge({ icon }) {
  if (icon.type === 'img') return <img src={icon.src} alt="" className={s.badge} />;
  return (
    <span aria-hidden="true" className={`${s.badge} ${s.badgeDrawn}`}>
      {icon.type === 'tree' ? <TreeIcon /> : <CompassIcon />}
    </span>
  );
}

function GroundCard({ item }) {
  const cta = item.cta ?? GROUNDS_CTA;
  return (
    <article className={s.card}>
      {item.placeholder ? (
        <div className={`${s.media} ${s.placeholder}`}>
          <div className={s.placeholderBox}>{item.placeholder}</div>
        </div>
      ) : (
        <div className={s.media}>
          <img
            src={item.photo.src}
            alt={item.photo.alt}
            loading="lazy"
            style={item.photo.position ? { objectPosition: item.photo.position } : undefined}
          />
        </div>
      )}
      <div className={s.body}>
        <Badge icon={item.icon} />
        <h3 className={s.title}>{item.title}</h3>
        <p className={s.text}><Copy text={item.text} /></p>
        {item.note && <p className={s.note}>{item.note}</p>}
        <div className={s.footer}>
          <span className={s.price}><Copy text={item.price} /></span>
          <a href={cta.href} className={`${ui.textLink} ${s.link}`}><Copy text={cta.label} /></a>
        </div>
      </div>
    </article>
  );
}

export default function Grounds() {
  return (
    <section id="teren" className={s.grounds} data-section="teren">
      <div className={`${ui.container} ${s.layout}`}>
        <div className={ui.sectionHead}>
          <div className={ui.headTitles}>
            <p className={ui.eyebrow}>04 / Reszta terenu</p>
            <h2 className={ui.display}>To nie tylko paintball</h2>
          </div>
          <p className={`${ui.lead} ${ui.desktopOnly}`}>
            Ogrodzony, w znacznym stopniu oświetlony teren: lasy, polany i stawy. Każdy wykorzysta tu swoją energię inaczej.
          </p>
        </div>
        <div className={s.list}>
          {GROUNDS.map((item) => (
            <GroundCard key={item.key} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
