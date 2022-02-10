"use strict";
import * as plantillasPrincipal from "../Plantillas/plantillasPrincipal.js";
import { resetMasoquista } from "../funciones_aux.js";

var masoquista = document.getElementById("masoquista");

export const cargarPrincipal = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasPrincipal.pintarBody();
    masoquista.innerHTML += plantillasPrincipal.pintarFooter();
}

export const cargarContacto = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasPrincipal.pintarContacto();
}

export const cargarTops = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasPrincipal.pintarTopGenerico();
    masoquista.innerHTML += plantillasPrincipal.pintarFooter();
}