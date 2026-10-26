// Responsive WebP versions of the page's photos and pictograms, served as
// public/img/<name>-<width>.webp (the originals in public/ stay untouched).
// Photos also record the original's aspect ratio (width / height).

const ICON = { widths: [128, 256] };

const IMAGES = {
    'about-section-1': { widths: [480, 800, 1200, 1600, 2000], ratio: 2000 / 1125 },
    'about-section-2': { widths: [480, 800, 1200, 1600, 2048], ratio: 2048 / 1536 },
    'bush-section-1': { widths: [480, 800, 1200, 1600, 2048], ratio: 2048 / 1536 },
    'bush-section-2': { widths: [480, 800, 1024], ratio: 1 },
    'bush-section-3': { widths: [480, 800, 1200, 1600, 2400], ratio: 4640 / 2610 },
    'bush-section-4': { widths: [480, 800, 1200, 1600, 2048], ratio: 2048 / 1536 },
    'contact-map': { widths: [600, 1000], ratio: 1 },
    'fishing-section': { widths: [480, 800, 1200, 1600, 2400], ratio: 4032 / 3024 },
    'main-section': { widths: [480, 800, 1200, 1368], ratio: 1368 / 647 },
    'paintball-section-1': { widths: [480, 800, 1200, 1600, 2400], ratio: 4032 / 2241 },
    'paintball-section-2': { widths: [480, 800, 1200, 1600, 2048], ratio: 2048 / 1536 },
    'paintball-section-3': { widths: [480, 800, 1200, 1600, 2048], ratio: 2048 / 1536 },
    'paintball-section-4': { widths: [480, 800, 1200, 1600, 2400], ratio: 6000 / 4000 },
    fireplace: ICON,
    fishing: ICON,
    football: ICON,
    paintball: ICON,
    tent: ICON,
};

const url = (name, width) => `/img/${name}-${width}.webp`;

// <img> props for `name`: every width as a srcset candidate, with `sizes` giving
// the width the image renders at per breakpoint. Images are lazy by default; only
// the LCP image (the hero) passes `priority`.
export function responsive(name, sizes, { priority = false } = {}) {
    const { widths } = IMAGES[name];
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

// A photo covering a full-width box `height` px tall (object-fit: cover): it renders
// height × ratio px wide until the viewport is wider than that, then 100vw.
export function cover(name, height, options) {
    const width = Math.round(height * IMAGES[name].ratio);
    return responsive(name, `(max-width: ${width}px) ${width}px, 100vw`, options);
}
