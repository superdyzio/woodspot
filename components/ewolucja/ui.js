// Small shared building blocks of the V1 page.
import s from './Ewolucja.module.css';
import { EMAIL, PHONE } from './content';

export const cx = (...names) => names.filter(Boolean).join(' ');

// Renders a plain value, or a dm(desktop, mobile) pair as two spans of which
// CSS shows exactly one per breakpoint (no JS, so SSR and hydration match).
export function Txt({ value }) {
    if (value && value.responsive) {
        return (
            <>
                <span className={s.dOnly}>{value.d}</span>
                <span className={s.mOnly}>{value.m}</span>
            </>
        );
    }
    return value;
}

export const Eyebrow = ({ children, className }) => <p className={cx(s.eyebrow, className)}>{children}</p>;

export function Chips({ items, soft = false, className }) {
    return (
        <ul className={cx(s.chips, className)}>
            {items.map((item) => (
                <li key={item} className={soft ? s.chipSoft : s.chip}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

// Accent-coloured figures with a short caption.
export function Stats({ items, variant = 'row', className }) {
    return (
        <div className={cx(variant === 'grid' ? s.statsGrid : s.statsRow, className)}>
            {items.map((item) => (
                <div key={item.value} className={s.stat}>
                    <span className={s.statValue}>{item.value}</span>
                    <span className={s.statLabel}>
                        <Txt value={item.label} />
                    </span>
                </div>
            ))}
        </div>
    );
}

// Shown instead of sending anything: the forms are a preview only.
export const PreviewNotice = () => (
    <p className={s.notice} role="status">
        Dziękujemy! To podgląd nowej strony – rezerwacje wkrótce. Zadzwoń: <a href={PHONE.href}>{PHONE.label}</a> lub
        napisz: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </p>
);
