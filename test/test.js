//import * as firebase from "../Bibliotecas/Promesas/firebase";

//import {app, autentificacion} from "./bibliotecas/datosFirebase.js";
//import {getFirestore, collection} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
//import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import * as api from "/Bibliotecas/Promesas/omdbAPI.js";

const d = document;
let film = await api.getFilmById('tt0115736');
console.log(film);

let film2 = await api.getFilmsBusqueda('in the mood for love', '');
console.log(film2);

console.log(api.getMediaPaprika(film));

d.getElementById('buscar').addEventListener('click', async () => {
  let busqueda = d.getElementById('barrab').value;
  let anyo = d.getElementById('anyob').value;
  let a = await api.getFilmsBusqueda(busqueda, anyo);
  console.log(a);
}, false);

let listaManual = ["tt0115736", "tt0118694", "tt2267998", "tt0099685", "tt0069089", "tt1392190"];
let b = await api.getFullListaJSON(listaManual);
console.log(b);

d.getElementById('asc').addEventListener('click', () => {
  console.log(api.sortMediaAsc(b));
});
d.getElementById('desc').addEventListener('click', () => {
  console.log(api.sortMediaDesc(b));
});

//*******************************************************************+ */
d.getElementById('genb').addEventListener('click', () => {
  let gen = d.getElementById('generoText').value;
  console.log(api.filterGenero(b, gen));
});

