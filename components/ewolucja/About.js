import s from './Ewolucja.module.css';
import PhotoPanel from './PhotoPanel';
import { ABOUT_STATS, ECO_ITEMS, dm } from './content';
import { EcoIcon } from './icons';
import { Eyebrow, Stats, Txt, cx } from './ui';

export function About() {
    return (
        <PhotoPanel
            id="o-nas"
            section="o-nas"
            image="/about-section-1.jpg"
            alt="Teren Woodspot z lotu ptaka jesienią – złote brzozy, polana i las"
            slant="up"
            photoHeight={280}
        >
            <Eyebrow>O nas</Eyebrow>
            <h2 className={s.h2}>Niemal 10 hektarów natury</h2>
            <p className={s.body}>
                Woodspot to ogrodzony i w znacznym stopniu oświetlony teren niemal 10 hektarów przestrzeni plenerowej.
                Wypełniony lasami, polanami i stawami wędkarskimi stwarza pole do organizacji wydarzeń, imprez
                okolicznościowych czy weekendowego wypoczynku ze znajomymi.
            </p>
            <Stats items={ABOUT_STATS} />
            <a href="#oferta" className={cx(s.btnOutline, s.alignStart)}>
                Zobacz ofertę
            </a>
        </PhotoPanel>
    );
}

const ECO_TEXT = dm(
    'Staramy się żyć w zgodzie z otaczającą nas naturą i dbać o nią. Dlatego teren naszego obiektu zasilany jest wyłącznie odnawialnymi źródłami energii. Segregujemy odpady, a te możliwe do ponownego użycia, jak np. opony, zmieniamy w część Woodspota. Dajemy życie kolejnym pokoleniom ryb w naszych stawach i sadzimy młode drzewka, które zagęszczają szkółkę choinek.',
    'Teren zasilamy wyłącznie odnawialnymi źródłami energii. Segregujemy odpady, opony zmieniamy w część Woodspota, zarybiamy stawy i sadzimy drzewka w szkółce choinek.'
);

export function Eco() {
    return (
        <PhotoPanel
            section="imprezy-2"
            labelledBy="eko"
            image="/about-section-2.jpg"
            alt="Panele fotowoltaiczne na łące, za nimi drzewa"
            slant="down"
            minHeight={640}
            photoHeight={240}
        >
            <Eyebrow>Zasilani słońcem</Eyebrow>
            <h2 id="eko" className={s.h2}>
                W zgodzie z naturą
            </h2>
            <p className={s.body}>
                <Txt value={ECO_TEXT} />
            </p>
            <ul className={s.ecoList}>
                {ECO_ITEMS.map((item) => (
                    <li key={item.icon}>
                        <EcoIcon name={item.icon} />
                        <Txt value={item.label} />
                    </li>
                ))}
            </ul>
        </PhotoPanel>
    );
}
