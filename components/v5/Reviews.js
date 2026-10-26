import Icon from './Icon';
import { cx, onlyDesktop, onlyMobile } from './Responsive';
import { REVIEW_PLACEHOLDERS } from './data';
import ui from './ui.module.css';
import s from './Reviews.module.css';

const STARS = [1, 2, 3, 4, 5];

// Placeholders until real Google reviews are filled in.
export default function Reviews() {
    return (
        <section id="opinie" className={s.section} data-section="opinie">
            <div className={s.wrap}>
                <div className={s.head}>
                    <h2>Co mówią goście</h2>
                    <span>[OCENA Google] · [LICZBA] opinii</span>
                </div>
                <div className={cx(s.cards, ui.scroller)}>
                    {Array.from({ length: REVIEW_PLACEHOLDERS }, (_, i) => (
                        <figure key={i} className={s.card}>
                            <span className={cx(s.stars, onlyDesktop)} aria-hidden="true">
                                {STARS.map((n) => (
                                    <Icon key={n} name="star" size={18} stroke={1.8} />
                                ))}
                            </span>
                            <blockquote>[OPINIA KLIENTA – do uzupełnienia]</blockquote>
                            <figcaption>
                                [Imię] · Google<span className={onlyMobile}> · [OCENA]</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
