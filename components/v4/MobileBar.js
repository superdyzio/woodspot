import { PHONE_HREF } from './data';
import { PhoneIcon } from './icons';
import styles from './MobileBar.module.css';

// Mobile only: call / book bar pinned to the bottom of the screen.
export default function MobileBar() {
    return (
        <div className={styles.bar} data-section="float-1">
            <a href={PHONE_HREF} className={styles.call}>
                <PhoneIcon />
                Zadzwoń
            </a>
            <a href="#rezerwacja" className={styles.book}>Zarezerwuj</a>
        </div>
    );
}
