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

export const cargarContacto = () => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarContacto();
}

/*export const cargarTops = () => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarTopGenerico();
    masoquista.innerHTML += principal.pintarFooter();
}*/



let listaManual = ["tt0115736", "tt0118694", "tt2267998", "tt0099685", "tt0069089", "tt1392190"];
let b = await api.getFullListaJSON(listaManual);

export const cargarPeliculasLanding = (b) => {
    resetMasoquista();
    for (let i = 0; i < b.length; i++) {
        masoquista.innerHTML += peliculas.cargarPeliculasLanding(b[i]);
    }
    //masoquista.innerHTML += peliculas.cargarPeliculasLanding();
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
