import { FISH, FISHING_FACTS } from './content';
import { Swap } from './ui';

export default function Fishing() {
    return (
        <section id="lowiska" data-section="lowiska" className="fishing">
            <img
                className="banner"
                src="/fishing-section.jpg"
                alt="Słoneczny staw z wędkarzami na brzegu, brzoza i linia lasu"
                loading="lazy"
            />
            <div className="container inner">
                <div className="card">
                    <p className="eyebrow">Łowiska no-kill</p>
                    <h2>Wpadnij do nas <em>powędkować!</em></h2>
                    <p className="lead">
                        Zabierz dzieci, dziadków czy kółko wędkarskie i sprawdźcie, co skrywa duma naszej miejscówki.
                    </p>
                    <p className="text">
                        <Swap
                            d="Nasz przyjazny środowisku teren oferuje dwa stawy o łącznej powierzchni 1,5 hektara, w których łowicie w formule no-kill. Do dyspozycji jest wiele stanowisk wędkarskich oraz łódki do wynajęcia."
                            m="Dwa stawy o łącznej powierzchni 1,5 hektara, łowienie w formule no-kill, wiele stanowisk wędkarskich i łódki do wynajęcia."
                        />
                    </p>
                    <p className="eyebrow species-title">W stawach znajdziecie</p>
                    <ul className="species" aria-label="Gatunki ryb">
                        {FISH.map((fish) => (
                            <li key={fish}>{fish}</li>
                        ))}
                    </ul>
                    <div className="cta">
                        <a className="btn" href="#rezerwacja">Zarezerwuj stanowisko</a>
                        <p className="price">od [CENA] <span>/ dniówka</span></p>
                    </div>
                </div>

                <dl className="facts only-d">
                    {FISHING_FACTS.map(({ term, value }) => (
                        <div key={term}>
                            <dt className="eyebrow">{term}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <style jsx>{`
              .fishing {
                background: #FFFFFF;
                padding-bottom: var(--section-y);
              }

              .banner {
                display: block;
                width: 100%;
                height: clamp(320px, 45vw, 640px);
                object-fit: cover;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 86%);
              }

              .inner {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                gap: 40px 72px;
              }

              .card {
                position: relative;
                flex: 0 1 600px;
                min-width: 0;
                margin-top: calc(-1 * clamp(80px, 16.6vw, 240px));
                background: #FFFFFF;
                padding: clamp(24px, 3.4vw, 48px);
                display: flex;
                flex-direction: column;
                gap: 16px;
              }

              h2 {
                font-family: var(--serif);
                font-weight: 360;
                font-size: clamp(30px, 3.34vw, 48px);
                line-height: 1.08;
                letter-spacing: -0.015em;
                color: #002902;
              }

              h2 em {
                font-style: italic;
              }

              .lead {
                font-size: 18px;
                line-height: 1.7;
                color: #2F3F31;
              }

              .text {
                font-size: 17px;
                line-height: 1.7;
                color: #2F3F31;
              }

              .species-title {
                margin-top: 8px;
                color: #4A5A4C;
              }

              .species {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 6px 24px;
                font-family: var(--serif);
                font-style: italic;
                font-size: 21px;
                line-height: 1.5;
                color: #002902;
              }

              .cta {
                margin-top: 12px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 16px 24px;
              }

              .price {
                font-family: var(--serif);
                font-size: 22px;
                color: #002902;
              }

              .price span {
                font-family: var(--sans);
                font-size: 15px;
                color: #4A5A4C;
              }

              .facts {
                flex: 1 1 320px;
                min-width: 0;
                padding-top: 56px;
                display: flex;
                flex-direction: column;
              }

              .facts div {
                padding: 22px 0;
                border-top: 1px solid #CBD5C9;
                display: flex;
                flex-direction: column;
                gap: 6px;
              }

              .facts div:last-child {
                border-bottom: 1px solid #CBD5C9;
              }

              .facts dd {
                font-family: var(--serif);
                font-size: 26px;
                line-height: 1.25;
                color: #002902;
              }

              /* Below ~1050px the facts wrap under the card; drop the offset that aligns them beside it. */
              @media (max-width: 1050px) {
                .facts {
                  padding-top: 0;
                }
              }

              @media (max-width: 640px) {
                .banner {
                  height: 340px;
                }

                .inner {
                  display: block;
                }

                .card {
                  margin-top: -64px;
                  padding: 24px 20px;
                  gap: 12px;
                }

                h2 {
                  font-size: 30px;
                  line-height: 1.1;
                  letter-spacing: -0.01em;
                }

                .lead,
                .text {
                  font-size: 16px;
                  line-height: 1.6;
                }

                .species-title {
                  margin-top: 6px;
                }

                .species {
                  gap: 4px 16px;
                  font-size: 19px;
                }

                .cta {
                  margin-top: 8px;
                  flex-direction: column;
                  flex-wrap: nowrap;
                  align-items: stretch;
                  gap: 12px;
                }

                .cta .btn {
                  justify-content: center;
                  min-height: 52px;
                  font-size: 15px;
                }

                .price {
                  text-align: center;
                  font-size: 19px;
                }

                .price span {
                  font-size: 14px;
                }
              }
            `}</style>
        </section>
    );
}
