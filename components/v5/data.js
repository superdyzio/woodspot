// Content of the V5 "Rezerwuj najpierw" homepage.
// Where the desktop (1440) and mobile (390) designs use different copy,
// the value is an object { d, m } rendered by <R> (see Responsive.js).

export const PHONE = '576 000 246';
export const PHONE_HREF = 'tel:+48576000246';
export const EMAIL = 'woodspotpl@gmail.com';
export const EMAIL_HREF = `mailto:${EMAIL}`;
export const MAPS_URL = 'https://goo.gl/maps/ME1aduGAakvzNnbm8';
export const SAS_URL = 'https://www.sas.org.pl';

// Shown instead of sending anything: this page is a preview without a booking backend.
export const PREVIEW_NOTICE =
    'Dziękujemy! To podgląd nowej strony – rezerwacje wkrótce. Zadzwoń: 576 000 246 lub napisz: woodspotpl@gmail.com';

export const NAV = [
    { href: '#oferta', label: 'Oferta' },
    { href: '#dostepnosc', label: 'Dostępność' },
    { href: '#wydarzenia', label: 'Wydarzenia' },
    { href: '#o-nas', label: 'O nas' },
    { href: '#faq', label: 'FAQ' },
    { href: '#kontakt', label: 'Kontakt' },
];

export const SOCIALS = [
    { href: 'https://www.facebook.com/woodspotpl/', label: 'Woodspot na Facebooku', icon: '/facebook-logo.png' },
    {
        href: 'https://www.instagram.com/explore/locations/101079862755451/woodspot-bush-fun/',
        label: 'Woodspot na Instagramie',
        icon: '/instagram-logo.png',
    },
    { href: MAPS_URL, label: 'Woodspot w Mapach Google', icon: '/google-logo.png' },
];

// Attraction categories: booking tabs in the hero and offer filters.
export const CATEGORIES = [
    { id: 'wyp', label: 'Wypoczynek' },
    { id: 'pb', label: 'Paintball' },
    { id: 'low', label: 'Łowiska' },
    { id: 'evt', label: 'Wydarzenia' },
];

export const OFFER_FILTERS = [{ id: 'all', label: 'Wszystko' }, ...CATEGORIES];

// Booking widget: description and "Co?" options per tab.
export const BOOKING = {
    wyp: {
        desc: {
            d: 'Spot w lesie, wiata z miejscem na ognisko, pole namiotowe z prądem albo boiska plażowe.',
            m: 'Spot w lesie, wiata z ogniskiem, pole namiotowe z prądem albo boiska plażowe.',
        },
        options: ['Spot w lesie', 'Wiata z miejscem na ognisko', 'Pole namiotowe', 'Boiska plażowe'],
    },
    pb: {
        desc: {
            d: 'Duże pole do 12 osób, małe pole do pojedynków 1v1, strzelnice i tor przeszkód.',
            m: 'Duże pole do 12 osób, małe pole 1v1, strzelnice i tor przeszkód.',
        },
        options: ['Paintball – duże pole (do 12 osób)', 'Paintball – małe pole (1v1)', 'Strzelnice i tor przeszkód'],
    },
    low: {
        desc: {
            d: 'Dwa stawy no-kill o łącznej powierzchni 1,5 ha – stanowiska wędkarskie i łódki.',
            m: 'Dwa stawy no-kill, łącznie 1,5 ha – stanowiska i łódki.',
        },
        options: ['Stanowisko wędkarskie – dniówka', 'Łódka do wynajęcia'],
    },
    evt: {
        desc: {
            d: 'Urodziny, wieczory kawalerskie i panieńskie, baby shower, wycieczki szkolne – także teren na wyłączność.',
            m: 'Urodziny, kawalerskie i panieńskie, baby shower, wycieczki – także teren na wyłączność.',
        },
        options: ['Teren na wyłączność', 'Urodziny', 'Wieczór kawalerski / panieński', 'Baby shower', 'Wycieczka szkolna'],
    },
};

export const HIGHLIGHTS = [
    { icon: 'tree', title: 'Niemal 10 ha', text: 'lasów, polan i stawów' },
    {
        icon: 'shield',
        title: { d: 'Teren ogrodzony', m: 'Ogrodzony' },
        text: { d: 'i w znacznym stopniu oświetlony', m: 'i oświetlony teren' },
    },
    { icon: 'sun', title: { d: '100% energii z OZE', m: '100% z OZE' }, text: 'fotowoltaika na terenie' },
    { icon: 'pin', title: 'Pod Wrocławiem', text: { d: 'Siemianice, gm. Oborniki Śląskie', m: 'gm. Oborniki Śląskie' } },
];

