import { PHONE } from './content';
import { PhoneIcon } from './icons';

// Phone-only bar pinned to the bottom of the viewport (hidden above the mobile breakpoint).
export default function StickyBar() {
    return (
        <div data-section="float-1" className="sticky-bar">
            <a className="call" href={PHONE.href}>
                <PhoneIcon size={18} />
                Zadzwoń
            </a>
            <a className="book" href="#rezerwacja">Sprawdź dostępność</a>

            <style jsx>{`
              .sticky-bar {
                display: none;
              }

              .call,
              .book {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-height: 48px;
                font-weight: 700;
                font-size: 15px;
                text-decoration: none;
                border-radius: 2px;
              }

              .call {
                flex: 0 0 auto;
                gap: 8px;
                padding: 0 18px;
                border: 1.5px solid rgba(255, 255, 255, 0.7);
                color: #FFFFFF;
              }

              .book {
                flex: 1 1 auto;
                background: #FFFFFF;
                color: #002902;
              }

              @media (max-width: 640px) {
                .sticky-bar {
                  position: sticky;
                  bottom: 0;
                  z-index: 10;
                  display: flex;
                  gap: 10px;
                  padding: 12px 16px;
                  background: #002902;
                  border-top: 1px solid rgba(255, 255, 255, 0.18);
                }
              }
            `}</style>
        </div>
    );
}
