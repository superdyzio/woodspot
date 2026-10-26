// Copy and repeated items for the V2 "Natura" homepage.
// Where the mobile design words something differently, the value is { d, m }
// (desktop / mobile) and is rendered with <Copy>.

export const PHONE = { label: '576 000 246', href: 'tel:+48576000246' };
export const EMAIL = { label: 'woodspotpl@gmail.com', href: 'mailto:woodspotpl@gmail.com' };
export const MAPS_URL = 'https://goo.gl/maps/ME1aduGAakvzNnbm8';
export const SAS_URL = 'https://www.sas.org.pl';

export const NAV_LINKS = [
    { href: '#o-nas', label: 'O nas' },
    { href: '#oferta', label: 'Oferta' },
    { href: '#wydarzenia', label: 'Wydarzenia' },
    { href: '#lowiska', label: 'Łowiska' },
    { href: '#eko', label: 'Eko' },
    { href: '#kontakt', label: 'Kontakt' },
];

export const SOCIALS = [
    { href: 'https://www.facebook.com/woodspotpl/', label: 'Woodspot na Facebooku', icon: 'facebook' },
    { href: 'https://www.instagram.com/explore/locations/101079862755451/woodspot-bush-fun/', label: 'Woodspot na Instagramie', icon: 'instagram' },
    { href: MAPS_URL, label: 'Woodspot w Mapach Google', icon: 'pin' },
];

export const BOOKABLE = [
    'Spot w lesie',
    'Wiata z miejscem na ognisko',
    'Pole namiotowe',
    'Paintball – duże pole',
    'Paintball – małe pole',
    'Strzelnice i tor przeszkód',
    'Łowiska – stanowisko wędkarskie',
    'Łódka',
    'Boiska plażowe',
    'Teren na wyłączność',
];

export const STATS = [
    { value: '≈ 10 ha', label: 'ogrodzonego i oświetlonego terenu' },
    { value: '2 stawy', label: { d: 'łącznie 1,5 ha, łowienie no-kill', m: 'łącznie 1,5 ha, no-kill' } },
    { value: '100%', label: 'energii z odnawialnych źródeł' },
    { value: '3 boiska', label: { d: 'plażowe: 2 do siatkówki, 1 do piłki nożnej', m: 'plażowe: siatkówka i piłka nożna' } },
];

export const OFFERS = [
    {
        title: 'Spoty w lesie',
        teaser: 'Hamaki, ławki i stół wśród drzew',
        image: { name: 'bush-section-1', alt: 'Spot w sosnowym lesie: hamaki, ławki na oponach i drewniany stół' },
        text: 'W lesie czekają przygotowane Spoty, które stają się Waszym kątem wśród drzew – z hamakami, drewnianymi ławkami i stołem.',
        bullets: [
            'Hamaki, ławki i stół w cieniu sosen',
            'Rezerwacja na cały dzień',
            { d: 'Do dyspozycji sprzęt: frisbee, bule, badminton, piłki', m: 'Sprzęt: frisbee, bule, badminton, piłki' },
        ],
        price: 'od [CENA]',
        unit: '/ dzień',
    },
    {
        title: 'Wiaty i ogniska',
        teaser: 'Wieczory przy ogniu ze znajomymi',
        image: { name: 'bush-section-4', alt: 'Wiata z siedziskami z palet wokół miejsca na ognisko' },
        text: {
            d: 'Przy każdej z naszych wiat przygotowane jest miejsce na ognisko. To właśnie tam wieczory ze znajomymi i rodziną stają się klimatyczne.',
            m: 'Przy każdej z naszych wiat przygotowane jest miejsce na ognisko. To tam wieczory ze znajomymi i rodziną stają się klimatyczne.',
        },
        bullets: [
            'Miejsce na ognisko przy każdej wiacie',
            'Zadaszenie i siedziska dla całej grupy',
            { d: 'Rezerwacja na dzień lub wieczór', m: 'Na dzień lub wieczór' },
        ],
        price: 'od [CENA]',
    },
    {
        title: 'Pole namiotowe',
        teaser: 'Nocleg z prądem na skraju lasu',
        placeholder: { label: 'Miejsce na zdjęcie pola namiotowego', caption: '[ZDJĘCIE: pole namiotowe]', icon: 'tent' },
        text: {
            d: 'Dla chętnych na nocleg w otoczeniu natury na krawędzi lasu czeka pole namiotowe – z prądem, a w razie potrzeby także z gotowym namiotem.',
            m: 'Nocleg w otoczeniu natury na krawędzi lasu – z prądem, a w razie potrzeby także z gotowym namiotem.',
        },
        bullets: [
            'Prąd na polu namiotowym',
            'Namiot do wypożyczenia – rozłożymy i złożymy go za Was',
            'Teren ogrodzony i oświetlony',
        ],
        price: 'od [CENA]',
        unit: '/ noc',
    },
    {
        title: 'Paintball',
        teaser: 'Dwa poligony, fort i strzelnice',
        image: { name: 'paintball-section-3', alt: 'Dwóch graczy w maskach za drewnianą zasłoną na leśnym polu paintballowym' },
        text: 'Dwa poligony w naturalnym otoczeniu drzew: duży, z fortem w centrum, dla nawet 12 osób naraz i mały – do pojedynków 1v1.',
        bullets: [
            { d: 'Strefa otwarta i strefa leśna pełne zasłon', m: 'Strefa otwarta i strefa leśna' },
            { d: 'Dwie strzelnice i tor przeszkód dla początkujących i najmłodszych', m: 'Strzelnice i tor przeszkód dla najmłodszych' },
            { d: 'Markery jak M4, magazynki na 19 lub 200 kul', m: 'Markery jak M4, magazynki 19 lub 200 kul' },
        ],
        price: 'pakiety od [CENA]',
    },
    {
        title: 'Łowiska no-kill',
        teaser: 'Dwa stawy, 1,5 ha i łódki',
        image: { name: 'main-section', alt: 'Staw z wierzbą płaczącą na brzegu i zieloną łąką' },
        text: 'Dwa stawy o łącznej powierzchni 1,5 hektara, wiele stanowisk wędkarskich i łódki do wynajęcia.',
        bullets: [
            'Łowienie w formule no-kill',
            'Karp, lin, sandacz, amur i szczupak',
            'Łódki do wynajęcia',
        ],
        price: 'od [CENA]',
        unit: '/ dniówka',
    },
    {
        title: 'Boiska i sport',
        teaser: 'Siatkówka i piłka na piasku',
        image: { name: 'bush-section-2', alt: 'Boiska do siatkówki plażowej z żółtymi siatkami, ludzie w trakcie gry' },
        text: 'Na Woodspocie każdy może wykorzystać swoją energię na różne sposoby – na piasku, na trawie i między drzewami.',
        bullets: [
            'Dwa boiska do siatkówki plażowej',
            'Boisko do piłki nożnej plażowej',
            'Frisbee, badminton, bule, dart i piłki',
        ],
        price: 'od [CENA]',
    },
];

