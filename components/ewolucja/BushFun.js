import s from './Ewolucja.module.css';
import PhotoPanel from './PhotoPanel';
import SectionIntro from './SectionIntro';
import { SAS_URL, SPORT_KIDS, SPOT_CHIPS, dm } from './content';
import { responsive } from './images';
import { Chips, Eyebrow, Txt, cx } from './ui';

const SAS_LINK = (
    <a href={SAS_URL} className={s.inlineLink}>
        Szkołę Przygody i Przetrwania SAS
    </a>
);

// Phones: full width minus 20 px gutters. Wider: the 1200 px container with
// 40 px padding, one column up to 1007 px, then two columns 48 px apart.
const SPORT_PHOTO_SIZES =
    '(max-width: 640px) calc(100vw - 40px), (max-width: 1007px) calc(100vw - 80px), (max-width: 1280px) calc(50vw - 64px), 576px';

const ARTICLE_TEXT = {
    sport: dm(
        'Na Woodspocie każdy może wykorzystać swoją energię na różne sposoby. Mamy różnorodny sprzęt sportowy: frisbee, badminton, bule, darta, piłki i wiele innych. Dodatkowo czekają boiska plażowe – dwa do siatkówki i jedno do piłki nożnej.',
        'Na Woodspocie każdy może wykorzystać swoją energię na różne sposoby. Mamy frisbee, badminton, bule, darta, piłki i wiele innych. Czekają też boiska plażowe – dwa do siatkówki i jedno do piłki nożnej.'
    ),
    dzieci: dm(
        <>
            Dzieci na Woodspocie są bezpieczne, bo cały nasz teren jest ogrodzony. Na życzenie zapewnimy animatorów,
            którzy wykorzystają nasze leśne obszary do przeróżnych aktywności, a plac zabaw zajmie najmłodszych na
            dłużej niż parę chwil. Możecie też skorzystać z zajęć survivalowych dla dzieci i dorosłych prowadzonych
            przez {SAS_LINK} – program Fundacji Hobbit.
        </>,
        'Dzieci na Woodspocie są bezpieczne, bo cały nasz teren jest ogrodzony. Na życzenie zapewnimy animatorów, a plac zabaw zajmie najmłodszych na dłużej niż parę chwil.'
    ),
};

export default function BushFun() {
    return (
        <>
            <SectionIntro
                id="bush-fun"
                section="bush-fun"
                icons={['fireplace', 'tent', 'football']}
                title="Bush & Fun"
                text="Wizja połączenia natury i zabawy jest tym, co napełnia to miejsce pozytywną energią."
            />

            <PhotoPanel
                section="bush-fun-2"
                labelledBy="spoty"
                image="bush-section-1"
                alt="Spot w sosnowym lesie – hamaki, ławki z opon i drewniany stół"
                slant="down"
                photoHeight={260}
            >
                <Eyebrow>Spoty i nocleg</Eyebrow>
                <h3 id="spoty" className={s.h3Panel}>
                    Wasz kąt wśród drzew
                </h3>
                <p className={s.body}>
                    W lesie czekają przygotowane Spoty, które stają się Waszym kątem wśród drzew. Do dyspozycji są w
                    nich hamaki, drewniane ławki i stoły. Dla chętnych na spędzenie nocy w otoczeniu natury na krawędzi
                    lasu czeka pole namiotowe – z prądem, a w razie potrzeby także z gotowym namiotem, który rozłożymy
                    i złożymy za Was.
                </p>
                <Chips items={SPOT_CHIPS} />
                <div className={s.ctaRow}>
                    <a href="#rezerwuj" className={s.btnWhite}>
                        Zarezerwuj Spot
                    </a>
                    <a href="#rezerwuj" className={cx(s.arrowLink, s.link, s.dOnly)}>
                        Pole namiotowe →
                    </a>
                </div>
            </PhotoPanel>

            <section data-section="bush-fun-3" aria-label="Sport i dzieci" className={s.sportKids}>
                <div className={cx(s.container, s.sportGrid)}>
                    {SPORT_KIDS.map((article, index) => (
                        <article key={article.key} className={s.article}>
                            <div className={cx(s.sportPhoto, index % 2 ? s.slantB : s.slantA)}>
                                <img {...responsive(article.image, SPORT_PHOTO_SIZES)} alt={article.alt} className={s.cropImg} />
                            </div>
                            <Eyebrow>{article.eyebrow}</Eyebrow>
                            <h3 className={s.articleTitle}>{article.title}</h3>
                            <p className={s.articleText}>
                                <Txt value={ARTICLE_TEXT[article.key]} />
                            </p>
                            <Chips items={article.chips} className={s.dOnly} />
                            {article.key === 'dzieci' && (
                                <a href={SAS_URL} className={cx(s.sasLink, s.link, s.mOnly)}>
                                    Zajęcia survivalowe ze szkołą SAS →
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}
