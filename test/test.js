//import * as firebase from "../Bibliotecas/Promesas/firebase";

//import {app, autentificacion} from "./bibliotecas/datosFirebase.js";
//import {getFirestore, collection} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
//import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import * as api from "/Bibliotecas/Promesas/omdbAPI.js";
import * as tsv from "/Bibliotecas/Otras/tvsToJson.js";

const d = document;
let film = await api.getFilmById('tt0115736');
console.log(film);

let film2 = await api.getFilmsBusqueda('in the mood for love', '');
console.log(film2);

console.log(api.getMediaPaprika(film));

d.getElementById('send').addEventListener('click', () => {
  console.log("a");
  let file = d.getElementById('archivo').files[0];
  tsv.tsvJSON(file);
},false);