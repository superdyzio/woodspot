import { ACCENT, ZONES } from './data';
import { PinIcon } from './icons';
import { cx } from './Variant';
import styles from './SiteMap.module.css';

// Illustrated plan of the site, drawn in a 1000×640 viewBox. The desktop and the mobile design
// each have their own drawing (the mobile one is simplified, with thicker strokes); both use
// the shapes below. Pattern ids are unique per drawing because both drawings are in the DOM.

const PROPERTY = 'M60 78 C 200 60 360 52 520 48 C 680 44 820 52 950 70 C 968 200 972 420 962 598 C 760 612 520 616 300 610 C 200 606 120 600 54 592 C 46 420 48 240 60 78 Z';
const FOREST_WEST = 'M60 78 C 160 66 260 60 340 57 C 352 130 330 190 362 250 C 392 305 352 352 372 405 C 388 450 360 500 330 540 C 312 566 300 590 296 609 C 200 606 120 600 54 592 C 46 420 48 240 60 78 Z';
const FOREST_NORTH = 'M392 54 C 470 50 560 46 650 45 C 662 80 652 106 622 113 C 590 120 560 106 528 110 C 494 114 468 104 440 106 C 410 108 394 90 392 54 Z';
const POND_BIG = 'M485 470 C 482 428 540 408 600 410 C 668 412 718 440 714 482 C 710 526 650 545 588 541 C 522 537 488 512 485 470 Z';
const POND_SMALL = 'M742 422 C 746 385 795 368 834 380 C 872 392 862 444 846 466 C 826 490 772 492 752 470 C 741 458 740 438 742 422 Z';
const PAINTBALL_BIG = 'M420 92 L 640 86 L 646 244 L 424 248 Z';
const PAINTBALL_SMALL = 'M662 70 L 748 68 L 750 140 L 664 142 Z';
const MAIN_PATHS = [
    'M915 600 C 905 565 893 530 878 508 C 850 500 790 506 735 505',
    'M735 505 C 726 470 724 420 722 380 C 721 350 720 320 720 300',
    'M690 292 C 640 292 590 294 530 293 C 470 292 420 294 360 300 C 320 304 290 300 255 300',
    'M530 293 L 530 248',
    'M735 505 C 715 545 670 562 600 562 C 530 562 470 548 430 522 C 405 506 392 490 385 478',
    'M755 284 C 790 270 830 262 900 262',
];
const CONTOURS = [
    'M0 150 C 180 120 330 190 520 160 C 700 132 830 180 1000 150',
    'M0 250 C 160 225 340 300 540 262 C 720 228 860 290 1000 262',
    'M0 380 C 200 350 330 420 520 395 C 700 372 850 420 1000 392',
    'M0 520 C 190 500 360 560 560 530 C 740 505 870 548 1000 520',
];

// Dashed outline over the selected zone.
function Highlights({ selected, strokeWidth, dash, fillOpacity }) {
    return (
        <g fill={ACCENT} fillOpacity={fillOpacity} stroke={ACCENT} strokeWidth={strokeWidth} strokeDasharray={dash}>
            {ZONES.map(({ id, highlight: { shape: Shape, ...attrs } }) => (
                <Shape key={id} {...attrs} opacity={id === selected ? '1' : '0'} />
            ))}
        </g>
    );
}

