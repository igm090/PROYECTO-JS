"use strict";
import * as principal from "./Bibliotecas/Funciones/principal.js";
import * as acceso from "./Bibliotecas/Acceso/acceso.js";
import * as firebase from "./Bibliotecas/Promesas/firebase.js"
import * as api from "/Bibliotecas/Promesas/omdbAPI.js";
import {cargarPerfil} from "./Bibliotecas/Funciones/perfil.js";

//var cuerpazo = document.getElementById("cuerpazo");

window.onload = () => {

var d = document;

var listaManual = ["tt0115736", "tt0118694", "tt2267998", "tt0099685", "tt0069089", "tt1392190"];


/********** Nada más cargar **********/
const funcPrincipal = async () => {
    var b = await api.getFullListaJSON(listaManual);
    principal.cargarPrincipal(b);
}

funcPrincipal();

/********** Cabecera Listeners **********/
//Inicio
d.getElementById("inicio").addEventListener("click", principal.cargarPrincipal);

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
d.getElementById("logoCabecera").addEventListener("click", principal.cargarPrincipal);

//Buscar Pelicula.
d.getElementById("buscarPelicula").addEventListener("click", principal.cargarBuscar);

}


