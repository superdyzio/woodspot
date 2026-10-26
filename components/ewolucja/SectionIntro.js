import s from './Ewolucja.module.css';
import { cx } from './ui';

// Centred section opener: pictograms, big title and a one-line lead.
export default function SectionIntro({ id, section, icons, title, text, ruled = false }) {
    return (
        <section id={id} data-section={section} className={cx(s.intro, ruled && s.introRule)}>
            <div className={s.introInner}>
                {icons.length > 1 ? (
                    <div aria-hidden="true" className={s.introIcons}>
                        {icons.map((icon) => (
                            <img key={icon} src={icon} alt="" />
                        ))}
                    </div>
                ) : (
                    <img src={icons[0]} alt="" className={s.introIcon} />
                )}
                <h2 className={s.introTitle}>{title}</h2>
                <p className={s.introText}>{text}</p>
            </div>
        </section>
    );
}
