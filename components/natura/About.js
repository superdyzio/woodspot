import { STATS } from './content';
import { Copy } from './ui';

export default function About() {
    return (
        <section id="o-nas" data-section="o-nas" className="about">
            <div className="container">
                <div className="intro">
                    <div className="claim">
                        <p className="eyebrow">O nas</p>
                        <p className="statement">
                            Woodspot to ogrodzony i w znacznym stopniu oświetlony teren niemal 10 hektarów przestrzeni plenerowej.
                        </p>
                    </div>
                    <div className="body">
                        <p>
                            Wypełniony lasami, polanami i stawami wędkarskimi stwarza pole do organizacji wydarzeń, imprez
                            okolicznościowych czy weekendowego wypoczynku ze znajomymi.
                        </p>
                        <p>Wizja połączenia natury i zabawy jest tym, co napełnia to miejsce pozytywną energią.</p>
                    </div>
                </div>

                <dl className="stats">
                    {STATS.map(({ value, label }) => (
                        <div key={value} className="stat">
                            <dt><Copy value={label} /></dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>

                <figure className="aerial">
                    <img
                        src="/about-section-1.jpg"
                        alt="Widok z lotu ptaka: złote jesienne brzozy, polana z przeszkodami i las"
                        loading="lazy"
                    />
                    <figcaption>Widok z lotu ptaka – jesień na Woodspocie: brzozy, polany i las.</figcaption>
                </figure>
            </div>

            <style jsx>{`
              .about {
                background: #FFFFFF;
                padding: var(--section-y) 0;
              }

              .intro {
                display: flex;
                flex-wrap: wrap;
                gap: 40px 80px;
              }

              .claim {
                flex: 1 1 520px;
                min-width: 0;
              }

              .statement {
                margin-top: 20px;
                font-family: var(--serif);
                font-weight: 360;
                font-size: clamp(26px, 2.8vw, 40px);
                line-height: 1.25;
                letter-spacing: -0.01em;
                color: #002902;
                text-wrap: pretty;
              }

              .body {
                flex: 1 1 400px;
                min-width: 0;
                padding-top: 44px;
                display: flex;
                flex-direction: column;
                gap: 16px;
              }

              .body p {
                font-size: 18px;
                line-height: 1.7;
                color: #2F3F31;
              }

              .stats {
                margin-top: 72px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
                gap: 32px;
              }

              .stat {
                border-top: 1px solid #CBD5C9;
                padding-top: 24px;
                display: flex;
                flex-direction: column-reverse;
                gap: 8px;
              }

              dt {
                font-size: 15px;
                line-height: 1.5;
                color: #4A5A4C;
              }

              dd {
                font-family: var(--serif);
                font-weight: 340;
                font-size: clamp(36px, 3.9vw, 56px);
                line-height: 1;
                color: #002902;
              }

              .aerial {
                margin-top: 72px;
              }

              .aerial img {
                display: block;
                width: 100%;
                height: clamp(240px, 36vw, 520px);
                object-fit: cover;
                clip-path: polygon(0 0, 100% 0, 100% 84%, 0 100%);
              }

              figcaption {
                margin-top: 16px;
                font-size: 14px;
                color: #4A5A4C;
              }

              /* Below ~1060px the two intro columns wrap; the top offset only makes sense side by side. */
              @media (max-width: 1059px) {
                .body {
                  padding-top: 0;
                }
              }

              @media (max-width: 640px) {
                .intro {
                  display: block;
                }

                .statement {
                  margin-top: 14px;
                  font-size: 26px;
                  line-height: 1.3;
                  letter-spacing: normal;
                  text-wrap: wrap;
                }

                .body {
                  margin-top: 16px;
                  padding-top: 0;
                  gap: 12px;
                }

                .body p {
                  font-size: 16px;
                  line-height: 1.65;
                }

                .stats {
                  margin-top: 32px;
                  grid-template-columns: repeat(2, minmax(0, 1fr));
                  gap: 24px 16px;
                }

                .stat {
                  padding-top: 14px;
                  gap: 6px;
                }

                dt {
                  font-size: 14px;
                  line-height: 1.45;
                }

                dd {
                  font-size: 36px;
                }

                .aerial {
                  margin: 32px calc(-1 * var(--gutter)) 0;
                }

                .aerial img {
                  height: 240px;
                }

                figcaption {
                  margin-top: 12px;
                  padding: 0 20px;
                  font-size: 13px;
                  line-height: 1.5;
                }
              }
            `}</style>
        </section>
    );
}
