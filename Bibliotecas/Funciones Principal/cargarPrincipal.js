"use strict";
import * as plantillasPrincipal from "../Plantillas/plantillasPrincipal.js";
import { resetMasoquista } from "../funciones_aux.js";

var masoquista = document.getElementById("masoquista");

export const cargarPrincipal = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasPrincipal.pintarBody();
    masoquista.innerHTML += plantillasPrincipal.pintarFooter();
}