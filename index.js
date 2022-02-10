"use strict";
import * as principal from "./Bibliotecas/Funciones/principal.js";
import * as acceso from "./Bibliotecas/Acceso/acceso.js";
import * as firebase from "./Bibliotecas/Promesas/firebase.js"
import {cargarPerfil} from "./Bibliotecas/Funciones/perfil.js";

//var cuerpazo = document.getElementById("cuerpazo");

window.onload = () => {

var d = document;

/********** Nada más cargar **********/
principal.cargarPrincipal();

/********** Cabecera Listeners **********/
//Inicio
d.getElementById("inicio").addEventListener("click", principal.cargarPrincipal);

//Tops
//d.getElementById("topGenerico").addEventListener("click", principal.cargarTops);
d.getElementById("topGenerico").addEventListener("click", principal.cargarPeliculasLanding);

//Perfil
d.getElementById("perfil").addEventListener("click", cargarPerfil);

//Contactos
d.getElementById("contacto").addEventListener("click", principal.cargarContacto);

//Login
d.getElementById("login").addEventListener("click", acceso.cargarLogin);

//Registro
d.getElementById("registro").addEventListener("click", acceso.cargarRegistro);

//Cerrar Sesión
d.getElementById("cerrarSesion").addEventListener("click", firebase.cerrarSesion);


}