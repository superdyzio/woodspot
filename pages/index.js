import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Dropdown } from '@nextui-org/react';
import fireplace from '../public/fireplace.png';
import tent from '../public/tent.png';
import paintball from '../public/paintball.png';
import fishing from '../public/fishing.png';
import football from '../public/football.png';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Woodspot</title>
                <link rel="icon" href="/logo.svg"/>
            </Head>

            <main>
                <header className={styles.header}>
                    <img src={'/logo.svg'} alt={'woodspot logo'}/>
                    <nav>
                        <a href="#about1">O NAS</a>
                        <a href="#bush1">BUSH&FUN</a>
                        <a href="#paintball1">PAINTBALL</a>
                        <a href="#fishing">ŁOWISKA</a>
                        <a href="#contact">KONTAKT</a>
                    </nav>
                    <div className="hamburger">
                        <Dropdown placement="bottom-right">
                            <Dropdown.Button light iconRight={<span></span>}>
                                <div className="hamburger__icon">
                                    <svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2"
                                         viewBox="0 0 24 24" stroke="white">
                                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </div>
                            </Dropdown.Button>
                            <Dropdown.Menu aria-label="navigation actions">
                                <Dropdown.Item key="about">
                                    <a href="#about1">O NAS</a>
                                </Dropdown.Item>
                                <Dropdown.Item key="edit">
                                    <a href="#bush1">BUSH&FUN</a>
                                </Dropdown.Item>
                                <Dropdown.Item key="paintball">
                                    <a href="#paintball1">PAINTBALL</a>
                                </Dropdown.Item>
                                <Dropdown.Item key="copy">
                                    <a href="#fishing">ŁOWISKA</a>
                                </Dropdown.Item>
                                <Dropdown.Item key="contact">
                                    <a href="#contact">KONTAKT</a>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </header>

                <section id="main">
                    <h1>NATURA I ZABAWA</h1>
                    <h2>
                        <span></span>
                        NAPEŁNIA TO MIEJSCE
                        <span></span>
                    </h2>
                    <h1>POZYTYWNĄ ENERGIĄ</h1>
                </section>

                <section id="icons">
                    <Image src={fireplace} width={150} height={150} alt='fireplace icon'/>
                    <Image src={tent} width={150} height={150} alt='tent icon'/>
                    <Image src={paintball} width={150} height={150} alt='paintball icon'/>
                    <Image src={fishing} width={150} height={150} alt='fishing icon'/>
                    <Image src={football} width={150} height={150} alt='football icon'/>
                </section>

                <hr />

                <section id="about1" className="section-wrapper">
                    <h3>O NAS</h3>
                    <div className="section-container"></div>
                    <div className="rectangle"></div>
                    <div className="triangle"></div>
                    <div className="text">
                        Woodspot to ogrodzony i w znacznym stopniu oświetlony teren niemal 10 hektarów przestrzeni
                        plenerowej. Wypełniony lasami, polanami i stawami wędkarskimi stwarza pole do organizacji
                        wydarzeń, imprez okolicznościowych czy weekendowego wypoczynku ze znajomymi.
                    </div>
                </section>
                <section id="about2" className="section-wrapper smaller">
                    <div className="bar"></div>
                    <div className="section-container"></div>
                    <div className="rectangle inverse"></div>
                    <div className="triangle inverse"></div>
                    <div className="text inverse">
                        Staramy się żyć w zgodzie z otaczająca nas natura i dbać o nią. Z tego też powodu teren naszego
                        obiektu zasilany jest wyłącznie odnawialnymi źródłami energii. Segregujemy odpady, a te możliwe
                        do ponownego użycia, jak np. opony, zmieniamy w część Woodspota.<br/><br/>Czerpiemy z natury
                        energię stając się jej częścią. Korzystając z jej bogactwa dajemy życie kolejnym pokoleniom ryb
                        w naszych stawach i sadzimy młode drzewka, które zagęszczają szkółkę choinek.
                    </div>
                </section>

                <hr />

                <section id="bush1" className="section-wrapper">
                    <h3>BUSH & FUN</h3>
                    <div className="subheader-text">
                        Wizja połączenia natury i zabawy jest tym, co napełnia to miejsce pozytywna energią.
                    </div>
                    <div className="section-container"></div>
                    <div className="rectangle section-with-subheader"></div>
                    <div className="triangle section-with-subheader"></div>
                    <div className="text section-with-subheader">
                        W lesie czekają przygotowane Spoty, które stają się Waszym kątem wśród drzew. Do dyspozycji w
                        nich są hamaki, drewniane ławki i stoły. Dla chętnych na spędzenie nocy w otoczeniu natury na
                        krawędzi lasu czeka pole namiotowe. Uzbrojone w prąd, a w razie potrzeby i gotowy namiot który
                        pożyczając rozłożymy i złożymy za Was.
                    </div>
                </section>
                <section id="bush2" className="section-wrapper smaller">
                    <div className="bar"></div>
                    <div className="section-container"></div>
                    <div className="rectangle inverse"></div>
                    <div className="triangle inverse"></div>
                    <div className="text inverse">
                        Na Woodspocie każdy może wykorzystać swoja energię na różne sposoby. Do zaoferowania mamy
                        różnorodne sprzęty sportowe: frisbee, badminton, bule, darta, piłki i wiele innych.<br/><br/>
                        Dodatkowo posiadamy także boiska plażowe - dwa do siatkówki i jedno do piłki nożnej.
                    </div>
                </section>
                <section id="bush3" className="section-wrapper smaller">
                    <div className="bar"></div>
                    <div className="section-container"></div>
                    <div className="rectangle"></div>
                    <div className="triangle"></div>
                    <div className="text">
                        Dzieci na Woodspocie są bezpieczne, bo cały nasz teren jest ogrodzony. Na życzenie możemy
                        zapewnić animatorów, którzy wykorzystają nasze leśne obszary do przeróżnych aktywności. Ponadto
                        przygotowany dla nich plac zabaw zapewni zajęcie na więcej niż parę chwil.<br/><br/>Możecie
                        skorzystać z zajęć survivalowych dla dzieci jak i dorosłych przeprowadzanych przez&nbsp;
                        <a target="_blank" href="https://www.sas.org.pl">Szkołę Przygody i Przetrwania SAS</a>, która
                        jest jednym z programów realizujących cele Fundacji Hobbit. Zajmuje się organizacja czasu
                        wolnego dzieci i młodzieży w sposób służący ich wszechstronnemu rozwojowi psychofizycznemu.

                    </div>
                </section>
                <section id="bush4" className="section-wrapper smaller">
                    <div className="bar"></div>
                    <div className="section-container"></div>
                    <div className="rectangle inverse"></div>
                    <div className="triangle inverse"></div>
                    <div className="text inverse">
                        Czas umilić może ognisko, na które miejsce przygotowane jest przy każdej z naszych wiat. To
                        właśnie tam wieczory ze znajomymi i rodzina stają się klimatyczne.<br/><br/>Tak duży leśny
                        teren daje jeszcze więcej przestrzeni do pomysłów na niezapomniane wydarzenia: urodziny,
                        wieczory kawalerskie i panieńskie, baby shower, czy szkolne wycieczki to tylko niektóre z
                        nich... Co najważniejsze, teren możesz mieć nawet na wyłączność i z naszą pomocą zorganizować
                        na nim to, co będziesz miło wspominać przez długi czas.
                    </div>
                </section>

                <hr />

                <section id="paintball1" className="section-wrapper">
                    <h3>PAINTBALL</h3>
                    <div className="section-container"></div>
                    <Image src={paintball} width={150} height={150} alt='paintball icon'/>
                    <div className="rectangle"></div>
                    <div className="triangle"></div>
                    <div className="text">
                        Nasza strefa paintball mieści aż dwa poligony do gry zaaranżowane w naturalnym otoczeniu drzew.
                        Duży pozwala na rywalizację nawet 12 osobom na raz, mały z kolei idealny jest do pojedynków 1v1.
                        Nie potrzebujesz dużej grupy by rozegrać u nas kilka szybkich meczów, albo krótki turniej dla
                        zaledwie kilku graczy.<br/><br/>W centrum dużego pola znajduje się fort, a wokół dwie strefy
                        usiane zasłonami i przeszkodami. Pierwsza - bardziej otwarta, a druga, zamknięta, umiejscowiona
                        w lesie. Ich układ i kształt pozwalają na przeprowadzenie rywalizacji według wielu różnych
                        scenariuszy.
                    </div>
                </section>
                <section id="paintball2" className="section-wrapper smaller">
                    <div className="bar"></div>
                    <div className="section-container"></div>
                    <div className="rectangle inverse"></div>
                    <div className="triangle inverse"></div>
                    <div className="text inverse">
                        Na rozgrzewkę dla początkujących przygotowaliśmy dwie strzelnice i tor przeszkód. To
                        przestrzenie w których sprawdzicie swoja celność i sprawność bez ryzyka i konieczności
                        strzelania do przeciwnika. To tez idealna alternatywa dla najmłodszych.
                    </div>
                </section>
                <section id="paintball3" className="section-wrapper smaller">
                    <div className="bar"></div>
                    <div className="section-container"></div>
                    <div className="rectangle"></div>
                    <div className="triangle"></div>
                    <div className="text">
                        Nasze Markery, które wyglądają jak prawdziwy karabin M4, możecie wyposażyć w małe magazynki
                        19-strzałowe, ładowane jak prawdziwe - od dołu broni, jak i duże - mieszczące aż 200 kul,
                        bardziej praktyczne przy dłuższej potyczce. Czas gry uzależniony jest od wykupionego pakietu i
                        tempa, w jakim wykorzystacie swoja amunicję.
                    </div>
                </section>
                <section id="paintball4" className="section-wrapper smaller">
                    <div className="bar"></div>
                    <div className="section-container"></div>
                    <div className="rectangle inverse"></div>
                    <div className="triangle inverse"></div>
                    <div className="text inverse">
                        Strefie towarzyszy przestrzeń idealna do kibicowania i odpoczynku po grze w otoczeniu natury.
                        Nie odbiera to jednak emocji z rozgrywki, poniewaz dalej jest się blisko znajomych.
                        Odpoczywając można nadal kibicować wybranej drużynie i ekscytować się wynikiem.
                    </div>
                </section>

                <hr />

                <section id="fishing" className="section-wrapper">
                    <h3>ŁOWISKA</h3>
                    <div className="section-container"></div>
                    <Image src={fishing} width={150} height={150} alt='fishing icon'/>
                    <div className="gradient-text">
                        <b>Wpadnij do nas powędkować!</b><br/>Zabierz dzieci, dziadków czy kółko wędkarskie i wpadajcie
                        sprawdzić co skrywa duma naszej miejscówki.
                    </div>
                    <div className="rectangle inverse section-with-subtitle"></div>
                    <div className="triangle inverse section-with-subtitle"></div>
                    <div className="text inverse section-with-subtitle">
                        Nasz przyjazny środowisku teren oferuje dwa stawy o łącznej powierzchni 1,5 hektara, w których
                        możecie łowić w formule no-kill. Do dyspozycji jest wiele stanowisk wędkarskich jak i łódki do
                        wynajęcia.
                    </div>
                    <div className="trapezoid-text">
                        W stawach na Spocie znajdziecie: karpia królewskiego i pełnołuskiego, lina, sandacza, amura i
                        szczupaka.
                    </div>
                </section>

                <hr />

                <section id="contact" className="section-wrapper contact">
                    <h3>KONTAKT</h3>
                    <div className="contact-container">
                        <div className="contact-column">
                            <div className="contact-map-container"></div>
                        </div>
                        <div className="contact-column">
                            <div className="contact-address">
                                WOODSPOT BUSH & FUN<br/>
                                Poznańska, 55-120 Siemianice, gm. Oborniki Śląskie<br/><br/>
                                nr tel. 576 000 246<br/>
                                mail: woodspotpl@gmail.com
                            </div>
                            <div className="contact-socials">
                                <a href="https://www.facebook.com/woodspotpl/" target="_blank">
                                    <img src={'/facebook-logo.png'} alt={'facebook icon'}/>
                                </a>
                                <a href="https://www.instagram.com/explore/locations/101079862755451/woodspot-bush-fun/" target="_blank">
                                    <img src={'/instagram-logo.png'} alt={'instagram icon'}/>
                                </a>
                                <a href="https://goo.gl/maps/ME1aduGAakvzNnbm8" target="_blank">
                                    <img src={'/google-logo.png'} alt={'google icon'}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
              hr {
                width: 100%;
              }

              main {
                width: 100%;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: center;
              }

              header img {
                height: 50px;
                z-index: 9;
              }

              .hamburger {
                display: none;
                height: 50px;
                justify-content: end;
                width: 100%;
                z-index: 9;
              }

              .hamburger__icon {
                height: 40px;
                width: 40px;
                z-index: 9;
              }

              @media (max-width: 1110px) {
                .hamburger {
                  display: flex;
                }
              }

              @media (max-width: 500px) {
                header img {
                  height: 30px;
                  margin-top: 10px;
                }
              }

              #main {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 600px;
                background-image: url('/main-section.png');
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-size: cover;
              }

              #main h1, #main h2 {
                margin: 0;
                text-align: center;
                color: white;
              }

              #main h1 {
                font-size: 7rem;
              }

              #main h2 {
                font-size: 4rem;
              }

              #main h2 span {
                width: 15%;
                height: 4px;
                display: inline-block;
                background-color: white;
                position: relative;
                top: -18px;
              }

              @media (max-width: 940px) {
                #main h1 {
                  font-size: 5rem;
                }

                #main h2 {
                  font-size: 2rem;
                }

                #main h2 span {
                  width: 20%;
                  top: -10px;
                }
              }

              @media (max-width: 545px) {
                #main h2 span {
                  width: 15%;
                }
              }

              @media (max-width: 480px) {
                #main h1 {
                  font-size: 2rem;
                }

                #main h2 {
                  font-size: 1rem;
                }

                #main h2 span {
                  width: 10%;
                  height: 2px;
                  top: -4px;
                }
              }

              #icons {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 200px;
              }

              @media (max-width: 800px) {
                #icons {
                  height: 100px;
                }
              }

              .section-container {
                width: 100%;
                height: 600px;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-size: cover;
              }

              #about1 .section-container {
                background-image: url('/about-section-1.jpg');
              }

              #about2 .section-container {
                background-image: url('/about-section-2.jpg');
              }

              #bush1 .section-container {
                background-image: url('/bush-section-1.jpg');
              }

              #bush2 .section-container {
                background-image: url('/bush-section-2.jpg');
              }

              #bush3 .section-container {
                background-image: url('/bush-section-3.jpg');
              }

              #bush4 .section-container {
                background-image: url('/bush-section-4.jpg');
              }

              #paintball1 .section-container {
                background-image: url('/paintball-section-1.jpg');
              }

              #paintball2 .section-container {
                background-image: url('/paintball-section-2.jpg');
              }

              #paintball3 .section-container {
                background-image: url('/paintball-section-3.jpg');
              }

              #paintball4 .section-container {
                background-image: url('/paintball-section-4.jpg');
              }

              #fishing .section-container {
                background-image: url('/fishing-section.jpg');
              }

              .section-wrapper {
                width: 100%;
                height: 700px;
                position: relative;
              }

              .section-wrapper.smaller {
                height: 650px;
              }

              .section-wrapper.text-only {
                height: 250px;
              }

              .section-wrapper.text-only .text {
                width: 100%;
                text-align: center;
                top: 0;
              }

              .section-wrapper .bar {
                height: 50px;
                width: 100%;
                background-color: #002902;
              }

              .section-wrapper h3 {
                height: 100px;
                text-align: center;
                color: white;
                font-size: 5rem;
                margin: 0;
              }

              @media (max-width: 500px) {
                .section-wrapper h3 {
                  font-size: 3rem;
                }
              }

              .section-wrapper .rectangle {
                height: 600px;
                width: 40%;
                background-color: #002902;
                opacity: 0.8;
                position: absolute;
                top: 100px;
                right: 0;
              }

              .section-wrapper.smaller .rectangle, .section-wrapper.smaller .triangle, .section-wrapper.smaller .text {
                top: 50px;
              }

              .section-wrapper .rectangle.section-with-subheader, .section-wrapper .triangle.section-with-subheader, .section-wrapper .text.section-with-subheader {
                top: 150px;
              }
              
              .section-wrapper .rectangle.section-with-subtitle {
                top: 180px;
                height: 520px;
              }

              .section-wrapper .triangle.section-with-subtitle {
                top: 180px;
                border-bottom: 520px solid #002902;
              }
              
              .section-wrapper .text.section-with-subtitle {
                top: 200px;
              }

              .section-wrapper .triangle {
                opacity: 0.8;
                position: absolute;
                top: 100px;
                right: 40%;
                width: 0;
                height: 0;
                border-left: 450px solid transparent;
                border-right: 0 solid transparent;
                border-bottom: 600px solid #002902;
              }

              .section-wrapper .rectangle.inverse {
                left: 0;
              }

              .section-wrapper .triangle.inverse {
                left: 40%;
                border-left: 0 solid transparent;
                border-right: 450px solid transparent;
              }

              .section-wrapper .text {
                position: absolute;
                right: 0;
                top: 100px;
                color: white;
                font-size: 2rem;
                width: 42%;
                padding: 2rem 1rem 1rem 1rem;
              }

              .section-wrapper .text a {
                color: white;
              }

              .section-wrapper .gradient-text {
                position: absolute;
                color: white;
                top: 100px;
                width: 100%;
                padding: 0 10%;
                font-size: 1.2rem;
                background-image: linear-gradient(#002902, #002902, transparent);
                text-align: center;
                height: 150px;
              }

              .section-wrapper .subheader-text {
                color: white;
                width: 100%;
                padding: 0 10%;
                font-size: 1.2rem;
                text-align: center;
                height: 50px;
              }

              .section-wrapper .trapezoid-text {
                position: absolute;
                height: 0;
                width: 500px;
                bottom: 0;
                right: 0;
                border-bottom: 100px solid #002902;
                border-left: 100px solid transparent;
                border-right: 0 solid transparent;
                color: white;
                font-size: 1.5rem;
              }
              
              .contact-container {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
              }
              
              .contact-column {
                display: flex;
                height: 500px;
                flex-direction: column;
                justify-content: space-around;
              }
              
              .contact-map-container {
                height: 500px;
                width: 500px;
                background-image: url('/contact-map.png');
                background-size: contain;
              }
              
              .contact-address {
                height: 30px;
                width: 500px;
                color: white;
                font-size: 2rem;
                text-align: center;
              }
              
              .contact-socials {
                width: 500px;
                padding: 0 25%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
              }

              .section-wrapper .text.inverse {
                left: 0;
              }

              @media (max-width: 1700px) {
                .section-wrapper .text {
                  font-size: 1.6rem;
                }
              }

              @media (max-width: 1170px) {
                .section-wrapper .text {
                  font-size: 1.3rem;
                  width: 43.5%
                }
              }

              @media (max-width: 1000px) {
                .contact-map-container {
                  height: 300px;
                  width: 300px;
                }
              }

              @media (max-width: 850px) {
                .contact-container {
                  flex-direction: column;
                  align-items: center;
                }
              }

              @media (max-width: 810px) {
                .section-wrapper .text {
                  font-size: 1.2rem;
                  width: 44%;
                }
              }

              @media (max-width: 750px) {
                .section-wrapper .triangle {
                  border-left: 250px solid transparent;
                }

                .section-wrapper .triangle.inverse {
                  border-right: 250px solid transparent;
                }
              }

              @media (max-width: 600px) {
                .contact-column {
                  height: 300px;
                }

                .contact-map-container {
                  width: 200px;
                  height: 200px;
                }

                .contact-address {
                  font-size: 1rem;
                  width: 250px;
                }

                .contact-socials {
                  width: 250px;
                }
              }

              @media (max-width: 490px) {
                .section-wrapper .text {
                  font-size: 0.9rem;
                  width: 45%;
                }

                .section-wrapper .trapezoid-text {
                  font-size: 1rem;
                  width: 350px;
                  border-bottom: 80px solid #002902;
                }

                .section-wrapper .gradient-text {
                  font-size: 0.7rem;
                }

                .section-wrapper .subheader-text {
                  font-size: 0.7rem;
                }
              }

              @media (max-width: 420px) {
                .section-wrapper .triangle {
                  border-left: 150px solid transparent;
                }

                .section-wrapper .triangle.inverse {
                  border-right: 150px solid transparent;
                }
              }

              @media (max-width: 375px) {
                .section-wrapper .text {
                  font-size: 0.7rem;
                  width: 45%;
                }
              }
              
              hr {
                color: white;
                height: 20px;
                background-color: white;
              }
            `}</style>

            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: "Trebuchet MS", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
                background-color: #002902;
              }

              * {
                box-sizing: border-box;
              }

              li span a {
                color: #002902;
                text-decoration: none;
                cursor: pointer;
              }

              @media (max-width: 800px) {
                #icons img {
                  border-radius: 40px;
                  width: 50px;
                  height: 50px;
                }
              }

              .section-wrapper:not(.contact) img {
                width: 100px;
                height: 100px;
                position: absolute;
                background-color: white;
                border-radius: 80px;
                top: 120px;
                left: 20px;
                border: 5px solid #002902;
                z-index: 9;
              }
              
              #fishing img {
                top: 10px;
              }

              @media (max-width: 630px) {
                #fishing img {
                  display: none;
                }
              }
            `}</style>
        </div>
    );
}
