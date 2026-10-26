import { useState } from 'react';
import { R, cx } from './Responsive';
import { EVENT_FIELDS, EVENT_TYPES, PHONE, PHONE_HREF, PREVIEW_NOTICE, SAS_URL } from './data';
import ui from './ui.module.css';
import s from './Events.module.css';

const SAS_LINK = <a href={SAS_URL}>Szkołą Przygody i Przetrwania SAS</a>;

// `s[id]` picks up per-field tweaks (e.g. .data, .osoby) where the module defines them.
function Field({ id, label, options, wide, ...inputProps }) {
    const fieldId = `v5-${id}`;
    return (
        <div className={cx(s.field, wide && s.wide, s[id])}>
            <label htmlFor={fieldId}>{label}</label>
            {options ? (
                <select id={fieldId} name={id}>
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            ) : (
                <input id={fieldId} name={id} {...inputProps} />
            )}
        </div>
    );
}

// Event inquiry. The form never leaves the page: submitting shows the preview notice.
function InquiryForm() {
    const [sent, setSent] = useState(false);
    const submit = (event) => {
        event.preventDefault();
        setSent(true);
    };

    return (
        <form aria-labelledby="v5-form-title" className={s.form} onSubmit={submit} noValidate>
            <h3 id="v5-form-title">Zapytaj o wydarzenie</h3>
            <p className={s.formLead}>
                <R v={{ d: 'Opisz, co planujesz – przygotujemy propozycję i wycenę.', m: 'Przygotujemy propozycję i wycenę.' }} />
            </p>
            <div className={s.fields}>
                {EVENT_FIELDS.map((field) => (
                    <Field key={field.id} {...field} />
                ))}
            </div>
            <div className={s.field}>
                <label htmlFor="v5-wiad">Wiadomość</label>
                <textarea id="v5-wiad" name="wiadomosc" rows={4} className={s.message} />
            </div>
            <div className={s.consent}>
                <input id="v5-zgoda" name="zgoda" type="checkbox" />
                <label htmlFor="v5-zgoda">[Zgoda na kontakt i przetwarzanie danych – treść RODO do uzupełnienia]</label>
            </div>
            <button type="submit" className={s.send}>
                Wyślij zapytanie
            </button>
            {sent && (
                <p role="status" className={ui.notice}>
                    {PREVIEW_NOTICE}
                </p>
            )}
            <p className={s.formFoot}>
                <R
                    v={{
                        d: (
                            <>
                                Odpowiadamy w [CZAS ODPOWIEDZI]. Wolisz zadzwonić? <a href={PHONE_HREF}>{PHONE}</a>
                            </>
                        ),
                        m: 'Odpowiadamy w [CZAS ODPOWIEDZI].',
                    }}
                />
            </p>
        </form>
    );
}

export default function Events() {
    return (
        <section id="wydarzenia" className={s.section} data-section="wydarzenia">
            <div className={s.grid}>
                <div className={s.intro}>
                    <div className={s.photo}>
                        <img src="/bush-section-3.jpg" alt="Grupa znajomych na słonecznej polanie wśród sosen" loading="lazy" decoding="async" />
                    </div>
                    <p className={cx(ui.eyebrow, s.eyebrow)}>Wydarzenia</p>
                    <h2 className={cx(ui.title, ui.balance)}>Cały teren nawet na wyłączność</h2>
                    <p className={s.lead}>
                        <R
                            v={{
                                d: 'Tak duży leśny teren daje przestrzeń na niezapomniane wydarzenia. Wieczorem czas umili ognisko – miejsce na nie czeka przy każdej z naszych wiat. Teren możesz mieć nawet na wyłączność i z naszą pomocą zorganizować to, co będziesz miło wspominać przez długi czas.',
                                m: 'Wieczorem czas umili ognisko – miejsce na nie czeka przy każdej wiacie. Teren możesz mieć nawet na wyłączność i z naszą pomocą zorganizować to, co będziesz długo wspominać.',
                            }}
                        />
                    </p>
                    <ul className={s.chips}>
                        {EVENT_TYPES.map((type) => (
                            <li key={type}>{type}</li>
                        ))}
                    </ul>
                    <p className={s.extras}>
                        <R
                            v={{
                                d: <>Na życzenie: animatorzy dla dzieci i zajęcia survivalowe ze {SAS_LINK}.</>,
                                m: <>Na życzenie: animatorzy i zajęcia survivalowe ze {SAS_LINK}.</>,
                            }}
                        />
                    </p>
                </div>
                <InquiryForm />
            </div>
        </section>
    );
}
