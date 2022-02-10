"use strict";
import * as plantillasLogin from "../Plantillas/plantillasLogin.js";
import { validarFormulario } from "../Promesas/firebase.js"
import { resetMasoquista } from "../funciones_aux.js";

//Variables.
var d = document;
var masoquista = d.getElementById("masoquista");


export const cargarLogin = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasLogin.pintarLogin();
    //falta botón login

    let miniRegistro = d.getElementById("miniRegistro");
    eventMiniRegistro(miniRegistro);
}

export const cargarRegistro = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasLogin.pintarRegistro();

    let btnRegistro = d.getElementById("btnRegistrarse");
    eventRegistrarse(btnRegistro);

    let miniLogin = d.getElementById("miniLogin");
    eventMiniLogin(miniLogin);
}

//Event Listeners Registrarse e Iniciar sesión.
const eventRegistrarse = (reg) => {
    reg.addEventListener("click", validarFormulario);
}


//Event Listeners botones pequeños.
const eventMiniLogin = (log) => {
    log.addEventListener("click", cargarLogin);
}

const eventMiniRegistro = (reg) => {
    reg.addEventListener("click", cargarRegistro);
}