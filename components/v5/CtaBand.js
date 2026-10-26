import Icon from './Icon';
import { R, onlyDesktop } from './Responsive';
import { PHONE, PHONE_HREF } from './data';
import { responsive } from './images';
import s from './CtaBand.module.css';

export default function CtaBand() {
    return (
        <section aria-label="Rezerwacja" className={s.band} data-section="kontakt-2">
            {/* An 11.7:1 strip under object-fit: cover in a 300px+ tall band: drawn 3500px+ wide at every width. */}
            <img loading="lazy" decoding="async" {...responsive('header-background', '3560px')} alt="" className={s.texture} />
            <div className={s.inner}>
                <div className={s.text}>
                    <h2>Gotowi na dzień w lesie?</h2>
                    <p>
                        <R
                            v={{
                                d: (
                                    <>
                                        Sprawdź wolne terminy albo zadzwoń: <a href={PHONE_HREF}>{PHONE}</a>
                                    </>
                                ),
                                m: 'Sprawdź wolne terminy albo zapytaj o wydarzenie.',
                            }}
                        />
                    </p>
                </div>
                <div className={s.actions}>
                    <a href="#rezerwacja" className={s.primary}>
                        Sprawdź dostępność
                        <Icon name="arrowRight" size={18} stroke={2.2} className={onlyDesktop} />
                    </a>
                    <a href="#wydarzenia" className={s.secondary}>
                        Zapytaj o wydarzenie
                    </a>
                </div>
            </div>
        </section>
    );
}