function DesktopArt({ selected }) {
    return (
        <svg viewBox="0 0 1000 640" aria-hidden="true" focusable="false" className={styles.art}>
            <defs>
                <pattern id="v4trees" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="6" cy="6" r="5.5" fill="#174A1C" /><circle cx="17" cy="15" r="5" fill="#2A6430" /><circle cx="16" cy="4" r="2.5" fill="#245C28" /></pattern>
                <pattern id="v4grass" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M3 12 l2 -4 l2 4" stroke="#62A05A" strokeWidth="1" fill="none" /><path d="M11 5 l1.5 -3 l1.5 3" stroke="#62A05A" strokeWidth="1" fill="none" /></pattern>
                <pattern id="v4fields" width="44" height="44" patternUnits="userSpaceOnUse" patternTransform="rotate(-14)"><rect width="44" height="20" fill="#0F4114" /></pattern>
            </defs>
            {/* surroundings */}
            <rect width="1000" height="640" fill="#0B3A10" />
            <rect width="1000" height="640" fill="url(#v4fields)" />
            {/* property land */}
            <path d={PROPERTY} fill="#4E8A4A" />
            <path d={PROPERTY} fill="url(#v4grass)" opacity="0.6" />
            {/* contour lines */}
            <g fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.1">
                {CONTOURS.map((d) => <path key={d} d={d} />)}
            </g>
            {/* forests */}
            <path d={FOREST_WEST} fill="#1D5222" />
            <path d={FOREST_WEST} fill="url(#v4trees)" />
            <path d={FOREST_NORTH} fill="#1D5222" />
            <path d={FOREST_NORTH} fill="url(#v4trees)" />
            {/* solitary trees */}
            <g fill="#2A6430">
                <circle cx="745" cy="200" r="10" /><circle cx="705" cy="355" r="11" /><circle cx="850" cy="300" r="9" /><circle cx="640" cy="385" r="10" /><circle cx="555" cy="378" r="9" /><circle cx="920" cy="470" r="12" /><circle cx="945" cy="282" r="9" />
            </g>
            <circle cx="505" cy="418" r="21" fill="#2F6B33" /><circle cx="500" cy="413" r="12" fill="#3C7C3D" />
            {/* main paths */}
            <g fill="none" stroke="#D9C7A0" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
                {MAIN_PATHS.map((d) => <path key={d} d={d} />)}
                <path d="M372 300 C 388 340 396 380 390 420 C 386 440 378 452 370 460" />
            </g>
            {/* forest trails */}
            <g fill="none" stroke="#C9B88E" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 7">
                <path d="M255 300 C 230 260 195 215 150 170" />
                <path d="M255 300 C 255 262 255 238 255 215" />
                <path d="M255 300 C 210 315 170 325 132 330" />
                <path d="M255 300 C 248 335 244 360 240 385" />
                <path d="M240 385 C 215 420 190 450 168 478" />
            </g>
            {/* D: Spots in the forest */}
            <g>
                <circle cx="150" cy="170" r="24" fill="#6FA563" /><circle cx="255" cy="215" r="22" fill="#6FA563" /><circle cx="132" cy="330" r="24" fill="#6FA563" /><circle cx="240" cy="385" r="22" fill="#6FA563" /><circle cx="168" cy="478" r="24" fill="#6FA563" />
                <g fill="none" stroke="#E6D5A8" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M138 166 Q 150 176 162 166" /><path d="M244 211 Q 255 220 266 211" /><path d="M120 326 Q 132 336 144 326" /><path d="M229 381 Q 240 390 251 381" /><path d="M156 474 Q 168 484 180 474" />
                </g>
                <g fill="#8B6A3E">
                    <rect x="142" y="178" width="16" height="4" /><rect x="247" y="222" width="16" height="4" /><rect x="124" y="338" width="16" height="4" /><rect x="232" y="392" width="16" height="4" /><rect x="160" y="486" width="16" height="4" />
                </g>
            </g>
            {/* C: shelters + fire pits */}
            <g>
                <rect x="318" y="440" width="26" height="26" rx="3" fill="#8B6A3E" stroke="#E6D5A8" strokeWidth="2" transform="rotate(12 331 453)" />
                <rect x="372" y="488" width="26" height="26" rx="3" fill="#8B6A3E" stroke="#E6D5A8" strokeWidth="2" transform="rotate(-8 385 501)" />
                <circle cx="352" cy="478" r="6" fill="#F6E7A8" stroke="#8B6A3E" strokeWidth="2" />
                <circle cx="360" cy="516" r="6" fill="#F6E7A8" stroke="#8B6A3E" strokeWidth="2" />
                <g fill="#C9A86A"><rect x="338" y="486" width="9" height="5" /><rect x="362" y="466" width="9" height="5" /><rect x="346" y="526" width="9" height="5" /></g>
            </g>
            {/* B: ponds */}
            <path d={POND_BIG} fill="#5E8FA8" stroke="#8DB5C7" strokeWidth="5" />
            <path d={POND_SMALL} fill="#5E8FA8" stroke="#8DB5C7" strokeWidth="5" />
            <ellipse cx="652" cy="462" rx="15" ry="9" fill="#4E8A4A" />
            <g stroke="#A9CBDA" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8">
                <path d="M540 455 q 10 -5 20 0" /><path d="M600 505 q 12 -6 24 0" /><path d="M790 412 q 9 -5 18 0" /><path d="M770 455 q 8 -4 16 0" />
            </g>
            <g fill="#E2D3AC">
                <rect x="490" y="462" width="10" height="6" /><rect x="530" y="527" width="6" height="10" /><rect x="688" y="512" width="6" height="10" /><rect x="706" y="452" width="10" height="6" /><rect x="575" y="405" width="6" height="9" /><rect x="834" y="466" width="6" height="10" />
            </g>
            <path d="M792 432 L 820 432 L 813 441 L 799 441 Z" fill="#E2D3AC" />
            {/* F: paintball fields */}
            <path d={PAINTBALL_BIG} fill="#6A9A5B" opacity="0.55" />
            <path d={PAINTBALL_BIG} fill="none" stroke="#E8E1C9" strokeWidth="2" strokeDasharray="3 5" />
            <rect x="517" y="156" width="28" height="28" fill="#6B5134" stroke="#E2D3AC" strokeWidth="2" />
            <g fill="#1E1E1E" stroke="#4A4A4A" strokeWidth="2">
                <circle cx="448" cy="118" r="5" /><circle cx="470" cy="206" r="5" /><circle cx="486" cy="140" r="5" /><circle cx="503" cy="228" r="5" /><circle cx="575" cy="118" r="5" /><circle cx="592" cy="206" r="5" /><circle cx="612" cy="150" r="5" /><circle cx="560" cy="232" r="5" /><circle cx="455" cy="172" r="5" /><circle cx="622" cy="226" r="5" /><circle cx="603" cy="104" r="5" /><circle cx="446" cy="226" r="5" /><circle cx="588" cy="160" r="5" />
            </g>
            <g fill="#8B6A3E"><rect x="492" y="182" width="16" height="7" /><rect x="568" y="164" width="7" height="18" /><rect x="468" y="108" width="16" height="7" /><rect x="600" y="126" width="16" height="7" /></g>
            <path d={PAINTBALL_SMALL} fill="#6A9A5B" opacity="0.55" />
            <path d={PAINTBALL_SMALL} fill="none" stroke="#E8E1C9" strokeWidth="2" strokeDasharray="3 5" />
            <g fill="#8B6A3E"><rect x="688" y="95" width="8" height="20" /><rect x="718" y="95" width="8" height="20" /></g>
            {/* ranges + obstacle course */}
            <rect x="432" y="256" width="180" height="9" fill="#CDB98E" />
            <rect x="432" y="270" width="180" height="9" fill="#CDB98E" />
            <circle cx="618" cy="260" r="6" fill="#F1EEE2" stroke="#8B6A3E" strokeWidth="2" />
            <circle cx="618" cy="274" r="6" fill="#F1EEE2" stroke="#8B6A3E" strokeWidth="2" />
            {/* E: tent field */}
            <rect x="397" y="304" width="126" height="82" rx="6" fill="#7FAF6E" />
            <g fill="#E6D5A8" stroke="#8B6A3E" strokeWidth="1.5" strokeLinejoin="round">
                <path d="M406 336 L 415 320 L 424 336 Z" /><path d="M438 336 L 447 320 L 456 336 Z" /><path d="M478 336 L 487 320 L 496 336 Z" /><path d="M500 336 L 509 320 L 518 336 Z" />
                <path d="M410 374 L 419 358 L 428 374 Z" /><path d="M442 374 L 451 358 L 460 374 Z" /><path d="M480 374 L 489 358 L 498 374 Z" /><path d="M502 374 L 511 358 L 520 374 Z" />
            </g>
            <g fill="#F6E7A8"><rect x="430" y="344" width="5" height="5" /><rect x="468" y="344" width="5" height="5" /></g>
            {/* G: glade + playground */}
            <ellipse cx="720" cy="290" rx="62" ry="40" fill="#6FA563" />
            <rect x="745" y="270" width="14" height="14" fill="#8B6A3E" stroke="#E6D5A8" strokeWidth="1.5" />
            <path d="M759 277 L 776 296" stroke="#E6D5A8" strokeWidth="3" strokeLinecap="round" />
            <circle cx="694" cy="306" r="7" fill="none" stroke="#E6D5A8" strokeWidth="2" />
            <path d="M684 270 L 704 270 M688 270 L 688 282 M700 270 L 700 282" stroke="#E6D5A8" strokeWidth="2" fill="none" />
            {/* H: beach courts */}
            <g>
                <rect x="790" y="100" width="145" height="44" rx="2" fill="#E6D5A8" /><rect x="797" y="106" width="131" height="32" fill="none" stroke="#FFFFFF" strokeWidth="1.5" /><path d="M862.5 100 L 862.5 144" stroke="#FFFFFF" strokeWidth="2.5" />
                <rect x="790" y="154" width="145" height="44" rx="2" fill="#E6D5A8" /><rect x="797" y="160" width="131" height="32" fill="none" stroke="#FFFFFF" strokeWidth="1.5" /><path d="M862.5 154 L 862.5 198" stroke="#FFFFFF" strokeWidth="2.5" />
                <rect x="790" y="208" width="145" height="46" rx="2" fill="#E6D5A8" /><rect x="797" y="214" width="131" height="34" fill="none" stroke="#FFFFFF" strokeWidth="1.5" /><path d="M862.5 214 L 862.5 248" stroke="#FFFFFF" strokeWidth="1.5" /><circle cx="862.5" cy="231" r="8" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
            </g>
            {/* solar */}
            <g fill="#35546B" stroke="#9DB4C4" strokeWidth="1">
                <rect x="884" y="300" width="62" height="12" /><rect x="884" y="318" width="62" height="12" /><rect x="884" y="336" width="62" height="12" />
            </g>
            {/* A: entrance + parking */}
            <rect x="858" y="524" width="92" height="60" rx="4" fill="#56664F" />
            <g stroke="#E8E1C9" strokeWidth="1.5" opacity="0.8" fill="none">
                <path d="M870 526 v14 M882 526 v14 M894 526 v14 M906 526 v14 M918 526 v14 M930 526 v14 M942 526 v14" />
                <path d="M870 568 v14 M882 568 v14 M894 568 v14 M906 568 v14 M918 568 v14 M930 568 v14 M942 568 v14" />
            </g>
            <rect x="902" y="598" width="26" height="42" fill="#CDB98E" />
            {/* lights */}
            <g fill="#F6E7A8">
                <circle cx="900" cy="560" r="3.5" /><circle cx="860" cy="505" r="3.5" /><circle cx="790" cy="505" r="3.5" /><circle cx="724" cy="440" r="3.5" /><circle cx="722" cy="352" r="3.5" /><circle cx="650" cy="292" r="3.5" /><circle cx="580" cy="293" r="3.5" /><circle cx="470" cy="292" r="3.5" /><circle cx="400" cy="297" r="3.5" /><circle cx="392" cy="400" r="3.5" /><circle cx="640" cy="561" r="3.5" /><circle cx="500" cy="553" r="3.5" /><circle cx="810" cy="266" r="3.5" />
            </g>
            {/* fence */}
            <path d={PROPERTY} fill="none" stroke="#F1EEE2" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" opacity="0.85" />
            <rect x="896" y="592" width="7" height="12" fill="#F1EEE2" /><rect x="927" y="592" width="7" height="12" fill="#F1EEE2" />
            {/* selected-zone highlights */}
            <Highlights selected={selected} strokeWidth="3" dash="10 6" fillOpacity="0.16" />
        </svg>
    );
}

