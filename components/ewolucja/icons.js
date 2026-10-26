// Line icons used by the V1 design (24×24 viewBox, stroked).
import { ACCENT } from './content';

function Icon({ size = 18, stroke = 'currentColor', strokeWidth = 2, className, children }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            {children}
        </svg>
    );
}

export const PhoneIcon = (props) => (
    <Icon {...props}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </Icon>
);

export const MenuIcon = (props) => (
    <Icon size={22} {...props}>
        <path d="M4 6h16M4 12h16M4 18h16" />
    </Icon>
);

export const CloseIcon = (props) => (
    <Icon size={22} {...props}>
        <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
);

export const FlagIcon = (props) => (
    <Icon stroke="#002902" strokeWidth={2.2} {...props}>
        <path d="M5 21V3" />
        <path d="M5 4h12l-2.5 4L17 12H5" />
    </Icon>
);

export const CheckIcon = (props) => (
    <Icon stroke={ACCENT} strokeWidth={2.4} {...props}>
        <path d="M20 6 9 17l-5-5" />
    </Icon>
);

export const PinIcon = (props) => (
    <Icon {...props}>
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </Icon>
);

export const ClockIcon = (props) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
    </Icon>
);

export const ECO_ICONS = {
    sun: (
        <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </>
    ),
    recycle: (
        <>
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
            <path d="M3 21v-5h5" />
        </>
    ),
    tire: (
        <>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" />
        </>
    ),
    tree: (
        <>
            <path d="M12 3 5 14h14z" />
            <path d="M12 14v7" />
        </>
    ),
};

export const EcoIcon = ({ name, className }) => (
    <Icon stroke={ACCENT} className={className}>
        {ECO_ICONS[name]}
    </Icon>
);
