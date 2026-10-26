import { R, cx, onlyDesktop } from './Responsive';
import { STEPS } from './data';
import ui from './ui.module.css';
import s from './HowItWorks.module.css';

export default function HowItWorks() {
    return (
        <section id="jak-to-dziala" className={s.section} data-section="jak-to-dziala">
            <div className={s.wrap}>
                <div className={s.head}>
                    <p className={cx(ui.eyebrow, onlyDesktop)}>Jak to działa</p>
                    <h2 className={ui.title}>Trzy kroki do dnia w lesie</h2>
                </div>
                <ol className={s.steps}>
                    {STEPS.map(({ title, text }, i) => (
                        <li key={title}>
                            <span className={s.num}>{i + 1}</span>
                            <div className={s.text}>
                                <h3>{title}</h3>
                                <p>
                                    <R v={text} />
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
