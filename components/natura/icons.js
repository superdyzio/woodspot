// Line icons from the design (24×24 viewBox, stroked with currentColor unless overridden).
function Svg({ size = 24, strokeWidth = 1.8, children, ...rest }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
            {...rest}
        >
            {children}
        </svg>
    );
}

export const PhoneIcon = (props) => (
    <Svg {...props}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </Svg>
);

export const MenuIcon = (props) => (
    <Svg {...props}>
        <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
);

export const CloseIcon = (props) => (
    <Svg {...props}>
        <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
);

export const ArrowIcon = (props) => (
    <Svg size={18} {...props}>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
    </Svg>
);

export const ChevronIcon = (props) => (
    <Svg size={20} {...props}>
        <path d="M6 9l6 6 6-6" />
    </Svg>
);

export const PinIcon = (props) => (
    <Svg size={18} {...props}>
        <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
    </Svg>
);

export const FacebookIcon = (props) => (
    <Svg size={20} strokeWidth={1.7} {...props}>
        <path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v4H8v7h4v-7h3l.5-4H12V8a1 1 0 0 1 1-1h2z" />
    </Svg>
);

export const InstagramIcon = (props) => (
    <Svg size={20} strokeWidth={1.7} {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" />
    </Svg>
);

export const TentIcon = (props) => (
    <Svg size={40} strokeWidth={1.4} {...props}>
        <path d="M3 20L12 4l9 16H3z" />
        <path d="M12 20l-3.5-6h7L12 20z" />
    </Svg>
);

export const ImageIcon = (props) => (
    <Svg size={40} strokeWidth={1.4} {...props}>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="M21 16l-5-5-8 8" />
    </Svg>
);

export const SOCIAL_ICONS = { facebook: FacebookIcon, instagram: InstagramIcon, pin: (p) => <PinIcon size={20} strokeWidth={1.7} {...p} /> };
