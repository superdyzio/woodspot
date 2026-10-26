import s from './Ewolucja.module.css';
import { dm } from './content';
import { Txt, cx } from './ui';

const EYEBROW = dm('Woodspot Bush & Fun · Siemianice pod Wrocławiem', 'Siemianice pod Wrocławiem');
const LEAD = dm(
    'Niemal 10 hektarów lasów, polan i stawów – ogrodzonych, oświetlonych i zasilanych wyłącznie zieloną energią.',
    'Niemal 10 hektarów lasów, polan i stawów – ogrodzonych, oświetlonych i zasilanych zieloną energią.'
);

export default function Hero() {
    return (
        <section id="start" data-section="start" className={s.hero}>
            <img
                src="/main-section.png"
                alt="Staw z wierzbą płaczącą na terenie Woodspot"
                className={cx(s.cover, s.heroImg)}
            />
            <div aria-hidden="true" className={s.heroShade} />
            <div className={s.heroContent}>
                <p className={s.heroEyebrow}>
                    <Txt value={EYEBROW} />
                </p>
                <h1 className={s.heroTitle}>
                    <span className={s.heroLine1}>Natura i zabawa</span>
                    <span className={s.heroLine2}>
                        <span aria-hidden="true" className={s.heroRule} />
                        <span className={s.nowrap}>napełnia to miejsce</span>
                        <span aria-hidden="true" className={s.heroRule} />
                    </span>
                    <span className={s.heroLine3}>pozytywną energią</span>
                </h1>
                <p className={s.heroText}>
                    <Txt value={LEAD} />
                </p>
            </div>
        </section>
    );
}
