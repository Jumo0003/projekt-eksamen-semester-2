# Teknisk dokumentation - Røde Kors Frivillige (2. semester Eksamen - Team 8)

## Om projektet

Dette er vores eksamensprojekt, som omhandler en digital løsning til Røde Kors.
Vores mål med denne løsning er at appellere til og tiltrække unge ved at bruge Røde Kors' farver til at
udvikle en mere ungdommelig informationsside omkring at blive frivillig som ung med lettere navigation og mere funktionalitet/brugervenlighed.
Det gør vi ved at lave en one pager, hvor al informationen er samlet på en side. For at gøre det overskueligt er informationen grupperet i forskellige sektioner og med accordions og popovers.

Sitet består af en enkelt vertikalt scrollbar side, hvor brugeren kan:

- Se interview video med andre unge
- Tilgå menu der scroller til forskellige steder på siden
- Læse om fordelene ved at være frivillig og om de forskellige aktiviteter
- Læse om andre frivillige
- Få svar på hyppigt stillede spørgsmål og
- Tilmelde sig til at være frivillig gennem tilmeldingsformular

## Links

- [GitHub repository](https://github.com/Vicky8484/rkf_eksamen)
- [Netlify Projekt](https://rkfeksamen.netlify.app/)
- [Figma](https://www.figma.com/design/4MQGvsQbVH4k0lxHUHJnR1/EKSAMEN?node-id=934-28&t=OKhjmX5dcKjWPLYg-1)
- [Trello](https://trello.com/b/GW7baJ3B/tema-10-eksamen)

## Projektstruktur:

Projektet er opdelt i astrofiler og komponenter og et globalt stylesheet. Men individuel CSS og javascript laves i de forskellige komponenter.

rkf_eksamen/
├── pages/
│ └── index.astro
├── components/
│ ├── Aktiviteter.astro
│ ├── aktivitetPopover.astro
│ ├── BlivFrivilligCta.astro
│ ├── Faq.astro
│ ├── Fordele.astro
│ ├── Forms.astro
│ ├── Frivillige.astro
│ └── Hero.astro
├── styles/
│ └── global.css
├── js/
│ └── yabadabaduu
├── assets/
│ └── alle billeder og video
└── readme.md

## Filbeskrivelser

- **index.astro -** selve startsiden, hvor alle komponenter hentes ind
- **layout.astro -** indeholder head, body, main og footer og slot til alt hvad der hentes ind på index.astro
- **Hero.astro -** hero video, logo og menu
- **Fordele.astro-** highlights med popover og slideshows omkring fordelene ved at være frivillig
- **BlivFrivilligCta.astro -** CTA knap som fører ned til formular
- **Aktiviteter.astro -** accordion med grid knapper om aktiviteter der fører til dynamisk popover
- **aktivitetPopover.astro -** dynamisk popover omkring enkelte aktiviteter
- **Frivillige.astro -** horizontalt scrollbar section om andre frivillige
- **Faq.astro -** accordion med spørgsmål og svar omkring frivillighed
- **Forms-astro -** tilmledingsformular til at blive frivillig

- **global.css -** generelle styles til hele siden

## Hvordan koden fungerer

Vi har kun en side med forskellige sektioner, hvor nogle har accordions og andre har popovers.
Javascript laves enten indenfor fences eller i et srcipttag i de forskellige komponenter og loader, når man åbner den komponenten.
CSS styling foregår også i de enkelte komponenter.
Layout og komponenter hentes ind på index.astro.

## Navngivning:

Vi har prøvet at navngive vores filer, variabler og funktioner så tydeligt som muligt og med camel case.

### Eksempler på JS variabler

`const PUBLIC_SUPABASE_URL;
const PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const { aktiviteter } = Astro.props;`

### Eksempler på CSS variabler

`--background-color: #fff;
  --text-color: #2b2b2b;
  --alternate-text-color: #fff;
  --primary-accentcolor: #d74d40;
  --secondary-accentcolor: #e8a099;
  --tertiary-accentcolor: #e1ea7d;
`

## Formular og validering

Vi har lavet en formular, hvor brugeren kan indtaste oplysninger.

**HTML-validering:**

- required – feltet skal udfyldes
- type="email" – validerer email-format
- type="number" – accepterer kun tal

Det sikrer, at brugeren ikke kan indsende formularen, hvis felterne ikke er udfyldt korrekt.

## Link til scripts:

- JS scripts kommer til at være direkte i fences i komponenten eller i et script-tag i komponenten.

## Git branches:

Vi har brugt GitHub til at samarbejde om projektet.

Vi har arbejdet med branches, så vi ikke sad og ændrede i det samme på samme tid.

Vi navngav branchene med funktion først og navnet på den, der lavede branchen til sidst.

Eksempler på branches:

- dropdown-menu-Victory
- forms-farve-ændring-Julie
- bliv-frivillig-cta-Mai
- faq-Natasja

## Kommentarer i koden

Vi har kommenteret meget i det globale.css, så det er helt tydeligt hvad der er hvad for alle
I vores individuelle css-filer har vi valgt at overlade det til det medlem som er ansvarlig for siden, hvor meget personen vil kommentere.
I kode der er svær at forstå (som js eller kompliceret css) har vi været mere omhyggelige med at kommentere, så andre gruppemedlemmer kan forstå det.

## Supabase

Vi har brugt Supabase til at oprette vores database, som vi henter indhold dynamisk fra til vores popover i astro-komponenten: aktivitetPopover.astro. Aktiviteter.astro har et grid af knapper der alle åbner denne popover, som henter indholdet baseret på id-nummer fra tabellen på Supabase. Vores Supabase tabel hedder “Aktiviteter” og består af disse kolonner:

- id
- created_at
- billede
- titel
- aktivitet
- udbytte
- tid
- start

- [Her kan man se vores objekter:](ywegznlwnoxnmyfuyopi.supabase.co/rest/v1/Aktiviteter?select=*&apikey=sb_publishable_pcCCPaBV-uzhuvxSuJthnA_a--NLf4-)

## Data og JSON-struktur

Vi henter data fra vores eget API (lavet med SupaBase) i JSON-format.

Et objekt kan fx se sådan ud:

```
{
    "id": 2,
    "created_at": "2026-05-19T21:13:23.996491+00:00",
    "titel": "Parathjælper",
    "billede": "https://ywegznlwnoxnmyfuyopi.supabase.co/storage/v1/object/public/popover_billeder/besogsven_parathjalper.webp",
    "aktivitet": "Som frivillig parathjælper hjælper du mennesker, der ikke har andre at spørge.  Dét, der kan føles som en lille ting for dig, kan gøre en kæmpe forskel for et andet sårbart menneske. Det kunne for eksempel være at følge en til lægen, handle ind eller hente medicin, opsætning af en lampe eller lignende. Det kan også være at hjælpe til ved et større arrangement eller at træde til ved større kriser.\n\nDu skal hverken hjælpe til med rengøring, madlavning, børnepasning eller personlig hygiejne!! Men du skal være fyldt 18.",
    "udbytte": "At være Parat-hjælper for Røde Kors giver både personlige og sociale oplevelser. Man lærer at hjælpe mennesker i svære situationer. Samtidig bliver man en del af et stærkt fællesskab, hvor samarbejde og ansvar er i fokus.\n\nMange oplever også, at arbejdet som frivillig giver større selvtillid, nye venskaber og følelsen af at gøre en reel forskel for andre mennesker.",
    "tid": "Fælles for hjælpeopgaverne er, at de er tidsbegrænsede, og du bestemmer selv, hvilke opgaver, du siger ja til, og kan hermed også selv vurdere hvor meget tid du vil sætte af afhængigt af hvilke opgaver du vælger. Super smart.",
    "start": "Du kan trykke på den gule knap og bruge formularen nederst på siden. Du kan også bare downloade Røde Kors Parat-appen og tilmelde dig."
  }
```

**Felter vi har lavet og bruger:**

- id (id nummer)
- titel (titel på aktivitet fx "Butiksfrivillig")
- billede (billed link fra SupaBase storage bucket)
- aktivitet (tekst om aktiviteten)
- udbytte (tekst om hvad man kan få ud af det)
- tid (tekst om hvor lang tid det tager)
- start (tekst om hvordan man kommer i gang)

## Arbejdsflow

Vores arbejdsfordeling:

- Victory (git master)
  - index.astro
  - layout.astro
  - global CSS
  - Aktiviteter.astro
  - aktivitetPopover.astro
  - Hero.astro

- Natasja
  - Faq.astro
  - Frivillige.astro

- Julie
  - Forms.astro

- Mai
  - BlivFrivilligCta.astro
  - Fordele.astro

Vores workflow:

- Lav en branch med funktion-navn og eget navn til sidst
- Kod den funktion eller komponent
- Commit ændringer
- Push til GitHub
- Merge til master-branch
- Sync master-branch og evt. start igen

Dette gør det lettere at holde styr på, hvem der laver hvad, og når vi holder os til vores dele af koden, sker der ingen konflikter.

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet ved at holde løsningen forholdsvis enkel.

**Tiltag:**

- Bruge lette billedfiler (webp)
- Undgå tunge frameworks
- Genbruge kode (global.css)
- Optimere billeder og indhold (via astro Image komponent)
- Lav en enkelt side, hvilket mindske side trafik
- Bruge få farver der skal loade ind på siden (vi bruger kun 5 farver og to af dem er hvid og sort)

Et lettere website kræver færre ressourcer at loade, er lettere at bruge og er mindre belastende for miljøet.

## Wireframes og layoutdiagrammer

På baggrund af vores mockups, lavede vi wireframes som vi har fulgt i kodningsprocessen. Vi havde ikke behov for at lave layoutdiagrammer, men lavede alligevel en slags "layoutdiagram" på figma, hvor vi inddelte mockuppen i de forskellige komponenter der skulle kodes. Det har vi også brugt som guideline.

## Udfordringer undervejs

En af vores udfordringer var at få data fra Rest API’et vist korrekt på siderne. Det var også lidt svært at få id med videre i URL’en til detaljesiden. Derudover havde vi nogle git konflikter pga miskommunikation omkring at arbejde på bestemte komponenter.

Løsninger:

- Bruge Claude.ai til at finde, fikse og forklare js fejl.
- Løse git konflikter direkte på GitHub

## Mulige forbedringer

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Toggle dansk/engelsk (for engelsk-talende brugere kan siden skiftes til engelsk)
- Dark mode (lave dark mode design og evt. have det som default for bæredygtighed)
- Brug af lazy load på billeder
- Fallback fonte (hvis vores custom fon ikke virker)
- Mere avanceret formular (svar måske bliver sat ind i en database)

## Gruppemedlemmer (4)

- Julie Mørk
- Natasja Laursen
- Mai Nielsen
- Victory Okosun

```

```
