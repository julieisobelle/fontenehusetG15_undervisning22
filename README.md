# fontenehusetG15_undervisning22
[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/julieisobelle/fontenehusetG15_undervisning22)

Hei!
I dagens undervisning har vi sett på modulering i koden vår med CSS og JavaScript. Modulering handler om å dele opp prosjektet i mindre, tydelig avgrensede deler, slik at hver fil har sitt eget ansvarsområde. I stedet for å samle alt i én stor fil, kan du ha moduler som håndterer brukerinteraksjoner, inneholder data, eller separerer styling i ulike stilark. Dette gir bedre oversikt, enklere vedlikehold og gjør det lettere å gjenbruke kode.

Hvorfor modulering?
Modulering gir oss muligheten til å skrive kode som er mer organisert og lett å finne fram i – både for oss selv og for andre som skal lese den. Når hvert tema eller funksjon har sin egen fil, kan vi raskt forstå hva som skjer hvor, og gjøre endringer uten å skape kaos andre steder i prosjektet.

Selv om modulering ikke er strengt nødvendig i små prosjekter laget med vanilla JavaScript og CSS, er det en god teknikk å lære tidlig. Den hjelper deg å få kontroll på større prosjekter, og gir deg et fortrinn når du senere jobber med rammeverk som React eller Vue.

Modulering i JavaScript
I dagens prosjekt satte vi hovedsakelig opp to ekstra filer, som gjør at vi har to funksjoner separert i to filer.
hamburgerToggle.js for å håndtere navigasjonsmenyen som åpnes og lukkes med et klikk på hamburgerikonet.
themeToggle.js for å gi brukeren mulighet til å bytte mellom ulike fargetema (for eksempel lys og mørk modus).
Ved å splitte opp funksjonaliteten på denne måten, kan hver fil fokusere på en ting, og det blir enklere å feilsøke og videreutvikle. Disse filene importeres i hovedfilen eller i HTML-en via <script type="module">, slik at de kan samarbeide uten å blande ansvarsområdene.

Modulering i CSS
Vi gjorde også tilsvarende i stilarket ved å skille mellom global css og media queries.
global.css – inneholder det grunnleggende som gjelder hele nettsiden. Som CSS Variabler og styling på elementnavn.
media.css – som tar seg av responsive tilpasninger med media queries, slik at nettsiden ser bra ut på både mobil og desktop.
Denne oppdelingen gjør det enklere å holde kontroll på hvordan stilene påvirker layouten i ulike visninger. Om du jobber med mobiltilpasning, vet du nøyaktig hvilken fil du skal gå til. Om du skal endre en knappstil, trenger du ikke lete gjennom hundre linjer med media queries først.

Ytelse og balanse
Selv om modulering gir bedre struktur, er det viktig å tenke på balansen. Mange små filer kan i noen tilfeller gi tregere innlastingstid, spesielt hvis nettleseren må hente hver enkelt fil separat. I større prosjekter samles ofte CSS-moduler og JS-moduler i en eller to hovedfiler når de går til produksjon. Men i læringsprosessen, og for utvikling, er det helt topp å ha modulene hver for seg.

Kort oppsummert
Modulering i CSS og JavaScript gir oss bedre struktur, mer oversikt og gjør det lettere å samarbeide eller videreutvikle prosjekter over tid. Og med dagens oppsett – én fil for meny, én for tema, én for layout og én for responsivitet, har vi allerede begynt å jobbe som ekte utviklere med skikkelig prosjektstruktur.

Dette er ikke bare god praksis, det er også nøkkelen til å forstå større prosjekter og rammeverk senere!
