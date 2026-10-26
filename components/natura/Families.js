import { FAMILY_PERKS, SAS_URL } from './content';
import { PhotoPlaceholder, Swap } from './ui';

export default function Families() {
    return (
        <section id="rodziny" data-section="rodziny" className="families">
            <div className="container inner">
                <div className="copy">
                    <p className="eyebrow">Dla rodzin i szkół</p>
                    <h2>Bezpiecznie dla najmłodszych</h2>
                    <p className="text">
                        <Swap
                            d="Dzieci na Woodspocie są bezpieczne, bo cały nasz teren jest ogrodzony. Na życzenie zapewnimy animatorów, którzy wykorzystają nasze leśne obszary do przeróżnych aktywności, a plac zabaw zajmie najmłodszych na dłużej niż parę chwil."
                            m="Dzieci na Woodspocie są bezpieczne, bo cały teren jest ogrodzony. Na życzenie zapewnimy animatorów, którzy wykorzystają leśne obszary do przeróżnych aktywności, a plac zabaw zajmie najmłodszych na dłużej niż parę chwil."
                        />
                    </p>
                    <p className="text">
                        Możecie też skorzystać z zajęć survivalowych dla dzieci i dorosłych prowadzonych przez{' '}
                        <a href={SAS_URL} target="_blank" rel="noopener">Szkołę Przygody i Przetrwania SAS</a> – program
                        Fundacji Hobbit
                        <Swap
                            d=", który organizuje czas wolny dzieci i młodzieży tak, by służył ich wszechstronnemu rozwojowi."
                            m="."
                        />
                    </p>
                    <ul className="perks">
                        {FAMILY_PERKS.map((perk) => (
                            <li key={perk}>
                                <span className="diamond" aria-hidden="true" />
                                {perk}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="photo">
                    <PhotoPlaceholder
                        icon="image"
                        label="Miejsce na zdjęcie placu zabaw lub zajęć z animatorem"
                        caption="[ZDJĘCIE: plac zabaw / zajęcia z animatorem]"
                    />
                </div>
            </div>

            <style jsx>{`
              .families {
                background: #EEF2EC;
                padding: clamp(64px, 7.8vw, 112px) 0;
              }

              .inner {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 48px 80px;
              }

              .copy {
                flex: 1 1 480px;
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

              .text {
                font-size: 18px;
                line-height: 1.7;
                color: #2F3F31;
              }

              .text a {
                font-weight: 700;
              }

              .perks {
                margin-top: 4px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
                gap: 12px 24px;
                font-size: 16px;
                font-weight: 600;
                color: #002902;
              }

              .perks li {
                display: flex;
                gap: 12px;
                align-items: center;
              }

              .diamond {
                flex: none;
                width: 8px;
                height: 8px;
                background: #B8862B;
                transform: rotate(45deg);
              }

              .photo {
                flex: 1 1 440px;
                min-width: 0;
                height: clamp(240px, 36vw, 520px);
                clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
              }

              @media (max-width: 640px) {
                .families {
                  padding: 56px 0;
                }

                .inner {
                  flex-direction: column;
                  flex-wrap: nowrap;
                  align-items: stretch;
                  gap: 0;
                }

                .photo {
                  order: -1;
                  flex: none;
                  height: 220px;
                  clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%);
                }

                .copy {
                  flex: none;
                  display: block;
                  margin-top: 28px;
                }

                h2 {
                  margin-top: 14px;
                  font-size: 32px;
                  line-height: 1.1;
                  letter-spacing: -0.01em;
                  text-wrap: wrap;
                }

                .text {
                  margin-top: 14px;
                  font-size: 16px;
                  line-height: 1.65;
                }

                .text + .text {
                  margin-top: 12px;
                }

                .perks {
                  margin-top: 20px;
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  font-size: 15px;
                }
              }
            `}</style>
        </section>
    );
}
