import { ArrowLeftIcon, ArrowRightIcon } from './icons';
import { V, byLayout, cx, pick } from './Variant';
import { SIZES, lazyImage } from './images';
import shared from './shared.module.css';
import styles from './ZoneCard.module.css';

// Card next to (desktop) or under (mobile) the map, describing the selected zone.
export default function ZoneCard({ zone, index, total, onPrev, onNext, onCta }) {
    const href = zone.href || '#rezerwacja';
    const external = href.startsWith('http');

    return (
        <aside className={styles.card} aria-live="polite" aria-label="Wybrana strefa">
            <div className={styles.media}>
                {zone.photo ? (
                    <img
                        {...lazyImage(zone.photo, SIZES.card)}
                        alt={zone.photoAlt}
                        className={styles.photo}
                        style={{ '--pos-d': pick(zone.photoPos, 'd'), '--pos-m': pick(zone.photoPos, 'm') }}
                    />
                ) : (
                    <div className={styles.placeholder}>{zone.placeholder}</div>
                )}
                <span className={styles.badge}>
                    STREFA {zone.id}
                    <span className={shared.mOnly}> · {index + 1}/{total}</span>
                </span>
            </div>
            <div className={styles.body}>
                <p className={cx(styles.count, shared.dOnly)}>{index + 1} / {total} · PRZEWODNIK PO TERENIE</p>
                <h2 className={styles.title}>{zone.name}</h2>
                <p className={styles.desc}><V v={zone.desc} /></p>
                {byLayout(zone.facts, (facts, className) => (
                    <ul className={cx(styles.facts, className)}>
                        {facts.map((fact) => <li key={fact} className={styles.fact}>{fact}</li>)}
                    </ul>
                ))}
                <div className={styles.actions}>
                    <a
                        href={href}
                        target={external ? '_blank' : '_self'}
                        rel="noopener"
                        className={styles.cta}
                        onClick={onCta}
                    >
                        {zone.cta || 'Sprawdź dostępność'}
                        <ArrowRightIcon className={shared.dOnly} />
                    </a>
                    <button type="button" className={styles.step} aria-label="Poprzednia strefa" onClick={onPrev}>
                        <ArrowLeftIcon />
                    </button>
                    <button type="button" className={styles.step} aria-label="Następna strefa" onClick={onNext}>
                        <ArrowRightIcon />
                    </button>
                </div>
                <a href="#wydarzenia" className={cx(styles.eventLink, shared.dOnly)}>Planujesz wydarzenie? Zapytaj o cały teren</a>
            </div>
        </aside>
    );
}
