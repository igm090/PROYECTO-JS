import * as principal from "/Bibliotecas/Funciones/principal.js";
import * as acceso from "/Bibliotecas/Acceso/acceso.js";
import * as firebase from "/Bibliotecas/Promesas/firebase.js"
import * as api from "/Bibliotecas/Promesas/omdbAPI.js";
import {cargarPerfil} from "/Bibliotecas/Funciones/perfil.js";
import * as aux from "/Bibliotecas/funciones_aux.js";

"use strict";

//var cuerpazo = document.getElementById("cuerpazo");

window.onload = () => {

var d = document;

/********** Nada más cargar **********/
principal.setupPrincipal();

/********** Cabecera Listeners **********/
//Inicio
d.getElementById("inicio").addEventListener("click", principal.setupPrincipal);

//Tops
//d.getElementById("topGenerico").addEventListener("click", principal.cargarTops);

//Perfil
d.getElementById("perfil").addEventListener("click", cargarPerfil);

//Login
d.getElementById("login").addEventListener("click", acceso.cargarLogin);

//Registro
d.getElementById("registro").addEventListener("click", acceso.cargarRegistro);

//Cerrar Sesión
d.getElementById("cerrarSesion").addEventListener("click", firebase.cerrarSesion);

//Logo Cabecera.
d.getElementById("logoCabecera").addEventListener("click", principal.setupPrincipal);

//Buscar Pelicula.
d.getElementById("buscarPelicula").addEventListener("click", principal.cargarBuscar);

}


