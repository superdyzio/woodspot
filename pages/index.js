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
                        <a href="#paintball1">PAINTBALL</a>
                        <a href="">ŁOWISKA</a>
                        <a href="">BUSH&FUN</a>
                        <a href="">O NAS</a>
                        <a href="">KONTAKT</a>
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
                                <Dropdown.Item key="paintball">
                                    <a href="#paintball1">PAINTBALL</a>
                                </Dropdown.Item>
                                <Dropdown.Item key="copy">
                                    <a href="">ŁOWISKA</a>
                                </Dropdown.Item>
                                <Dropdown.Item key="edit">
                                    <a href="">BUSH&FUN</a>
                                </Dropdown.Item>
                                <Dropdown.Item key="delete">
                                    <a href="">O NAS</a>
                                </Dropdown.Item>
                                <Dropdown.Item key="contact">
                                    <a href="">KONTAKT</a>
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

                <section id="paintball1" className="section-wrapper">
                    <h3>PAINTBALL</h3>
                    <div className="section-container"></div>
                    <Image src={paintball} width={150} height={150} alt='paintball icon'/>
                    <div className="rectangle"></div>
                    <div className="triangle"></div>
                    <div className="text">
                        Nasze boisko do paintballa w trakcie rozgrywki zmienia się w arenę idealną do wszelkiej rywalizacji.<br/><br/>
                        Rozmieszczenie elementów na polu do gry zmusza do ciągłego myślenia i dynamicznych zmian pozycji.<br/><br/><br/>

                        W centrum poligonu znajduje się fort, a oprócz niego zaaranżowane dwie strefy rozgrywki.<br/><br/>
                        Pierwsza - bardziej otwarta, a druga bardziej zamknięta, umiejscowiona w lesie.
                    </div>
                </section>
                <section id="paintball2" className="section-wrapper smaller">
                    <div className="bar"></div>
                    <div className="section-container"></div>
                    <div className="rectangle inverse"></div>
                    <div className="triangle inverse"></div>
                    <div className="text inverse">
                        Rozgrywki różnią się od siebie liczbą graczy, ilością kul w magazynku i czasem trwania rundy.<br/><br/>
                        Grać możecie u nas od dwóch osób 1vs1, aż do 12 w meczach 6vs6.<br/><br/><br/>

                        Markery, które wyglądają jak prawdziwy karabin M4 możecie wyposażyć w małe magazynki - 20 kul, jak i duże - 200 kul.<br/><br/>
                        Czas gry uzależniony jest od wykupionego pakietu i tempa, w jakim wykorzystacie swoją amunicję.
                    </div>
                </section>
                <section id="paintball3" className="section-wrapper smaller">
                    <div className="bar"></div>
                    <div className="section-container"></div>
                    <div className="rectangle"></div>
                    <div className="triangle"></div>
                    <div className="text">
                        Rekreacyjna strefa dla osób, które nie grają, pozwala odpocząć w otoczeniu natury.<br/><br/>
                        Nie odbiera to jednak emocji z rozgrywki, ponieważ dalej jest się blisko znajomych, którzy grają.<br/><br/><br/>

                        Odpoczywając można kibicować wybranej drużynie i ekscytować się wynikiem.<br/><br/>
                    </div>
                </section>
                <section id="paintball4" className="section-wrapper text-only">
                    <div className="text">
                        Jeśli nie macie pomysłu na grę, mamy w zanadrzu różne scenariusze rozgrywki.<br/><br/>
                        Na pewno któryś z nich Wam się spodoba.<br/><br/>

                        A tym z Was, którzy mają swój własny pomysł - pomożemy w jego przygotowaniu.<br/><br/>
                    </div>
                </section>

                <section id="fishing" className="section-wrapper">
                    <h3>ŁOWISKA</h3>
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

              #paintball1 .section-container {
                background-image: url('/paintball-section-1.png');
              }

              #paintball2 .section-container {
                background-image: url('/paintball-section-2.png');
              }

              #paintball3 .section-container {
                background-image: url('/paintball-section-3.png');
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
              
              .section-wrapper .text.inverse {
                left: 0;
              }
              
              @media (max-width: 1700px) {
                .section-wrapper .text {
                  font-size: 1.8rem;
                }
              }

              @media (max-width: 1170px) {
                .section-wrapper .text {
                  font-size: 1.5rem;
                  width: 43.5%
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

              @media (max-width: 490px) {
                .section-wrapper .text {
                  font-size: 1rem;
                  width: 45%;
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
                  font-size: 0.8rem;
                  width: 45%;
                }
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

              #icons img {
                background-color: white;
                border-radius: 80px;
              }

              @media (max-width: 800px) {
                #icons img {
                  border-radius: 40px;
                  width: 50px;
                  height: 50px;
                }
              }

              .section-wrapper img {
                width: 150px;
                height: 150px;
                position: absolute;
                background-color: white;
                border-radius: 80px;
                top: 120px;
                left: 20px;
                border: 5px solid #002902;
                z-index: 9;
              }
            `}</style>
        </div>
    );
}
