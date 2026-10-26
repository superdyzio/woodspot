import s from './QuickBooking.module.css';
import ui from './ui.module.css';
import { QUICK_OPTIONS } from './data';
import { PreviewNotice } from './ui';

// "Szybka rezerwacja": a horizontal bar inside the hero on desktop, a separate card section on mobile.
// Both renders share the same state, so values survive a resize.
export default function QuickBooking({ variant, values, onChange, onCheck, checked }) {
  const what = (
    <label className={`${s.field} ${s.what}`}>
      <span className={`${ui.fieldLabel} ${s.label}`}>Co?</span>
      <select className={s.control} value={values.what} onChange={(e) => onChange('what', e.target.value)}>
        {QUICK_OPTIONS.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
  const when = (
    <label className={`${s.field} ${s.when}`}>
      <span className={`${ui.fieldLabel} ${s.label}`}>Kiedy?</span>
      <input className={s.control} type="date" value={values.date}
             onChange={(e) => onChange('date', e.target.value)} />
    </label>
  );
  const count = (
    <label className={`${s.field} ${s.count}`}>
      <span className={`${ui.fieldLabel} ${s.label}`}>Ile osób?</span>
      <input className={s.control} type="number" min="1" placeholder="np. 8" value={values.people}
             onChange={(e) => onChange('people', e.target.value)} />
    </label>
  );
  const button = (
    <button type="button" className={s.check} onClick={onCheck}>Sprawdź dostępność</button>
  );

  if (variant === 'bar') {
    return (
      <div role="group" aria-label="Szybka rezerwacja" className={`${s.bar} ${ui.desktopOnly}`}>
        {what}
        {when}
        {count}
        {button}
        <PreviewNotice show={checked} className={s.notice} />
      </div>
    );
  }

  return (
    <section aria-label="Szybka rezerwacja" className={s.section} data-section="start-2">
      <div className={s.card}>
        <h2 className={s.title}>Szybka rezerwacja</h2>
        {what}
        <div className={s.pair}>
          {when}
          {count}
        </div>
        {button}
        <PreviewNotice show={checked} />
      </div>
    </section>
  );
}
