// Content for the V4 "Mapa terenu" homepage.
// Values that differ between the desktop and the mobile design are written as { d, m }
// and rendered with the helpers in Variant.js.

export const ACCENT = '#E8742A';

export const PHONE = '576 000 246';
export const PHONE_HREF = 'tel:+48576000246';
export const EMAIL = 'woodspotpl@gmail.com';
export const MAPS_URL = 'https://goo.gl/maps/ME1aduGAakvzNnbm8';

export const PREVIEW_NOTICE =
    'Dziękujemy! To podgląd nowej strony – rezerwacje wkrótce. Zadzwoń: 576 000 246 lub napisz: woodspotpl@gmail.com';

export const NAV_LINKS = [
    { href: '#mapa', label: 'Mapa' },
    { href: '#strefy', label: 'Strefy' },
    { href: '#strefa-f', label: 'Paintball' },
    { href: '#strefa-b', label: 'Łowiska' },
    { href: '#wydarzenia', label: 'Wydarzenia' },
    { href: '#kontakt', label: 'Kontakt' },
];

export const FOOTER_LINKS = [
    { href: '#mapa', label: 'Mapa terenu' },
    { href: '#strefy', label: 'Strefy' },
    { href: '#rezerwacja', label: 'Rezerwacja' },
    { href: '#wydarzenia', label: 'Wydarzenia' },
    { href: '#kontakt', label: 'Kontakt' },
];

export const HERO_STATS = ['~10 HA TERENU', '2 STAWY · 1,5 HA', '2 POLA PAINTBALL', '100% ENERGII Z OZE'];

export const MAP_LEGEND = [
    { key: 'forest', label: 'las' },
    { key: 'water', label: 'woda' },
    { key: 'paths', label: 'ścieżki' },
    { key: 'fence', label: 'ogrodzenie' },
    { key: 'lights', label: 'oświetlenie' },
];

