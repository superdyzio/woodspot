// Line icons used across the V4 homepage (24×24 grid, stroke = currentColor unless given).

const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', 'aria-hidden': true };

export const PhoneIcon = ({ size = 18, className }) => (
    <svg {...base} width={size} height={size} strokeWidth="2" strokeLinejoin="round" className={className}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

export const BurgerIcon = () => (
    <svg {...base} width="22" height="22" strokeWidth="2">
        <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
);

export const CloseIcon = () => (
    <svg {...base} width="22" height="22" strokeWidth="2">
        <path d="M6 6l12 12M18 6L6 18" />
    </svg>
);

export const PinIcon = ({ size = 18, strokeWidth = 2.2 }) => (
    <svg {...base} width={size} height={size} strokeWidth={strokeWidth} strokeLinejoin="round">
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
    </svg>
);

export const ArrowRightIcon = ({ className }) => (
    <svg {...base} width="18" height="18" strokeWidth="2.2" strokeLinejoin="round" className={className}>
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

export const ArrowLeftIcon = () => (
    <svg {...base} width="18" height="18" strokeWidth="2.2" strokeLinejoin="round">
        <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
);

export const PlusIcon = ({ color }) => (
    <svg {...base} width="18" height="18" stroke={color} strokeWidth="2.4">
        <path d="M12 5v14M5 12h14" />
    </svg>
);
