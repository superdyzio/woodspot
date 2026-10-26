import { ECO_ITEMS } from './data';
import { byLayout, cx } from './Variant';
import { SIZES, lazyImage } from './images';
import shared from './shared.module.css';
import styles from './Eco.module.css';

// Renewable energy and ecology.
export default function Eco() {
    return (
        <section className={styles.section} data-section="wydarzenia-2">
            <div className={cx(shared.container, styles.inner)}>
                <div className={styles.media}>
                    <img {...lazyImage('/about-section-2.jpg', SIZES.eco)} alt="Panele fotowoltaiczne na łące, w tle drzewa" className={styles.photo} />
                </div>
                <div className={styles.body}>
                    <p className={styles.eyebrow}>ENERGIA Z NATURY</p>
                    <h2 className={styles.title}>Teren zasilany wyłącznie odnawialną energią</h2>
                    <p className={cx(styles.text, shared.dOnly)}>
                        Staramy się żyć w zgodzie z otaczającą nas naturą i dbać o nią. Czerpiemy z natury energię, stając się jej częścią.
                    </p>
                    <ol className={styles.list}>
                        {ECO_ITEMS.map((item) => (
                            <li key={item.n} className={styles.item}>
                                <span className={styles.number}>{item.n}</span>
                                {byLayout({ d: item.d, m: item.m }, ([lead, rest], className) => (
                                    <span className={cx(styles.itemText, className)}><strong>{lead}</strong>{rest}</span>
                                ))}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