// Map zones: hotspot position (% of the map), highlight shape (map viewBox units),
// zone card content and the booking offer the zone preselects.
export const ZONES = [
    {
        id: 'A',
        name: 'Wejście i dojazd',
        short: 'Wejście',
        x: 90.5,
        y: 87.5,
        labelLeft: true,
        highlight: { shape: 'rect', x: 845, y: 512, width: 120, height: 92, rx: 14 },
        photo: '/contact-map.png',
        photoAlt: 'Stylizowana mapa dojazdu do Woodspot w okolicy Obornik Śląskich i Wrocławia',
        photoPos: '50% 0%',
        desc: 'Siemianice, gm. Oborniki Śląskie – pod Wrocławiem. Cały teren jest ogrodzony i w znacznym stopniu oświetlony.',
        facts: {
            d: ['Poznańska, 55-120 Siemianice', '[GODZINY OTWARCIA]', '[parking – do potwierdzenia]'],
            m: ['Poznańska, Siemianice', '[GODZINY OTWARCIA]'],
        },
        cta: 'Wyznacz trasę',
        href: MAPS_URL,
        offer: '',
    },
    {
        id: 'B',
        name: 'Stawy i łowiska',
        short: 'Stawy',
        x: 60,
        y: 73.1,
        highlight: { shape: 'ellipse', cx: 600, cy: 476, rx: 135, ry: 82 },
        photo: '/fishing-section.jpg',
        photoAlt: 'Słoneczny staw z wędkarzami na brzegu i lasem w tle',
        photoPos: '50% 60%',
        desc: {
            d: 'Dwa stawy o łącznej powierzchni 1,5 hektara, łowienie w formule no-kill. Do dyspozycji jest wiele stanowisk wędkarskich oraz łódki do wynajęcia.',
            m: 'Dwa stawy o łącznej powierzchni 1,5 hektara, łowienie w formule no-kill. Wiele stanowisk wędkarskich i łódki do wynajęcia.',
        },
        facts: { d: ['1,5 ha wody', 'no-kill', 'łódki do wynajęcia'], m: ['1,5 ha wody', 'no-kill', 'łódki'] },
        offer: 'Łowiska no-kill – stanowisko',
    },
    {
        id: 'C',
        name: 'Wiaty i ogniska',
        short: 'Wiaty',
        x: 35.5,
        y: 73.4,
        highlight: { shape: 'ellipse', cx: 358, cy: 476, rx: 64, ry: 56 },
        photo: '/bush-section-4.jpg',
        photoAlt: 'Drewniana wiata, ławki z palet i miejsce na ognisko',
        photoPos: '50% 55%',
        desc: {
            d: 'Przy każdej z naszych wiat przygotowane jest miejsce na ognisko. To właśnie tam wieczory ze znajomymi i rodziną stają się klimatyczne.',
            m: 'Przy każdej z naszych wiat przygotowane jest miejsce na ognisko – to tam wieczory ze znajomymi i rodziną stają się klimatyczne.',
        },
        facts: { d: ['ognisko przy każdej wiacie', 'na dzień lub wieczór', 'od [CENA]'], m: ['ognisko przy wiacie', 'od [CENA]'] },
        offer: 'Wiata z miejscem na ognisko',
    },
    {
        id: 'D',
        name: 'Las ze Spotami',
        short: 'Spoty',
        x: 19,
        y: 45.3,
        highlight: { shape: 'ellipse', cx: 200, cy: 322, rx: 140, ry: 205 },
        photo: '/bush-section-1.jpg',
        photoAlt: 'Spot w sosnowym lesie: hamaki, ławki z opon i drewniany stół',
        photoPos: { d: '50% 50%', m: '50% 55%' },
        desc: {
            d: 'W lesie czekają przygotowane Spoty – Wasz kąt wśród drzew. Do dyspozycji są w nich hamaki, drewniane ławki i stoły.',
            m: 'W lesie czekają przygotowane Spoty – Wasz kąt wśród drzew – z hamakami, drewnianymi ławkami i stołami.',
        },
        facts: { d: ['hamaki', 'ławki i stoły', 'na dzień · od [CENA]'], m: ['hamaki', 'ławki i stoły', 'od [CENA]'] },
        offer: 'Spot w lesie',
    },
    {
        id: 'E',
        name: 'Pole namiotowe',
        short: 'Namioty',
        x: 46,
        y: 53.4,
        highlight: { shape: 'rect', x: 387, y: 296, width: 146, height: 98, rx: 12 },
        photo: '',
        placeholder: '[ZDJĘCIE: pole namiotowe]',
        desc: {
            d: 'Na krawędzi lasu czeka pole namiotowe z prądem. W razie potrzeby wypożyczymy gotowy namiot – rozłożymy i złożymy go za Was.',
            m: 'Na krawędzi lasu czeka pole namiotowe z prądem. Namiot możemy wypożyczyć, rozłożyć i złożyć za Was.',
        },
        facts: { d: ['prąd na polu', 'namiot z rozłożeniem', 'za noc · od [CENA]'], m: ['prąd na polu', 'za noc · od [CENA]'] },
        offer: 'Pole namiotowe',
    },
    {
        id: 'F',
        name: 'Paintball',
        short: 'Paintball',
        x: 53,
        y: 26.6,
        highlight: { shape: 'rect', x: 410, y: 60, width: 350, height: 226, rx: 16 },
        photo: '/paintball-section-2.jpg',
        photoAlt: 'Gracz paintballa celuje zza drewnianej chatki na leśnym polu',
        photoPos: '50% 40%',
        desc: {
            d: 'Dwa poligony wśród drzew: duży do 12 osób naraz z fortem w centrum i mały do pojedynków 1v1. Na rozgrzewkę – dwie strzelnice i tor przeszkód.',
            m: 'Duże pole do 12 osób naraz z fortem w centrum i małe do pojedynków 1v1. Na rozgrzewkę – dwie strzelnice i tor przeszkód.',
        },
        facts: { d: ['do 12 graczy', 'pole 1v1', 'strzelnice i tor przeszkód'], m: ['do 12 graczy', '1v1', 'strzelnice'] },
        offer: 'Paintball – duże pole',
    },
    {
        id: 'G',
        name: 'Plac zabaw i polana',
        short: 'Dzieci',
        x: 72,
        y: 45.3,
        highlight: { shape: 'ellipse', cx: 720, cy: 290, rx: 74, ry: 52 },
        photo: '/bush-section-3.jpg',
        photoAlt: 'Grupa młodych ludzi na słonecznej polanie wśród sosen',
        photoPos: '50% 50%',
        desc: {
            d: 'Teren jest ogrodzony, więc dzieci są tu bezpieczne. Plac zabaw, animatorzy na życzenie i zajęcia survivalowe ze Szkołą Przygody i Przetrwania SAS.',
            m: 'Teren jest ogrodzony, więc dzieci są tu bezpieczne. Plac zabaw, animatorzy na życzenie i zajęcia survivalowe SAS.',
        },
        facts: { d: ['plac zabaw', 'animatorzy na życzenie', 'survival z SAS'], m: ['plac zabaw', 'animatorzy', 'survival SAS'] },
        cta: 'Zapytaj o animacje',
        href: '#wydarzenia',
        offer: '',
    },
    {
        id: 'H',
        name: 'Boiska plażowe',
        short: 'Boiska',
        x: 86,
        y: 27.3,
        labelLeft: true,
        highlight: { shape: 'rect', x: 780, y: 88, width: 165, height: 176, rx: 14 },
        photo: '/bush-section-2.jpg',
        photoAlt: 'Mecz siatkówki plażowej na boisku z żółtą siatką',
        photoPos: '50% 65%',
        desc: {
            d: 'Dwa boiska do siatkówki plażowej i jedno do piłki nożnej. Do tego frisbee, badminton, bule, dart, piłki i wiele innych.',
            m: 'Dwa boiska do siatkówki plażowej i jedno do piłki nożnej, a do tego frisbee, badminton, bule, dart i piłki.',
        },
        facts: { d: ['2× siatkówka', '1× piłka nożna', 'sprzęt sportowy'], m: ['2× siatkówka', '1× piłka nożna'] },
        offer: 'Boiska plażowe',
    },
];

