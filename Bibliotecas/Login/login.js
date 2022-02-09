"use strict";
import * as plantillasLogin from "../Plantillas/plantillasLogin.js";
import { resetMasoquista } from "../funciones_aux.js";

//Variables.
var masoquista = document.getElementById("masoquista");
var miniRegistro;
var miniLogin;

export const cargarLogin = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasLogin.pintarLogin();
    miniRegistro = document.getElementById("miniRegistro");
    eventRegistro();
}

export const cargarRegistro = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasLogin.pintarRegistro();
    miniLogin = document.getElementById("miniLogin");
    eventLogin();
}


//Event Listeners botones pequeños.
const eventLogin = () => {
    miniLogin.addEventListener("click", cargarLogin);
}

const eventRegistro = () => {
    miniRegistro.addEventListener("click", cargarRegistro);
}