import ui from './ui.module.css';
import { PREVIEW_NOTICE } from './data';

// Renders copy that differs between the desktop and mobile designs.
// `text` is either a plain string or { d, m }; the variant is picked by CSS only.
export function Copy({ text }) {
  if (text == null || typeof text === 'string') return text ?? null;
  return (
    <>
      <span className={ui.copyDesktop}>{text.d}</span>
      <span className={ui.copyMobile}>{text.m}</span>
    </>
  );
}

// Inline confirmation for the preview: nothing is sent anywhere.
export function PreviewNotice({ show, onAccent = false, className = '' }) {
  if (!show) return null;
  return (
    <p role="status" className={`${ui.notice} ${onAccent ? ui.noticeOnAccent : ''} ${className}`}>
      {PREVIEW_NOTICE}
    </p>
  );
}

export function PhoneIcon({ size = 20, stroke = 'currentColor' }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke}
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function MenuIcon({ size = 24 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ size = 24 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function TreeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#002902" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l5 7h-3l4 6h-4l3 5H7l3-5H6l4-6H7z" />
      <path d="M12 20v2" />
    </svg>
  );
}

export function CompassIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#002902" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </svg>
  );
}
