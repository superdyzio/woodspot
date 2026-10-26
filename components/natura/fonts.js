import localFont from 'next/font/local';

// Variable fonts: Fraunces needs the optical-size axis so large headings get the
// high-contrast display cut, and the variable weight axis for 340/360/380.
//
// Self-hosted and trimmed for mobile LCP (152 KB instead of the 313 KB next/font/google preloaded).
// The files are Google's own latin / latin-ext woff2 files for these fonts (same version, axes and
// unicode-ranges as next/font/google served), subset with fontTools (`--layout-features=* --glyph-names`)
// to printable ASCII, NBSP, ĄąĆćĘęŁłŃńÓóŚśŹźŻż and ©·×–—…‘’“”„‚«»•°€′″, each file keeping only the
// characters inside its own unicode-range. Anything else (e.g. ≈) falls through to the metric-matched
// fallback face, exactly as before. Outlines, advances, kerning and axes are untouched, and the page
// renders pixel-identical to the next/font/google version.
//  - The latin / latin-ext split is kept on purpose: the browser shapes each file separately, so
//    kerning next to a Polish letter stays as before (one merged file rewrapped a line).
//  - Glyph names are kept on purpose: without them macOS renders the glyphs with subpixel differences.
// Re-run the subset if the copy needs characters outside this set.
//
// next/font requires literal options, hence the repeated unicode-range strings.
const frauncesLatin = localFont({
    src: [
        { path: './font-files/fraunces-normal-latin.woff2', weight: '100 900', style: 'normal' },
        { path: './font-files/fraunces-italic-latin.woff2', weight: '100 900', style: 'italic' },
    ],
    declarations: [
        {
            prop: 'unicode-range',
            value: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
        },
    ],
    variable: '--font-fraunces-latin',
    display: 'swap',
    adjustFontFallback: false,
});

const frauncesLatinExt = localFont({
    src: [
        { path: './font-files/fraunces-normal-latin-ext.woff2', weight: '100 900', style: 'normal' },
        { path: './font-files/fraunces-italic-latin-ext.woff2', weight: '100 900', style: 'italic' },
    ],
    declarations: [
        {
            prop: 'unicode-range',
            value: 'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF',
        },
    ],
    variable: '--font-fraunces-latin-ext',
    display: 'swap',
    adjustFontFallback: false,
});

const manropeLatin = localFont({
    src: './font-files/manrope-normal-latin.woff2',
    weight: '200 800',
    style: 'normal',
    declarations: [
        {
            prop: 'unicode-range',
            value: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
        },
    ],
    variable: '--font-manrope-latin',
    display: 'swap',
    adjustFontFallback: false,
});

const manropeLatinExt = localFont({
    src: './font-files/manrope-normal-latin-ext.woff2',
    weight: '200 800',
    style: 'normal',
    declarations: [
        {
            prop: 'unicode-range',
            value: 'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C4, U+2113, U+2C60-2C7F, U+A720-A7FF',
        },
    ],
    variable: '--font-manrope-latin-ext',
    display: 'swap',
    adjustFontFallback: false,
});

// Class names that define the --font-* variables; GlobalStyles builds the font stacks from them.
export const fraunces = { variable: `${frauncesLatin.variable} ${frauncesLatinExt.variable}` };
export const manrope = { variable: `${manropeLatin.variable} ${manropeLatinExt.variable}` };
