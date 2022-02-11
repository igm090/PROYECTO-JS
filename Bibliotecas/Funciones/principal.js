"use strict";
import * as principal from "../Plantillas/plantillasPrincipal.js";
import * as peliculas from "../Plantillas/plantillasPeliculas.js";
import * as acceso from "../Acceso/acceso.js";
import { resetMasoquista } from "../funciones_aux.js";
import * as api from "/Bibliotecas/Promesas/omdbAPI.js";
import * as firebase from "/Bibliotecas/Promesas/firebase.js";
import * as aux from '/Bibliotecas/funciones_aux.js';

//Variables
var d = document;
var masoquista = d.getElementById("masoquista");
var contenedorPelis;
var bufferArray = '';

export const cargarPrincipal = async (films) => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarBody();
    masoquista.innerHTML += principal.pintarFooter();
    eventBtnLanding();
    cargarPeliculasLanding(films);
}

export const setupPrincipal = async () => {
    if (bufferArray == '') bufferArray = await aux.textFileToArray();
    let shortlist = aux.generarShortlist(bufferArray);
    shortlist = await api.getFullListaJSON(shortlist);
    console.log("setupPrincipal");
    console.log(shortlist);
    cargarPrincipal(shortlist);
}

/*export const cargarTops = () => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarTopGenerico();
    masoquista.innerHTML += principal.pintarFooter();
}*/

export const cargarPeliculasLanding = (films) => {
    contenedorPelis = d.getElementById("contPeliculas");

    for (let i = 0; i < films.length; i++) {
        contenedorPelis.innerHTML += peliculas.pintarPeliculasLanding(films[i]);
    }
    eventCargarPerfilPelicula();
    //masoquista.innerHTML += principal.pintarFooter();
}
//*****//
export const cargarPerfilPelicula = (pelicula) => {
    resetMasoquista();
    masoquista.innerHTML += peliculas.pintarPerfilPelicula(pelicula);
    masoquista.innerHTML += principal.pintarFooter();
    setupMenu();
}



/********** Interior Cargar Principal **********/
//Botón landing registrarse
const eventBtnLanding = () => {
    d.getElementById("btnLanding").addEventListener("click", acceso.cargarRegistro);
}

//Evento Cargar perfil de una película
const eventCargarPerfilPelicula = async () => {
    var arrayPeliculas = d.getElementsByClassName("movie-title");
    for (let i = 0; i < arrayPeliculas.length; i++) {
        let idPelicula = arrayPeliculas[i].parentElement.parentElement.parentElement.parentElement.id;
        let pelicula = await buscarPelicula(idPelicula);
        arrayPeliculas[i].addEventListener("click", () =>{
            cargarPerfilPelicula(pelicula);
        });
    }
}

/**
 * Recogemos el objeto película gracias a su ID.
 */
const buscarPelicula = async (id) => {
    let pelicula = await api.getFilmById(id);
    return pelicula;
}

export const cargarBuscar = (id) => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarBuscar();
    d.getElementById("buscar").addEventListener("click", async () => {
        let datos = getDatosBusqueda();
        let films = await api.getFilmsBusqueda(datos[0], datos[1]);
        pintarBusqueda(films);
    })
}

const getDatosBusqueda = () => {
    let nom = d.getElementById("barrab").value;
    let anyo = d.getElementById("anyob").value;
    return new Array(nom, anyo);
}

const pintarBusqueda = (films) => {
    contenedorPelisBusqueda = d.getElementById("contPeliculasBuscar");
    for (let i = 0; i < films.Search.length; i++) {
        contenedorPelisBusqueda.innerHTML += peliculas.pintarPeliculasBusqueda(films.Search[i]);
    }
    eventCargarPerfilPelicula();
}

//********************************************** */
//Menú perfil película
const setupMenu = () => {
    if (firebase.getSesionId() == '') d.getElementById('btnAnyadir').parentElement.classList.add('hidden');
    else d.getElementById('btnAnyadir').parentElement.classList.remove('hidden');

    d.getElementById('btnAnyadir').addEventListener('click', async function () {
        console.log("boton añadir");
        let op = d.getElementById('selectAnyadir').options[d.getElementById('selectAnyadir').selectedIndex].value;
        if (op != "none") {
            let filmId = this.parentElement.id;
            let userId = firebase.getSesionId();
            firebase.addPelicula(userId, filmId, op)
        } else {
            alert("Selecciona una lista");
        }
    });
}