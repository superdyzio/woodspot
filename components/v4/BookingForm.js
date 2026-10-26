import { useState } from 'react';
import { BOOKING_OFFERS, PHONE, PHONE_HREF, PREVIEW_NOTICE } from './data';
import { V, cx } from './Variant';
import shared from './shared.module.css';
import styles from './BookingForm.module.css';

// "Sprawdź dostępność" bar. Nothing is sent: the button only shows a preview notice.
export default function BookingForm({ offer, onOfferChange }) {
    const [checked, setChecked] = useState(false);

    return (
        <form id="rezerwacja" className={styles.form} aria-label="Sprawdź dostępność" onSubmit={(e) => e.preventDefault()}>
            <div className={styles.heading}>
                <p className={styles.eyebrow}>ZAREZERWUJ STREFĘ</p>
                <p className={styles.title}>Wolne terminy od ręki</p>
            </div>
            <div className={cx(styles.field, styles.what)}>
                <label htmlFor="v4-co" className={styles.label}>CO?</label>
                <select id="v4-co" className={styles.control} value={offer} onChange={(e) => onOfferChange(e.target.value)}>
                    {BOOKING_OFFERS.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
            </div>
            <div className={cx(styles.field, styles.when)}>
                <label htmlFor="v4-kiedy" className={styles.label}>KIEDY?</label>
                <input id="v4-kiedy" type="date" className={cx(styles.control, styles.small)} />
            </div>
            <div className={cx(styles.field, styles.people)}>
                <label htmlFor="v4-ile" className={styles.label}>ILE OSÓB?</label>
                <input id="v4-ile" type="number" min="1" placeholder="np. 8" className={cx(styles.control, styles.small)} />
            </div>
            <div className={styles.submit}>
                <button type="button" className={styles.button} onClick={() => setChecked(true)}>Sprawdź dostępność</button>
            </div>
            {checked && <p className={shared.notice} role="status">{PREVIEW_NOTICE}</p>}
            <p className={styles.note}>
                <V v={{ d: 'Grupa, impreza albo cały teren? ', m: 'Grupa albo cały teren? ' }} />
                <a href="#wydarzenia">Zapytaj o wydarzenie</a>
                <span className={shared.dOnly}> · lub zadzwoń: <a href={PHONE_HREF}>{PHONE}</a></span>
            </p>
        </form>
    );
}
