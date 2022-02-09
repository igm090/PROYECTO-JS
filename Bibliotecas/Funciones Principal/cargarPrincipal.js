"use strict";
import * as plantillasPrincipal from "../Plantillas Principal/plantillasPrincipal.js";

var cuerpazo = document.getElementById("cuerpazo");

export const cargarPrincipal = () => {
    cuerpazo.innerHTML = "";
    cuerpazo.innerHTML += plantillasPrincipal.pintarHeader();
    cuerpazo.innerHTML += plantillasPrincipal.pintarBody();
    cuerpazo.innerHTML += plantillasPrincipal.pintarFooter();
}