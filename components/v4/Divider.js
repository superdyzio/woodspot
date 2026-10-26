import styles from './Divider.module.css';

// Diagonal transition from the dark hero to the light zone guide.
export default function Divider() {
    return (
        <div className={styles.divider} aria-hidden="true" data-section="mapa-2">
            <div className={styles.slope} />
        </div>
    );
}
