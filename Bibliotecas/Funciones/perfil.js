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
const cargarListaPendientes = async () => {
    resetMasoquista();
    console.log("probando123");
    console.log(idUser);
    let docP = await firebase.getPendientesUser(idUser);
    let listaP = await getFullListaJSON(docP.data().films);

    for (let i = 0; i < listaP.length; i++){
        masoquista.innerHTML += plantillasPerfil.pintarListaPendientes(listaP[i]);
    }
}

const cargarListaVistas = async () => {
    resetMasoquista();

    let listaV = await firebase.getVistasUser(idUser);
    masoquista.innerHTML += plantillasPerfil.pintarListaVistas(); 

    for (let i = 0; i < listaV.length; i++){
        masoquista.innerHTML += plantillasPerfil.pintarListaPendientes(listaV[i]);
    }
}

//Recoger listas del usuario
const recogerPendientes = () => {


}

const recogerVistas = () => {

}