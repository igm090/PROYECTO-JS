"use strict";
import * as plantillasPerfil from "../Plantillas/plantillasPerfil.js";
import { resetMasoquista } from "../funciones_aux.js";

var masoquista = document.getElementById("masoquista");

export const cargarPerfil = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasPerfil.pintarPerfil();
}