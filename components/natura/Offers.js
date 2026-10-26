import { useState } from 'react';
import OfferDetail from './OfferDetail';
import { OFFERS, padIndex } from './content';
import { ArrowIcon, ChevronIcon } from './icons';
import { isMobileViewport, useIsMobile } from './ui';

// Attractions index 01–06. Desktop: picking a row shows its details in the panel beside the list.
// Mobile: rows are an accordion, and tapping the open row closes it (active = -1).
export default function Offers() {
    const [active, setActive] = useState(0);
    const isMobile = useIsMobile();

    const pick = (index) => {
        const toggles = isMobileViewport();
        setActive((current) => (toggles && current === index ? -1 : index));
    };

    // -1 only happens on mobile; if the window is then widened, the panel falls back to the first item.
    const panelOffer = OFFERS[active >= 0 ? active : 0];

    return (
        <section id="oferta" data-section="oferta" className="offers">
            <div className="container">
                <div className="head">
                    <div className="title">
                        <p className="eyebrow">Oferta</p>
                        <h2>Sześć sposobów na dzień wśród natury</h2>
                    </div>
                    <p className="intro">
                        Spoty, wiaty, nocleg, paintball, łowiska i sport – wszystko na jednym, ogrodzonym terenie.
                        <span className="only-d"> Wybierz, od czego zaczniecie.</span>
                    </p>
                </div>

                <div className="body">
                    <ul className="index" aria-label="Atrakcje">
                        {OFFERS.map((offer, i) => {
                            const isActive = active === i;
                            const state = isMobile ? { 'aria-expanded': isActive } : { 'aria-pressed': isActive };
                            return (
                                <li key={offer.title} className={isActive ? 'row is-active' : 'row'}>
                                    <button type="button" className="row-button" onClick={() => pick(i)} {...state}>
                                        <span className="num">{padIndex(i)}</span>
                                        <span className="label">
                                            <span className="name">{offer.title}</span>
                                            <span className="teaser">{offer.teaser}</span>
                                        </span>
                                        <ArrowIcon size={22} stroke="#002902" className="only-d arrow" />
                                        <ChevronIcon stroke="#002902" className="only-m chevron" />
                                    </button>
                                    {isActive && (
                                        <div className="only-m">
                                            <OfferDetail offer={offer} variant="accordion" />
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <div className="panel only-d">
                        <OfferDetail key={panelOffer.title} offer={panelOffer} variant="panel" />
                    </div>
                </div>
            </div>

            <style jsx>{`
              .offers {
                background: #EEF2EC;
                padding: var(--section-y) 0;
              }

              .head {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: space-between;
                gap: 24px 64px;
              }

              .title {
                flex: 1 1 560px;
                min-width: 0;
              }

              h2 {
                margin-top: 16px;
                max-width: 720px;
                font-family: var(--serif);
                font-weight: 360;
                font-size: clamp(34px, 3.9vw, 56px);
                line-height: 1.05;
                letter-spacing: -0.015em;
                color: #002902;
                text-wrap: balance;
              }

              .intro {
                flex: 0 1 420px;
                font-size: 17px;
                line-height: 1.65;
                color: #2F3F31;
              }

              .body {
                margin-top: 64px;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                gap: 48px 64px;
              }

              .index {
                flex: 1 1 440px;
                min-width: 0;
                border-bottom: 1px solid #CBD5C9;
              }

              .row {
                border-top: 1px solid #CBD5C9;
              }

              .row-button {
                width: 100%;
                display: grid;
                grid-template-columns: 56px minmax(0, 1fr) 24px;
                align-items: center;
                gap: 8px;
                padding: 22px 20px;
                text-align: left;
                border: 0;
                background: transparent;
                color: #0F1A10;
              }

              .is-active .row-button {
                background: #FFFFFF;
              }

              .num {
                font-family: var(--serif);
                font-size: 18px;
                color: #8A6114;
              }

              .label {
                display: flex;
                flex-direction: column;
                gap: 4px;
              }

              .name {
                font-family: var(--serif);
                font-size: 28px;
                line-height: 1.2;
                color: #3D4E3F;
              }

              .is-active .name {
                font-style: italic;
                color: #002902;
              }

              .teaser {
                font-size: 15px;
                color: #4A5A4C;
              }

              .row-button :global(.arrow) {
                opacity: 0;
              }

              .is-active .row-button :global(.arrow) {
                opacity: 1;
              }

              .is-active .row-button :global(.chevron) {
                transform: rotate(180deg);
              }

              .panel {
                flex: 1.25 1 520px;
                min-width: 0;
              }

              @media (max-width: 640px) {
                .head {
                  display: block;
                }

                h2 {
                  margin-top: 14px;
                  max-width: none;
                  font-size: 32px;
                  line-height: 1.1;
                  letter-spacing: -0.01em;
                  text-wrap: wrap;
                }

                .intro {
                  margin-top: 14px;
                  font-size: 16px;
                  line-height: 1.6;
                }

                .body {
                  margin-top: 28px;
                  display: block;
                }

                .row-button {
                  grid-template-columns: 36px minmax(0, 1fr) 24px;
                  padding: 18px 0;
                }

                .is-active .row-button {
                  background: transparent;
                }

                .num {
                  font-size: 15px;
                }

                .label {
                  gap: 2px;
                }

                .name {
                  font-size: 22px;
                }

                .teaser {
                  font-size: 14px;
                }
              }
            `}</style>
        </section>
    );
}
