import InquiryForm from './InquiryForm';
import { EVENT_TYPES } from './content';
import { Swap } from './ui';

export default function Events() {
    return (
        <section id="wydarzenia" data-section="wydarzenia" className="events">
            <div className="container">
                <div className="intro">
                    <figure className="photo">
                        <img src="/bush-section-3.jpg" alt="Grupa znajomych na słonecznej polanie wśród sosen" loading="lazy" />
                    </figure>
                    <div className="copy">
                        <p className="eyebrow">Wydarzenia i wyłączność</p>
                        <h2>Cały teren <em>tylko dla Was</em></h2>
                        <p className="lead">
                            Tak duży leśny teren daje mnóstwo przestrzeni na niezapomniane wydarzenia. Teren możesz mieć nawet na
                            wyłączność – a my pomożemy zorganizować na nim to, co będziesz miło wspominać przez długi czas.
                        </p>
                        <ul className="chips" aria-label="Rodzaje wydarzeń">
                            {EVENT_TYPES.map(({ label, mobileOrder }) => (
                                <li key={label} style={{ '--mobile-order': mobileOrder }}>{label}</li>
                            ))}
                        </ul>
                        <p className="extras">
                            <Swap
                                d="Na życzenie: animatorzy dla dzieci i zajęcia survivalowe ze Szkołą Przygody i Przetrwania SAS."
                                m="Na życzenie: animatorzy dla dzieci i zajęcia survivalowe SAS."
                            />
                        </p>
                    </div>
                </div>

                <InquiryForm />
            </div>

            <style jsx>{`
              .events {
                background: #FFFFFF;
                padding: var(--section-y) 0;
              }

              .intro {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 48px 72px;
              }

              .photo {
                flex: 1 1 520px;
                min-width: 0;
              }

              .photo img {
                display: block;
                width: 100%;
                height: clamp(280px, 39vw, 560px);
                object-fit: cover;
                clip-path: polygon(0 0, 88% 0, 100% 100%, 0 100%);
              }

              .copy {
                flex: 1 1 440px;
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 22px;
              }

              h2 {
                font-family: var(--serif);
                font-weight: 360;
                font-size: clamp(32px, 3.6vw, 52px);
                line-height: 1.06;
                letter-spacing: -0.015em;
                color: #002902;
                text-wrap: balance;
              }

              h2 em {
                font-style: italic;
              }

              .lead {
                font-size: 18px;
                line-height: 1.7;
                color: #2F3F31;
              }

              .chips {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
              }

              .chips li {
                display: inline-flex;
                align-items: center;
                min-height: 44px;
                padding: 0 18px;
                border: 1px solid #B9C6B7;
                border-radius: 999px;
                font-size: 15px;
                font-weight: 600;
                color: #002902;
              }

              .extras {
                font-size: 16px;
                line-height: 1.6;
                color: #4A5A4C;
              }

              @media (max-width: 640px) {
                .events {
                  padding: 0 0 56px;
                }

                .intro {
                  display: block;
                }

                .photo {
                  margin: 0 calc(-1 * var(--gutter));
                }

                .photo img {
                  height: 260px;
                  clip-path: polygon(0 0, 100% 0, 100% 86%, 0 100%);
                }

                .copy {
                  display: block;
                  padding-top: 28px;
                }

                h2 {
                  margin-top: 14px;
                  font-size: 32px;
                  line-height: 1.1;
                  letter-spacing: -0.01em;
                  text-wrap: wrap;
                }

                .lead {
                  margin-top: 14px;
                  font-size: 16px;
                  line-height: 1.65;
                }

                .chips {
                  margin-top: 20px;
                  gap: 8px;
                }

                .chips li {
                  order: var(--mobile-order);
                  min-height: 40px;
                  padding: 0 14px;
                  font-size: 14px;
                }

                .extras {
                  margin-top: 16px;
                  font-size: 15px;
                  line-height: 1.55;
                }
              }
            `}</style>
        </section>
    );
}
