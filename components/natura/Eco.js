import { ECO_STEPS, padIndex } from './content';
import { Copy, Swap } from './ui';

export default function Eco() {
    return (
        <section id="eko" data-section="eko" className="eco">
            <div className="container inner">
                <div className="copy">
                    <p className="eyebrow">Eko</p>
                    <h2>Czerpiemy z natury energię, <em>stając się jej częścią</em></h2>
                    <p className="lead">
                        <Swap
                            d="Staramy się żyć w zgodzie z otaczającą nas naturą i dbać o nią. Dlatego teren naszego obiektu zasilany jest wyłącznie odnawialnymi źródłami energii."
                            m="Staramy się żyć w zgodzie z otaczającą nas naturą i dbać o nią. Dlatego teren obiektu zasilany jest wyłącznie odnawialnymi źródłami energii."
                        />
                    </p>
                    <ol className="steps">
                        {ECO_STEPS.map((step, i) => (
                            <li key={step.d}>
                                <span className="num">{padIndex(i)}</span>
                                <Copy value={step} />
                            </li>
                        ))}
                    </ol>
                </div>
                <figure className="photo">
                    <img src="/about-section-2.jpg" alt="Panele fotowoltaiczne na łące, w tle drzewa" loading="lazy" />
                </figure>
            </div>

            <style jsx>{`
              .eco {
                background: #EEF2EC;
                padding: var(--section-y) 0;
              }

              .inner {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 48px 80px;
              }

              .copy {
                flex: 1 1 460px;
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 20px;
              }

              h2 {
                font-family: var(--serif);
                font-weight: 360;
                font-size: clamp(30px, 3.34vw, 48px);
                line-height: 1.08;
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

              .steps {
                margin-top: 8px;
                display: flex;
                flex-direction: column;
                border-top: 1px solid #CBD5C9;
              }

              .steps li {
                display: grid;
                grid-template-columns: 44px minmax(0, 1fr);
                gap: 8px;
                padding: 14px 0;
                border-bottom: 1px solid #CBD5C9;
                font-size: 17px;
                line-height: 1.5;
                color: #0F1A10;
              }

              .num {
                font-family: var(--serif);
                color: #8A6114;
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
                clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
              }

              @media (max-width: 640px) {
                .eco {
                  padding: 56px 0 0;
                }

                .inner,
                .copy {
                  display: block;
                }

                h2 {
                  margin-top: 14px;
                  font-size: 28px;
                  line-height: 1.12;
                  letter-spacing: -0.01em;
                  text-wrap: wrap;
                }

                .lead {
                  margin-top: 14px;
                  font-size: 16px;
                  line-height: 1.65;
                }

                .steps {
                  margin-top: 20px;
                }

                .steps li {
                  grid-template-columns: 36px minmax(0, 1fr);
                  gap: 6px;
                  padding: 12px 0;
                  font-size: 15px;
                }

                .photo {
                  margin: 32px calc(-1 * var(--gutter)) 0;
                }

                .photo img {
                  height: 240px;
                  clip-path: polygon(0 14%, 100% 0, 100% 100%, 0 100%);
                }
              }
            `}</style>
        </section>
    );
}
