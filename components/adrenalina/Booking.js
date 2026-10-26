import s from './Booking.module.css';
import ui from './ui.module.css';
import { BOOKING_OFFERS, PHONE } from './data';
import { PreviewNotice } from './ui';

// "Zaklep termin": attraction picker, date, group-size stepper and a live summary.
export default function Booking({ offer, people, summary, onOffer, onLess, onMore, onCheck, checked }) {
  return (
    <section id="rezerwacja" className={s.booking} data-section="rezerwacja">
      <div className={`${ui.container} ${s.layout}`}>
        <div className={s.head}>
          <h2 className={s.heading}>Zaklep termin.</h2>
          <p className={s.lead}>Wybierz atrakcję, datę i liczbę osób – sprawdzimy dostępność.</p>
        </div>

        <div className={s.offers}>
          <span id="v3-co" className={s.label}>Co?</span>
          <div role="group" aria-labelledby="v3-co" className={s.offerList}>
            {BOOKING_OFFERS.map((o) => (
              <button
                key={o.id}
                type="button"
                className={`${s.offer} ${o.id === offer ? s.offerOn : ''}`}
                aria-pressed={o.id === offer}
                onClick={() => onOffer(o.id)}
              >
                {o.name}
              </button>
            ))}
          </div>
        </div>

        <div className={s.controls}>
          <label className={s.when}>
            <span className={s.label}>Kiedy?</span>
            <input type="date" className={s.date} />
          </label>
          <div className={s.count}>
            <span id="v3-ile" className={s.label}>Ile osób?</span>
            <div role="group" aria-labelledby="v3-ile" className={s.stepper}>
              <button type="button" aria-label="Mniej osób" onClick={onLess}>−</button>
              <output aria-live="polite">{people}</output>
              <button type="button" aria-label="Więcej osób" onClick={onMore}>+</button>
            </div>
          </div>
          <div aria-live="polite" className={s.summary}>
            <span className={s.summaryLabel}>Twój wybór</span>
            <span className={s.summaryValue}>{summary}</span>
          </div>
          <button type="button" className={s.check} onClick={onCheck}>Sprawdź dostępność</button>
          <PreviewNotice show={checked} onAccent className={s.notice} />
        </div>

        <p className={s.contacts}>
          <span>Wolisz zadzwonić? <a href={PHONE.href}>{PHONE.label}</a></span>
          <span>Planujesz imprezę? <a href="#zapytanie">Zapytaj o wydarzenie →</a></span>
        </p>
      </div>
    </section>
  );
}
