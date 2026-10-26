import Head from 'next/head';
import About from '../components/natura/About';
import Contact from '../components/natura/Contact';
import Eco from '../components/natura/Eco';
import Events from '../components/natura/Events';
import Families from '../components/natura/Families';
import Fishing from '../components/natura/Fishing';
import Footer from '../components/natura/Footer';
import GlobalStyles from '../components/natura/GlobalStyles';
import Header from '../components/natura/Header';
import Hero from '../components/natura/Hero';
import Offers from '../components/natura/Offers';
import StickyBar from '../components/natura/StickyBar';
import { fraunces, manrope } from '../components/natura/fonts';

// Homepage, V2 "Natura": light editorial layout, one responsive page for desktop and mobile.
export default function Home() {
    return (
        <div className={`natura ${fraunces.variable} ${manrope.variable}`}>
            <Head>
                <title>Woodspot</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="description"
                    content="Niemal 10 hektarów lasów, polan i stawów wędkarskich – ogrodzonych, oświetlonych i zasilanych wyłącznie odnawialnymi źródłami energii. Siemianice, gm. Oborniki Śląskie, pod Wrocławiem."
                />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <GlobalStyles />

            <Header />
            <Hero />
            <About />
            <Offers />
            <Events />
            <Families />
            <Fishing />
            <Eco />
            <Contact />
            <Footer />
            <StickyBar />
        </div>
    );
}
