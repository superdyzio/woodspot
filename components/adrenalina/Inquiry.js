import s from './Inquiry.module.css';
import ui from './ui.module.css';
import { EMAIL, INQUIRY_EVENT_OPTIONS, PHONE } from './data';
import { PreviewNotice } from './ui';

function Field({ label, className = '', children }) {
  return (
    <label className={`${s.field} ${className}`}>
      <span className={`${ui.fieldLabel} ${s.label}`}>{label}</span>
      {children}
    </label>
  );
}

// "Zapytaj o wydarzenie" form. Preview only: the button shows a notice, nothing is sent.
export default function Inquiry({ isMobile, onSend, sent }) {
  return (
    <section id="zapytanie" className={`${s.inquiry} ${ui.topo}`} data-section="zapytanie">
      <div className={`${ui.container} ${s.layout}`}>
        <div className={s.intro}>
          <p className={ui.eyebrow}>Wydarzenie</p>
          <h2 className={s.heading}>Zapytaj o wydarzenie</h2>
          <p className={s.text}>Opisz, co planujesz – przygotujemy propozycję i wycenę. Odpowiadamy w [CZAS ODPOWIEDZI].</p>
          <div className={`${s.direct} ${ui.desktopOnly}`}>
            <span className={s.directLabel}>Wolisz zadzwonić?</span>
            <a href={PHONE.href} className={s.directPhone}>{PHONE.label}</a>
            <a href={EMAIL.href} className={s.directEmail}>{EMAIL.label}</a>
          </div>
        </div>

        <div role="group" aria-label="Formularz zapytania o wydarzenie" className={s.form}>
          <div className={s.pair}>
            <Field label="Imię"><input className={s.input} type="text" placeholder="Twoje imię" /></Field>
            <Field label="Telefon"><input className={s.input} type="tel" placeholder="+48" /></Field>
          </div>
          <Field label="E-mail"><input className={s.input} type="email" placeholder="adres@email.pl" /></Field>
          <Field label="Rodzaj wydarzenia">
            <select className={`${s.input} ${s.select}`}>
              {INQUIRY_EVENT_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
          <div className={`${s.pair} ${s.pairWide}`}>
            <Field label="Data"><input className={`${s.input} ${s.date}`} type="date" /></Field>
            <Field label="Liczba osób"><input className={s.input} type="number" min="1" placeholder="np. 15" /></Field>
          </div>
          <Field label="Wiadomość" className={s.full}>
            <textarea
              className={`${s.input} ${s.message}`}
              rows={4}
              placeholder={isMobile ? 'Paintball dla 10 osób, potem ognisko…' : 'Paintball dla 10 osób, potem ognisko przy wiacie…'}
            />
          </Field>
          <div className={`${s.full} ${s.actions}`}>
            <button type="button" className={`${ui.btnPrimary} ${s.send}`} onClick={onSend}>Wyślij zapytanie</button>
            <span className={s.note}>Odpowiadamy w [CZAS ODPOWIEDZI].</span>
          </div>
          <PreviewNotice show={sent} className={s.full} />
        </div>
      </div>
    </section>
  );
}
