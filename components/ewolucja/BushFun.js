import s from './Ewolucja.module.css';
import PhotoPanel from './PhotoPanel';
import SectionIntro from './SectionIntro';
import { SAS_URL, SPORT_KIDS, SPOT_CHIPS, dm } from './content';
import { Chips, Eyebrow, Txt, cx } from './ui';

const SAS_LINK = (
    <a href={SAS_URL} className={s.inlineLink}>
        Szkołę Przygody i Przetrwania SAS
    </a>
);

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
                icons={['/fireplace.png', '/tent.png', '/football.png']}
                title="Bush & Fun"
                text="Wizja połączenia natury i zabawy jest tym, co napełnia to miejsce pozytywną energią."
            />

            <PhotoPanel
                section="bush-fun-2"
                labelledBy="spoty"
                image="/bush-section-1.jpg"
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
                                <img src={article.image} alt={article.alt} loading="lazy" className={s.cropImg} />
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
