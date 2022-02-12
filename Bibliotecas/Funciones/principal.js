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

export const setupPrincipal = async (string) => {
    console.log(`Codeword -  ${string}`)
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
    eventCargarPerfilPelicula(films);
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
export const eventCargarPerfilPelicula = async (films) => {
    var arrayPeliculas = d.getElementsByClassName("movie-title");
    for (let i = 0; i < films.length; i++) {
        arrayPeliculas[i].addEventListener("click", () =>{
            cargarPerfilPelicula(films[i]);
        });
    }
}

export const cargarBuscar = (id) => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarBuscar();
    d.getElementById("buscar").addEventListener("click", async () => {
        let datos = getDatosBusqueda();
        if (datos !== false) {
            let films = await api.getFilmsBusqueda(datos[0], datos[1]);
            pintarBusqueda(films);
        } else console.log("Error en el formulario.");
    })
}

const getDatosBusqueda = () => {
    let nom = d.getElementById("barrab").value;
    let anyo = d.getElementById("anyob").value;
    if (nom.trim() != '') {
        if (anyo != '' && !Number.isNaN(anyo) && anyo < 2022 && anyo > 1900) return new Array (nom, anyo);
        else return new Array (nom, '');
    } else return false;
}

const pintarBusqueda = async (films) => {
    let contenedorPelisBusqueda = d.getElementById("contPeliculasBuscar");
    for (let i = 0; i < films.Search.length; i++) {
        contenedorPelisBusqueda.innerHTML += peliculas.pintarPeliculasBusqueda(films.Search[i]);
    }
    let ids = api.getIdsBusqueda(films);
    let pelis = await api.getFullListaJSON(ids);
    eventCargarPerfilPelicula(pelis);
}

//********************************************** */
//Menú perfil película
const setupMenu = () => {
    if (firebase.getSesionId() == '' || firebase.getSesionId() == null) d.getElementById('btnAnyadir').parentElement.classList.add('hidden');
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