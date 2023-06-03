import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Dropdown } from '@nextui-org/react';

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
                        <a href="#paintball">PAINTBALL</a>
                        <a href="">ŁOWISKA</a>
                        <a href="">BUSH&FUN</a>
                        <a href="">O NAS</a>
                        <a href="">KONTAKT</a>
                    </nav>
                    <div className="hamburger">
                        <Dropdown placement='bottom-right'>
                            <Dropdown.Button light iconRight={<span></span>}>
                                <div className='hamburger__icon'>
                                    <svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2"
                                         viewBox="0 0 24 24" stroke="white">
                                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </div>
                            </Dropdown.Button>
                            <Dropdown.Menu aria-label="navigation actions">
                                <Dropdown.Item key="new">
                                    <a href="#paintball">PAINTBALL</a>
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

                <section id="paintball">Paintball</section>
                <section>Łowienie</section>
            </main>

            <style jsx>{`
              main {
                width: 100%;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: center;
              }

              main img {
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
                main img {
                  height: 30px;
                  margin-top: 10px;
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
            `}</style>
        </div>
    );
}
