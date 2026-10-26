// Copy and repeated items for the V1 "Ewolucja" homepage.
// Where the desktop and mobile designs use different copy, the value is
// `dm(desktop, mobile)` and <Txt> renders the right one per breakpoint.

export const dm = (d, m) => ({ responsive: true, d, m });

export const ACCENT = '#8CC63F';

export const PHONE = { label: '576 000 246', href: 'tel:+48576000246' };
export const EMAIL = 'woodspotpl@gmail.com';
export const MAPS_URL = 'https://goo.gl/maps/ME1aduGAakvzNnbm8';

export const NAV = [
    { href: '#o-nas', label: 'O nas' },
    { href: '#oferta', label: 'Oferta' },
    { href: '#bush-fun', label: 'Bush&Fun', inFooter: false },
    { href: '#paintball', label: 'Paintball' },
    { href: '#lowiska', label: 'Łowiska' },
    { href: '#imprezy', label: 'Imprezy' },
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

// "Co?" options of the booking bar.
export const BOOKING_OPTIONS = [
    { value: 'spot', label: 'Spot w lesie' },
    { value: 'wiata', label: 'Wiata z miejscem na ognisko' },
    { value: 'namiot', label: 'Pole namiotowe' },
    { value: 'pb-duze', label: 'Paintball – duże pole (do 12 os.)' },
    { value: 'pb-male', label: 'Paintball – małe pole (1v1)' },
    { value: 'strzelnice', label: 'Strzelnice i tor przeszkód' },
    { value: 'lowisko', label: 'Łowiska – stanowisko wędkarskie' },
    { value: 'lodka', label: 'Łowiska – łódka' },
    { value: 'boiska', label: 'Boiska plażowe' },
    { value: 'wylacznosc', label: 'Teren na wyłączność' },
];

// Offer tiles. Each tile groups booking options: clicking it selects the first
// one, and it is highlighted while any option of the group is selected.
export const OFFER_TILES = [
    {
        key: 'spot',
        options: ['spot', 'wiata'],
        icon: '/fireplace.png',
        title: 'Spoty i wiaty',
        desc: 'Hamaki, stoły i ognisko przy wiacie w sercu lasu',
        price: 'od [CENA] / dzień',
    },
    {
        key: 'namiot',
        options: ['namiot'],
        icon: '/tent.png',
        title: 'Pole namiotowe',
        desc: 'Nocleg na skraju lasu, z prądem i namiotem na życzenie',
        price: 'od [CENA] / noc',
    },
    {
        key: 'paintball',
        options: ['pb-duze', 'pb-male', 'strzelnice'],
        icon: '/paintball.png',
        title: 'Paintball',
        desc: 'Dwa poligony w lesie, strzelnice i tor przeszkód',
        price: 'pakiety od [CENA]',
    },
    {
        key: 'lowisko',
        options: ['lowisko', 'lodka'],
        icon: '/fishing.png',
        title: 'Łowiska no-kill',
        desc: 'Dwa stawy na 1,5 ha, stanowiska i łódki',
        price: 'od [CENA] / dzień',
    },
    {
        key: 'boiska',
        options: ['boiska'],
        icon: '/football.png',
        title: 'Boiska i sport',
        desc: 'Siatkówka i piłka plażowa, frisbee, bule, dart',
        price: 'od [CENA]',
    },
    {
        key: 'wylacznosc',
        options: ['wylacznosc'],
        icon: null, // flag pictogram
        title: dm('Teren na wyłączność', 'Na wyłączność'),
        desc: 'Urodziny, kawalerskie i panieńskie, baby shower, wycieczki',
        price: 'wycena indywidualna',
    },
];

export const ABOUT_STATS = [
    { value: '~10 ha', label: dm('terenu ogrodzonego i oświetlonego', 'teren ogrodzony i oświetlony') },
    { value: '100%', label: dm('energii z odnawialnych źródeł', 'energii z OZE') },
    { value: '2 stawy', label: dm('1,5 ha łowisk no-kill', '1,5 ha no-kill') },
];

export const SPOT_CHIPS = ['Hamaki', 'Ławki i stoły', 'Prąd na polu namiotowym', 'Namiot z rozłożeniem'];

export const SAS_URL = 'https://www.sas.org.pl';

// "Sport i dzieci" articles. `body` may contain a link on desktop, so it is
// rendered by the section component (see BushFun.js).
export const SPORT_KIDS = [
    {
        key: 'sport',
        image: '/bush-section-2.jpg',
        alt: 'Mecz siatkówki plażowej na boiskach Woodspot',
        eyebrow: 'Sport',
        title: 'Boiska plażowe i sprzęt',
        chips: ['2 × siatkówka plażowa', '1 × piłka nożna plażowa', 'Sprzęt na miejscu'],
    },
    {
        key: 'dzieci',
        image: '/bush-section-3.jpg',
        alt: 'Grupa młodzieży na słonecznej polanie wśród sosen',
        eyebrow: 'Dzieci',
        title: 'Bezpiecznie dla najmłodszych',
        chips: ['Teren ogrodzony', 'Plac zabaw', 'Animatorzy na życzenie', 'Zajęcia survivalowe SAS'],
    },
];

export const PAINTBALL_STATS = [
    { value: 'do 12 osób', label: dm('naraz na dużym polu', 'na dużym polu') },
    { value: '1v1', label: dm('pojedynki na małym polu', 'na małym polu') },
    { value: 'Fort', label: dm('w centrum dużego pola', 'w centrum pola') },
    { value: '2 strefy', label: dm('otwarta i zamknięta, leśna', 'otwarta i leśna') },
];

export const PAINTBALL_DETAILS = [
    {
        image: '/paintball-section-1.jpg',
        alt: 'Pole paintballowe z przeszkodami z opon wśród brzóz',
        title: 'Strzelnice i tor przeszkód',
        body: dm(
            'Na rozgrzewkę dla początkujących przygotowaliśmy dwie strzelnice i tor przeszkód. Sprawdzicie tam celność i sprawność bez strzelania do przeciwnika – to też idealna alternatywa dla najmłodszych.',
            'Dwie strzelnice i tor przeszkód na rozgrzewkę – celność i sprawność bez strzelania do przeciwnika. Idealne dla najmłodszych.'
        ),
    },
    {
        image: '/paintball-section-4.jpg',
        alt: 'Dwóch uśmiechniętych graczy w maskach z markerami',
        title: 'Markery jak M4',
        body: dm(
            'Nasze markery wyglądają jak prawdziwy karabin M4. Wyposażycie je w małe magazynki 19-strzałowe, ładowane od dołu jak prawdziwe, albo w duże, mieszczące aż 200 kul – praktyczniejsze przy dłuższej potyczce.',
            'Markery wyglądają jak prawdziwy karabin M4. Do wyboru magazynki 19-strzałowe, ładowane od dołu jak prawdziwe, albo duże – na 200 kul.'
        ),
    },
    {
        image: '/paintball-section-3.jpg',
        alt: 'Dwóch graczy w maskach za drewnianą zasłoną w lesie',
        title: 'Strefa kibica',
        body: dm(
            'Strefie towarzyszy przestrzeń do kibicowania i odpoczynku po grze. Odpoczywając, wciąż jesteś blisko znajomych – możesz kibicować swojej drużynie i emocjonować się wynikiem.',
            'Przestrzeń do kibicowania i odpoczynku po grze – wciąż blisko znajomych i emocji.'
        ),
    },
];

export const FISHING_STATS = [
    { value: '1,5 ha', label: 'dwa stawy' },
    { value: 'no-kill', label: 'łowimy i wypuszczamy' },
    { value: 'łódki', label: 'do wynajęcia' },
];

export const FISH_SPECIES = 'karp królewski i pełnołuski · lin · sandacz · amur · szczupak';

export const EVENT_TYPES_CHIPS = ['Urodziny', 'Wieczory kawalerskie i panieńskie', 'Baby shower', 'Wycieczki szkolne'];

export const EVENT_EXTRAS = ['Animatorzy dla dzieci', 'Zajęcia survivalowe SAS', 'Ognisko przy wiacie', 'Nocleg na polu namiotowym'];

export const EVENT_FORM_TYPES = [
    'Urodziny',
    'Wieczór kawalerski',
    'Wieczór panieński',
    'Baby shower',
    'Wycieczka szkolna',
    'Teren na wyłączność – inne',
];

export const ECO_ITEMS = [
    { icon: 'sun', label: dm('100% energii z OZE', '100% z OZE') },
    { icon: 'recycle', label: dm('Segregacja odpadów', 'Segregacja') },
    { icon: 'tire', label: dm('Opony w drugim życiu', 'Opony od nowa') },
    { icon: 'tree', label: 'Szkółka choinek' },
];

export const ON_SITE = ['Teren ogrodzony i oświetlony', 'Prąd na polu namiotowym'];