function MobileArt({ selected }) {
    return (
        <svg viewBox="0 0 1000 640" aria-hidden="true" focusable="false" className={styles.art}>
            <defs>
                <pattern id="v4mtrees" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="7" cy="7" r="6.5" fill="#174A1C" /><circle cx="20" cy="18" r="6" fill="#2A6430" /></pattern>
            </defs>
            <rect width="1000" height="640" fill="#0B3A10" />
            <path d={PROPERTY} fill="#4E8A4A" />
            <g fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.1">
                <path d={CONTOURS[0]} />
                <path d={CONTOURS[2]} />
            </g>
            <path d={FOREST_WEST} fill="#1D5222" />
            <path d={FOREST_WEST} fill="url(#v4mtrees)" />
            <path d={FOREST_NORTH} fill="#1D5222" />
            <g fill="none" stroke="#D9C7A0" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
                {MAIN_PATHS.map((d) => <path key={d} d={d} />)}
            </g>
            <g fill="#6FA563"><circle cx="150" cy="170" r="26" /><circle cx="255" cy="215" r="24" /><circle cx="132" cy="330" r="26" /><circle cx="240" cy="385" r="24" /><circle cx="168" cy="478" r="26" /></g>
            <g fill="#8B6A3E" stroke="#E6D5A8" strokeWidth="3"><rect x="318" y="440" width="28" height="28" rx="3" /><rect x="372" y="488" width="28" height="28" rx="3" /></g>
            <path d={POND_BIG} fill="#5E8FA8" stroke="#8DB5C7" strokeWidth="6" />
            <path d={POND_SMALL} fill="#5E8FA8" stroke="#8DB5C7" strokeWidth="6" />
            <path d={PAINTBALL_BIG} fill="#6A9A5B" opacity="0.6" />
            <path d={PAINTBALL_BIG} fill="none" stroke="#E8E1C9" strokeWidth="3" strokeDasharray="4 6" />
            <path d={PAINTBALL_SMALL} fill="#6A9A5B" opacity="0.6" />
            <g fill="#1E1E1E"><circle cx="448" cy="118" r="7" /><circle cx="470" cy="206" r="7" /><circle cx="575" cy="118" r="7" /><circle cx="592" cy="206" r="7" /><circle cx="612" cy="150" r="7" /><circle cx="455" cy="172" r="7" /></g>
            <rect x="432" y="256" width="180" height="11" fill="#CDB98E" /><rect x="432" y="272" width="180" height="11" fill="#CDB98E" />
            <rect x="397" y="304" width="126" height="82" rx="6" fill="#7FAF6E" />
            <g fill="#E6D5A8"><path d="M406 336 L 415 320 L 424 336 Z" /><path d="M478 336 L 487 320 L 496 336 Z" /><path d="M500 336 L 509 320 L 518 336 Z" /><path d="M410 374 L 419 358 L 428 374 Z" /><path d="M480 374 L 489 358 L 498 374 Z" /><path d="M502 374 L 511 358 L 520 374 Z" /></g>
            <ellipse cx="720" cy="290" rx="62" ry="40" fill="#6FA563" />
            <g fill="#E6D5A8"><rect x="790" y="100" width="145" height="44" rx="2" /><rect x="790" y="154" width="145" height="44" rx="2" /><rect x="790" y="208" width="145" height="46" rx="2" /></g>
            <g stroke="#FFFFFF" strokeWidth="3"><path d="M862.5 100 L 862.5 144" /><path d="M862.5 154 L 862.5 198" /></g>
            <g fill="#35546B"><rect x="884" y="300" width="62" height="12" /><rect x="884" y="318" width="62" height="12" /><rect x="884" y="336" width="62" height="12" /></g>
            <rect x="858" y="524" width="92" height="60" rx="4" fill="#56664F" />
            <rect x="902" y="598" width="26" height="42" fill="#CDB98E" />
            <path d={PROPERTY} fill="none" stroke="#F1EEE2" strokeWidth="3.5" strokeDasharray="8 8" opacity="0.85" />
            <Highlights selected={selected} strokeWidth="5" dash="14 8" fillOpacity="0.18" />
        </svg>
    );
}

