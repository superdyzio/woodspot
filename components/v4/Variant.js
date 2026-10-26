import shared from './shared.module.css';

// A value that differs between the desktop and the mobile design is written as { d, m }.
export const isSplit = (value) =>
    value !== null && typeof value === 'object' && !Array.isArray(value) && 'd' in value && 'm' in value;

export const pick = (value, kind) => (isSplit(value) ? value[kind] : value);

// Renders `value` once, or, when it is split, once per layout with the matching visibility class.
export function byLayout(value, render) {
    if (!isSplit(value)) return render(value, '');
    return (
        <>
            {render(value.d, shared.dOnly)}
            {render(value.m, shared.mOnly)}
        </>
    );
}

// Inline text that may differ per layout.
export function V({ v }) {
    return byLayout(v, (text, className) => (className ? <span className={className}>{text}</span> : text));
}

export const cx = (...classes) => classes.filter(Boolean).join(' ');
