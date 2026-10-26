import Icon from './Icon';
import { PHONE_HREF } from './data';
import s from './MobileBar.module.css';

// Sticky call/booking bar, mobile only. Must stay the last child of the page wrapper.
export default function MobileBar() {
    return (
        <div className={s.bar} data-section="float-1">
            <a href={PHONE_HREF} className={s.call}>
                <Icon name="phone" size={18} />
                Zadzwoń
            </a>
            <a href="#rezerwacja" className={s.book}>
                Sprawdź dostępność
            </a>
        </div>
    );
}
