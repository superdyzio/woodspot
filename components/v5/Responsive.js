import ui from './ui.module.css';

export const onlyDesktop = ui.onlyDesktop;
export const onlyMobile = ui.onlyMobile;

// Renders copy that differs between the desktop and mobile designs.
// `v` is either plain content or { d: desktopContent, m: mobileContent }.
export function R({ v }) {
    const isPair = v !== null && typeof v === 'object' && 'd' in v && 'm' in v;
    if (!isPair) return v;
    return (
        <>
            <span className={ui.onlyDesktop}>{v.d}</span>
            <span className={ui.onlyMobile}>{v.m}</span>
        </>
    );
}

export function cx(...names) {
    return names.filter(Boolean).join(' ');
}
