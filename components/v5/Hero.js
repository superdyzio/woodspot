import { useState } from 'react';
import Icon from './Icon';
import { R, cx, onlyDesktop } from './Responsive';
import { BOOKING, CATEGORIES, PHONE, PHONE_HREF, PREVIEW_NOTICE } from './data';
import { responsive } from './images';
import ui from './ui.module.css';
import s from './Hero.module.css';

const LEAD = {
    d: 'Spoty w lesie, wiaty z ogniskiem, paintball, łowiska no-kill i pole namiotowe z prądem – niemal 10 hektarów ogrodzonego terenu. Wybierz atrakcję i termin, a my przygotujemy resztę.',
    m: 'Spoty w lesie, wiaty z ogniskiem, paintball, łowiska no-kill i pole namiotowe – niemal 10 ha pod Wrocławiem.',
};

const firstOptions = Object.fromEntries(CATEGORIES.map(({ id }) => [id, BOOKING[id].options[0]]));

// Booking search: attraction type (tab), what, when and how many people.
// Nothing is sent anywhere; "Sprawdź dostępność" only shows the preview notice.
function BookingSearch() {
    const [tab, setTab] = useState('wyp');
    const [choice, setChoice] = useState(firstOptions);
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('8');
    const [checked, setChecked] = useState(false);
    const { desc, options } = BOOKING[tab];

    const pickTab = (id) => {
        setTab(id);
        setChecked(false);
    };

    return (
        <div id="rezerwacja" className={s.booking}>
            <div className={s.bookingHead}>
                <h2>Zarezerwuj termin</h2>
                <span>Krok 1 z 4</span>
            </div>
            <div role="group" aria-label="Rodzaj atrakcji" className={cx(s.tabs, ui.scroller)}>
                {CATEGORIES.map(({ id, label }) => (
                    <button key={id} type="button" className={ui.pill} aria-pressed={id === tab} onClick={() => pickTab(id)}>
                        {label}
                    </button>
                ))}
            </div>
            <p className={s.desc}>
                <R v={desc} />
            </p>
            <div className={s.fields}>
                <div className={cx(s.field, s.what)}>
                    <label htmlFor="v5-co">Co?</label>
                    <select id="v5-co" value={choice[tab]} onChange={(e) => setChoice({ ...choice, [tab]: e.target.value })}>
                        {options.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className={cx(s.field, s.when)}>
                    <label htmlFor="v5-kiedy">Kiedy?</label>
                    <input id="v5-kiedy" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className={cx(s.field, s.people)}>
                    <label htmlFor="v5-ile">Ile osób?</label>
                    <input id="v5-ile" type="number" min="1" value={people} onChange={(e) => setPeople(e.target.value)} />
                </div>
            </div>
            {tab === 'evt' ? (
                <a href="#wydarzenia" className={s.submit}>
                    Zapytaj o termin wydarzenia
                    <Icon name="arrowRight" size={18} stroke={2.2} className={onlyDesktop} />
                </a>
            ) : (
                <button type="button" className={s.submit} onClick={() => setChecked(true)}>
                    Sprawdź dostępność
                    <Icon name="arrowRight" size={18} stroke={2.2} />
                </button>
            )}
            {checked && (
                <p role="status" className={ui.notice}>
                    {PREVIEW_NOTICE}
                </p>
            )}
            <div className={s.bookingFoot}>
                <a href="#wydarzenia">Organizujesz wydarzenie? Zapytaj o termin</a>
                <span className={onlyDesktop}>
                    lub zadzwoń: <a href={PHONE_HREF}>{PHONE}</a>
                </span>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section id="start" className={s.hero} data-section="start">
            <div className={s.grid}>
                <div className={s.copy}>
                    <span className={s.location}>
                        <Icon name="pin" size={15} stroke={2} className={onlyDesktop} />
                        Siemianice · pod Wrocławiem
                    </span>
                    <h1 className={s.h1}>Natura i zabawa. Zarezerwuj swój dzień w lesie.</h1>
                    <p className={s.lead}>
                        <R v={LEAD} />
                    </p>
                    <BookingSearch />
                </div>

                <div className={s.visual}>
                    <div className={s.photo}>
                        {/* The LCP element at every width. object-fit: cover in a box taller than 4:3,
                            so on desktop it is drawn wider than the box (841px tall -> 1122px wide). */}
                        <img
                            {...responsive(
                                'bush-section-4',
                                '(max-width: 640px) 100vw, (max-width: 890px) 827px, (max-width: 1159px) calc(100vw - 64px), 1122px'
                            )}
                            alt="Drewniana wiata i siedziska z palet wokół miejsca na ognisko na leśnej polanie"
                            loading="eager"
                            fetchpriority="high"
                        />
                    </div>
                    <span className={s.badge}>
                        <Icon name="shieldCheck" size={16} stroke={2} />
                        <R v={{ d: 'Teren ogrodzony i oświetlony', m: 'Teren ogrodzony' }} />
                    </span>
                    <div className={cx(s.nextDate, onlyDesktop)}>
                        <span className={s.nextIcon}>
                            <Icon name="calendar" size={22} />
                        </span>
                        <span className={s.nextText}>
                            <span>Najbliższy wolny termin</span>
                            <span>[DATA] · Spot w lesie</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
