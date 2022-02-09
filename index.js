"use strict";
import * as principal from "./Bibliotecas/Funciones Principal/cargarPrincipal.js";
import {cargarTops} from "./Bibliotecas/Funciones Principal/tops.js";
import {cargarPerfil} from "./Bibliotecas/Funciones Perfil/perfil.js";
import {cargarContacto} from "./Bibliotecas/Funciones Principal/contacto.js";

//var cuerpazo = document.getElementById("cuerpazo");

window.onload = () => {

var d = document;

/********** Nada más cargar **********/
principal.cargarPrincipal();

/********** Cabecera Listeners **********/
//Inicio
d.getElementById("inicio").addEventListener("click", principal.cargarPrincipal);

//Tops
d.getElementById("topGenerico").addEventListener("click", cargarTops);

//Tops
d.getElementById("perfil").addEventListener("click", cargarPerfil);

//Tops
d.getElementById("contacto").addEventListener("click", cargarContacto);




}