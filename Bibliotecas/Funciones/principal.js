"use strict";
import * as principal from "../Plantillas/plantillasPrincipal.js";
import * as peliculas from "../Plantillas/plantillasPeliculas.js";
import * as acceso from "../Acceso/acceso.js";
import { resetMasoquista } from "../funciones_aux.js";
import * as api from "/Bibliotecas/Promesas/omdbAPI.js";

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
        masoquista.innerHTML += peliculas.pintarPeliculasLanding(b[i]);
    }
    eventCargarPerfilPelicula();
    //masoquista.innerHTML += principal.pintarFooter();

}
//*****//
export const cargarPerfilPelicula = (pelicula) => {
    resetMasoquista();
    masoquista.innerHTML += peliculas.pintarPerfilPelicula(pelicula);
    masoquista.innerHTML += principal.pintarFooter();
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
        console.log(pelicula);
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

export const cargarBuscar = async (id) => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarBuscar();
}
