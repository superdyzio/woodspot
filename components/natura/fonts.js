import { Fraunces, Manrope } from 'next/font/google';

// Variable fonts: Fraunces needs the optical-size axis so large headings get the
// high-contrast display cut, and the variable weight axis for 340/360/380.
export const fraunces = Fraunces({
    subsets: ['latin', 'latin-ext'],
    style: ['normal', 'italic'],
    axes: ['opsz'],
    variable: '--font-fraunces',
    display: 'swap',
});

export const manrope = Manrope({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-manrope',
    display: 'swap',
});
