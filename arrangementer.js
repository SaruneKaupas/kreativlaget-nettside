// Kommende verksteder.
// For å legge til et nytt verksted: kopier en blokk { ... }, endre teksten og lagre.
// Dato skrives slik: "ÅÅÅÅ-MM-DD". Verksteder med passert dato forsvinner fra siden av seg selv.
// Plakat (valgfritt): bildefil i bilder/plakater/, vises ved siden av teksten.
//
// Etter verkstedet flyttes det av seg selv til «Arkiv».
// Der vises «etterpaa» (kort tekst om hvordan det gikk), «kreditt» (samarbeid og støtte),
// «foto» (hvem som tok bildene) og «bilder»: liste med { fil, alt } og eventuelt «pos»
// (hvilken del av bildet som vises i ruten).
// «periode» (valgfritt) vises i arkivet i stedet for datoen, f.eks. for et prosjekt over flere måneder.

const ARRANGEMENTER = [
  {
    dato: "2026-06-01",
    periode: "2026",
    tittel: "K-VINNER – KUNST VINNER",
    sted: "Lindeberglokalet og Drivhuset på Trosterud",
    etterpaa: "Kreative verksteder for kvinner i Bydel Alna.",
    kreditt: "Støttet av Oslo kommune, Kulturetaten.",
    bilder: [
      { fil: "bilder/drivhuset.jpg", alt: "Kvinner maler ved et langt bord i et drivhus" },
      { fil: "bilder/lindeberg.jpg", alt: "Malerier og fargeblyanter på et rundt bord i Lindeberglokalet" }
    ]
  },
  {
    dato: "2026-09-20",
    tittel: "Dr. Dedichens privatasyl 125 år",
    sted: "Drivhuset, Trosterud",
    etterpaa: "Hvite duker på lange bord, maling, blader og blomster. Barn og voksne malte sammen på terrassen ved Drivhuset. Det var det første verkstedet til Kreativlaget.",
    kreditt: "I samarbeid med Dr. Dedichens Drivhus.",
    bilder: [
      { fil: "bilder/bordet.jpg", alt: "Familier maler sammen ved et langt bord" },
      { fil: "bilder/gruppe.jpg", alt: "En gruppe deltakere samlet rundt et malebord utendørs" },
      { fil: "bilder/staffeli.jpg", alt: "Et lerret med oransje og blå maling på et staffeli" },
      { fil: "bilder/bladmaling.jpg", alt: "En deltaker maler et grønt blad" },
      { fil: "bilder/maleri-oransje.jpg", alt: "Et oransje og grønt maleri ved siden av høstblader og en palett" },
      { fil: "bilder/langbord.jpg", alt: "Et langt bord med hvite duker utendørs der barn og voksne maler sammen" }
    ]
  },
  {
    dato: "2026-10-30",
    tid: "16.00–19.00",
    tittel: "Halloweenverksted",
    sted: "Ellingsrud torg, prosjektlokalet",
    tekst: "Kl. 16.00–18.00 skjærer vi ut gresskar på gresskarverkstedet med Ellingsrudåsen frivilligsentral. Barn under 10 år må ha med voksen.\n\nKl. 17.00–19.00 lager vi spøkelser av papp, masker og edderkopper av høstblader, kastanjer og annet vi finner i naturen, sammen med Forandringshuset.\n\nDet dere lager, tar dere med hjem. Alle materialer er inkludert.",
    plakat: "bilder/plakater/halloween-2026.jpg",
    etterpaa: "Rundt 50 store og små kom. Vi skar ut gresskar med Ellingsrudåsen frivilligsentral og lagde masker av papptallerkener, spøkelser og edderkopper av høstblader sammen med Forandringshuset.",
    kreditt: "I samarbeid med Ellingsrudåsen frivilligsentral og Forandringshuset. Støttet av Sammen for Ellingsrud med midler fra Anthonstiftelsen.",
    foto: "Kreativlaget",
    bilder: [
      { fil: "bilder/arkiv/2026-10-30-halloween/01.jpg", alt: "Masker av papptallerkener på et bord med høstblader" },
      { fil: "bilder/arkiv/2026-10-30-halloween/02.jpg", alt: "To spøkelser av hvitt stoff ved inngangen til prosjektlokalet" },
      { fil: "bilder/arkiv/2026-10-30-halloween/03.jpg", alt: "Utskårne gresskar med hoggtenner på en hylle" },
      { fil: "bilder/arkiv/2026-10-30-halloween/04.jpg", alt: "En hånd tegner et ansikt på en papptallerken" },
      { fil: "bilder/arkiv/2026-10-30-halloween/05.jpg", alt: "Et lite spøkelse av papirserviett og dorull" },
      { fil: "bilder/arkiv/2026-10-30-halloween/06.jpg", alt: "Høstblader malt i svart, hvitt og gull" }
    ]
  },
  {
    dato: "2026-11-06",
    tid: "16.00–19.00",
    tittel: "Lysfest med kreativt verksted",
    sted: "Ellingsrud torg, prosjektlokalet",
    tekst: "Diwali er lysfesten. Vi lager lykter av farget papir, lys av dorull og diya-lamper av papptallerkener. Det du lager, tar du med hjem. Fra kl. 15.30 tenner vi lys på torget, og det blir gratis pakistansk mat fra foodtrucken til Ricksha, hennamaling og salg av chai. Verkstedet er gratis, og alle materialer er inkludert.",
    plakat: "bilder/plakater/lysfest-2026.jpg",
    etterpaa: "Papptallerkener ble til diya-lamper, og dorullene ble til lykter. Over 60 store og små satt rundt bordene i prosjektlokalet og klippet, limte og tegnet flammer av papir.",
    kreditt: "I samarbeid med Ellingsrud velforening, Ellingsrudåsen frivilligsentral og Forandringshuset. Støttet av Sammen for Ellingsrud med midler fra Anthonstiftelsen.",
    foto: "Ayman Yassir og Kreativlaget",
    bilder: [
      { fil: "bilder/arkiv/2026-11-06-lysfest/01.jpg", alt: "En smilende kvinne holder opp en diya-lampe av papp", pos: "30% center" },
      { fil: "bilder/arkiv/2026-11-06-lysfest/02.jpg", alt: "Goutami holder to diya-lamper" },
      { fil: "bilder/arkiv/2026-11-06-lysfest/03.jpg", alt: "Et barn tegner en diya på en papptallerken" },
      { fil: "bilder/arkiv/2026-11-06-lysfest/04.jpg", alt: "En lykt laget av en dorull" },
      { fil: "bilder/arkiv/2026-11-06-lysfest/05.jpg", alt: "En frivillig hjelper et barn ved bordet", pos: "60% center" },
      { fil: "bilder/arkiv/2026-11-06-lysfest/06.jpg", alt: "En kvinne lager en lykt av farget papir", pos: "62% center" }
    ]
  },
  {
    dato: "2026-11-27",
    tid: "16.00–18.00",
    tittel: "Juleverksted – pynt til treet og julekort",
    sted: "Ellingsrud torg, prosjektlokalet",
    tekst: "Kom som du er. Hvert juletre blir unikt.\n\nUnder den tradisjonelle julegrantenningen på Ellingsrud arrangerer Kreativlaget et gratis juleverksted i samarbeid med Forandringshuset.\n\nVi lager små juletrær, pynt til treet og egne julekort. Du trenger ingen forkunnskaper. Det du lager, tar du med hjem. Alle materialer er inkludert.",
    kreditt: "I samarbeid med Forandringshuset. Støttet av Sammen for Ellingsrud med midler fra Anthonstiftelsen."
  },
  {
    dato: "2026-12-03",
    tid: "16.00–18.00",
    tittel: "Juleverksted – lag din egen krans",
    sted: "Ellingsrud torg, prosjektlokalet",
    tekst: "Vi binder kranser av grener, kongler og bær fra skogen. Du trenger ingen forkunnskaper. Kom som du er, ingen krans blir lik. Kransen du lager, tar du med hjem. Alle materialer er inkludert.",
    kreditt: "I samarbeid med Forandringshuset. Støttet av Sammen for Ellingsrud med midler fra Anthonstiftelsen."
  }
];
