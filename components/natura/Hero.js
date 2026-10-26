import BookingForm from './BookingForm';
import { ArrowIcon } from './icons';
import { Swap } from './ui';

export default function Hero() {
    return (
        <section id="top" data-section="top" className="hero">
            <div className="container">
                <p className="eyebrow kicker">
                    <span className="rule" aria-hidden="true" />
                    <span>Siemianice · <span className="only-d">gm. Oborniki Śląskie · </span>pod Wrocławiem</span>
                </p>
                <h1>Natura i zabawa napełnia to miejsce <em>pozytywną energią.</em></h1>

                <div className="row">
                    <div className="intro">
                        <p className="lead">
                            <Swap
                                d="Niemal 10 hektarów lasów, polan i stawów wędkarskich – ogrodzonych, oświetlonych i zasilanych wyłącznie odnawialnymi źródłami energii. Na weekend ze znajomymi, rodzinny dzień w lesie albo wydarzenie na wyłączność."
                                m="Niemal 10 hektarów lasów, polan i stawów – ogrodzonych, oświetlonych i zasilanych wyłącznie odnawialnymi źródłami energii. Na weekend ze znajomymi, rodzinny dzień albo wydarzenie na wyłączność."
                            />
                        </p>
                        <div className="ctas only-d">
                            <a className="btn" href="#rezerwacja">
                                Sprawdź dostępność
                                <ArrowIcon />
                            </a>
                            <a className="text-link" href="#wydarzenia">Zapytaj o wydarzenie</a>
                        </div>
                    </div>
                    <figure className="photo">
                        <img
                            src="/bush-section-4.jpg"
                            alt="Drewniana wiata, siedziska z palet wokół miejsca na ognisko, w tle sosnowy las"
                        />
                        <figcaption className="only-d">Wiata z miejscem na ognisko</figcaption>
                    </figure>
                </div>

                <BookingForm />

                <p className="note only-d">
                    Planujesz urodziny, wieczór panieński albo wycieczkę szkolną? <a href="#wydarzenia">Zapytaj o wydarzenie</a>
                </p>
                <a className="text-link note-m only-m" href="#wydarzenia">Planujesz wydarzenie? Zapytaj o termin</a>
            </div>

            <style jsx>{`
              .hero {
                background: #EEF2EC;
                padding: 56px 0 96px;
              }

              .kicker {
                display: flex;
                align-items: center;
                gap: 14px;
              }

              .rule {
                display: inline-block;
                width: 40px;
                height: 1px;
                background: #B8862B;
              }

              h1 {
                margin-top: 24px;
                max-width: 1180px;
                font-family: var(--serif);
                font-weight: 380;
                font-size: clamp(44px, 6.4vw, 92px);
                line-height: 1;
                letter-spacing: -0.02em;
                color: #002902;
                text-wrap: balance;
              }

              h1 em {
                font-style: italic;
                font-weight: 340;
              }

              .row {
                margin-top: 56px;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                gap: 40px 56px;
              }

              .intro {
                flex: 1 1 320px;
                max-width: 400px;
                display: flex;
                flex-direction: column;
                gap: 32px;
                padding-bottom: 8px;
              }

              .lead {
                font-size: 19px;
                line-height: 1.6;
                color: #2F3F31;
              }

              .ctas {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
              }

              .text-link {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                min-height: 44px;
                color: #002902;
                font-weight: 700;
                font-size: 16px;
                text-decoration: underline;
                text-underline-offset: 6px;
                text-decoration-color: #B8862B;
              }

              .photo {
                flex: 999 1 560px;
                min-width: 0;
              }

              .photo img {
                display: block;
                width: 100%;
                height: clamp(300px, 42vw, 600px);
                object-fit: cover;
                clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
              }

              figcaption {
                margin-top: 14px;
                text-align: right;
                font-size: 14px;
                color: #4A5A4C;
              }

              .note {
                margin-top: 14px;
                font-size: 15px;
                color: #4A5A4C;
              }

              .note a {
                font-weight: 700;
              }

              @media (max-width: 640px) {
                .hero {
                  padding: 28px 0 40px;
                }

                .kicker {
                  gap: 10px;
                }

                .rule {
                  width: 28px;
                }

                h1 {
                  margin-top: 16px;
                  font-size: 40px;
                  line-height: 1.02;
                  text-wrap: wrap;
                }

                .row {
                  margin-top: 0;
                  flex-direction: column;
                  flex-wrap: nowrap;
                  align-items: stretch;
                  gap: 0;
                }

                .photo {
                  order: -1;
                  flex: none;
                  margin: 24px calc(-1 * var(--gutter)) 0;
                }

                .photo img {
                  height: 300px;
                  clip-path: polygon(16% 0, 100% 0, 100% 100%, 0 100%);
                }

                .intro {
                  flex: none;
                  max-width: none;
                  padding-bottom: 0;
                }

                .lead {
                  margin-top: 24px;
                  font-size: 16px;
                  line-height: 1.6;
                }

                .note-m {
                  margin-top: 16px;
                  font-size: 15px;
                }
              }
            `}</style>
        </section>
    );
}
