import { EMAIL, MAPS_URL, PHONE, PRACTICAL_INFO } from './content';
import { PinIcon } from './icons';
import { SocialLinks } from './ui';

export default function Contact() {
    return (
        <section id="kontakt" data-section="kontakt" className="contact">
            <div className="container">
                <p className="eyebrow">Kontakt i dojazd</p>
                <h2>Do zobaczenia pod Wrocławiem</h2>

                <div className="grid">
                    <div className="col">
                        <img
                            className="map"
                            src="/contact-map.png"
                            alt="Mapa dojazdu: Woodspot na północ od Obornik Śląskich, Wrocław na południowym wschodzie"
                            loading="lazy"
                        />
                        <address>
                            <strong>Woodspot Bush &amp; Fun</strong>
                            <br />
                            Poznańska, 55-120 Siemianice
                            <br />
                            gm. Oborniki Śląskie
                        </address>
                        <a className="route" href={MAPS_URL} target="_blank" rel="noopener">
                            <PinIcon />
                            Wyznacz trasę w Mapach Google
                        </a>
                    </div>

                    <div className="col">
                        <h3>Praktyczne informacje</h3>
                        <dl className="facts">
                            {PRACTICAL_INFO.map(({ term, value }) => (
                                <div key={term}>
                                    <dt>{term}</dt>
                                    <dd>{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="col col--contact">
                        <h3>Kontakt</h3>
                        <a className="phone" href={PHONE.href}>{PHONE.label}</a>
                        <a className="mail" href={EMAIL.href}>{EMAIL.label}</a>
                        <SocialLinks />
                        <p className="reply only-d">Na wiadomości odpowiadamy w [CZAS ODPOWIEDZI].</p>
                        <a className="btn btn--md btn--outline ask only-d" href="#wydarzenia">Zapytaj o wydarzenie</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
              .contact {
                background: #FFFFFF;
                padding: var(--section-y) 0;
              }

              h2 {
                margin-top: 16px;
                font-family: var(--serif);
                font-weight: 360;
                font-size: clamp(32px, 3.6vw, 52px);
                line-height: 1.06;
                letter-spacing: -0.015em;
                color: #002902;
              }

              .grid {
                margin-top: 56px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
                gap: 48px;
              }

              .col {
                display: flex;
                flex-direction: column;
                gap: 20px;
              }

              .map {
                display: block;
                width: 100%;
                max-width: 380px;
                aspect-ratio: 1 / 1;
                object-fit: contain;
              }

              address {
                font-style: normal;
                font-size: 17px;
                line-height: 1.65;
                color: #0F1A10;
              }

              address strong {
                font-weight: 700;
              }

              .route {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                min-height: 44px;
                font-weight: 700;
                font-size: 16px;
              }

              h3 {
                font-family: var(--serif);
                font-weight: 400;
                font-size: 26px;
                color: #002902;
              }

              .facts {
                display: flex;
                flex-direction: column;
                border-top: 1px solid #CBD5C9;
              }

              .facts div {
                padding: 14px 0;
                border-bottom: 1px solid #CBD5C9;
                display: flex;
                flex-direction: column;
                gap: 4px;
              }

              .facts dt {
                font-size: 13px;
                font-weight: 700;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: #4A5A4C;
              }

              .facts dd {
                font-size: 17px;
                color: #0F1A10;
              }

              .phone {
                display: block;
                font-family: var(--serif);
                font-size: 38px;
                line-height: 1.1;
                color: #002902;
                text-decoration: none;
              }

              .mail {
                font-size: 18px;
                font-weight: 600;
              }

              .reply {
                font-size: 15px;
                line-height: 1.6;
                color: #4A5A4C;
              }

              .ask {
                align-self: flex-start;
              }

              @media (max-width: 640px) {
                h2 {
                  margin-top: 14px;
                  font-size: 30px;
                  line-height: 1.1;
                  letter-spacing: -0.01em;
                }

                .grid {
                  margin-top: 24px;
                  display: block;
                }

                .col {
                  display: block;
                }

                .col + .col {
                  margin-top: 36px;
                }

                .map {
                  max-width: 350px;
                }

                address {
                  margin-top: 16px;
                  font-size: 16px;
                  line-height: 1.6;
                }

                .route {
                  margin-top: 8px;
                  font-size: 15px;
                }

                h3 {
                  font-size: 22px;
                }

                .facts {
                  margin-top: 12px;
                }

                .facts div {
                  padding: 12px 0;
                  gap: 2px;
                }

                .facts dt {
                  font-size: 12px;
                }

                .facts dd {
                  font-size: 16px;
                }

                .phone {
                  margin-top: 10px;
                  font-size: 32px;
                  line-height: 1.2;
                }

                .mail {
                  margin-top: 6px;
                  display: inline-flex;
                  align-items: center;
                  min-height: 44px;
                  font-size: 17px;
                }

                .col--contact :global(.socials) {
                  margin-top: 8px;
                }
              }
            `}</style>
        </section>
    );
}