// The mobile design lists the chips in a different order; mobileOrder is the CSS flex order there.
export const EVENT_TYPES = [
    { label: 'Urodziny', mobileOrder: 0 },
    { label: 'Wieczory kawalerskie i panieńskie', mobileOrder: 1 },
    { label: 'Baby shower', mobileOrder: 0 },
    { label: 'Wycieczki szkolne', mobileOrder: 0 },
    { label: 'Weekend ze znajomymi', mobileOrder: 2 },
];

export const INQUIRY_FIELDS = [
    { id: 'inquiry-name', label: 'Imię', type: 'text', autoComplete: 'given-name' },
    { id: 'inquiry-phone', label: 'Telefon', type: 'tel', autoComplete: 'tel' },
    { id: 'inquiry-email', label: 'E-mail', type: 'email', autoComplete: 'email' },
    {
        id: 'inquiry-kind',
        label: 'Rodzaj wydarzenia',
        options: ['Urodziny', 'Wieczór kawalerski / panieński', 'Baby shower', 'Wycieczka szkolna', 'Teren na wyłączność', 'Inne'],
    },
    // "pair" fields share one row on mobile.
    { id: 'inquiry-date', label: 'Data', type: 'text', placeholder: 'dd.mm.rrrr', pair: true },
    { id: 'inquiry-people', label: 'Liczba osób', type: 'number', min: 1, pair: true },
];

export const INQUIRY_MESSAGE_PLACEHOLDER = {
    d: 'Opowiedz, co planujesz – dodatki, godziny, pomysły',
    m: 'Co planujesz? Dodatki, godziny, pomysły',
};

export const FAMILY_PERKS = ['Cały teren ogrodzony', 'Plac zabaw', 'Animatorzy na życzenie', 'Strzelnice i tor przeszkód'];

export const FISH = ['karp królewski', 'karp pełnołuski', 'lin', 'sandacz', 'amur', 'szczupak'];

export const FISHING_FACTS = [
    { term: 'Powierzchnia', value: 'Dwa stawy, łącznie 1,5 ha' },
    { term: 'Formuła', value: 'No-kill – ryby wracają do wody' },
    { term: 'Na miejscu', value: 'Stanowiska wędkarskie i łódki do wynajęcia' },
];

export const ECO_STEPS = [
    { d: 'Wyłącznie odnawialne źródła energii na całym terenie', m: 'Wyłącznie odnawialne źródła energii' },
    { d: 'Segregujemy odpady, a opony i inne materiały zmieniamy w część Woodspota', m: 'Segregujemy odpady, a opony zmieniamy w część Woodspota' },
    { d: 'Dajemy życie kolejnym pokoleniom ryb w naszych stawach', m: 'Dajemy życie kolejnym pokoleniom ryb w stawach' },
    { d: 'Sadzimy młode drzewka, które zagęszczają szkółkę choinek', m: 'Sadzimy drzewka, które zagęszczają szkółkę choinek' },
];

export const PRACTICAL_INFO = [
    { term: 'Godziny otwarcia', value: '[GODZINY OTWARCIA]' },
    { term: 'Sezon', value: '[SEZON]' },
    { term: 'Teren', value: 'Ogrodzony i w znacznym stopniu oświetlony' },
    { term: 'Nocleg', value: 'Pole namiotowe z prądem, namiot do wypożyczenia' },
    { term: 'Dla dzieci', value: 'Plac zabaw, animatorzy na życzenie' },
];

export const padIndex = (i) => String(i + 1).padStart(2, '0');
