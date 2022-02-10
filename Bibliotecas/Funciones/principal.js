"use strict";
import * as principal from "../Plantillas/plantillasPrincipal.js";
import * as peliculas from "../Plantillas/plantillasPeliculas.js";
import * as acceso from "../Acceso/acceso.js";
import { resetMasoquista } from "../funciones_aux.js";

//Variables
var d = document;
var masoquista = d.getElementById("masoquista");

export const cargarPrincipal = async () => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarBody();
    masoquista.innerHTML += principal.pintarFooter();
    eventBtnLanding();
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
    masoquista.innerHTML += peliculas.cargarPeliculasLanding();
    //masoquista.innerHTML += principal.pintarFooter();
    eventCargarPerfilPelicula();

}
//*****//
export const cargarPerfilPelicula = () => {
    resetMasoquista();
    masoquista.innerHTML += peliculas.perfilPelicula();
    masoquista.innerHTML += principal.pintarFooter();
}



/********** Interior Cargar Principal **********/
//Botón landing registrarse
const eventBtnLanding = () => {
    d.getElementById("btnLanding").addEventListener("click", acceso.cargarRegistro);
}

//Cargar perfil de una película (PROVISIONAL)
const eventCargarPerfilPelicula = () => {
    var arrayPeliculas = d.getElementsByClassName("movie-title");
    for (let i = 0; i < arrayPeliculas.length; i++) {
        arrayPeliculas[i].addEventListener("click", cargarPerfilPelicula);
    }
}
