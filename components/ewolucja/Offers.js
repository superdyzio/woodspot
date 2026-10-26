import s from './Ewolucja.module.css';
import { OFFER_TILES } from './content';
import { FlagIcon } from './icons';
import { responsive } from './images';
import { Eyebrow, Txt, cx } from './ui';

const TILE_ICON_SIZES = '(max-width: 640px) 56px, 76px';

// Offer tiles. Picking a tile puts its first option into the booking bar; a
// tile stays highlighted while any of its options is selected there.
export default function Offers({ offer, onOfferChange }) {
    return (
        <section id="oferta" data-section="oferta" className={s.offer}>
            <div className={cx(s.container, s.offerInner)}>
                <div className={s.offerHead}>
                    <div className={s.offerHeading}>
                        <Eyebrow>Oferta</Eyebrow>
                        <h2 className={s.h2}>Wybierz, jak spędzisz dzień</h2>
                    </div>
                    <p className={cx(s.offerIntro, s.dOnly)}>
                        Kliknij atrakcję, a od razu podstawimy ją do wyszukiwarki wolnych terminów.
                    </p>
                </div>
                <div className={s.tiles}>
                    {OFFER_TILES.map((tile) => {
                        const selected = tile.options.includes(offer);
                        return (
                            <button
                                key={tile.key}
                                type="button"
                                aria-pressed={selected}
                                className={cx(s.tile, selected && s.tileOn)}
                                onClick={() => onOfferChange(tile.options[0])}
                            >
                                {tile.icon ? (
                                    <img {...responsive(tile.icon, TILE_ICON_SIZES)} alt="" className={s.tileIcon} />
                                ) : (
                                    <span aria-hidden="true" className={cx(s.tileIcon, s.tileFlag)}>
                                        <FlagIcon />
                                    </span>
                                )}
                                <span className={s.tileText}>
                                    <span className={s.tileTitle}>
                                        <Txt value={tile.title} />
                                    </span>
                                    <span className={s.tileDesc}>{tile.desc}</span>
                                    <span className={s.tilePrice}>{tile.price}</span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
