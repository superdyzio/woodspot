import { onlyDesktop, onlyMobile, cx } from './Responsive';
import { PHONE, PHONE_HREF } from './data';
import s from './TopBar.module.css';

export default function TopBar() {
    return (
        <div className={s.bar} data-section="top-2">
            <div className={cx(s.inner, onlyDesktop)}>
                <span>Teren ogrodzony i oświetlony · niemal 10 ha natury pod Wrocławiem</span>
                <span className={s.right}>
                    <span>[GODZINY OTWARCIA]</span>
                    <a href={PHONE_HREF} className={s.tel}>
                        {`tel. ${PHONE}`}
                    </a>
                </span>
            </div>
            <div className={cx(s.short, onlyMobile)}>Teren ogrodzony i oświetlony · [GODZINY OTWARCIA]</div>
        </div>
    );
}
