// Content for the V3 "Adrenalina" homepage.
// Where the desktop and mobile designs use different copy, the value is { d, m }
// (rendered by <Copy>); plain strings are shared by both layouts.

export const PHONE = { label: '576 000 246', href: 'tel:+48576000246' };
export const EMAIL = { label: 'woodspotpl@gmail.com', href: 'mailto:woodspotpl@gmail.com' };
export const MAPS_URL = 'https://goo.gl/maps/ME1aduGAakvzNnbm8';

export const PREVIEW_NOTICE =
  'Dziękujemy! To podgląd nowej strony – rezerwacje wkrótce. Zadzwoń: 576 000 246 lub napisz: woodspotpl@gmail.com';

export const NAV_LINKS = [
  { href: '#paintball', label: 'Paintball' },
  { href: '#pakiety', label: 'Pakiety' },
  { href: '#imprezy', label: 'Imprezy' },
  { href: '#teren', label: 'Teren' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const FOOTER_LINKS = [
  { href: '#paintball', label: 'Paintball' },
  { href: '#imprezy', label: 'Imprezy' },
  { href: '#teren', label: 'Teren' },
  { href: '#rezerwacja', label: 'Rezerwacja' },
  { href: '#kontakt', label: 'Kontakt', mobileOnly: true },
];

export const HERO = {
  eyebrow: { d: 'Woodspot bush&fun · Siemianice pod Wrocławiem', m: 'Siemianice · pod Wrocławiem' },
  lead: {
    d: 'Paintball w lesie na dwóch poligonach, teren na wyłączność dla Twojej ekipy, ognisko, boiska i łowiska. Niemal 10 hektarów, na których natura i zabawa napełniają to miejsce pozytywną energią.',
    m: 'Paintball w lesie, teren na wyłączność dla Twojej ekipy, ognisko, boiska i łowiska. Niemal 10 hektarów natury i zabawy pod Wrocławiem.',
  },
  photo: {
    image: 'paintball-section-4',
    alt: 'Dwóch uśmiechniętych graczy w maskach i moro, z markerami, maski z żółtymi śladami farby',
  },
};

// Options of the quick-booking <select> (differs slightly from BOOKING_OFFERS below).
export const QUICK_OPTIONS = [
  'Paintball – duże pole',
  'Paintball – małe pole',
  'Strzelnice i tor przeszkód',
  'Łowiska – stanowisko',
  'Łódka',
  'Spot w lesie',
  'Wiata z miejscem na ognisko',
  'Pole namiotowe',
  'Boiska plażowe',
  'Teren na wyłączność',
];

export const STRIPE_DESKTOP = [
  '12 graczy naraz',
  '2 poligony',
  '1v1 na małym polu',
  '200 kul w magazynku',
  '2 strzelnice',
  'niemal 10 ha',
  '100% energii z OZE',
];

export const STRIPE_MOBILE = ['12 graczy naraz', '2 poligony', '1v1', '200 kul', 'niemal 10 ha'];

export const PAINTBALL = {
  lead: {
    d: 'Nie potrzebujesz dużej grupy, by rozegrać u nas kilka szybkich meczów albo krótki turniej.',
    m: 'Nie potrzebujesz dużej grupy, by rozegrać kilka szybkich meczów albo krótki turniej.',
  },
  body: {
    d: 'Nasza strefa paintballa mieści aż dwa poligony zaaranżowane w naturalnym otoczeniu drzew. Duży pozwala na rywalizację nawet 12 osobom naraz, mały idealnie nadaje się do pojedynków 1v1. W centrum dużego pola stoi fort, a wokół niego dwie strefy pełne zasłon i przeszkód: bardziej otwarta i zamknięta, leśna. Ich układ pozwala rozgrywać mecze według wielu różnych scenariuszy.',
    m: 'Duży poligon pozwala na rywalizację nawet 12 osobom naraz, mały idealnie nadaje się do pojedynków 1v1. W centrum dużego pola stoi fort, a wokół niego dwie strefy pełne zasłon i przeszkód: bardziej otwarta i zamknięta, leśna.',
  },
  photo: {
    image: 'paintball-section-2',
    alt: 'Gracz w czarno-czerwonym stroju celuje zza drewnianego domku na oponach w lesie',
    caption: 'Fort w centrum dużego pola',
  },
  facts: [
    { value: '12', label: 'graczy naraz na dużym polu' },
    { value: '1v1', label: 'pojedynki na małym polu' },
    { value: '2', label: { d: 'strefy gry: otwarta i leśna', m: 'strefy: otwarta i leśna' } },
    { value: '200', label: 'kul w dużym magazynku' },
  ],
  ranges: {
    eyebrow: 'Dla początkujących i najmłodszych',
    title: '2 strzelnice + tor przeszkód',
    text: {
      d: 'Na rozgrzewkę przygotowaliśmy dwie strzelnice i tor przeszkód. Sprawdzicie tam celność i sprawność bez strzelania do przeciwnika – to też idealna alternatywa dla najmłodszych.',
      m: 'Sprawdzicie celność i sprawność bez strzelania do przeciwnika – to też idealna alternatywa dla najmłodszych.',
    },
    cta: 'Sprawdź termin',
  },
  gear: {
    eyebrow: 'Sprzęt',
    title: 'Markery jak M4',
    mags: [
      { value: '19', label: { d: 'kul – mały magazynek, ładowany od dołu jak prawdziwy', m: 'kul – mały magazynek, ładowany od dołu' } },
      { value: '200', label: 'kul – duży, na dłuższą potyczkę' },
    ],
    note: 'Czas gry zależy od wykupionego pakietu i tempa, w jakim wykorzystacie amunicję.',
  },
  fans: {
    title: 'Strefa kibica',
    text: {
      d: 'Po grze odpoczywasz w otoczeniu natury, ale wciąż blisko znajomych – możesz kibicować swojej drużynie i emocjonować się wynikiem.',
      m: 'Po grze odpoczywasz w otoczeniu natury, wciąż blisko znajomych – i dalej kibicujesz swojej drużynie.',
    },
    photo: { image: 'paintball-section-3', alt: 'Dwóch graczy w maskach za drewnianą zasłoną z opon w lesie' },
  },
};

export const PACKAGE_COUNT = 3;

export const PACKAGE_ROWS = [
  { label: 'Kule w cenie', value: '[liczba]' },
  { label: 'Magazynek', value: '[19 / 200 kul]' },
  { label: 'Czas gry', value: '[ok. … min]' },
  { label: 'Sprzęt w cenie', value: 'marker, maska, kombinezon [do potwierdzenia]', stacked: true },
];

export const PACKAGES_FOOTNOTE = { d: 'Większa ekipa albo chcecie zagrać turniej?', m: 'Większa ekipa albo turniej?' };

export const EVENTS = {
  eyebrow: { d: '03 / Imprezy i teren na wyłączność', m: '03 / Imprezy' },
  text: {
    d: 'Przy każdej z naszych wiat czeka miejsce na ognisko – to tam wieczory ze znajomymi i rodziną stają się klimatyczne. Tak duży leśny teren daje przestrzeń na niezapomniane wydarzenia, a co najważniejsze: możesz mieć go nawet na wyłączność i z naszą pomocą zorganizować to, co będziesz miło wspominać przez długi czas.',
    m: 'Przy każdej wiacie czeka miejsce na ognisko. Tak duży leśny teren daje przestrzeń na niezapomniane wydarzenia, a co najważniejsze – możesz mieć go nawet na wyłączność i z naszą pomocą zorganizować to, co będziesz miło wspominać.',
  },
  types: [
    { label: 'Urodziny' },
    { label: 'Wieczór kawalerski' },
    { label: 'Wieczór panieński' },
    { label: 'Baby shower' },
    { label: 'Wycieczka szkolna' },
    { label: 'Teren na wyłączność', highlight: true },
  ],
  extras: {
    d: 'Na życzenie: animatorzy, zajęcia survivalowe ze Szkołą Przygody i Przetrwania SAS, sprzęt sportowy, namiot rozłożony za Was.',
    m: 'Na życzenie: animatorzy, zajęcia survivalowe SAS, sprzęt sportowy, namiot rozłożony za Was.',
  },
  photo: { image: 'bush-section-4', alt: 'Drewniana wiata, sofy z palet wokół miejsca na ognisko, sosnowy las i chmury' },
};

export const INQUIRY_EVENT_OPTIONS = [
  'Wieczór kawalerski',
  'Wieczór panieński',
  'Urodziny',
  'Baby shower',
  'Wycieczka szkolna',
  'Teren na wyłączność',
  'Inne',
];

export const GROUNDS = [
  {
    key: 'lowiska',
    title: 'Łowiska no-kill',
    text: {
      d: 'Dwa stawy o łącznej powierzchni 1,5 ha, wiele stanowisk wędkarskich i łódki do wynajęcia.',
      m: '2 stawy, 1,5 ha, wiele stanowisk i łódki. Karp, lin, sandacz, amur, szczupak.',
    },
    note: 'Karp królewski i pełnołuski, lin, sandacz, amur, szczupak.',
    price: { d: 'stanowisko od [CENA]', m: 'od [CENA]' },
    photo: { image: 'fishing-section', alt: 'Słoneczny staw, wędkarze na brzegu, brzoza i linia lasu' },
    icon: { type: 'img', image: 'fishing' },
  },
  {
    key: 'boiska',
    title: 'Boiska plażowe',
    text: {
      d: 'Dwa boiska do siatkówki i jedno do piłki nożnej. Do tego frisbee, badminton, bule, dart, piłki i wiele innych.',
      m: '2 boiska do siatkówki, 1 do piłki nożnej, a do tego frisbee, badminton, bule, dart.',
    },
    price: 'od [CENA]',
    photo: {
      image: 'bush-section-2',
      alt: 'Boiska do siatkówki plażowej z żółtymi siatkami, ludzie w trakcie gry',
      position: '50% 70%',
    },
    icon: { type: 'img', image: 'football' },
  },
  {
    key: 'spot',
    title: 'Spoty w lesie',
    text: {
      d: 'Wasz kąt wśród drzew: hamaki, drewniane ławki i stoły. Idealna baza na cały dzień.',
      m: 'Wasz kąt wśród drzew: hamaki, drewniane ławki i stoły.',
    },
    price: 'od [CENA] / dzień',
    photo: { image: 'bush-section-1', alt: 'Spot w sosnowym lesie: hamaki, ławki z opon i drewniany stół' },
    icon: { type: 'tree' },
  },
  {
    key: 'wiaty',
    title: 'Wiaty z ogniskiem',
    text: {
      d: 'Przy każdej wiacie przygotowane miejsce na ognisko. Tu wieczory ze znajomymi i rodziną stają się klimatyczne.',
      m: 'Miejsce na ognisko przy każdej wiacie – klimatyczne wieczory.',
    },
    price: 'od [CENA]',
    photo: { image: 'bush-section-4', alt: 'Wiata z miejscem na ognisko i sofami z palet' },
    icon: { type: 'img', image: 'fireplace' },
  },
  {
    key: 'namiot',
    title: 'Pole namiotowe',
    text: {
      d: 'Nocleg na krawędzi lasu, z prądem. Nie masz namiotu? Wypożyczymy, rozłożymy i złożymy go za Was.',
      m: 'Z prądem. Namiot wypożyczymy, rozłożymy i złożymy za Was.',
    },
    price: 'od [CENA] / noc',
    placeholder: '[Zdjęcie: pole namiotowe]',
    icon: { type: 'img', image: 'tent' },
  },
  {
    key: 'dzieci',
    title: 'Dzieci i survival',
    text: {
      d: 'Cały teren jest ogrodzony. Plac zabaw, animatorzy na życzenie i zajęcia survivalowe ze Szkołą Przygody i Przetrwania SAS.',
      m: 'Teren ogrodzony, plac zabaw, animatorzy i zajęcia survivalowe SAS.',
    },
    price: 'wycena indywidualna',
    photo: { image: 'bush-section-3', alt: 'Grupa młodych ludzi na słonecznej polanie wśród sosen' },
    icon: { type: 'compass' },
    cta: { href: '#zapytanie', label: 'Zapytaj →' },
  },
];

export const GROUNDS_CTA = { href: '#rezerwacja', label: { d: 'Sprawdź termin →', m: 'Termin →' } };

export const ECO = {
  text: {
    d: 'Staramy się żyć w zgodzie z otaczającą nas naturą i dbać o nią. Dlatego teren naszego obiektu zasilany jest wyłącznie odnawialnymi źródłami energii. Segregujemy odpady, a te możliwe do ponownego użycia, jak opony, zmieniamy w część Woodspota. Dajemy też życie kolejnym pokoleniom ryb w naszych stawach i sadzimy młode drzewka w szkółce choinek.',
    m: 'Teren zasilany jest wyłącznie odnawialnymi źródłami energii. Segregujemy odpady, a opony zmieniamy w część Woodspota. Zarybiamy stawy i sadzimy drzewka w szkółce choinek.',
  },
  points: [
    '100% energii z OZE',
    { d: 'Segregacja odpadów', m: 'Segregacja' },
    { d: 'Zarybianie stawów', m: 'Zarybianie' },
    'Szkółka choinek',
  ],
  photo: { image: 'about-section-2', alt: 'Panele fotowoltaiczne na łące, w tle drzewa' },
};

// Attractions in the "Zaklep termin" picker (ported from the design's logic class).
export const BOOKING_OFFERS = [
  { id: 'pb-duze', name: 'Paintball – duże pole' },
  { id: 'pb-male', name: 'Paintball – małe pole' },
  { id: 'strzelnice', name: 'Strzelnice i tor przeszkód' },
  { id: 'lowiska', name: 'Łowiska – stanowisko' },
  { id: 'lodka', name: 'Łódka' },
  { id: 'spot', name: 'Spot w lesie' },
  { id: 'wiata', name: 'Wiata z ogniskiem' },
  { id: 'namiot', name: 'Pole namiotowe' },
  { id: 'boiska', name: 'Boiska plażowe' },
  { id: 'wylacznosc', name: 'Teren na wyłączność' },
];

export const PEOPLE_MIN = 1;
export const PEOPLE_MAX = 60;

export const PRACTICAL = [
  { label: 'Godziny', value: '[GODZINY OTWARCIA]' },
  { label: 'Sezon', value: '[SEZON]' },
  { label: 'Teren', value: 'ogrodzony i oświetlony' },
  { label: 'Nocleg', value: 'pole namiotowe z prądem' },
  { label: 'Dojazd', value: 'Siemianice, pod Wrocławiem' },
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
