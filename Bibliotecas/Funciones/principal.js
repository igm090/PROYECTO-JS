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

/*export const cargarTops = () => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarTopGenerico();
    masoquista.innerHTML += principal.pintarFooter();
}*/

export const cargarPeliculasLanding = (b) => {
    resetMasoquista();
    for (let i = 0; i < b.length; i++) {
        masoquista.innerHTML += peliculas.cargarPeliculasLanding(b[i]);
    }
    //masoquista.innerHTML += principal.pintarFooter();
    eventCargarPerfilPelicula();

}
//*****//
export const cargarPerfilPelicula = (pelicula) => {
    resetMasoquista();
    masoquista.innerHTML += peliculas.perfilPelicula(pelicula);
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
