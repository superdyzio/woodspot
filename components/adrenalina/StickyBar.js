import s from './StickyBar.module.css';
import { PHONE } from './data';
import { PhoneIcon } from './ui';

// Mobile-only call/book bar, sticky at the bottom of the viewport.
export default function StickyBar() {
  return (
    <div className={s.bar} data-section="float-1">
      <a href={PHONE.href} className={s.call}>
        <PhoneIcon size={18} />
        Zadzwoń
      </a>
      <a href="#rezerwacja" className={s.book}>Zarezerwuj grę</a>
    </div>
  );
}
