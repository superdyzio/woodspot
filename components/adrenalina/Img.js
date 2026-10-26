// Responsive WebP renditions of the photos and icons in public/, stored as public/img/<name>-<width>.webp.
const IMAGES = {
  'paintball-section-4': { aspect: 6000 / 4000, widths: [480, 800, 1200, 1600, 2400] },
  'paintball-section-2': { aspect: 2048 / 1536, widths: [480, 800, 1200, 1600, 2048] },
  'paintball-section-3': { aspect: 2048 / 1536, widths: [480, 800, 1200, 1600, 2048] },
  'bush-section-1': { aspect: 2048 / 1536, widths: [480, 800, 1200, 1600, 2048] },
  'bush-section-2': { aspect: 1, widths: [480, 800, 1024] },
  'bush-section-3': { aspect: 4640 / 2610, widths: [480, 800, 1200, 1600, 2400] },
  'bush-section-4': { aspect: 2048 / 1536, widths: [480, 800, 1200, 1600, 2048] },
  'fishing-section': { aspect: 4032 / 3024, widths: [480, 800, 1200, 1600, 2400] },
  'about-section-2': { aspect: 2048 / 1536, widths: [480, 800, 1200, 1600, 2048] },
  'contact-map': { aspect: 1, widths: [600, 1000] },
  fishing: { aspect: 1, widths: [128, 256] },
  football: { aspect: 1, widths: [128, 256] },
  fireplace: { aspect: 1, widths: [128, 256] },
  tent: { aspect: 1, widths: [128, 256] },
};

export function imageAspect(name) {
  return IMAGES[name].aspect;
}

// <img> with a WebP srcset. `sizes` should give the width the picture is drawn at, which for
// object-fit: cover can exceed the box width. Lazy by default; `priority` is for the page's one
// LCP image (fetchpriority is lowercase because React 18.2 drops the camelCase prop).
export default function Img({ name, sizes, priority = false, alt = '', ...rest }) {
  const { widths } = IMAGES[name];
  const fallback = widths.find((w) => w >= 800) ?? widths[widths.length - 1];
  const loading = priority ? { loading: 'eager', fetchpriority: 'high' } : { loading: 'lazy', decoding: 'async' };
  return (
    <img
      {...loading}
      sizes={sizes}
      srcSet={widths.map((w) => `/img/${name}-${w}.webp ${w}w`).join(', ')}
      src={`/img/${name}-${fallback}.webp`}
      alt={alt}
      {...rest}
    />
  );
}
