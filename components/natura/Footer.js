import { EMAIL, NAV_LINKS, PHONE } from './content';
import { Swap } from './ui';

export default function Footer() {
    return (
        <footer data-section="footer" className="footer">
            <div className="container">
                <div className="cta">
                    <h2>Zarezerwuj swój dzień <em>wśród natury</em></h2>
                    <div className="buttons">
                        <a className="btn btn--light" href="#rezerwacja">Sprawdź dostępność</a>
                        <a className="btn btn--ghost" href="#wydarzenia">Zapytaj o wydarzenie</a>
                    </div>
                </div>

                <div className="meta">
                    <img className="logo" src="/logo-white.svg" alt="Woodspot bush&fun" loading="lazy" decoding="async" />
                    <nav className="links" aria-label="Stopka">
                        {NAV_LINKS.map(({ href, label }) => (
                            <a key={href} href={href}>{label}</a>
                        ))}
                    </nav>
                    <p className="address">
                        <Swap
                            d={
                                <>
                                    Poznańska, 55-120 Siemianice, gm. Oborniki Śląskie
                                    <br />
                                    tel. <a href={PHONE.href}>{PHONE.label}</a> · <a href={EMAIL.href}>{EMAIL.label}</a>
                                </>
                            }
                            m={
                                <>
                                    Poznańska, 55-120 Siemianice
                                    <br />
                                    gm. Oborniki Śląskie
                                    <br />
                                    {EMAIL.label}
                                </>
                            }
                        />
                    </p>
                </div>

                <p className="copyright">© Woodspot Bush &amp; Fun</p>
            </div>

            <style jsx>{`
              .footer {
                background: #002902;
                color: #FFFFFF;
                padding: 96px 0 48px;
              }

              .cta {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: space-between;
                gap: 32px 64px;
              }

              h2 {
                flex: 1 1 520px;
                max-width: 760px;
                font-family: var(--serif);
                font-weight: 340;
                font-size: clamp(34px, 3.9vw, 56px);
                line-height: 1.06;
                letter-spacing: -0.015em;
                color: #FFFFFF;
                text-wrap: balance;
              }

              h2 em {
                font-style: italic;
              }

              .buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
              }

              .meta {
                margin-top: 64px;
                padding-top: 40px;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: space-between;
                gap: 32px 48px;
              }

              .logo {
                height: 40px;
                width: auto;
                aspect-ratio: auto 5577 / 973;
                display: block;
              }

              .links {
                display: flex;
                flex-wrap: wrap;
                gap: 8px 28px;
                font-size: 15px;
                font-weight: 600;
              }

              .links a {
                color: #FFFFFF;
                text-decoration: none;
              }

              .address {
                font-size: 14px;
                line-height: 1.7;
                color: rgba(255, 255, 255, 0.82);
              }

              .address a {
                color: #FFFFFF;
              }

              .copyright {
                margin-top: 40px;
                font-size: 13px;
                color: rgba(255, 255, 255, 0.72);
              }

              @media (max-width: 640px) {
                .footer {
                  padding: 48px 0 32px;
                }

                .cta {
                  display: block;
                }

                h2 {
                  max-width: none;
                  font-size: 30px;
                  line-height: 1.1;
                  letter-spacing: -0.01em;
                  text-wrap: wrap;
                }

                .buttons {
                  margin-top: 24px;
                  flex-direction: column;
                  flex-wrap: nowrap;
                }

                .buttons .btn {
                  justify-content: center;
                }

                .meta {
                  margin-top: 36px;
                  padding-top: 32px;
                  flex-direction: column;
                  flex-wrap: nowrap;
                  align-items: stretch;
                  gap: 24px;
                }

                .logo {
                  height: 32px;
                  align-self: flex-start;
                }

                .links {
                  display: grid;
                  grid-template-columns: repeat(2, minmax(0, 1fr));
                  gap: 0 16px;
                }

                .links a {
                  display: flex;
                  align-items: center;
                  min-height: 40px;
                }

                .copyright {
                  margin-top: 24px;
                }
              }
            `}</style>
        </footer>
    );
}
