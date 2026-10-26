import Icon from './Icon';
import { R, cx, onlyDesktop } from './Responsive';
import { FAQ } from './data';
import ui from './ui.module.css';
import s from './Faq.module.css';

// Two columns on desktop, one list on mobile. Native <details> handles the toggling.
const COLUMNS = [FAQ.slice(0, Math.ceil(FAQ.length / 2)), FAQ.slice(Math.ceil(FAQ.length / 2))];

export default function Faq() {
    return (
        <section id="faq" className={s.section} data-section="faq">
            <div className={s.wrap}>
                <div className={s.head}>
                    <p className={cx(ui.eyebrow, onlyDesktop)}>FAQ</p>
                    <h2 className={cx(ui.title, s.title)}>Zanim przyjedziesz</h2>
                </div>
                <div className={s.columns}>
                    {COLUMNS.map((items, col) => (
                        <div key={col} className={s.column}>
                            {items.map(({ q, a }) => (
                                <details key={q} className={s.item} open={q === FAQ[0].q}>
                                    <summary>
                                        {q}
                                        <Icon name="chevronDown" size={20} stroke={2} className={s.chevron} />
                                    </summary>
                                    <p>
                                        <R v={a} />
                                    </p>
                                </details>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
