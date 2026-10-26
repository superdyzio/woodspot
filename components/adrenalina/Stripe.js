import { Fragment } from 'react';
import s from './Stripe.module.css';

// Tilted yellow band with key numbers. The desktop and mobile designs list different items,
// so the page renders one per layout (`variant` picks the size and visibility).
export default function Stripe({ items, variant, section }) {
  return (
    <section aria-label="Najważniejsze liczby" className={`${s.stripe} ${s[variant]}`} data-section={section}>
      <div className={s.band}>
        {items.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && <span aria-hidden="true" className={s.sep}>/</span>}
            <span>{item}</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
