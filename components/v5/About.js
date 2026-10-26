import Icon from './Icon';
import { R, cx, onlyDesktop, onlyMobile } from './Responsive';
import { ABOUT_POINTS } from './data';
import { responsive } from './images';
import ui from './ui.module.css';
import s from './About.module.css';

function PointIcon({ icon }) {
    if (typeof icon === 'string') return <Icon name={icon} size={24} />;
    return (
        <>
            <Icon name={icon.d} size={24} className={onlyDesktop} />
            <Icon name={icon.m} size={24} className={onlyMobile} />
        </>
    );
}

export default function About() {
    return (
        <section id="o-nas" className={s.section} data-section="o-nas">
            <div className={s.wrap}>
                <div className={s.top}>
                    <div className={s.text}>
                        <p className={ui.eyebrow}>O nas</p>
                        <h2 className={cx(ui.title, ui.balance)}>Niemal 10 hektarów natury pod Wrocławiem</h2>
                        <p className={s.para}>
                            <R
                                v={{
                                    d: 'Woodspot to ogrodzony i w znacznym stopniu oświetlony teren niemal 10 hektarów przestrzeni plenerowej. Wypełniony lasami, polanami i stawami wędkarskimi stwarza pole do organizacji wydarzeń, imprez okolicznościowych czy weekendowego wypoczynku ze znajomymi.',
                                    m: 'Ogrodzony i w znacznym stopniu oświetlony teren pełen lasów, polan i stawów – na wydarzenia, imprezy okolicznościowe i weekendowy wypoczynek ze znajomymi.',
                                }}
                            />
                        </p>
                        <p className={cx(s.para, onlyDesktop)}>
                            Staramy się żyć w zgodzie z otaczającą nas naturą i dbać o nią – dlatego cały obiekt zasilany jest
                            wyłącznie odnawialnymi źródłami energii.
                        </p>
                    </div>
                    <div className={s.photo}>
                        <img
                            loading="lazy"
                            decoding="async"
                            {...responsive(
                                'about-section-2',
                                '(max-width: 640px) calc(100vw - 40px), (max-width: 1079px) calc(100vw - 64px), (max-width: 1239px) 560px, (max-width: 1303px) calc(50vw - 60px), 592px'
                            )}
                            alt="Panele fotowoltaiczne na łące zasilające teren Woodspotu"
                        />
                    </div>
                </div>
                <div className={s.points}>
                    {ABOUT_POINTS.map(({ icon, title, text }) => (
                        <div key={title} className={s.point}>
                            <span className={s.icon}>
                                <PointIcon icon={icon} />
                            </span>
                            <div className={s.pointText}>
                                <h3>{title}</h3>
                                <p>
                                    <R v={text} />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
