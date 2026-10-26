import s from './Ewolucja.module.css';
import { responsive } from './images';
import { cx } from './ui';

// Full-bleed photo with a translucent diagonal panel holding the text (desktop);
// on phones the photo becomes a block above a panel with a slanted top edge.
//   image     name of a responsive image (see images.js); full viewport width
//   side      'right' | 'left'  – where the text panel sits on desktop
//   slant     'up' | 'down'     – direction of the mobile panel's top edge
//   minHeight desktop section height, photoHeight mobile photo height
export default function PhotoPanel({
    section,
    id,
    labelledBy,
    image,
    alt,
    side = 'right',
    slant = 'up',
    minHeight = 680,
    photoHeight = 280,
    after,
    children,
}) {
    return (
        <section
            id={id}
            data-section={section}
            aria-labelledby={labelledBy}
            className={cx(s.panelSection, side === 'left' && s.panelLeft, slant === 'down' && s.slantDown)}
            style={{ '--min-h': `${minHeight}px`, '--photo-h': `${photoHeight}px` }}
        >
            <div className={s.panelPhoto}>
                <img {...responsive(image, '100vw')} alt={alt} />
            </div>
            <div aria-hidden="true" className={s.diag} />
            <div className={s.panelWrap}>
                <div className={s.panelText}>{children}</div>
            </div>
            {after}
        </section>
    );
}