export const DEFAULT_ZONE = 'B';
export const DEFAULT_OFFER = 'Spot w lesie';

export const BOOKING_OFFERS = [
    'Spot w lesie',
    'Wiata z miejscem na ognisko',
    'Pole namiotowe',
    'Paintball – duże pole',
    'Paintball – małe pole',
    'Strzelnice i tor przeszkód',
    'Łowiska no-kill – stanowisko',
    'Łódka',
    'Boiska plażowe',
    'Teren na wyłączność / wydarzenie',
];

const SasLink = ({ children }) => (
    <a href="https://www.sas.org.pl" target="_blank" rel="noopener">{children}</a>
);

// Zone sections below the map (zone F has its own layout, see PAINTBALL).
// `reverse` puts the photo on the right on desktop; `mini` is the zone's dot on the thumbnail map.
export const ZONE_ARTICLES = [
    {
        id: 'B',
        label: 'STREFA B · ŁOWISKA',
        title: 'Stawy i łowiska no-kill',
        image: { src: '/fishing-section.jpg', alt: 'Słoneczny staw z wędkarzami na brzegu, brzozą i linią lasu w tle', pos: '50% 60%' },
        bg: '#5E8FA8',
        height: { d: 520, m: 190 },
        mini: [600, 468],
        lead: 'Wpadnij do nas powędkować! Zabierz dzieci, dziadków czy kółko wędkarskie i sprawdźcie, co skrywa duma naszej miejscówki.',
        body: {
            d: ['Nasz przyjazny środowisku teren oferuje dwa stawy o łącznej powierzchni 1,5 hektara, w których łowicie w formule no-kill. Do dyspozycji jest wiele stanowisk wędkarskich oraz łódki do wynajęcia.'],
            m: ['Wpadnij do nas powędkować! Dwa stawy o łącznej powierzchni 1,5 hektara, łowienie w formule no-kill, wiele stanowisk wędkarskich i łódki do wynajęcia.'],
        },
        chipsLabel: 'W STAWACH ZNAJDZIECIE',
        chipsAria: 'Gatunki ryb',
        chips: ['karp królewski', 'karp pełnołuski', 'lin', 'sandacz', 'amur', 'szczupak'],
        price: { d: 'Stanowisko (dniówka): od [CENA] · Łódka: od [CENA]', m: 'Stanowisko: od [CENA] · Łódka: od [CENA]' },
        cta: 'Sprawdź dostępność stanowisk',
        href: '#rezerwacja',
    },
    {
        id: 'C',
        reverse: true,
        label: 'STREFA C · WIATY',
        title: 'Wiaty z miejscem na ognisko',
        image: { src: '/bush-section-4.jpg', alt: 'Drewniana wiata, ławki z palet i miejsce na ognisko na zielonej polanie pod sosnami', pos: '50% 55%' },
        bg: '#1D5222',
        height: { d: 440, m: 180 },
        mini: [355, 470],
        body: {
            d: ['Czas umili ognisko – miejsce na nie przygotowane jest przy każdej z naszych wiat. To właśnie tam wieczory ze znajomymi i rodziną stają się klimatyczne.'],
            m: ['Miejsce na ognisko czeka przy każdej z naszych wiat – to tam wieczory ze znajomymi i rodziną stają się klimatyczne.'],
        },
        chips: { d: ['ognisko przy każdej wiacie', 'na dzień lub wieczór', 'od [CENA]'], m: ['na dzień lub wieczór', 'od [CENA]'] },
        cta: 'Zarezerwuj wiatę',
        href: '#rezerwacja',
    },
    {
        id: 'D',
        label: 'STREFA D · LAS ZE SPOTAMI',
        title: 'Spoty – Wasz kąt wśród drzew',
        image: { src: '/bush-section-1.jpg', alt: 'Spot w sosnowym lesie: hamaki między drzewami, ławki z opon i drewniany stół', pos: { d: '50% 50%', m: '50% 55%' } },
        bg: '#1D5222',
        height: { d: 440, m: 180 },
        mini: [190, 290],
        body: {
            d: ['W lesie czekają przygotowane Spoty, które stają się Waszym kątem wśród drzew. Do dyspozycji są w nich hamaki, drewniane ławki i stoły.'],
            m: ['W lesie czekają przygotowane Spoty z hamakami, drewnianymi ławkami i stołami.'],
        },
        chips: ['hamaki', 'ławki i stoły', 'na dzień · od [CENA]'],
        cta: 'Zarezerwuj Spot',
        href: '#rezerwacja',
    },
    {
        id: 'E',
        reverse: true,
        label: 'STREFA E · NOCLEG',
        title: 'Nocleg na krawędzi lasu',
        placeholder: { d: '[ZDJĘCIE: pole namiotowe na krawędzi lasu]', m: '[ZDJĘCIE: pole namiotowe]' },
        bg: '#2F6B33',
        height: { d: 440, m: 170 },
        mini: [460, 342],
        body: {
            d: ['Dla chętnych na spędzenie nocy w otoczeniu natury na krawędzi lasu czeka pole namiotowe – z prądem, a w razie potrzeby także z gotowym namiotem, który rozłożymy i złożymy za Was.'],
            m: ['Pole namiotowe z prądem. W razie potrzeby wypożyczymy gotowy namiot – rozłożymy i złożymy go za Was.'],
        },
        chips: { d: ['prąd na polu', 'namiot z rozłożeniem', 'za noc · od [CENA]'], m: ['prąd na polu', 'za noc · od [CENA]'] },
        cta: 'Zarezerwuj nocleg',
        href: '#rezerwacja',
    },
    { id: 'F', paintball: true },
    {
        id: 'G',
        reverse: true,
        label: 'STREFA G · DZIECI',
        title: 'Plac zabaw, animacje i survival',
        image: { src: '/bush-section-3.jpg', alt: 'Grupa młodych ludzi na słonecznej polanie wśród sosen', pos: '50% 50%' },
        bg: '#2F6B33',
        height: { d: 460, m: 180 },
        mini: [720, 290],
        body: {
            d: [
                'Dzieci na Woodspocie są bezpieczne, bo cały nasz teren jest ogrodzony. Na życzenie zapewnimy animatorów, którzy wykorzystają nasze leśne obszary do przeróżnych aktywności, a plac zabaw zajmie najmłodszych na dłużej niż parę chwil.',
                <>Możecie też skorzystać z zajęć survivalowych dla dzieci i dorosłych prowadzonych przez <SasLink>Szkołę Przygody i Przetrwania SAS</SasLink> – program Fundacji Hobbit.</>,
            ],
            m: [
                <>Cały teren jest ogrodzony, więc dzieci są tu bezpieczne. Plac zabaw, animatorzy na życzenie i zajęcia survivalowe ze <SasLink>Szkołą Przygody i Przetrwania SAS</SasLink>.</>,
            ],
        },
        cta: { d: 'Zapytaj o animacje i zajęcia SAS', m: 'Zapytaj o animacje' },
        href: '#wydarzenia',
    },
    {
        id: 'H',
        label: 'STREFA H · SPORT',
        title: { d: 'Boiska plażowe i sprzęt sportowy', m: 'Boiska plażowe i sprzęt' },
        image: { src: '/bush-section-2.jpg', alt: 'Mecz siatkówki plażowej na piaszczystym boisku z żółtą siatką', pos: '50% 65%' },
        bg: '#5E8FA8',
        height: { d: 440, m: 180 },
        mini: [860, 175],
        body: {
            d: ['Na Woodspocie każdy może wykorzystać swoją energię na różne sposoby. Mamy różnorodny sprzęt sportowy: frisbee, badminton, bule, darta, piłki i wiele innych. Dodatkowo czekają boiska plażowe – dwa do siatkówki i jedno do piłki nożnej.'],
            m: ['Dwa boiska do siatkówki plażowej i jedno do piłki nożnej, a do tego frisbee, badminton, bule, dart, piłki i wiele innych.'],
        },
        chips: { d: ['2× siatkówka plażowa', '1× piłka nożna', 'frisbee · badminton · bule · dart'], m: [] },
        cta: 'Zarezerwuj boisko',
        href: '#rezerwacja',
    },
];

