// Responsive WebP versions of the photos, stored as /public/img/<name>-<width>.webp.
export const PHOTO_WIDTHS = {
    'about-section-1': [480, 800, 1200, 1600, 2000],
    'about-section-2': [480, 800, 1200, 1600, 2048],
    'bush-section-1': [480, 800, 1200, 1600, 2048],
    'bush-section-2': [480, 800, 1024],
    'bush-section-3': [480, 800, 1200, 1600, 2400],
    'bush-section-4': [480, 800, 1200, 1600, 2048],
    'contact-map': [600, 1000],
    'fishing-section': [480, 800, 1200, 1600, 2400],
    'main-section': [480, 800, 1200, 1368],
    'paintball-section-3': [480, 800, 1200, 1600, 2048],
};

const url = (name, width) => `/img/${name}-${width}.webp`;

// srcSet and src (a mid-size fallback) for <img>; the caller adds `sizes` for its own layout.
export function photo(name) {
    const widths = PHOTO_WIDTHS[name];
    // srcSet before src, and callers put loading/sizes before the spread: React sets attributes in prop
    // order, and an image created on the client should not start fetching src before it knows the rest.
    return {
        srcSet: widths.map((w) => `${url(name, w)} ${w}w`).join(', '),
        src: url(name, widths.find((w) => w >= 800) || widths[widths.length - 1]),
    };
}
