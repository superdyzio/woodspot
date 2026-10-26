import Head from 'next/head';
import { Fira_Sans } from 'next/font/google';
import { useState } from 'react';
import s from '../components/ewolucja/Ewolucja.module.css';
import Header from '../components/ewolucja/Header';
import Hero from '../components/ewolucja/Hero';
import { BookingBar, QuickBar } from '../components/ewolucja/Booking';
import Offers from '../components/ewolucja/Offers';
import { About, Eco } from '../components/ewolucja/About';
import BushFun from '../components/ewolucja/BushFun';
import Paintball from '../components/ewolucja/Paintball';
import Fishing from '../components/ewolucja/Fishing';
import Events from '../components/ewolucja/Events';
import { ClosingCta, Contact } from '../components/ewolucja/Contact';
import Footer from '../components/ewolucja/Footer';
import { cx } from '../components/ewolucja/ui';

// The design's stack starts with Trebuchet MS; Fira Sans is the fallback for
// systems without it, exposed as --font-fira (see Ewolucja.module.css).
const fira = Fira_Sans({
    weight: ['400', '700'],
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-fira',
    adjustFontFallback: false,
    preload: false,
});

export default function Home() {
    // Booking option selected in the "Co?" field, shared with the offer tiles.
    const [offer, setOffer] = useState('spot');

    return (
        <div className={cx(s.root, fira.variable)}>
            <Head>
                <title>Woodspot Bush &amp; Fun – natura i zabawa pod Wrocławiem</title>
                <meta
                    name="description"
                    content="Niemal 10 hektarów lasów, polan i stawów w Siemianicach pod Wrocławiem: Spoty i wiaty, pole namiotowe, paintball, łowiska no-kill i imprezy na wyłączność."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Header />
            <main>
                <Hero />
                <BookingBar offer={offer} onOfferChange={setOffer} />
                <QuickBar />
                <Offers offer={offer} onOfferChange={setOffer} />
                <About />
                <BushFun />
                <Paintball />
                <Fishing />
                <Events />
                <Eco />
                <Contact />
                <ClosingCta />
            </main>
            <Footer />
            <div aria-hidden="true" className={s.quickBarSpacer} />

            <style jsx global>{`
                html,
                body {
                    margin: 0;
                    padding: 0;
                    background: #001a02;
                }
                * {
                    box-sizing: border-box;
                }
                a {
                    color: #ffffff;
                }
                h1,
                h2,
                h3,
                h4,
                p,
                ul {
                    margin: 0;
                }
                ul {
                    padding: 0;
                    list-style: none;
                }
                p {
                    text-wrap: pretty;
                }
                select,
                input,
                textarea,
                button {
                    font-family: inherit;
                }
            `}</style>
        </div>
    );
}