export const PAINTBALL = {
    id: 'F',
    label: 'STREFA F · PAINTBALL',
    title: 'Paintball: dwa poligony wśród drzew',
    mini: [530, 170],
    mainImage: { src: '/paintball-section-3.jpg', alt: 'Dwoje graczy w maskach za drewnianą zasłoną z opon na leśnym polu paintballowym', pos: '50% 45%' },
    sideImages: [
        { src: '/paintball-section-4.jpg', alt: 'Dwóch uśmiechniętych graczy w moro i maskach z żółtymi śladami farby', pos: '50% 30%' },
        { src: '/paintball-section-1.jpg', alt: 'Pole paintballowe: stosy opon na trawie między brzozami', pos: '50% 50%' },
    ],
    body: {
        d: 'Duży poligon pozwala na rywalizację nawet 12 osobom naraz, mały idealnie nadaje się do pojedynków 1v1 – nie potrzebujesz dużej grupy, by rozegrać kilka szybkich meczów albo krótki turniej. W centrum dużego pola stoi fort, a wokół niego dwie strefy pełne zasłon i przeszkód: bardziej otwarta i zamknięta, leśna.',
        m: 'Duże pole do 12 osób naraz z fortem w centrum i strefą otwartą oraz leśną, małe – do pojedynków 1v1. Nie potrzebujesz dużej grupy, by rozegrać kilka szybkich meczów.',
    },
    features: {
        d: [
            { key: 'DUŻE POLE', title: 'do 12 osób naraz', text: 'fort w centrum, strefa otwarta i leśna' },
            { key: 'MAŁE POLE', title: 'pojedynki 1v1', text: 'kilka szybkich meczów bez dużej ekipy' },
            { key: 'ROZGRZEWKA', title: '2 strzelnice i tor przeszkód', text: 'bez strzelania do przeciwnika – też dla najmłodszych' },
            { key: 'STREFA KIBICA', title: 'odpoczynek tuż przy polu', text: 'kibicujesz swojej drużynie z bliska' },
        ],
        m: [
            { key: 'DUŻE POLE', title: 'do 12 osób' },
            { key: 'MAŁE POLE', title: 'pojedynki 1v1' },
            { key: 'ROZGRZEWKA', title: '2 strzelnice i tor przeszkód' },
            { key: 'MARKERY', title: 'styl M4, 19 lub 200 kul' },
        ],
    },
    markers: 'Markery wyglądają jak karabin M4 – z małym magazynkiem 19-strzałowym, ładowanym od dołu jak prawdziwy, albo z dużym na 200 kul. Czas gry zależy od pakietu: ',
    packagePlaceholder: '[PAKIET – do uzupełnienia]',
    cta: 'Sprawdź wolne terminy gry',
    price: 'pakiety od [CENA]',
};