function Hotspot({ zone, selected, onSelect, mobile }) {
    return (
        <button
            type="button"
            className={cx(styles.hotspot, mobile && styles.hotspotM, !mobile && zone.labelLeft && styles.labelLeft, selected && styles.selected)}
            style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
            aria-label={`Strefa ${zone.id} – ${zone.name}`}
            aria-pressed={selected}
            onClick={() => onSelect(zone.id)}
        >
            <span className={styles.marker}>
                {selected && <span className={styles.pulse} aria-hidden="true" />}
                {zone.id}
            </span>
            {!mobile && <span className={styles.label}>{zone.name}</span>}
        </button>
    );
}

// The clickable map. `mobile` switches to the simplified drawing with smaller, label-less markers.
export function SiteMap({ selected, onSelect, mobile = false, className }) {
    const Art = mobile ? MobileArt : DesktopArt;
    return (
        <div className={cx(styles.frame, mobile && styles.frameM, className)}>
            <Art selected={selected} />
            {ZONES.map((zone) => (
                <Hotspot key={zone.id} zone={zone} selected={zone.id === selected} onSelect={onSelect} mobile={mobile} />
            ))}
            {!mobile && (
                <div className={styles.badge}>
                    <PinIcon size={14} strokeWidth={2} />
                    PLAN TERENU · KLIKNIJ STREFĘ
                </div>
            )}
        </div>
    );
}