// Offer cards. Desktop shows `bullets`, mobile shows the shorter `blurb`.
export const OFFERS = [
    {
        id: 'spot',
        category: 'wyp',
        tag: 'Wypoczynek',
        title: 'Spot w lesie',
        image: '/bush-section-1.jpg',
        alt: 'Spot w sosnowym lesie z hamakami, ławkami i stołem',
        bullets: ['Hamaki, drewniane ławki i stół', 'Wasz własny kąt wśród drzew', 'Sprzęt sportowy na miejscu'],
        blurb: 'Hamaki, drewniane ławki i stół – Wasz kąt wśród drzew.',
        price: { before: 'od', after: '/ dzień' },
    },
    {
        id: 'wiata',
        category: 'wyp',
        tag: 'Wypoczynek',
        title: 'Wiata z miejscem na ognisko',
        image: '/bush-section-4.jpg',
        alt: 'Wiata z siedziskami wokół miejsca na ognisko',
        bullets: ['Miejsce na ognisko przy każdej wiacie', 'Na wieczory ze znajomymi i rodziną', 'Teren oświetlony po zmroku'],
        blurb: 'Ognisko przy każdej wiacie – na klimatyczne wieczory.',
        price: { before: 'od', after: '/ dzień' },
    },
    {
        id: 'namiot',
        category: 'wyp',
        tag: 'Wypoczynek',
        title: 'Pole namiotowe',
        placeholder: { icon: '/tent.png', label: '[ZDJĘCIE: pole namiotowe]' },
        bullets: ['Na krawędzi lasu, z prądem', 'Opcja: gotowy namiot do wypożyczenia', 'Rozłożymy i złożymy go za Was'],
        blurb: 'Z prądem, na krawędzi lasu. Namiot rozłożymy za Was.',
        price: { before: 'od', after: '/ noc' },
    },
    {
        id: 'pb-duze',
        category: 'pb',
        tag: 'Paintball',
        title: 'Paintball – duże pole',
        image: '/paintball-section-2.jpg',
        alt: 'Gracz paintballa przy drewnianym forcie w lesie',
        bullets: ['Rywalizacja nawet 12 osób naraz', 'Fort w centrum, strefa otwarta i leśna', 'Markery w stylu M4'],
        blurb: 'Nawet 12 osób naraz, fort w centrum, strefa leśna.',
        price: { before: 'pakiety od' },
    },
    {
        id: 'pb-male',
        category: 'pb',
        tag: 'Paintball',
        title: 'Paintball – małe pole',
        image: '/paintball-section-3.jpg',
        alt: 'Dwóch graczy w maskach za drewnianą zasłoną',
        bullets: ['Idealne do pojedynków 1v1', 'Szybkie mecze i krótkie turnieje', 'Nie potrzebujesz dużej grupy'],
        blurb: 'Pojedynki 1v1 – nie potrzebujesz dużej grupy.',
        price: { before: 'pakiety od' },
    },
    {
        id: 'strzelnice',
        category: 'pb',
        tag: 'Paintball',
        title: 'Strzelnice i tor przeszkód',
        image: '/paintball-section-1.jpg',
        alt: 'Pole z przeszkodami z opon wśród brzóz',
        bullets: ['Dwie strzelnice i tor przeszkód', 'Celność bez strzelania do przeciwnika', 'Dla początkujących i najmłodszych'],
        blurb: 'Dla początkujących i najmłodszych – bez przeciwnika.',
        price: { before: 'od' },
    },
    {
        id: 'lowiska',
        category: 'low',
        tag: 'Łowiska',
        title: 'Łowiska no-kill',
        image: '/fishing-section.jpg',
        alt: 'Słoneczny staw z wędkarzami na brzegu',
        bullets: ['Dwa stawy, łącznie 1,5 ha', 'Wiele stanowisk, łódki do wynajęcia', 'Karp, lin, sandacz, amur, szczupak'],
        blurb: 'Dwa stawy, 1,5 ha. Stanowiska i łódki do wynajęcia.',
        price: { before: 'dniówka od' },
    },
    {
        id: 'boiska',
        category: 'wyp',
        tag: 'Wypoczynek',
        title: 'Boiska plażowe',
        image: '/bush-section-2.jpg',
        alt: 'Gra w siatkówkę plażową na boisku z żółtymi siatkami',
        bullets: ['Dwa boiska do siatkówki', 'Jedno boisko do piłki nożnej', 'Frisbee, badminton, bule, dart'],
        blurb: 'Dwa do siatkówki, jedno do piłki nożnej.',
        price: { before: 'od' },
    },
    {
        id: 'teren',
        category: 'evt',
        tag: 'Wydarzenia',
        title: 'Teren na wyłączność',
        image: '/about-section-1.jpg',
        alt: 'Widok z lotu ptaka na jesienny las brzozowy i polany Woodspotu',
        bullets: ['Urodziny, kawalerskie i panieńskie', 'Baby shower, wycieczki szkolne', 'Animatorzy i zajęcia SAS na życzenie'],
        blurb: 'Urodziny, kawalerskie, baby shower, wycieczki szkolne.',
        quote: 'Wycena indywidualna',
        dark: true,
    },
];

