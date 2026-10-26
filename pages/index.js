import Head from 'next/head';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import useZoneSelection from '../components/v4/useZoneSelection';
import Header from '../components/v4/Header';
import Hero from '../components/v4/Hero';
import Divider from '../components/v4/Divider';
import Zones from '../components/v4/Zones';
import Events from '../components/v4/Events';
import Eco from '../components/v4/Eco';
import Contact from '../components/v4/Contact';
import Footer from '../components/v4/Footer';
import MobileBar from '../components/v4/MobileBar';

const archivo = Archivo({ subsets: ['latin', 'latin-ext'], axes: ['wdth'], variable: '--font-archivo' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600'], variable: '--font-mono' });

export default function Home() {
    const selection = useZoneSelection();

    return (
        <div className={`${archivo.variable} ${plexMono.variable} page`}>
            <Head>
                <title>Woodspot bush&amp;fun – mapa terenu</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="description"
                    content="Natura i zabawa napełniają to miejsce pozytywną energią. Niemal 10 hektarów lasów, polan i stawów pod Wrocławiem – kliknij strefę na mapie i sprawdź wolny termin."
                />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Header />
            <Hero selection={selection} />
            <Divider />
            <Zones onShow={selection.select} onBook={selection.book} />
            <Events />
            <Eco />
            <Contact />
            <Footer />
            <MobileBar />

            <style jsx global>{`
                body {
                    margin: 0;
                    background: #001A01;
                    color: #0F1A10;
                    -webkit-font-smoothing: antialiased;
                }
                a {
                    color: #002902;
                }
                h1, h2, h3, h4, p, ul, ol, dl, dd, figure {
                    margin: 0;
                }
                ul, ol {
                    padding: 0;
                    list-style: none;
                }
                input, select, textarea, button {
                    font: inherit;
                }
                :focus-visible {
                    outline: 3px solid #E8742A;
                    outline-offset: 2px;
                }
                .page {
                    background: #001A01;
                    color: #0F1A10;
                    font-family: var(--font-archivo), Arial, Helvetica, sans-serif;
                }
            `}</style>
        </div>
    );
}
