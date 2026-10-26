import { createHash, createHmac, timingSafeEqual } from 'crypto';

// Server-only password check and session cookie for /hog. The cookie holds an HMAC
// keyed with HOG_PASSWORD, so it cannot be forged without the password and changing
// the password logs everyone out.
export const COOKIE = 'hog';

const MAX_AGE = 60 * 60 * 24 * 30;

const password = () => process.env.HOG_PASSWORD || '';

// Constant-time comparison; hashing first makes both buffers the same length.
const digest = (value) => createHash('sha256').update(value).digest();
const matches = (value, expected) => timingSafeEqual(digest(value), digest(expected));

const sessionToken = () => createHmac('sha256', password()).update('hog-session').digest('hex');

export const isPasswordCorrect = (candidate) =>
    password() !== '' && typeof candidate === 'string' && matches(candidate, password());

export const isSessionValid = (token) =>
    password() !== '' && typeof token === 'string' && matches(token, sessionToken());

export const sessionCookie = () => `${COOKIE}=${sessionToken()}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`;

export const clearedCookie = () => `${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`;
