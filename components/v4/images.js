// Responsive WebP copies of the photos and icons in public/, stored as public/img/<name>-<width>.webp.
// The originals in public/ stay untouched; content keeps referring to them by their original path.
const WIDTHS = {
    'about-section-2': [480, 800, 1200, 1600, 2048],
    'bush-section-1': [480, 800, 1200, 1600, 2048],
    'bush-section-2': [480, 800, 1024],
    'bush-section-3': [480, 800, 1200, 1600, 2400],
    'bush-section-4': [480, 800, 1200, 1600, 2048],
    'contact-map': [600, 1000],
    'fishing-section': [480, 800, 1200, 1600, 2400],
    'paintball-section-1': [480, 800, 1200, 1600, 2400],
    'paintball-section-2': [480, 800, 1200, 1600, 2048],
    'paintball-section-3': [480, 800, 1200, 1600, 2048],
    'paintball-section-4': [480, 800, 1200, 1600, 2400],
    fireplace: [128, 256],
    fishing: [128, 256],
    football: [128, 256],
    paintball: [128, 256],
    tent: [128, 256],
};

// Rendered width of each image slot, matching the layouts in the CSS modules. Mobile (≤ 640px) has a
// 16px gutter; on desktop the container gutter is clamp(16px, 3.4vw, 48px) (93.2vw of content) and
// each two-column row wraps to one column where its flex-basis sum no longer fits.
export const SIZES = {
    // Zone card beside the map (380px); once it wraps under the map it grows to its 460px max-width.
    card: '(max-width: 640px) calc(100vw - 32px), (max-width: 1038px) 460px, 380px',
    // Zone article photo: half of the row (560 + 520 + 56px gap), full width below a 1219px viewport.
    article: '(max-width: 640px) calc(100vw - 32px), (max-width: 1218px) 93.2vw, (max-width: 1440px) calc(46.6vw - 8px), 664px',
    // Paintball gallery (desktop only) inside a card padded by clamp(20px, 3vw, 40px): main photo and two thumbnails.
    galleryMain: '(max-width: 1304px) 87.2vw, (max-width: 1440px) calc(46.6vw - 48px), 624px',
    galleryThumb: '(max-width: 1304px) calc(43.6vw - 8px), (max-width: 1440px) calc(23.3vw - 32px), 304px',
    // Paintball photo on mobile (full bleed inside a 16px padded block).
    mobileMedia: 'calc(100vw - 32px)',
    // Ecology photo: half of the row (520 + 520 + 64px gap), full width below a 1185px viewport.
    eco: '(max-width: 640px) calc(100vw - 32px), (max-width: 1184px) 93.2vw, (max-width: 1440px) calc(46.6vw - 32px), 640px',
    // Contact map: a 460px column on desktop, full width on mobile.
    contactMap: '(max-width: 640px) calc(100vw - 32px), 460px',
    eventIcon: '60px',
};

// Returns `{ srcSet, src }` for an original public path such as '/fishing-section.jpg'.
export function webp(path) {
    const name = path.replace(/^\//, '').replace(/\.(jpe?g|png)$/i, '');
    const widths = WIDTHS[name];
    if (!widths) return { src: path };
    const file = (width) => `/img/${name}-${width}.webp`;
    return {
        srcSet: widths.map((width) => `${file(width)} ${width}w`).join(', '),
        src: file(widths[Math.min(1, widths.length - 1)]),
    };
}

// Props for a non-LCP responsive image. The key order is the order React sets the attributes in:
// `loading` and `srcset`/`sizes` go before `src`, so a changed `src` never starts a stale or eager fetch.
export function lazyImage(path, sizes) {
    const { srcSet, src } = webp(path);
    return srcSet
        ? { loading: 'lazy', decoding: 'async', srcSet, sizes, src }
        : { loading: 'lazy', decoding: 'async', src };
}
