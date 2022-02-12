"use strict";
import * as plantillasPerfil from "../Plantillas/plantillasPerfil.js";
import * as firebase from "../Promesas/firebase.js";
import { resetMasoquista } from "../funciones_aux.js";
import { getFullListaJSON } from "../Promesas/omdbAPI.js"
import * as principal from "./principal.js";

var d = document;
var masoquista = d.getElementById("masoquista");
var idUser;
var listaOriginal;
var coleccion;

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

    coleccion = 'p';
    buclePintarListas(listaP);
    eventosMenu(listaP);
}

const cargarListaVistas = async () => {
    resetMasoquista();

    console.log(idUser);
    let docP = await firebase.getVistasUser(idUser);
    let listaP = await getFullListaJSON(docP.data().films);

    masoquista.innerHTML += plantillasPerfil.pintarMenuListas();
    setupMenuListas(listaP);

    coleccion = 'v';
    buclePintarListas(listaP);
    eventosMenu(listaP);
}


export const setupMenuListas = (lista) => {
    listaOriginal = lista;
    console.log(listaOriginal);
}

export const buclePintarListas = (listaP, lista) => {
    for (let i = 0; i < listaP.length; i++){
        masoquista.innerHTML += plantillasPerfil.pintarListaPendientes(listaP[i]);
    }
    principal.eventCargarPerfilPelicula(listaP);

    botonesListas();
}

const eventosMenu = () => {
d.getElementById('btnOrdenar').addEventListener('click', () => {
    let select = d.getElementById('selectOrdenar');
    let valor = select.options[select.selectedIndex].value;
    console.log(valor);
});

d.getElementById('btnGenBusqueda').addEventListener('click', () => {
    let elem = d.getElementById('genBusqueda').value;
    console.log(elem);
});
}

export const botonesListas = () => {
    let botones = d.getElementsByClassName('btnEliminar');
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', async () => {
            let id = botones[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id; //lmfao
            let cole;
            if (coleccion == 'v') cole = firebase.getVistasCol();
            else cole = firebase.getPendientesCol();

            api.up
        });
    }
}