export const EVENT_TYPES = ['Urodziny', 'Wieczór kawalerski', 'Wieczór panieński', 'Baby shower', 'Wycieczka szkolna'];
export const EVENT_FORM_TYPES = [...EVENT_TYPES, 'Teren na wyłączność – inne'];
export const EVENT_EXTRAS = ['animatorów dla dzieci', 'zajęcia survivalowe SAS', 'paintball i strzelnice', 'nocleg i namioty'];
export const EVENT_ICONS = ['/fireplace.png', '/tent.png', '/paintball.png', '/fishing.png', '/football.png'];

export const ECO_ITEMS = [
    {
        n: '01',
        d: ['Fotowoltaika.', ' Obiekt zasilany jest wyłącznie odnawialnymi źródłami energii.'],
        m: ['Fotowoltaika', ' – tylko odnawialne źródła energii.'],
    },
    {
        n: '02',
        d: ['Drugie życie rzeczy.', ' Segregujemy odpady, a opony zmieniamy w część Woodspota.'],
        m: ['Drugie życie rzeczy', ' – segregacja, opony w nowej roli.'],
    },
    {
        n: '03',
        d: ['Życie w stawach.', ' Dajemy życie kolejnym pokoleniom ryb.'],
        m: ['Życie w stawach', ' – kolejne pokolenia ryb.'],
    },
    {
        n: '04',
        d: ['Szkółka choinek.', ' Sadzimy młode drzewka, które ją zagęszczają.'],
        m: ['Szkółka choinek', ' – sadzimy młode drzewka.'],
    },
];

export const CONTACT_FACTS = [
    { term: 'GODZINY', value: '[GODZINY OTWARCIA]' },
    { term: 'SEZON', value: '[SEZON]' },
    { term: 'TEREN', value: 'ogrodzony i oświetlony' },
    { term: 'NOCLEG', value: 'prąd na polu namiotowym' },
];

export const SOCIAL_LINKS = [
    { href: 'https://www.facebook.com/woodspotpl/', label: 'Woodspot na Facebooku', icon: '/facebook-logo.png' },
    { href: 'https://www.instagram.com/explore/locations/101079862755451/woodspot-bush-fun/', label: 'Woodspot na Instagramie', icon: '/instagram-logo.png' },
    { href: MAPS_URL, label: 'Woodspot w Mapach Google', icon: '/google-logo.png' },
];
