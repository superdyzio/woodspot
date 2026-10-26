import s from './Ewolucja.module.css';
import PhotoPanel from './PhotoPanel';
import SectionIntro from './SectionIntro';
import { PAINTBALL_DETAILS, PAINTBALL_STATS, dm } from './content';
import { responsive } from './images';
import { Eyebrow, Stats, Txt, cx } from './ui';

const FIELDS_TEXT = dm(
    'Nasza strefa paintballa mieści aż dwa poligony zaaranżowane w naturalnym otoczeniu drzew. W centrum dużego pola stoi fort, a wokół niego dwie strefy pełne zasłon i przeszkód. Ich układ pozwala rozgrywać mecze według wielu różnych scenariuszy.',
    'Dwa poligony zaaranżowane wśród drzew. W centrum dużego pola stoi fort, a wokół niego dwie strefy pełne zasłon i przeszkód – bardziej otwarta i zamknięta, leśna.'
);

// Phones: 280 px swipeable cards. Wider: the 1200 px container with 40 px
// padding holds one, two (from 752 px) or three (from 1104 px) columns, 32 px apart.
const DETAIL_PHOTO_SIZES =
    '(max-width: 640px) 280px, (max-width: 751px) calc(100vw - 80px), (max-width: 1103px) calc(50vw - 56px), (max-width: 1280px) calc(33.33vw - 48px), 379px';

const PACKAGE_TITLE = dm('Pakiety paintballowe od [CENA]', 'Pakiety od [CENA]');
const PACKAGE_TEXT = dm(
    'Czas gry zależy od wykupionego pakietu i tempa, w jakim wykorzystacie amunicję. [PAKIET – do uzupełnienia]',
    'Czas gry zależy od pakietu i tempa, w jakim wykorzystacie amunicję. [PAKIET – do uzupełnienia]'
);

export default function Paintball() {
    return (
        <>
            <SectionIntro
                id="paintball"
                section="paintball"
                icons={['paintball']}
                title="Paintball"
                text="Dwa poligony w lesie, strzelnice dla początkujących i markery wyglądające jak M4."
                ruled
            />

            <PhotoPanel
                section="paintball-2"
                labelledBy="poligony"
                image="paintball-section-2"
                alt="Gracz paintballowy celuje przy drewnianym forcie w lesie"
                slant="up"
                photoHeight={260}
            >
                <Eyebrow>Poligony</Eyebrow>
                <h3 id="poligony" className={s.h3Panel}>
                    Gra w naturalnym terenie
                </h3>
                <p className={s.body}>
                    <Txt value={FIELDS_TEXT} />
                </p>
                <Stats items={PAINTBALL_STATS} variant="grid" />
                <a href="#rezerwuj" className={cx(s.btnWhite, s.alignStart)}>
                    Zarezerwuj grę
                </a>
            </PhotoPanel>

            <section data-section="paintball-3" aria-label="Paintball – szczegóły" className={s.details}>
                <div className={cx(s.container, s.detailsInner)}>
                    <div className={cx(s.detailsHead, s.mOnly)}>
                        <h3 className={s.detailsHeadTitle}>Więcej na poligonie</h3>
                        <p className={s.detailsHeadHint}>przesuń →</p>
                    </div>
                    <div className={s.detailsGrid}>
                        {PAINTBALL_DETAILS.map((card, index) => (
                            <article key={card.title} className={s.detailCard}>
                                <div className={cx(s.detailPhoto, index % 2 ? s.slantB : s.slantA)}>
                                    <img {...responsive(card.image, DETAIL_PHOTO_SIZES)} alt={card.alt} className={s.cropImg} />
                                </div>
                                <h3 className={s.detailTitle}>{card.title}</h3>
                                <p className={s.detailText}>
                                    <Txt value={card.body} />
                                </p>
                            </article>
                        ))}
                    </div>
                    <div className={s.package}>
                        <div className={s.packageText}>
                            <p className={s.packageTitle}>
                                <Txt value={PACKAGE_TITLE} />
                            </p>
                            <p className={s.packageBody}>
                                <Txt value={PACKAGE_TEXT} />
                            </p>
                        </div>
                        <a href="#rezerwuj" className={s.btnWhite}>
                            Zarezerwuj grę
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
