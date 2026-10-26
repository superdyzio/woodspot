import Icon from './Icon';
import { R } from './Responsive';
import { HIGHLIGHTS } from './data';
import s from './Highlights.module.css';

export default function Highlights() {
    return (
        <section aria-label="Najważniejsze informacje" className={s.section} data-section="start-2">
            <div className={s.grid}>
                {HIGHLIGHTS.map(({ icon, title, text }) => (
                    <div key={icon} className={s.item}>
                        <span className={s.icon}>
                            <Icon name={icon} size={22} />
                        </span>
                        <span className={s.text}>
                            <strong>
                                <R v={title} />
                            </strong>
                            <span>
                                <R v={text} />
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
