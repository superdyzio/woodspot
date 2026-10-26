import Head from 'next/head';
import { useState } from 'react';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import page from '../components/adrenalina/Page.module.css';
import Header from '../components/adrenalina/Header';
import Hero from '../components/adrenalina/Hero';
import QuickBooking from '../components/adrenalina/QuickBooking';
import Stripe from '../components/adrenalina/Stripe';
import Paintball from '../components/adrenalina/Paintball';
import Packages from '../components/adrenalina/Packages';
import Events from '../components/adrenalina/Events';
import Inquiry from '../components/adrenalina/Inquiry';
import Grounds from '../components/adrenalina/Grounds';
import Eco from '../components/adrenalina/Eco';
import Booking from '../components/adrenalina/Booking';
import Contact from '../components/adrenalina/Contact';
import Footer from '../components/adrenalina/Footer';
import StickyBar from '../components/adrenalina/StickyBar';
import useMediaQuery from '../components/adrenalina/useMediaQuery';
import {
  BOOKING_OFFERS,
  PEOPLE_MAX,
  PEOPLE_MIN,
  QUICK_OPTIONS,
  STRIPE_DESKTOP,
  STRIPE_MOBILE,
} from '../components/adrenalina/data';

const barlow = Barlow({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  // Glyphs missing from Barlow (e.g. "→") fall back to the design's stack, not a metric-adjusted Arial.
  adjustFontFallback: false,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-condensed',
  adjustFontFallback: false,
});

// Same breakpoint as the CSS modules' mobile layout.
const MOBILE_QUERY = '(max-width: 767px)';

export default function Home() {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const [menuOpen, setMenuOpen] = useState(false);

  // Booking picker state, ported from the design's logic class (offer, people, pkg).
  const [offer, setOffer] = useState(BOOKING_OFFERS[0].id);
  const [people, setPeople] = useState(8);
  // Until the visitor picks a package, the design preselects 02 on desktop and 01 on mobile.
  const [pickedPackage, setPickedPackage] = useState(null);
  const selectedPackage = pickedPackage ?? (isMobile ? 0 : 1);

  const [quick, setQuick] = useState({ what: QUICK_OPTIONS[0], date: '', people: '' });
  // Which preview-only actions were triggered (they show an inline notice, nothing is sent).
  const [notices, setNotices] = useState({ quick: false, inquiry: false, booking: false });
  const showNotice = (key) => setNotices((current) => ({ ...current, [key]: true }));

  const selectedOffer = BOOKING_OFFERS.find((o) => o.id === offer) ?? BOOKING_OFFERS[0];
  const summary = `${selectedOffer.name} · ${people} os. · od [CENA]`;

  const quickBookingProps = {
    values: quick,
    onChange: (field, value) => setQuick((current) => ({ ...current, [field]: value })),
    onCheck: () => showNotice('quick'),
    checked: notices.quick,
  };

  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable} ${page.root}`}>
      <Head>
        <title>Woodspot bush&amp;fun – paintball i teren na wyłączność pod Wrocławiem</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <main>
        <Hero quickBooking={<QuickBooking variant="bar" {...quickBookingProps} />} />
        <QuickBooking variant="section" {...quickBookingProps} />
        <Stripe items={STRIPE_DESKTOP} variant="desktop" section="start-2" />
        <Stripe items={STRIPE_MOBILE} variant="mobile" section="start-3" />
        <Paintball />
        <Packages selected={selectedPackage} onSelect={setPickedPackage} />
        <Events />
        <Inquiry isMobile={isMobile} onSend={() => showNotice('inquiry')} sent={notices.inquiry} />
        <Grounds />
        <Eco />
        <Booking
          offer={offer}
          people={people}
          summary={summary}
          onOffer={setOffer}
          onLess={() => setPeople((n) => Math.max(PEOPLE_MIN, n - 1))}
          onMore={() => setPeople((n) => Math.min(PEOPLE_MAX, n + 1))}
          onCheck={() => showNotice('booking')}
          checked={notices.booking}
        />
        <Contact />
      </main>
      <Footer />
      <StickyBar />

      <style jsx global>{`
        html {
          scroll-padding-top: 80px;
        }
        body {
          margin: 0;
          background: #07140a;
        }
        * {
          box-sizing: border-box;
        }
        a {
          color: #f2c230;
        }
        a:where(:hover) {
          color: #ffe27a;
        }
        input,
        select,
        textarea,
        button {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}
