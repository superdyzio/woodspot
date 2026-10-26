import s from './Packages.module.css';
import ui from './ui.module.css';
import { PACKAGE_COUNT, PACKAGE_ROWS, PACKAGES_FOOTNOTE, PAINTBALL } from './data';
import { Copy } from './ui';

const PACKAGES = Array.from({ length: PACKAGE_COUNT }, (_, i) => ({ index: i, title: `Pakiet 0${i + 1}` }));

export default function Packages({ selected, onSelect }) {
  return (
    <section id="pakiety" className={`${s.packages} ${ui.topo}`} data-section="pakiety">
      <div className={`${ui.container} ${s.layout}`}>
        <div className={`${ui.sectionHead} ${s.head}`}>
          <div className={ui.headTitles}>
            <p className={ui.eyebrow}>02 / Pakiety</p>
            <h2 className={`${ui.display} ${s.heading}`}>Wybierz pakiet</h2>
          </div>
          <p className={`${ui.lead} ${s.lead}`}>{PAINTBALL.gear.note}</p>
        </div>

        <div className={s.list} role="group" aria-label="Pakiety paintballowe">
          {PACKAGES.map((pkg) => {
            const isSelected = pkg.index === selected;
            return (
              <article key={pkg.index} className={`${s.card} ${isSelected ? s.selected : ''}`}>
                <div className={s.top}>
                  <span className={s.title}>{pkg.title}</span>
                  {isSelected && <span className={s.badge}>Wybrany</span>}
                </div>
                <h3 className={s.name}>[Nazwa pakietu]</h3>
                <dl className={s.rows}>
                  {PACKAGE_ROWS.map((row) => (
                    <div key={row.label} className={`${s.row} ${row.stacked ? s.rowStacked : ''}`}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className={s.bottom}>
                  <p className={s.price}>
                    <span className={s.priceFrom}>od</span>
                    <span className={s.priceValue}>[CENA]</span>
                    <span className={s.priceUnit}>/ os.</span>
                  </p>
                  <button
                    type="button"
                    className={s.pick}
                    aria-pressed={isSelected}
                    onClick={() => onSelect(pkg.index)}
                  >
                    {isSelected ? 'Wybrano – zarezerwuj' : 'Wybierz'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className={s.hint}>Przesuń w bok, aby zobaczyć kolejne pakiety →</p>
        <p className={s.footnote}>
          <Copy text={PACKAGES_FOOTNOTE} />{' '}
          <a href="#zapytanie">Zapytaj o teren na wyłączność →</a>
        </p>
      </div>
    </section>
  );
}
