import { HERO_STATS, MAP_LEGEND } from './data';
import { SiteMap, ZoneChips } from './SiteMap';
import ZoneCard from './ZoneCard';
import BookingForm from './BookingForm';
import { V, cx } from './Variant';
import shared from './shared.module.css';
import styles from './Hero.module.css';

// Hero: intro, the clickable site plan with the selected zone's card, and the booking bar.
export default function Hero({ selection }) {
    const { zone, index, total, offer, setOffer, select, prev, next } = selection;
    const preselectOffer = () => {
        if (zone.offer) setOffer(zone.offer);
    };

    return (
        <section id="mapa" className={styles.hero} data-section="mapa">
            <div className={cx(shared.contours, styles.contours)} aria-hidden="true" />
            <div className={cx(shared.container, styles.inner)}>
                <div className={styles.intro}>
                    <div className={styles.introMain}>
                        <p className={styles.eyebrow}>
                            <V v={{ d: 'WOODSPOT BUSH & FUN · SIEMIANICE, GM. OBORNIKI ŚLĄSKIE', m: 'WOODSPOT BUSH & FUN · SIEMIANICE' }} />
                        </p>
                        <h1 className={styles.title}>Poznaj teren, zanim przyjedziesz.</h1>
                    </div>
                    <div className={styles.introSide}>
                        <p className={styles.lede}>
                            <V
                                v={{
                                    d: 'Natura i zabawa napełniają to miejsce pozytywną energią. Niemal 10 hektarów lasów, polan i stawów pod Wrocławiem – kliknij strefę na mapie, zobacz, co w niej czeka, i od razu sprawdź wolny termin.',
                                    m: 'Natura i zabawa napełniają to miejsce pozytywną energią. Kliknij strefę na mapie i od razu sprawdź wolny termin.',
                                }}
                            />
                        </p>
                        <ul className={cx(styles.stats, shared.dOnly)}>
                            {HERO_STATS.map((stat) => <li key={stat} className={styles.stat}>{stat}</li>)}
                        </ul>
                    </div>
                </div>

                <div className={styles.mapRow}>
                    <div className={styles.mapCol}>
                        <SiteMap selected={zone.id} onSelect={select} className={shared.dOnly} />
                        <SiteMap selected={zone.id} onSelect={select} mobile className={shared.mOnly} />
                        <div className={styles.mapFooter}>
                            <p className={styles.mapNote}>Mapa poglądowa – układ stref do uzupełnienia wg planu terenu</p>
                            <ul aria-label="Legenda mapy" className={cx(styles.legend, shared.dOnly)}>
                                {MAP_LEGEND.map((item) => (
                                    <li key={item.key} className={styles.legendItem}>
                                        <span aria-hidden="true" className={styles[`swatch_${item.key}`]} />
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ZoneChips selected={zone.id} onSelect={select} className={shared.mOnly} />
                    </div>
                    <ZoneCard zone={zone} index={index} total={total} onPrev={prev} onNext={next} onCta={preselectOffer} />
                </div>

                <BookingForm offer={offer} onOfferChange={setOffer} />
            </div>
        </section>
    );
}
