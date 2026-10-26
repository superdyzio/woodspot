import { useState } from 'react';
import s from './Ewolucja.module.css';
import { BOOKING_OPTIONS, PHONE } from './content';
import { PhoneIcon } from './icons';
import { PreviewNotice, cx } from './ui';

// "Co? Kiedy? Ile osób?" bar overlapping the hero. Nothing is sent: submitting
// shows the preview notice.
export function BookingBar({ offer, onOfferChange }) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div id="rezerwuj" data-section="rezerwuj" className={s.booking}>
            <form className={s.bookingCard} onSubmit={handleSubmit} noValidate>
                <div className={s.bookingHead}>
                    <h2 className={s.bookingTitle}>Zarezerwuj termin</h2>
                    <a href="#imprezy" className={cx(s.darkLink, s.dOnly)}>
                        Planujesz imprezę? Zapytaj o wydarzenie →
                    </a>
                </div>
                <div className={s.bookingGrid}>
                    <label className={cx(s.field, s.wide)}>
                        Co?
                        <select className={s.input} value={offer} onChange={(e) => onOfferChange(e.target.value)}>
                            {BOOKING_OPTIONS.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className={s.field}>
                        Kiedy?
                        <input type="date" name="date" className={s.input} />
                    </label>
                    <label className={s.field}>
                        Ile osób?
                        <input type="number" name="people" min="1" placeholder="np. 8" className={s.input} />
                    </label>
                    <button type="submit" className={cx(s.submit, s.wide)}>
                        Sprawdź dostępność
                    </button>
                </div>
                {submitted && <PreviewNotice />}
                <a href="#imprezy" className={cx(s.darkLink, s.mOnly)}>
                    Planujesz imprezę? Zapytaj o wydarzenie →
                </a>
            </form>
        </div>
    );
}

// Mobile-only bar pinned to the bottom of the screen.
export function QuickBar() {
    return (
        <div data-section="float-1" aria-label="Szybkie akcje" className={s.quickBar}>
            <a href={PHONE.href} className={s.quickCall}>
                <PhoneIcon />
                Zadzwoń
            </a>
            <a href="#rezerwuj" className={s.quickBook}>
                Zarezerwuj
            </a>
        </div>
    );
}
