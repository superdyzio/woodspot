import { useEffect, useState } from 'react';

// Tracks a CSS media query. Always false during SSR and the first client render
// (so hydration matches); the real value arrives in an effect.
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [query]);

  return matches;
}
