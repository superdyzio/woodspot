import { useEffect, useState } from 'react';
import { EMAIL, PHONE, SOCIALS } from './content';
import { ImageIcon, SOCIAL_ICONS, TentIcon } from './icons';

// Width below which the mobile design applies (keep in sync with the CSS media queries).
export const MOBILE_QUERY = '(max-width: 640px)';

export const isMobileViewport = () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches;

// Client-only flag for things CSS cannot switch (e.g. placeholder text). Starts as false so
// the server render and hydration always match, then follows the media query.
export function useIsMobile() {
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        const query = window.matchMedia(MOBILE_QUERY);
        const update = () => setMobile(query.matches);
        update();
        query.addEventListener('change', update);
        return () => query.removeEventListener('change', update);
    }, []);
    return mobile;
}

// Desktop and mobile wording of the same text; CSS shows the one for the current width.
export function Swap({ d, m }) {
    return (
        <>
            <span className="only-d">{d}</span>
            <span className="only-m">{m}</span>
        </>
    );
}

// Renders a content value that is either a plain string or a { d, m } pair.
export function Copy({ value }) {
    return typeof value === 'string' ? value : <Swap d={value.d} m={value.m} />;
}

// Shown instead of sending a form: this page is a preview and makes no network requests.
export function PreviewNotice() {
    return (
        <p className="notice" role="status">
            Dziękujemy! To podgląd nowej strony – rezerwacje wkrótce. Zadzwoń: <a href={PHONE.href}>{PHONE.label}</a> lub
            napisz: <a href={EMAIL.href}>{EMAIL.label}</a>
            <style jsx>{`
              .notice {
                flex: 1 0 100%;
                border-left: 2px solid #B8862B;
                padding: 4px 0 4px 14px;
                font-family: var(--sans);
                font-size: 15px;
                line-height: 1.55;
                color: #002902;
              }

              .notice a {
                font-weight: 700;
                white-space: nowrap;
              }
            `}</style>
        </p>
    );
}

// Dashed stand-in for a photo that does not exist yet. The parent sizes and clips it.
export function PhotoPlaceholder({ label, caption, icon }) {
    const Icon = icon === 'tent' ? TentIcon : ImageIcon;
    return (
        <div role="img" aria-label={label} className="placeholder">
            <Icon className="placeholder-icon" />
            <span>{caption}</span>
            <style jsx>{`
              .placeholder {
                width: 100%;
                height: 100%;
                background: #E4EBE2;
                border: 1.5px dashed #8FA08C;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 12px;
                color: #4A5A4C;
              }

              span {
                font-size: 15px;
                font-weight: 700;
                letter-spacing: 0.06em;
                text-align: center;
                padding: 0 24px;
              }

              @media (max-width: 640px) {
                .placeholder {
                  gap: 10px;
                }

                .placeholder :global(.placeholder-icon) {
                  width: 34px;
                  height: 34px;
                }

                span {
                  font-size: 14px;
                  letter-spacing: 0.05em;
                  padding: 0 36px;
                }
              }
            `}</style>
        </div>
    );
}

export function SocialLinks() {
    return (
        <div className="socials">
            {SOCIALS.map(({ href, label, icon }) => {
                const Icon = SOCIAL_ICONS[icon];
                return (
                    <a key={icon} href={href} target="_blank" rel="noopener" aria-label={label}>
                        <Icon />
                    </a>
                );
            })}
            <style jsx>{`
              .socials {
                display: flex;
                gap: 12px;
              }

              a {
                width: 48px;
                height: 48px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #B9C6B7;
                border-radius: 999px;
                color: #002902;
              }
            `}</style>
        </div>
    );
}
