import { useState } from 'react';
import { ZONES, DEFAULT_ZONE, DEFAULT_OFFER } from './data';

const findZone = (id) => ZONES.find((zone) => zone.id === id);

// Port of the design's logic class: the selected map zone and the offer preselected in the booking form.
export default function useZoneSelection() {
    const [zoneId, setZoneId] = useState(DEFAULT_ZONE);
    const [chosenOffer, setOffer] = useState('');

    let index = ZONES.findIndex((zone) => zone.id === zoneId);
    if (index < 0) index = 1;
    const zone = ZONES[index];

    // Selecting a zone also preselects its offer, when it has one.
    const select = (id) => {
        setZoneId(id);
        const target = findZone(id);
        if (target && target.offer) setOffer(target.offer);
    };

    // "Book" links only preselect the offer; the link itself scrolls to the booking form.
    const book = (id) => {
        const target = findZone(id);
        if (target && target.offer) setOffer(target.offer);
    };

    const step = (delta) => select(ZONES[(index + delta + ZONES.length) % ZONES.length].id);

    return {
        zone,
        index,
        total: ZONES.length,
        offer: chosenOffer || zone.offer || DEFAULT_OFFER,
        setOffer,
        select,
        book,
        prev: () => step(-1),
        next: () => step(1),
    };
}
