import { useEffect, useState } from 'react';
import s from './Ewolucja.module.css';
import { EVENT_EXTRAS, EVENT_FORM_TYPES, EVENT_TYPES_CHIPS, dm } from './content';
import { CheckIcon } from './icons';
import { HEADER_BG, responsive } from './images';
import { Chips, Eyebrow, PreviewNotice, Txt, cx } from './ui';

const EYEBROW = dm('Imprezy i teren na wyłączność', 'Imprezy i wyłączność');
const EVENTS_TEXT = dm(
    'Czas umili ognisko – miejsce na nie przygotowane jest przy każdej z naszych wiat. Tak duży leśny teren daje przestrzeń na niezapomniane wydarzenia, a co najważniejsze – możesz mieć go nawet na wyłączność i z naszą pomocą zorganizować to, co będziesz miło wspominać przez długi czas.',
    'Przy każdej wiacie czeka miejsce na ognisko. Tak duży leśny teren daje przestrzeń na niezapomniane wydarzenia – możesz mieć go nawet na wyłączność, a my pomożemy wszystko zorganizować.'
);
// Full width on phones; one grid column of the 1200 px container (40 px side
// padding) on wider screens – two columns of 572 px from 1096 px up.
const EVENTS_IMG = responsive(
    'bush-section-4',
    '(max-width: 640px) 100vw, (max-width: 1095px) calc(100vw - 80px), (max-width: 1280px) calc(50vw - 68px), 572px'
);
const MESSAGE_PLACEHOLDER = {
    desktop: 'Np. urodziny 10-latka, ognisko przy wiacie, animator na 2 godziny',
    mobile: 'Np. urodziny, ognisko przy wiacie, animator',
};

// The design shortens the textarea placeholder on phones. Placeholders cannot be
// switched in CSS, so follow the same 640 px breakpoint after hydration.
function useIsPhone() {
    const [isPhone, setIsPhone] = useState(false);
    useEffect(() => {
        const query = window.matchMedia('(max-width: 640px)');
        const update = () => setIsPhone(query.matches);
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);
    return isPhone;
}

const FIELDS = [
    { name: 'name', label: 'Imię', type: 'text', autoComplete: 'given-name', wide: true },
    { name: 'phone', label: 'Telefon', type: 'tel', autoComplete: 'tel', wide: true },
    { name: 'email', label: 'E-mail', type: 'email', autoComplete: 'email', wide: true },
    { name: 'type', label: 'Rodzaj wydarzenia', options: EVENT_FORM_TYPES, wide: true },
    { name: 'date', label: 'Data', type: 'date' },
    { name: 'people', label: 'Liczba osób', type: 'number', min: 1, placeholder: 'np. 25' },
];

function EventForm() {
    const [submitted, setSubmitted] = useState(false);
    const isPhone = useIsPhone();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <form className={s.eventCard} onSubmit={handleSubmit} noValidate>
            <div className={s.eventHead}>
                <h3 className={s.eventTitle}>Zapytaj o wydarzenie</h3>
                <p className={s.eventIntro}>
                    Opisz, co planujesz – przygotujemy propozycję i wycenę. Odpowiadamy w [CZAS ODPOWIEDZI].
                </p>
            </div>
            <div className={s.eventGrid}>
                {FIELDS.map(({ name, label, options, wide, ...inputProps }) => (
                    <label key={name} className={cx(s.field, wide && s.wide)}>
                        {label}
                        {options ? (
                            <select name={name} className={s.input}>
                                {options.map((option) => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                        ) : (
                            <input name={name} className={s.input} {...inputProps} />
                        )}
                    </label>
                ))}
            </div>
            <label className={s.field}>
                Wiadomość
                <textarea
                    name="message"
                    rows={4}
                    placeholder={isPhone ? MESSAGE_PLACEHOLDER.mobile : MESSAGE_PLACEHOLDER.desktop}
                    className={s.input}
                />
            </label>
            <label className={s.consent}>
                <input type="checkbox" name="consent" />
                [Zgoda na kontakt i przetwarzanie danych – treść do uzupełnienia]
            </label>
            <button type="submit" className={s.submit}>
                Wyślij zapytanie
            </button>
            {submitted && <PreviewNotice />}
        </form>
    );
}

export default function Events() {
    return (
        <section id="imprezy" data-section="imprezy" className={s.events}>
            <img {...HEADER_BG} alt="" className={cx(s.cover, s.eventsBg)} />
            <div className={s.eventsGrid}>
                <div className={s.eventsStory}>
                    <div className={cx(s.eventsPhoto, s.slantA)}>
                        <img
                            {...EVENTS_IMG}
                            alt="Drewniana wiata, sofy z palet i miejsce na ognisko na polanie"
                            className={s.cropImg}
                        />
                    </div>
                    <div className={s.eventsText}>
                        <Eyebrow>
                            <Txt value={EYEBROW} />
                        </Eyebrow>
                        <h2 className={s.h2}>Cały teren może być Wasz</h2>
                        <p className={s.body}>
                            <Txt value={EVENTS_TEXT} />
                        </p>
                        <Chips items={EVENT_TYPES_CHIPS} soft />
                        <div className={s.extras}>
                            <p className={cx(s.extrasTitle, s.dOnly)}>Na życzenie</p>
                            <ul className={s.extrasList}>
                                {EVENT_EXTRAS.map((extra) => (
                                    <li key={extra}>
                                        <CheckIcon />
                                        {extra}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.eventFormWrap}>
                    <EventForm />
                </div>
            </div>
        </section>
    );
}
