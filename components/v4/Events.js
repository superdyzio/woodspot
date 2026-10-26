import { useState } from 'react';
import { ACCENT, EVENT_EXTRAS, EVENT_FORM_TYPES, EVENT_ICONS, EVENT_TYPES, PREVIEW_NOTICE } from './data';
import { PlusIcon } from './icons';
import { V, cx } from './Variant';
import shared from './shared.module.css';
import styles from './Events.module.css';

function Field({ id, label, wide = false, children }) {
    return (
        <div className={cx(styles.field, wide && styles.wide)}>
            <label htmlFor={id} className={styles.label}>{label}</label>
            {children}
        </div>
    );
}

// Events: the whole site for one group, with an enquiry form. Nothing is sent: the button shows a preview notice.
export default function Events() {
    const [sent, setSent] = useState(false);

    return (
        <section id="wydarzenia" className={styles.section} data-section="wydarzenia">
            <div className={shared.contours} aria-hidden="true" />
            <div className={cx(shared.container, styles.inner)}>
                <div className={styles.text}>
                    <p className={styles.eyebrow}>
                        <V v={{ d: 'WYDARZENIA · STREFY A–H NA WYŁĄCZNOŚĆ', m: 'WYDARZENIA · TEREN NA WYŁĄCZNOŚĆ' }} />
                    </p>
                    <h2 className={styles.title}>Cała mapa tylko dla Was</h2>
                    <p className={styles.lede}>
                        <V
                            v={{
                                d: 'Tak duży leśny teren daje przestrzeń na niezapomniane wydarzenia. Co najważniejsze, teren możesz mieć nawet na wyłączność i z naszą pomocą zorganizować na nim to, co będziesz miło wspominać przez długi czas.',
                                m: 'Teren możesz mieć nawet na wyłączność i z naszą pomocą zorganizować na nim to, co będziesz miło wspominać przez długi czas.',
                            }}
                        />
                    </p>
                    <ul className={styles.types}>
                        {EVENT_TYPES.map((type) => <li key={type} className={styles.type}>{type}</li>)}
                    </ul>
                    <div className={cx(styles.extras, shared.dOnly)}>
                        <p className={styles.extrasLabel}>DO WYDARZENIA MOŻESZ DOBRAĆ</p>
                        <ul className={styles.extrasList}>
                            {EVENT_EXTRAS.map((extra) => (
                                <li key={extra} className={styles.extra}><PlusIcon color={ACCENT} />{extra}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx(styles.icons, shared.dOnly)} aria-hidden="true">
                        {EVENT_ICONS.map((src) => <img key={src} src={src} alt="" className={styles.icon} loading="lazy" />)}
                    </div>
                </div>

                <form className={styles.form} aria-label="Zapytaj o wydarzenie" onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.formHead}>
                        <h3 className={styles.formTitle}>Zapytaj o wydarzenie</h3>
                        <p className={cx(styles.formIntro, shared.dOnly)}>Napisz, co planujesz – przygotujemy propozycję i wycenę.</p>
                    </div>
                    <div className={styles.fields}>
                        <Field id="v4-imie" label="Imię">
                            <input id="v4-imie" type="text" autoComplete="given-name" className={styles.input} />
                        </Field>
                        <Field id="v4-tel" label="Telefon">
                            <input id="v4-tel" type="tel" autoComplete="tel" className={styles.input} />
                        </Field>
                        <Field id="v4-mail" label="E-mail" wide>
                            <input id="v4-mail" type="email" autoComplete="email" className={styles.input} />
                        </Field>
                        <Field id="v4-rodzaj" label="Rodzaj wydarzenia" wide>
                            <select id="v4-rodzaj" className={styles.select}>
                                {EVENT_FORM_TYPES.map((type) => <option key={type}>{type}</option>)}
                            </select>
                        </Field>
                        <Field id="v4-data" label="Data">
                            <input id="v4-data" type="date" className={cx(styles.input, styles.date)} />
                        </Field>
                        <Field id="v4-osoby" label="Liczba osób">
                            <input id="v4-osoby" type="number" min="1" className={styles.input} />
                        </Field>
                    </div>
                    <Field id="v4-wiad" label="Wiadomość">
                        <textarea id="v4-wiad" rows={4} className={styles.textarea} />
                    </Field>
                    <div className={styles.formFooter}>
                        <button type="button" className={styles.submit} onClick={() => setSent(true)}>Wyślij zapytanie</button>
                        <p className={styles.formNote}>Odpowiadamy w [CZAS ODPOWIEDZI].</p>
                    </div>
                    {sent && <p className={shared.notice} role="status">{PREVIEW_NOTICE}</p>}
                </form>
            </div>
        </section>
    );
}
