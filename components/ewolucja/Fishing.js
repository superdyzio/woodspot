import s from './Ewolucja.module.css';
import PhotoPanel from './PhotoPanel';
import { FISH_SPECIES, FISHING_STATS, dm } from './content';
import { responsive } from './images';
import { Eyebrow, Stats, Txt, cx } from './ui';

const FISHING_TEXT = dm(
    'Nasz przyjazny środowisku teren oferuje dwa stawy o łącznej powierzchni 1,5 hektara, w których łowicie w formule no-kill. Do dyspozycji jest wiele stanowisk wędkarskich oraz łódki do wynajęcia.',
    'Dwa stawy o łącznej powierzchni 1,5 hektara, łowienie w formule no-kill, wiele stanowisk wędkarskich i łódki do wynajęcia.'
);

// Fish species: a trapezoid in the section corner on desktop, a box inside the
// text panel on phones.
const FishSpecies = ({ className }) => (
    <div className={className}>
        <p className={s.fishTitle}>W naszych stawach</p>
        <p className={s.fishList}>{FISH_SPECIES}</p>
    </div>
);

export default function Fishing() {
    return (
        <PhotoPanel
            id="lowiska"
            section="lowiska"
            image="fishing-section"
            alt="Słoneczny staw z wędkarzami na brzegu i brzozą"
            side="left"
            slant="down"
            minHeight={760}
            photoHeight={280}
            after={<FishSpecies className={cx(s.fishTrap, s.dOnly)} />}
        >
            <div className={s.fishLabel}>
                <img {...responsive('fishing', '(max-width: 640px) 40px, 48px')} alt="" />
                <Eyebrow>Łowiska</Eyebrow>
            </div>
            <h2 className={s.h2}>Wpadnij do nas powędkować!</h2>
            <p className={s.lead}>
                Zabierz dzieci, dziadków czy kółko wędkarskie i sprawdźcie, co skrywa duma naszej miejscówki.
            </p>
            <p className={s.body}>
                <Txt value={FISHING_TEXT} />
            </p>
            <Stats items={FISHING_STATS} className={s.plainLabels} />
            <FishSpecies className={cx(s.fishBox, s.mOnly)} />
            <a href="#rezerwuj" className={cx(s.btnWhite, s.alignStart)}>
                Zarezerwuj stanowisko
            </a>
        </PhotoPanel>
    );
}
