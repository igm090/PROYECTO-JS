import {app, autentificacion} from "/Bibliotecas/Promesas/datosFirebase.js";
import {getFirestore, collection, onSnapshot, updateDoc, getDocs, getDoc, doc, where, addDoc, arrayUnion, query} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import * as firebase from '/Bibliotecas/Promesas/firebase.js';

import * as api from "/Bibliotecas/Promesas/omdbAPI.js";

const d = document;
/////////////////////////////////////////////////////////////////////////////////////
//LISTAS FIREBASE
/*const listasCol = collection(getFirestore(app), "listasPrueba");

let idLista = "NpYBkdWvrbEEGz5oiNtS";
let listaPruebaDoc = await firebase.getDocumento(listasCol, idLista);
//let listaPrueba = await firebase.getDocById(listasCol, idLista);
*/
//EJEMPLO JSON
//let film = await api.getFilmById('tt0115736');
//console.log(film);

//EJEMPLO BUSQUEDA
//let film2 = await api.getFilmsBusqueda('in the mood for love', '');
//console.log(film2);

//EJEMPLO MEDIA PAPRIKA
//console.log(api.getMediaPaprika(film));


////////////////
//BUSQUEDA FUNCIONAL
d.getElementById('buscar').addEventListener('click', async () => {
  let busqueda = d.getElementById('barrab').value;
  let anyo = d.getElementById('anyob').value;
  let a = await api.getFilmsBusqueda(busqueda, anyo);
  console.log(a);
  printFilms(a);
}, false);



////BOTÓN GUARDAR. AÑADE ID A LISTA
  //la lista puede no devolver nada. general error lista.search is undefined
const printFilms = (lista) => {
  let box = d.getElementById('boxFilms');
  box.innerHTML = '<p>Resultados Búsqueda</p>';
  for (let i = 0; i < lista.Search.length; i++) {
    console.log("a");
    box.innerHTML += `<div>${lista.Search[i].Title} (${lista.Search[i].Year}) - <div id='${lista.Search[i].imdbID}' class='guardar' >Guardar</div></div>`;
  }
  let botones = d.getElementsByClassName('guardar');
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => {
      console.log(botones[i].id); 
      firebase.updateDocArray(listaPruebaDoc, botones[i].id);
    });   
  }
}
/*
//*******************************************************************+ */
//*******************************************************************+ */

//let listaManual = ["tt0115736", "tt0118694", "tt2267998", "tt0099685", "tt0069089", "tt1392190"];
//let b = await api.getFullListaJSON(listaManual);
//console.log(b);
/*
d.getElementById('asc').addEventListener('click', () => {
  console.log(api.sortMediaAsc(b));
});
d.getElementById('desc').addEventListener('click', () => {
  console.log(api.sortMediaDesc(b));
});
*/
//*******************************************************************+ */
/*
d.getElementById('genb').addEventListener('click', () => {
  let gen = d.getElementById('generoText').value;
  console.log(api.filterGenero(b, gen));
});

/////////////////////////TRAER LISTA
const printLista = async () => {
  let listaPrueba = await firebase.getDocById(listasCol, idLista);
  let box = d.getElementById('miListaBox');
  box.innerHTML = '';
  let content;
  for (let i = 0; i < listaPrueba.data().films.length; i++) {
    let a = await api.getFilmById(listaPrueba.data().films[i]);
    content += `<div>${a.Title} (${a.Year})</div>`;
  }
  box.innerHTML = content;
}

d.getElementById('miLista').addEventListener('click', () => {
  printLista();
});
*/

d.getElementById('getUser').addEventListener('click', async () => {
  let box = d.getElementById('miListaBox');
  let id = await firebase.getSesionId();
  console.log(id);
});