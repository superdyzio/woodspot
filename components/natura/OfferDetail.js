import { Copy, PhotoPlaceholder } from './ui';

// One attraction's details. "panel" is the desktop detail column next to the index,
// "accordion" is the body that unfolds under a row on mobile.
export default function OfferDetail({ offer, variant }) {
    const isPanel = variant === 'panel';
    const { title, image, placeholder, text, bullets, price, unit } = offer;

    return (
        <article className={`detail ${variant}`} aria-label={title}>
            <div className="media">
                {image ? (
                    <img src={image.src} alt={image.alt} loading="lazy" />
                ) : (
                    <PhotoPlaceholder {...placeholder} />
                )}
            </div>

            <div className="content">
                {isPanel && <h3>{title}</h3>}
                <p className="text"><Copy value={text} /></p>
                <ul className="bullets">
                    {bullets.map((bullet, i) => (
                        <li key={i}>
                            <span className="dash" aria-hidden="true" />
                            <Copy value={bullet} />
                        </li>
                    ))}
                </ul>
                <div className="price-row">
                    <p className="price">
                        {price}
                        {unit && <> <span className="unit">{unit}</span></>}
                    </p>
                    <a className="cta" href="#rezerwacja">{isPanel ? 'Sprawdź dostępność' : 'Sprawdź termin'}</a>
                </div>
            </div>

            <style jsx>{`
              .media {
                height: clamp(240px, 31vw, 440px);
                clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%);
              }

              .media img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }

              .content {
                padding-top: 28px;
                display: flex;
                flex-direction: column;
                gap: 18px;
              }

              h3 {
                font-family: var(--serif);
                font-weight: 380;
                font-size: 34px;
                line-height: 1.15;
                color: #002902;
              }

              .text {
                font-size: 17px;
                line-height: 1.65;
                color: #2F3F31;
              }

              .bullets {
                display: flex;
                flex-direction: column;
                gap: 10px;
                font-size: 16px;
                color: #0F1A10;
              }

              .bullets li {
                display: flex;
                gap: 12px;
                align-items: baseline;
              }

              .dash {
                flex: none;
                width: 14px;
                height: 1px;
                background: #B8862B;
                transform: translateY(-4px);
              }

              .price-row {
                margin-top: 6px;
                padding-top: 22px;
                border-top: 1px solid #CBD5C9;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                gap: 16px;
              }

              .price {
                font-family: var(--serif);
                font-size: 24px;
                color: #002902;
              }

              .unit {
                font-family: var(--sans);
                font-size: 15px;
                color: #4A5A4C;
              }

              .cta {
                display: inline-flex;
                align-items: center;
                gap: 12px;
                min-height: 52px;
                padding: 0 24px;
                background: #002902;
                color: #FFFFFF;
                text-decoration: none;
                font-weight: 700;
                font-size: 15px;
                border-radius: 2px;
              }

              /* Mobile accordion body */
              .accordion {
                padding: 0 0 24px;
                display: flex;
                flex-direction: column;
                gap: 14px;
              }

              .accordion .media {
                height: 220px;
                clip-path: polygon(0 0, 100% 0, 100% 100%, 14% 100%);
              }

              .accordion .content {
                display: contents;
              }

              .accordion .text {
                font-size: 16px;
                line-height: 1.6;
              }

              .accordion .bullets {
                gap: 8px;
                font-size: 15px;
                line-height: 1.45;
                color: inherit;
              }

              .accordion .bullets li {
                gap: 10px;
              }

              .accordion .dash {
                width: 12px;
              }

              .accordion .price-row {
                margin-top: 0;
                padding-top: 6px;
                border-top: 0;
                flex-wrap: nowrap;
                gap: 12px;
              }

              .accordion .price {
                font-size: 20px;
              }

              .accordion .unit {
                font-size: 14px;
              }

              .accordion .cta {
                min-height: 48px;
                padding: 0 18px;
                font-size: 14px;
              }
            `}</style>
        </article>
    );
}
