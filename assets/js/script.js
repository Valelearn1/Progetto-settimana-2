/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/

/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
  {
    nome: "Alexa",
    categoria: "Elettronica",
    prezzo: 59.99,
    rating: 4,
    immagine: "alexa.jpg",
    disponibile: true,
  },
  {
    nome: "Kindle",
    categoria: "Elettronica",
    prezzo: 139.99,
    rating: 5,
    immagine: "kindle.jpg",
    disponibile: true,
  },
  {
    nome: "Chiavetta USB",
    categoria: "Elettronica",
    prezzo: 49.99,
    rating: 4,
    immagine: "chiavetta-usb.jpg",
    disponibile: true,
  },
  {
    nome: "Cuffie",
    categoria: "Elettronica",
    prezzo: 229.0,
    rating: 5,
    immagine: "cuffie.jpg",
    disponibile: false,
  },
  {
    nome: "Maglia",
    categoria: "Abbigliamento",
    prezzo: 24.99,
    rating: 4,
    immagine: "maglia.jpg",
    disponibile: true,
  },
  {
    nome: "Jeans",
    categoria: "Abbigliamento",
    prezzo: 79.9,
    rating: 4,
    immagine: "jeans.jpg",
    disponibile: true,
  },
  {
    nome: "Zaino",
    categoria: "Abbigliamento",
    prezzo: 49.95,
    rating: 4,
    immagine: "zaino.jpg",
    disponibile: true,
  },
  {
    nome: "Giubbotto",
    categoria: "Abbigliamento",
    prezzo: 119.99,
    rating: 3,
    immagine: "giubbotto.jpg",
    disponibile: false,
  },
  {
    nome: "Frullatore",
    categoria: "Casa",
    prezzo: 159.0,
    rating: 5,
    immagine: "frullatore.jpg",
    disponibile: true,
  },
  {
    nome: "Pentole",
    categoria: "Casa",
    prezzo: 69.9,
    rating: 4,
    immagine: "pentole.jpg",
    disponibile: true,
  },
  {
    nome: "Lampada",
    categoria: "Casa",
    prezzo: 29.99,
    rating: 4,
    immagine: "lampada.jpg",
    disponibile: true,
  },
  {
    nome: "Cuscino",
    categoria: "Casa",
    prezzo: 34.99,
    rating: 4,
    immagine: "cuscino.jpg",
    disponibile: true,
  },
];

/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(prezzo) {
  return "€" + prezzo.toFixed(2).replace(".", ",");
}

console.log("Monitor: " + formattaPrezzo(150));

/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stelline(rating) {
  const stellinePiene = "★".repeat(rating);
  const stellineVuote = "☆".repeat(5 - rating);
  return stellinePiene + stellineVuote;
}

console.log(stelline(3));
console.log(stelline(5));

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtra(categoria) {
  return prodotti.filter(prodotti.categoria);
  {
  }
}

console.log(filtra("Casa"));

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Nome prodotto, Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
