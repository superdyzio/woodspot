import { PAINTBALL, ZONE_ARTICLES } from './data';
import { MiniMap } from './SiteMap';
import { V, byLayout, cx, pick } from './Variant';
import shared from './shared.module.css';
import styles from './Zones.module.css';

const anchorId = (id) => `strefa-${id.toLowerCase()}`;
const photoVars = (pos) => ({ '--pos-d': pick(pos, 'd'), '--pos-m': pick(pos, 'm') });

function Photo({ image }) {
    return <img src={image.src} alt={image.alt} className={styles.photo} style={photoVars(image.pos)} loading="lazy" decoding="async" />;
}

// Zone label with a thumbnail of the plan (desktop) and a link that selects the zone on the big map.
function ZoneHead({ id, label, mini, onShow, dark = false }) {
    return (
        <div className={styles.head}>
            <MiniMap dot={mini} className={cx(shared.dOnly, dark && styles.miniDark)} />
            <div className={styles.headText}>
                <p className={styles.label}>{label}</p>
                <a href="#mapa" className={styles.showLink} onClick={() => onShow(id)}>
                    <V v={{ d: 'Pokaż na mapie ↑', m: 'Na mapie ↑' }} />
                </a>
            </div>
        </div>
    );
}

function ZoneArticle({ article, onShow, onBook }) {
    const { id, reverse, label, title, image, placeholder, bg, height, mini, lead, body, chipsLabel, chipsAria, chips, price, cta, href } = article;
    const books = href === '#rezerwacja';

    return (
        <article id={anchorId(id)} className={cx(styles.article, reverse && styles.reverse)}>
            <div className={styles.media} style={{ background: bg, '--h-d': `${height.d}px`, '--h-m': `${height.m}px` }}>
                {image
                    ? <Photo image={image} />
                    : byLayout(placeholder, (text, className) => <div className={cx(styles.placeholder, className)}>{text}</div>)}
                <span className={styles.badge}>{id}</span>
            </div>
            <div className={styles.body}>
                <ZoneHead id={id} label={label} mini={mini} onShow={onShow} />
                <h3 className={styles.title}><V v={title} /></h3>
                {lead && <p className={cx(styles.lead, shared.dOnly)}>{lead}</p>}
                {byLayout(body, (paragraphs, className) =>
                    paragraphs.map((text, i) => <p key={i} className={cx(styles.text, className)}>{text}</p>)
                )}
                {chips && byLayout(chips, (list, className) => list.length > 0 && (
                    <div className={cx(styles.chipsBlock, className)}>
                        {chipsLabel && <p className={cx(styles.label, shared.dOnly)}>{chipsLabel}</p>}
                        <ul className={styles.chips} aria-label={chipsAria}>
                            {list.map((chip) => <li key={chip} className={styles.chip}>{chip}</li>)}
                        </ul>
                    </div>
                ))}
                {price && <p className={styles.price}><V v={price} /></p>}
                <div className={styles.actions}>
                    <a href={href} className={styles.cta} onClick={books ? () => onBook(id) : undefined}><V v={cta} /></a>
                </div>
            </div>
        </article>
    );
}

// Zone F has a dark card with a photo gallery (desktop) or a full-bleed block (mobile).
function PaintballArticle({ onShow, onBook }) {
    const { id, label, title, mini, mainImage, sideImages, body, features, markers, packagePlaceholder, cta, price } = PAINTBALL;

    return (
        <article id={anchorId(id)} className={styles.paintball}>
            <div className={shared.contours} aria-hidden="true" />
            <div className={cx(styles.gallery, shared.dOnly)}>
                <div className={styles.galleryMain}>
                    <Photo image={mainImage} />
                    <span className={cx(styles.badge, styles.badgeAccent)}>{id}</span>
                </div>
                <div className={styles.galleryRow}>
                    {sideImages.map((image) => (
                        <div key={image.src} className={styles.galleryThumb}><Photo image={image} /></div>
                    ))}
                </div>
            </div>
            <div className={cx(styles.media, styles.paintballMedia, shared.mOnly)}>
                <Photo image={sideImages[0]} />
                <span className={cx(styles.badge, styles.badgeAccent)}>{id}</span>
            </div>
            <div className={cx(styles.body, styles.paintballBody)}>
                <ZoneHead id={id} label={label} mini={mini} onShow={onShow} dark />
                <h3 className={cx(styles.title, styles.paintballTitle)}>{title}</h3>
                <p className={cx(styles.text, styles.paintballText)}><V v={body} /></p>
                {byLayout(features, (list, className) => (
                    <ul className={cx(styles.features, className)}>
                        {list.map((feature) => (
                            <li key={feature.key} className={styles.feature}>
                                <span className={styles.featureKey}>{feature.key}</span>
                                <span className={styles.featureTitle}>{feature.title}</span>
                                {feature.text && <span className={styles.featureText}>{feature.text}</span>}
                            </li>
                        ))}
                    </ul>
                ))}
                <p className={cx(styles.markers, shared.dOnly)}>
                    {markers}<span className={styles.mono}>{packagePlaceholder}</span>.
                </p>
                <div className={cx(styles.actions, styles.paintballActions)}>
                    <a href="#rezerwacja" className={cx(styles.cta, styles.ctaAccent)} onClick={() => onBook(id)}>{cta}</a>
                    <span className={cx(styles.paintballPrice, shared.dOnly)}>{price}</span>
                </div>
                <p className={cx(styles.paintballPriceM, shared.mOnly)}>{price} · {packagePlaceholder}</p>
            </div>
        </article>
    );
}

export default function Zones({ onShow, onBook }) {
    return (
        <section id="strefy" className={styles.section} data-section="strefy">
            <div className={cx(shared.container, styles.inner)}>
                <div className={styles.intro}>
                    <div className={styles.introMain}>
                        <p className={styles.eyebrow}>PRZEWODNIK PO TERENIE · STREFY B–H</p>
                        <h2 className={styles.heading}>Przejdź się po Woodspocie</h2>
                        <p className={styles.introText}>
                            <V
                                v={{
                                    d: 'Woodspot to ogrodzony i w znacznym stopniu oświetlony teren niemal 10 hektarów przestrzeni plenerowej. Wypełniony lasami, polanami i stawami wędkarskimi stwarza pole do organizacji wydarzeń, imprez okolicznościowych czy weekendowego wypoczynku ze znajomymi.',
                                    m: 'Ogrodzony i w znacznym stopniu oświetlony teren niemal 10 hektarów: lasy, polany i stawy wędkarskie – na wydarzenia, imprezy okolicznościowe i weekendowy wypoczynek ze znajomymi.',
                                }}
                            />
                        </p>
                    </div>
                    <blockquote className={cx(styles.quote, shared.dOnly)}>
                        <p>„Wizja połączenia natury i zabawy jest tym, co napełnia to miejsce pozytywną energią.”</p>
                    </blockquote>
                </div>

                {ZONE_ARTICLES.map((article) =>
                    article.paintball
                        ? <PaintballArticle key={article.id} onShow={onShow} onBook={onBook} />
                        : <ZoneArticle key={article.id} article={article} onShow={onShow} onBook={onBook} />
                )}
            </div>
        </section>
    );
}
