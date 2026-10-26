import { useState } from 'react';
import { BOOKABLE } from './content';
import { ArrowIcon, ChevronIcon } from './icons';
import { PreviewNotice, Swap } from './ui';

// "Chcę zarezerwować … na … dla … osób": one inline sentence on desktop,
// stacked fields with small labels on mobile. Nothing is sent anywhere.
export default function BookingForm() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSent(true);
    };

    return (
        <form id="rezerwacja" className="booking" aria-label="Sprawdź dostępność" onSubmit={handleSubmit}>
            <div className="group">
                <label htmlFor="booking-what" className="lead-in">Chcę zarezerwować</label>
                <span className="select">
                    <select id="booking-what" aria-label="Co? Wybierz atrakcję" defaultValue={BOOKABLE[0]}>
                        {BOOKABLE.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                    <ChevronIcon stroke="#002902" className="chevron" />
                </span>
            </div>

            <div className="pair">
                <div className="group group--when">
                    <label htmlFor="booking-when" className="cue"><Swap d="na" m="Kiedy?" /></label>
                    <input id="booking-when" className="line when" type="text" placeholder="wybierz datę" aria-label="Kiedy? Data" />
                </div>
                <div className="group group--who">
                    <label htmlFor="booking-who" className="cue"><Swap d="dla" m="Ile osób?" /></label>
                    <input id="booking-who" className="line who" type="number" min="1" defaultValue={8} aria-label="Ile osób?" />
                </div>
                <span className="cue only-d">osób</span>
            </div>

            <button type="submit" className="btn submit">
                Sprawdź dostępność
                <ArrowIcon />
            </button>

            {sent && <PreviewNotice />}

            <style jsx>{`
              .booking {
                margin-top: 48px;
                background: #FFFFFF;
                border: 1px solid #D5DDD3;
                padding: 30px var(--gutter);
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 14px 16px;
                font-family: var(--serif);
                font-size: clamp(22px, 1.95vw, 28px);
                color: #002902;
              }

              .group,
              .pair {
                display: contents;
              }

              .lead-in,
              .cue {
                font-weight: 380;
              }

              .select {
                position: relative;
                display: inline-flex;
                align-items: center;
              }

              select,
              .line {
                font-family: var(--serif);
                font-size: inherit;
                font-style: italic;
                color: #002902;
                background: transparent;
                border: 0;
                border-bottom: 2px solid #B8862B;
                border-radius: 0;
                min-height: 52px;
              }

              select {
                appearance: none;
                -webkit-appearance: none;
                padding: 4px 40px 6px 2px;
              }

              .select :global(.chevron) {
                position: absolute;
                right: 8px;
                pointer-events: none;
              }

              .line {
                padding: 4px 2px 6px;
              }

              .when {
                width: 220px;
              }

              .who {
                width: 76px;
                text-align: center;
              }

              .submit {
                margin-left: auto;
              }

              @media (max-width: 640px) {
                .booking {
                  margin-top: 24px;
                  padding: 20px;
                  flex-direction: column;
                  flex-wrap: nowrap;
                  align-items: stretch;
                  gap: 16px;
                  font-family: var(--sans);
                  font-size: 16px;
                  color: #0F1A10;
                }

                .group {
                  display: flex;
                  flex-direction: column;
                  gap: 6px;
                }

                .pair {
                  display: flex;
                  gap: 14px;
                }

                .group--when {
                  flex: 1 1 auto;
                  min-width: 0;
                }

                .group--who {
                  flex: 0 0 96px;
                }

                .lead-in {
                  font-family: var(--serif);
                  font-size: 22px;
                  font-weight: 400;
                  color: #002902;
                }

                .cue {
                  font-size: 13px;
                  font-weight: 700;
                  color: #4A5A4C;
                }

                .select {
                  display: flex;
                }

                select {
                  width: 100%;
                  font-size: 22px;
                  padding: 4px 36px 6px 2px;
                }

                .select :global(.chevron) {
                  right: 6px;
                }

                .line {
                  width: 100%;
                  font-size: 20px;
                  min-height: 48px;
                }

                .submit {
                  margin: 4px 0 0;
                  width: 100%;
                  justify-content: center;
                }
              }
            `}</style>
        </form>
    );
}
