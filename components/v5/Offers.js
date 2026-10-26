import { useState } from 'react';
import Icon from './Icon';
import { R, cx, onlyDesktop, onlyMobile } from './Responsive';
import { OFFERS, OFFER_FILTERS } from './data';
import ui from './ui.module.css';
import s from './Offers.module.css';

// Polish plural: 1 atrakcja, 2–4 atrakcje, 5+ atrakcji (as in the design).
function countLabel(count) {
    if (count === 1) return '1 atrakcja';
    return `${count} ${count >= 2 && count <= 4 ? 'atrakcje' : 'atrakcji'}`;
}

function OfferCard({ offer }) {
    const { tag, title, image, alt, placeholder, bullets, blurb, price, quote, dark } = offer;
    return (
        <article className={cx(s.card, dark && s.dark)}>
            <div className={cx(s.media, placeholder && s.placeholder)}>
                {placeholder ? (
                    <>
                        <div className={s.dashed} />
                        <div className={s.placeholderInner}>
                            <img src={placeholder.icon} alt="" />
                            <span>{placeholder.label}</span>
                        </div>
                    </>
                ) : (
                    <img src={image} alt={alt} loading="lazy" decoding="async" />
                )}
                <span className={s.tag}>{tag}</span>
            </div>
            <div className={s.body}>
                <h3>{title}</h3>
                <ul className={cx(s.bullets, onlyDesktop)}>
                    {bullets.map((bullet) => (
                        <li key={bullet}>
                            <Icon name="check" size={18} stroke={2.4} color={dark ? '#B9D7B4' : '#2E6B33'} />
                            {bullet}
                        </li>
                    ))}
                </ul>
                <p className={cx(s.blurb, onlyMobile)}>{blurb}</p>
                <div className={s.foot}>
                    {quote ? (
                        <strong className={s.quote}>{quote}</strong>
                    ) : (
                        <span className={s.price}>
                            <span>{price.before}</span> <strong>[CENA]</strong>
                            {price.after && (
                                <>
                                    {' '}
                                    <span>{price.after}</span>
                                </>
                            )}
                        </span>
                    )}
                    <a href={dark ? '#wydarzenia' : '#rezerwacja'} className={s.choose}>
                        {dark ? 'Zapytaj' : 'Wybierz'}
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function Offers() {
    const [filter, setFilter] = useState('all');
    const visible = OFFERS.filter((offer) => filter === 'all' || offer.category === filter);

    return (
        <section id="oferta" className={s.section} data-section="oferta">
            <div className={s.wrap}>
                <div className={s.head}>
                    <div className={s.intro}>
                        <p className={ui.eyebrow}>Oferta</p>
                        <h2 className={cx(ui.title, ui.balance)}>
                            <R v={{ d: 'Wybierz, jak spędzisz dzień w Woodspocie', m: 'Wybierz, jak spędzisz dzień' }} />
                        </h2>
                        <p className={cx(s.subtitle, onlyDesktop)}>
                            Każda atrakcja ma swój kalendarz – wybierasz, rezerwujesz, przyjeżdżasz.
                        </p>
                    </div>
                    <div role="group" aria-label="Filtruj atrakcje" className={cx(s.filters, ui.scroller)}>
                        {OFFER_FILTERS.map(({ id, label }) => (
                            <button
                                key={id}
                                type="button"
                                className={ui.pill}
                                aria-pressed={id === filter}
                                onClick={() => setFilter(id)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
                <p className={s.count} aria-live="polite">
                    {countLabel(visible.length)}
                    <span className={onlyMobile}> · przesuń w bok</span>
                </p>
                <div className={cx(s.cards, ui.scroller)}>
                    {visible.map((offer) => (
                        <OfferCard key={offer.id} offer={offer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
