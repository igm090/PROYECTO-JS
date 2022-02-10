"use strict";
import * as principal from "../Plantillas/plantillasPrincipal.js";
import * as peliculas from "../Plantillas/plantillasPeliculas.js";
import * as acceso from "../Acceso/acceso.js";
import { resetMasoquista } from "../funciones_aux.js";

//Variables
var d = document;
var masoquista = d.getElementById("masoquista");
var arrayPeliculas = [];

export const cargarPrincipal = async () => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarBody();
    masoquista.innerHTML += principal.pintarFooter();
    eventBtnLanding();
    eventCargarPerfilPelicula();
}

export const cargarContacto = () => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarContacto();
}

/*export const cargarTops = () => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarTopGenerico();
    masoquista.innerHTML += principal.pintarFooter();
}*/
export const cargarPeliculasLanding = () => {
    resetMasoquista();
    masoquista.innerHTML += peliculas.cargarPeliculasLandingPROVISIONAL();
    masoquista.innerHTML += principal.pintarFooter();
}
//*****//
export const cargarPerfilPelicula = () => {
    resetMasoquista();
    masoquista.innerHTML += peliculas.cargarPerfilPelicula();
    masoquista.innerHTML += principal.pintarFooter();
}



/********** Interior Cargar Principal **********/
//Botón landing registrarse
const eventBtnLanding = () => {
    d.getElementById("btnLanding").addEventListener("click", acceso.cargarRegistro);
}

//Cargar perfil de una película (PROVISIONAL)
const eventCargarPerfilPelicula = () => {
    let contenedor = document.getElementById("masoquista");
    arrayPeliculas = contenedor.getElementsByTagName("img");
    for (let i = 0; i < arrayPeliculas.length; i++) {
        arrayPeliculas[i].addEventListener("click", peliculas.cargarPerfilPelicula);
    }
}
