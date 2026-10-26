import { useState } from 'react';
import Icon from './Icon';
import { R, cx, onlyDesktop, onlyMobile } from './Responsive';
import { DAYS, DAY_NAMES, DAY_STATUS, DEFAULT_DAY, LEGEND, SLOT_LABELS, SLOT_TIMES } from './data';
import ui from './ui.module.css';
import s from './Availability.module.css';

function Legend({ className }) {
    return (
        <ul className={cx(s.legend, className)}>
            {LEGEND.map((status) => (
                <li key={status}>
                    <span className={cx(s.legendDot, s[status])} />
                    {DAY_STATUS[status]}
                </li>
            ))}
        </ul>
    );
}

// Availability preview with sample data: picking a day shows its time slots.
export default function Availability() {
    const [day, setDay] = useState(DEFAULT_DAY);
    const selected = DAYS[day];

    return (
        <section id="dostepnosc" className={s.section} data-section="dostepnosc">
            <div className={s.grid}>
                <div className={s.intro}>
                    <p className={ui.eyebrow}>Dostępność</p>
                    <h2 className={cx(ui.title, ui.balance)}>Wolne terminy widać od razu</h2>
                    <p className={s.lead}>
                        <R
                            v={{
                                d: 'Każdy Spot, wiata, pole paintballowe i stanowisko wędkarskie dostaje własny kalendarz. Wybierasz dzień i godzinę, a rezerwacja trafia prosto do grafiku obiektu – bez czekania na oddzwonienie.',
                                m: 'Każdy Spot, wiata, pole paintballowe i stanowisko ma własny kalendarz. Wybierasz dzień i godzinę – rezerwacja trafia prosto do grafiku.',
                            }}
                        />
                    </p>
                    <Legend className={onlyDesktop} />
                    <a href="#rezerwacja" className={cx(s.cta, onlyDesktop)}>
                        Sprawdź dostępność
                        <Icon name="arrowRight" size={18} stroke={2.2} />
                    </a>
                </div>

                <div className={s.card}>
                    <div className={s.cardTop}>
                        <span className={s.picker}>
                            <img src="/paintball.png" alt="" />
                            Paintball – duże pole
                            <Icon name="chevronDown" size={16} stroke={2} className={onlyDesktop} />
                        </span>
                        <span className={s.sample}>Podgląd · dane przykładowe</span>
                    </div>
                    <div className={cx(s.week, onlyDesktop)}>
                        <button type="button" aria-label="Poprzedni tydzień">
                            <Icon name="chevronLeft" size={18} stroke={2.2} />
                        </button>
                        <strong>[MIESIĄC] · tydzień 12–18</strong>
                        <button type="button" aria-label="Następny tydzień">
                            <Icon name="chevronRight" size={18} stroke={2.2} />
                        </button>
                    </div>
                    <div role="group" aria-label="Wybierz dzień" className={s.days}>
                        {DAYS.map(({ dow, num, status }, i) => (
                            <button
                                key={num}
                                type="button"
                                className={cx(s.day, s[status])}
                                aria-pressed={i === day}
                                aria-label={`${DAY_NAMES[dow]} ${num} – ${DAY_STATUS[status].toLowerCase()}`}
                                onClick={() => setDay(i)}
                            >
                                <span className={s.dow}>{dow}</span>
                                <span className={s.num}>{num}</span>
                                <span className={s.dot} />
                            </button>
                        ))}
                    </div>
                    <div className={s.dayHead}>
                        <strong>{`${DAY_NAMES[selected.dow]}, ${selected.num}`}</strong>
                        <span>{DAY_STATUS[selected.status]}</span>
                    </div>
                    <div className={s.slots}>
                        {SLOT_TIMES.map((time, j) => {
                            const free = selected.slots[j];
                            return (
                                <div key={time} className={cx(s.slot, free ? s.slotFree : s.slotTaken)}>
                                    <span className={s.time}>{time}</span>
                                    <span className={s.slotLabel}>
                                        <R v={free ? SLOT_LABELS.free : SLOT_LABELS.taken} />
                                    </span>
                                    {free && (
                                        <a href="#rezerwacja" className={s.pick}>
                                            Wybierz
                                        </a>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <Legend className={cx(s.legendInCard, onlyMobile)} />
                </div>
            </div>
        </section>
    );
}
