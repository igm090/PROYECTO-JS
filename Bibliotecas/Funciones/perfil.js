"use strict";
import * as plantillasPerfil from "../Plantillas/plantillasPerfil.js";
import * as firebase from "../Promesas/firebase.js";
import { resetMasoquista } from "../funciones_aux.js";
import { getFullListaJSON } from "../Promesas/omdbAPI.js"

var d = document;
var masoquista = d.getElementById("masoquista");
var idUser;
var listaOriginal;

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
    d.getElementById("borrarCuenta").addEventListener("click", firebase.borrarCuenta);
}

//Funciones para pintar las listas.
const cargarListaPendientes = async () => {
    resetMasoquista();

    console.log(idUser);
    let docP = await firebase.getPendientesUser(idUser);
    let listaP = await getFullListaJSON(docP.data().films);

    masoquista.innerHTML += plantillasPerfil.pintarMenuListas();
    setupMenuListas(listaP);

    buclePintarListas(listaP);
}

const cargarListaVistas = async () => {
    resetMasoquista();

    console.log(idUser);
    let docP = await firebase.getVistasUser(idUser);
    let listaP = await getFullListaJSON(docP.data().films);

    masoquista.innerHTML += plantillasPerfil.pintarMenuListas();
    setupMenuListas(listaP);

    buclePintarListas(listaP);
}


export const setupMenuListas = (lista) => {
    listaOriginal = lista;
    console.log(listaOriginal);
    d.getElementById('btnOrdenar').addEventListener('click', () => {
        let a = d.getElementById('selectOrdenar').options[d.getElementById('selectOrdenar').selectedIndex].value;
        console.log(a);
        console.log("aaaaa");
    });

    d.getElementById('btnGenBusqueda').addEventListener('click', () => {
        let a = d.getElementById('genBusqueda').value;
        console.log(a);
        console.log("bbbbb");
    });
}

export const buclePintarListas = (listaP) => {
    for (let i = 0; i < listaP.length; i++) masoquista.innerHTML += plantillasPerfil.pintarListaPendientes(listaP[i]);
}
//Recoger listas del usuario
const recogerPendientes = () => {


}

const recogerVistas = () => {

}