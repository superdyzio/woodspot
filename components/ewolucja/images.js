// Responsive WebP versions of the page's photos and pictograms, served as
// public/img/<name>-<width>.webp (the originals in public/ stay untouched).

const ICON = [128, 256];

const WIDTHS = {
    'about-section-1': [480, 800, 1200, 1600, 2000],
    'about-section-2': [480, 800, 1200, 1600, 2048],
    'bush-section-1': [480, 800, 1200, 1600, 2048],
    'bush-section-2': [480, 800, 1024],
    'bush-section-3': [480, 800, 1200, 1600, 2400],
    'bush-section-4': [480, 800, 1200, 1600, 2048],
    'contact-map': [600, 1000],
    'fishing-section': [480, 800, 1200, 1600, 2400],
    'header-background': [1280, 2559],
    'main-section': [480, 800, 1200, 1368],
    'paintball-section-1': [480, 800, 1200, 1600, 2400],
    'paintball-section-2': [480, 800, 1200, 1600, 2048],
    'paintball-section-3': [480, 800, 1200, 1600, 2048],
    'paintball-section-4': [480, 800, 1200, 1600, 2400],
    fireplace: ICON,
    fishing: ICON,
    football: ICON,
    paintball: ICON,
    tent: ICON,
};

const url = (name, width) => `/img/${name}-${width}.webp`;

// <img> props for `name`: every width as a srcset candidate, with `sizes`
// giving the width the image renders at per breakpoint. Images are lazy by
// default; only the LCP image (the hero) passes `priority`.
export function responsive(name, sizes, { priority = false } = {}) {
    const widths = WIDTHS[name];
    const fallback = widths.filter((width) => width <= 1200).pop() ?? widths[0];
    const props = {
        src: url(name, fallback),
        srcSet: widths.map((width) => `${url(name, width)} ${width}w`).join(', '),
        sizes,
    };
    // React 18.2 does not know `fetchPriority`; the lowercase attribute is passed through as is.
    return priority
        ? { ...props, loading: 'eager', fetchpriority: 'high' }
        : { ...props, loading: 'lazy', decoding: 'async' };
}

// Attributes for the remaining (non-WebP) images.
export const LAZY = { loading: 'lazy', decoding: 'async' };

// Faint texture behind the header and the events section. Both share these
// props so a page downloads it once; the events copy is hidden on phones and,
// being lazy, is not fetched there.
export const HEADER_BG = responsive('header-background', '100vw');