// Mobile: horizontally scrollable zone chips under the map.
export function ZoneChips({ selected, onSelect, className }) {
    return (
        <div role="group" aria-label="Strefy terenu" className={cx(styles.chips, className)}>
            {ZONES.map((zone) => (
                <button
                    key={zone.id}
                    type="button"
                    className={cx(styles.chip, zone.id === selected && styles.chipSelected)}
                    aria-pressed={zone.id === selected}
                    onClick={() => onSelect(zone.id)}
                >
                    {zone.id} · {zone.short}
                </button>
            ))}
        </div>
    );
}

// Thumbnail of the plan with the zone marked, used in the zone sections.
export function MiniMap({ dot: [dotX, dotY], className }) {
    return (
        <svg viewBox="0 0 1000 640" width="96" height="61" aria-hidden="true" focusable="false" className={cx(styles.mini, className)}>
            <rect width="1000" height="640" fill="#0B3A10" />
            <path d={PROPERTY} fill="#4E8A4A" />
            <path d={FOREST_WEST} fill="#1D5222" />
            <path d={POND_BIG} fill="#5E8FA8" />
            <path d={POND_SMALL} fill="#5E8FA8" />
            <rect x="790" y="100" width="145" height="152" fill="#E6D5A8" />
            <circle cx={dotX} cy={dotY} r="48" fill={ACCENT} stroke="#FFFFFF" strokeWidth="14" />
        </svg>
    );
}
