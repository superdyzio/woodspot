// Responsive WebP copies of the photos and icons in /public, served as /img/<name>-<width>.webp.
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
    paintball: [128, 256],
    'paintball-section-1': [480, 800, 1200, 1600, 2400],
    'paintball-section-2': [480, 800, 1200, 1600, 2048],
    'paintball-section-3': [480, 800, 1200, 1600, 2048],
    tent: [128, 256],
};

// `sizes` must be the width the image is actually drawn at. For `object-fit: cover`
// that can exceed the box width when the box is relatively taller than the photo.
// sizes and srcSet come before src so the browser never starts on the fallback.
export function responsive(name, sizes) {
    const widths = WIDTHS[name];
    return {
        sizes,
        srcSet: widths.map((w) => `/img/${name}-${w}.webp ${w}w`).join(', '),
        src: `/img/${name}-${widths[Math.min(1, widths.length - 1)]}.webp`,
    };
}