// Availability preview (sample data from the design).
export const DAY_NAMES = {
    Pn: 'Poniedziałek',
    Wt: 'Wtorek',
    'Śr': 'Środa',
    Czw: 'Czwartek',
    Pt: 'Piątek',
    Sob: 'Sobota',
    Nd: 'Niedziela',
};

export const DAY_STATUS = { free: 'Dostępne', last: 'Ostatnie miejsca', full: 'Zajęte' };

// `slots` lists which of SLOT_TIMES are free on that day.
export const DAYS = [
    { dow: 'Pn', num: '12', status: 'free', slots: [true, true, false, true] },
    { dow: 'Wt', num: '13', status: 'free', slots: [true, false, true, true] },
    { dow: 'Śr', num: '14', status: 'last', slots: [false, true, false, false] },
    { dow: 'Czw', num: '15', status: 'free', slots: [true, true, true, false] },
    { dow: 'Pt', num: '16', status: 'last', slots: [false, false, true, false] },
    { dow: 'Sob', num: '17', status: 'full', slots: [false, false, false, false] },
    { dow: 'Nd', num: '18', status: 'last', slots: [false, false, false, true] },
];

export const DEFAULT_DAY = 2;

export const SLOT_TIMES = ['10:00', '12:30', '15:00', '17:30'];

export const SLOT_LABELS = {
    free: { d: 'Wolny · całe pole, do 12 osób', m: 'Wolny · do 12 osób' },
    taken: 'Zajęty',
};

export const LEGEND = ['free', 'last', 'full'];

export const STEPS = [
    {
        title: 'Wybierz atrakcję',
        text: {
            d: 'Spot, wiata, paintball, łowiska albo cały teren – podaj datę i liczbę osób.',
            m: 'Podaj datę i liczbę osób.',
        },
    },
    {
        title: 'Zarezerwuj',
        text: {
            d: 'Dodaj to, czego potrzebujesz: namiot z rozłożeniem, animatora albo zajęcia SAS – i zostaw kontakt.',
            m: 'Dodaj namiot, animatora albo zajęcia SAS i zostaw kontakt.',
        },
    },
    {
        title: 'Przyjedź',
        text: {
            d: 'Siemianice, gm. Oborniki Śląskie. Teren jest ogrodzony i oświetlony – czekamy na miejscu.',
            m: 'Siemianice, gm. Oborniki Śląskie – czekamy na miejscu.',
        },
    },
];

export const EVENT_TYPES = ['Urodziny', 'Wieczór kawalerski', 'Wieczór panieński', 'Baby shower', 'Wycieczka szkolna'];

// Event inquiry form. `wide` fields span the whole row on mobile.
export const EVENT_FIELDS = [
    { id: 'imie', label: 'Imię', type: 'text', autoComplete: 'given-name', wide: true },
    { id: 'tel', label: 'Telefon', type: 'tel', autoComplete: 'tel', wide: true },
    { id: 'mail', label: 'E-mail', type: 'email', autoComplete: 'email', wide: true },
    {
        id: 'rodzaj',
        label: 'Rodzaj wydarzenia',
        options: ['Urodziny', 'Wieczór kawalerski / panieński', 'Baby shower', 'Wycieczka szkolna', 'Teren na wyłączność', 'Inne'],
        wide: true,
    },
    { id: 'data', label: 'Data', type: 'date' },
    { id: 'osoby', label: 'Liczba osób', type: 'number', min: 1 },
];

