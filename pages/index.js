import Head from 'next/head';
import { Plus_Jakarta_Sans } from 'next/font/google';
import TopBar from '../components/v5/TopBar';
import Header from '../components/v5/Header';
import Hero from '../components/v5/Hero';
import Highlights from '../components/v5/Highlights';
import Offers from '../components/v5/Offers';
import Availability from '../components/v5/Availability';
import HowItWorks from '../components/v5/HowItWorks';
import Events from '../components/v5/Events';
import About from '../components/v5/About';
import Reviews from '../components/v5/Reviews';
import Faq from '../components/v5/Faq';
import Contact from '../components/v5/Contact';
import CtaBand from '../components/v5/CtaBand';
import Footer from '../components/v5/Footer';
import MobileBar from '../components/v5/MobileBar';

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-jakarta',
});

const TITLE = 'Woodspot bush&fun – natura i zabawa pod Wrocławiem';

export default function Home() {
    return (
        <div className={`${jakarta.variable} page`}>
            <Head>
                <title>{TITLE}</title>
                <meta
                    name="description"
                    content="Spoty w lesie, wiaty z ogniskiem, paintball, łowiska no-kill i pole namiotowe z prądem – niemal 10 hektarów ogrodzonego terenu w Siemianicach pod Wrocławiem."
                />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <TopBar />
            <Header />
            <main>
                <Hero />
                <Highlights />
                <Offers />
                <Availability />
                <HowItWorks />
                <Events />
                <About />
                <Reviews />
                <Faq />
                <Contact />
                <CtaBand />
            </main>
            <Footer />
            {/* Sticky to the viewport bottom, so it has to be the wrapper's last child. */}
            <MobileBar />

            <style jsx>{`
                .page {
                    background: #FFFFFF;
                    color: #0F1A10;
                    font-family: var(--font-jakarta), 'Segoe UI', system-ui, sans-serif;
                    -webkit-font-smoothing: antialiased;
                }
            `}</style>
            <style jsx global>{`
                html,
                body {
                    margin: 0;
                    padding: 0;
                    background: #002902;
                }

                *,
                *::before,
                *::after {
                    box-sizing: border-box;
                }

                a {
                    color: #002902;
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
