import Icon from './Icon';
import { R, onlyDesktop } from './Responsive';
import { PHONE, PHONE_HREF } from './data';
import s from './CtaBand.module.css';

export default function CtaBand() {
    return (
        <section aria-label="Rezerwacja" className={s.band} data-section="kontakt-2">
            <img src="/header-background.png" alt="" className={s.texture} loading="lazy" decoding="async" />
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
