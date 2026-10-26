import { useState } from 'react';
import { INQUIRY_FIELDS, INQUIRY_MESSAGE_PLACEHOLDER, PHONE } from './content';
import { ArrowIcon } from './icons';
import { PreviewNotice, useIsMobile } from './ui';

function Field({ id, label, options, pair, ...inputProps }) {
    return (
        <div className={pair ? 'field field--pair' : 'field'}>
            <label htmlFor={id}>{label}</label>
            {options ? (
                <select id={id} defaultValue={options[0]}>
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            ) : (
                <input id={id} {...inputProps} />
            )}
            <style jsx>{`
              .field {
                display: flex;
                flex-direction: column;
                gap: 8px;
              }

              label {
                font-size: 14px;
                font-weight: 700;
                color: #0F1A10;
              }

              input,
              select {
                min-height: 52px;
                padding: 0 16px;
                border: 1px solid #B9C6B7;
                border-radius: 2px;
                background: #FFFFFF;
                font-size: 16px;
                color: #0F1A10;
              }

              select {
                padding: 0 12px;
              }

              @media (max-width: 640px) {
                .field {
                  grid-column: 1 / -1;
                  gap: 6px;
                }

                .field--pair {
                  grid-column: auto;
                }

                input {
                  width: 100%;
                  padding: 0 14px;
                }

                select {
                  padding: 0 10px;
                }
              }
            `}</style>
        </div>
    );
}

// "Zapytaj o wydarzenie" – shows the preview notice instead of sending anything.
export default function InquiryForm() {
    const [sent, setSent] = useState(false);
    const isMobile = useIsMobile();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSent(true);
    };

    return (
        <form className="inquiry" aria-labelledby="inquiry-title" onSubmit={handleSubmit}>
            <div className="head">
                <h3 id="inquiry-title">Zapytaj o wydarzenie</h3>
                <p>Wycena jest indywidualna. Odpowiadamy w [CZAS ODPOWIEDZI].</p>
            </div>

            <div className="fields">
                {INQUIRY_FIELDS.map((field) => (
                    <Field key={field.id} {...field} />
                ))}
                <div className="message">
                    <label htmlFor="inquiry-message">Wiadomość</label>
                    <textarea
                        id="inquiry-message"
                        rows={4}
                        placeholder={isMobile ? INQUIRY_MESSAGE_PLACEHOLDER.m : INQUIRY_MESSAGE_PLACEHOLDER.d}
                    />
                </div>
            </div>

            <div className="actions">
                <button type="submit" className="btn submit">
                    Wyślij zapytanie
                    <ArrowIcon className="only-d" />
                </button>
                <p>albo zadzwoń: <a href={PHONE.href}>{PHONE.label}</a></p>
            </div>

            {sent && <PreviewNotice />}

            <style jsx>{`
              .inquiry {
                margin-top: 72px;
                background: #EEF2EC;
                padding: clamp(24px, 3.4vw, 48px);
              }

              .head {
                display: flex;
                flex-wrap: wrap;
                align-items: baseline;
                justify-content: space-between;
                gap: 8px 32px;
              }

              h3 {
                font-family: var(--serif);
                font-weight: 380;
                font-size: 32px;
                line-height: 1.2;
                color: #002902;
              }

              .head p {
                font-size: 15px;
                color: #4A5A4C;
              }

              .fields {
                margin-top: 32px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
                gap: 20px 24px;
              }

              .message {
                grid-column: 1 / -1;
                display: flex;
                flex-direction: column;
                gap: 8px;
              }

              .message label {
                font-size: 14px;
                font-weight: 700;
                color: #0F1A10;
              }

              textarea {
                min-height: 120px;
                padding: 14px 16px;
                border: 1px solid #B9C6B7;
                border-radius: 2px;
                background: #FFFFFF;
                font-size: 16px;
                color: #0F1A10;
                resize: vertical;
              }

              .actions {
                margin-top: 24px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 16px 24px;
              }

              .actions p {
                font-size: 15px;
                color: #4A5A4C;
              }

              .actions a {
                font-weight: 700;
              }

              .inquiry :global(.notice) {
                margin-top: 20px;
              }

              @media (max-width: 640px) {
                .inquiry {
                  margin-top: 28px;
                  padding: 20px;
                }

                .head {
                  flex-direction: column;
                  flex-wrap: nowrap;
                  align-items: stretch;
                  gap: 14px;
                }

                h3 {
                  font-size: 26px;
                }

                .head p {
                  font-size: 14px;
                  line-height: 1.5;
                }

                .fields {
                  margin-top: 14px;
                  grid-template-columns: minmax(0, 1fr) 120px;
                  gap: 14px 12px;
                }

                .message {
                  gap: 6px;
                }

                textarea {
                  min-height: 110px;
                  padding: 12px 14px;
                }

                .actions {
                  margin-top: 18px;
                  flex-direction: column;
                  flex-wrap: nowrap;
                  align-items: stretch;
                  gap: 14px;
                }

                .submit {
                  justify-content: center;
                }

                .actions p {
                  font-size: 14px;
                  text-align: center;
                }
              }
            `}</style>
        </form>
    );
}
