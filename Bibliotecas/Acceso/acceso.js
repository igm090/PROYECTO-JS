"use strict";
import * as plantillasLogin from "../Plantillas/plantillasLogin.js";
import { validarFormulario, iniciarSesion } from "../Promesas/firebase.js"
import { resetMasoquista } from "../funciones_aux.js";

//Variables.
var d = document;
var masoquista = d.getElementById("masoquista");


export const cargarLogin = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasLogin.pintarLogin();
    
    let btnLogin = d.getElementById("btnLogin");
    eventLogin(btnLogin);

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

const eventLogin = (log) => {
    log.addEventListener(
    "click",
    () => {
        let email = d.getElementById("emailLogin").value;
        let pass = d.getElementById("passLogin").value;
        iniciarSesion(email, pass);
    },
    false
    );
}


//Event Listeners botones pequeños.
const eventMiniLogin = (log) => {
    log.addEventListener("click", cargarLogin);
}

const eventMiniRegistro = (reg) => {
    reg.addEventListener("click", cargarRegistro);
}