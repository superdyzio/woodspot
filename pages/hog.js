import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export const getStaticProps = () => {
    return {
        props: {
            hogPassword: process.env.HOG_PASSWORD || ''
        }
    };
}


export default function Hog({ hogPassword }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(hogPassword);
        if (password === hogPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password');
        }
    };

    // Check if already authenticated
    useEffect(() => {
        const auth = localStorage.getItem('hogAuth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    // Save authentication state
    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('hogAuth', 'true');
        }
    }, [isAuthenticated]);

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('hogAuth');
    };

    if (!isAuthenticated) {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Hog - Woodspot</title>
                    <link rel="icon" href="/logo.svg"/>
                </Head>

                <main>
                    <header className={styles.header}>
                        <img src={'/logo.svg'} alt={'woodspot logo'}/>
                        <nav>
                            <a href="/#about1">O NAS</a>
                            <a href="/#bush1">BUSH&FUN</a>
                            <a href="/#paintball1">PAINTBALL</a>
                            <a href="/#fishing">ŁOWISKA</a>
                            <a href="/#contact">KONTAKT</a>
                        </nav>
                    </header>

                    <section className="section-wrapper">
                        <h3>HOG</h3>
                        <div className="section-container"></div>
                        <div className="rectangle"></div>
                        <div className="triangle"></div>
                        <div className="text">
                            <form onSubmit={handleSubmit} className="login-form">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    required
                                />
                                {error && <p className="error">{error}</p>}
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </section>
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

                    header img {
                        height: 50px;
                        z-index: 9;
                    }

                    .section-wrapper {
                        width: 100%;
                        height: 700px;
                        position: relative;
                    }

                    .section-wrapper h3 {
                        height: 100px;
                        text-align: center;
                        color: white;
                        font-size: 5rem;
                        margin: 0;
                    }

                    .section-container {
                        width: 100%;
                        height: 600px;
                        background-repeat: no-repeat;
                        background-position: 50% 50%;
                        background-size: cover;
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

                    .section-wrapper .text {
                        position: absolute;
                        right: 0;
                        top: 100px;
                        color: white;
                        font-size: 2rem;
                        width: 42%;
                        padding: 2rem 1rem 1rem 1rem;
                    }

                    .login-form {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        align-items: center;
                    }

                    .login-form input {
                        padding: 0.5rem;
                        font-size: 1rem;
                        width: 80%;
                        border: none;
                        border-radius: 4px;
                    }

                    .login-form button {
                        padding: 0.5rem 2rem;
                        font-size: 1rem;
                        background-color: #002902;
                        color: white;
                        border: 2px solid white;
                        border-radius: 4px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .login-form button:hover {
                        background-color: white;
                        color: #002902;
                    }

                    .error {
                        color: #ff6b6b;
                        margin: 0;
                        font-size: 1rem;
                    }

                    @media (max-width: 500px) {
                        .section-wrapper h3 {
                            font-size: 3rem;
                        }
                    }

                    @media (max-width: 750px) {
                        .section-wrapper .triangle {
                            border-left: 250px solid transparent;
                        }
                    }

                    @media (max-width: 420px) {
                        .section-wrapper .triangle {
                            border-left: 150px solid transparent;
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
                `}</style>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Hog - Woodspot</title>
                <link rel="icon" href="/logo.svg"/>
            </Head>

            <main>
                <header className={styles.header}>
                    <img src={'/logo.svg'} alt={'woodspot logo'}/>
                    <nav>
                        <a href="/#about1">O NAS</a>
                        <a href="/#bush1">BUSH&FUN</a>
                        <a href="/#paintball1">PAINTBALL</a>
                        <a href="/#fishing">ŁOWISKA</a>
                        <a href="/#contact">KONTAKT</a>
                    </nav>
                </header>

                <section className="section-wrapper">
                    <h3>HOG</h3>
                    <div className="section-container"></div>
                    <div className="rectangle"></div>
                    <div className="triangle"></div>
                    <div className="text">
                        <div className="content">
                            <h2>Welcome to the HOG page!</h2>
                            <p>This is the protected content.</p>
                            <button onClick={handleLogout} className="logout-button">Logout</button>
                        </div>
                    </div>
                </section>
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

                header img {
                    height: 50px;
                    z-index: 9;
                }

                .section-wrapper {
                    width: 100%;
                    height: 700px;
                    position: relative;
                }

                .section-wrapper h3 {
                    height: 100px;
                    text-align: center;
                    color: white;
                    font-size: 5rem;
                    margin: 0;
                }

                .section-container {
                    width: 100%;
                    height: 600px;
                    background-repeat: no-repeat;
                    background-position: 50% 50%;
                    background-size: cover;
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

                .section-wrapper .text {
                    position: absolute;
                    right: 0;
                    top: 100px;
                    color: white;
                    font-size: 2rem;
                    width: 42%;
                    padding: 2rem 1rem 1rem 1rem;
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                }

                .content h2 {
                    margin: 0;
                    font-size: 2rem;
                }

                .content p {
                    margin: 0;
                    font-size: 1.5rem;
                }

                .logout-button {
                    padding: 0.5rem 2rem;
                    font-size: 1rem;
                    background-color: #002902;
                    color: white;
                    border: 2px solid white;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 1rem;
                }

                .logout-button:hover {
                    background-color: white;
                    color: #002902;
                }

                @media (max-width: 500px) {
                    .section-wrapper h3 {
                        font-size: 3rem;
                    }
                }

                @media (max-width: 750px) {
                    .section-wrapper .triangle {
                        border-left: 250px solid transparent;
                    }
                }

                @media (max-width: 420px) {
                    .section-wrapper .triangle {
                        border-left: 150px solid transparent;
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
            `}</style>
        </div>
    );
} 