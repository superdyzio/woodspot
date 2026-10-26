import s from './Eco.module.css';
import ui from './ui.module.css';
import { ECO } from './data';
import { Copy } from './ui';

export default function Eco() {
  return (
    <section id="eko" className={s.eco} data-section="eko">
      <div className={s.content}>
        <p className={ui.eyebrow}>05 / Eko</p>
        <h2 className={`${ui.display} ${ui.lines} ${s.heading}`}>
          <span>Zasilani</span>
          <span className={ui.accentText}>słońcem.</span>
        </h2>
        <p className={s.text}><Copy text={ECO.text} /></p>
        <ul className={s.points}>
          {ECO.points.map((point) => (
            <li key={typeof point === 'string' ? point : point.d}>
              <span aria-hidden="true" className={ui.accentText}>/</span>
              <Copy text={point} />
            </li>
          ))}
        </ul>
      </div>
      <div className={s.photo}>
        <img src={ECO.photo.src} alt={ECO.photo.alt} loading="lazy" />
      </div>
    </section>
  );
}
