"use strict";
import * as plantillasPerfil from "../Plantillas/plantillasPerfil.js";
import * as firebase from "../Promesas/firebase.js";
import { resetMasoquista } from "../funciones_aux.js";
import { getFullListaJSON } from "../Promesas/omdbAPI.js"

var d = document;
var masoquista = d.getElementById("masoquista");
var idUser;

export const cargarPerfil = async () => {
    resetMasoquista();

    idUser = firebase.getSesionId();
    let usuario = await firebase.getUserByIdAuth(idUser);
    masoquista.innerHTML = plantillasPerfil.pintarPerfil(usuario);
    eventosPerfil();
}



//Eventos botones del perfil.
const eventosPerfil = () => {
    d.getElementById("listaPendientes").addEventListener("click", cargarListaPendientes);
    d.getElementById("listaVistas").addEventListener("click", cargarListaVistas);
}

//Funciones para pintar las listas.
const cargarListaPendientes = () => {
    resetMasoquista();

    let docP = firebase.getPendientesUser(idUser);
    let listaP = getFullListaJSON(docP.data().films);

    for (let i = 0; i < listaP.length; i++){
        masoquista.innerHTML += plantillasPerfil.pintarListaPendientes();
    }
}

const cargarListaVistas = () => {
    resetMasoquista();

    let listaV = firebase.getVistasUser(idUser);
    masoquista.innerHTML += plantillasPerfil.pintarListaVistas(); 
}

//Recoger listas del usuario
const recogerPendientes = () => {


}

const recogerVistas = () => {

}