export const ABOUT_POINTS = [
    {
        icon: 'shieldCheck',
        title: 'Bezpiecznie dla dzieci',
        text: {
            d: 'Cały teren jest ogrodzony. Plac zabaw, animatorzy na życzenie i zajęcia survivalowe SAS dla dzieci i dorosłych.',
            m: 'Teren ogrodzony, plac zabaw, animatorzy i zajęcia SAS.',
        },
    },
    {
        icon: 'sun',
        title: 'Zielona energia',
        text: {
            d: 'Zasilanie wyłącznie z odnawialnych źródeł. Segregujemy odpady, a opony zmieniamy w część Woodspota.',
            m: 'Wyłącznie odnawialne źródła. Segregacja, opony w drugim życiu.',
        },
    },
    {
        icon: { d: 'fish', m: 'tree' },
        title: 'Żywe stawy i las',
        text: {
            d: 'Łowimy w formule no-kill, dajemy życie kolejnym pokoleniom ryb i sadzimy drzewka w naszej szkółce choinek.',
            m: 'No-kill, zarybianie i szkółka choinek.',
        },
    },
];

export const REVIEW_PLACEHOLDERS = 3;

// FAQ: the first half is the left column on desktop, the rest the right one.
export const FAQ = [
    {
        q: 'Czy teren jest ogrodzony?',
        a: 'Tak. Cały teren jest ogrodzony i w znacznym stopniu oświetlony – dzieci są u nas bezpieczne.',
    },
    {
        q: 'Czy na polu namiotowym jest prąd?',
        a: {
            d: 'Tak. A jeśli nie macie namiotu, wypożyczymy go – rozłożymy i złożymy za Was.',
            m: 'Tak. Namiot możemy też wypożyczyć – rozłożymy i złożymy go za Was.',
        },
    },
    {
        q: 'Czy dzieci mogą spróbować paintballa?',
        a: {
            d: 'Dla najmłodszych są dwie strzelnice i tor przeszkód – bez strzelania do przeciwnika. [Minimalny wiek gry na polu – do potwierdzenia]',
            m: 'Dla najmłodszych są strzelnice i tor przeszkód. [Minimalny wiek gry – do potwierdzenia]',
        },
    },
    {
        q: 'Ile osób może grać naraz?',
        a: {
            d: 'Na dużym polu nawet 12 osób, małe pole jest idealne do pojedynków 1v1.',
            m: 'Na dużym polu nawet 12 osób, małe pole służy do pojedynków 1v1.',
        },
    },
    {
        q: 'Czy złowione ryby można zabrać?',
        a: { d: 'Nie – łowimy w formule no-kill, ryby wracają do stawu.', m: 'Nie – łowimy w formule no-kill.' },
    },
    {
        q: 'Czy można wynająć cały teren?',
        a: {
            d: 'Tak – teren możesz mieć na wyłączność. Napisz, pomożemy zorganizować wydarzenie.',
            m: 'Tak – teren możesz mieć na wyłączność.',
        },
    },
    { q: 'W jakich godzinach jesteście otwarci?', a: '[GODZINY OTWARCIA] · [SEZON]' },
    { q: 'Czy można przyjechać z psem?', a: '[do potwierdzenia]' },
];

export const PRACTICAL_INFO = [
    { label: { d: 'Godziny otwarcia', m: 'Godziny' }, value: '[GODZINY OTWARCIA]' },
    { label: 'Sezon', value: '[SEZON]' },
    { label: 'Teren', value: 'ogrodzony i oświetlony' },
    { label: 'Pole namiotowe', value: 'z prądem' },
    { label: 'Łowiska', value: 'no-kill', desktopOnly: true },
];

export const FOOTER_NAV = [
    {
        title: 'Oferta',
        links: [
            { href: '#oferta', label: 'Spoty i wiaty' },
            { href: '#oferta', label: 'Pole namiotowe' },
            { href: '#oferta', label: 'Paintball' },
            { href: '#oferta', label: 'Łowiska' },
            { href: '#oferta', label: 'Boiska plażowe', desktopOnly: true },
        ],
    },
    {
        title: 'Woodspot',
        links: [
            { href: '#wydarzenia', label: 'Wydarzenia' },
            { href: '#o-nas', label: 'O nas' },
            { href: '#faq', label: 'FAQ' },
            { href: '#kontakt', label: 'Kontakt' },
        ],
    },
];
