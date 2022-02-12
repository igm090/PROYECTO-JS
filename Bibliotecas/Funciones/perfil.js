/**Esa librería se encarga de todas las funciones relacionadas con el perfil. Aquí se le llamará para cargarse la 
 * interfaz, sus listas, pintarlo y todo y añadir los event listeners. **/
"use strict";
import * as plantillasPerfil from "../Plantillas/plantillasPerfil.js";
import * as firebase from "../Promesas/firebase.js";
import { resetMasoquista } from "../funciones_aux.js";
import { getFullListaJSON } from "../Promesas/omdbAPI.js"

//Variables.
var d = document;
var masoquista = d.getElementById("masoquista");
var idUser;
var listaOriginal;
    //Colección es una variable que asignamos cuando cargamos listas para luego eliminar películas si lo deseamos.
var coleccion;

/*Esta es la función que tras limpiar el contenedor principal (masoquista), recoge la id del usuario y 
pinta su perfil. Al final se llamará a la función que asignará los event listener a los botones del perfil.*/
export const cargarPerfil = async () => {
    resetMasoquista();

    /*Al cargar recogemos la id del usuario desde firebase y la ponemos
    como una variable global para usarlo en esta biblioteca.*/
    idUser = firebase.getSesionId();
    let usuario = await firebase.getUserByIdAuth(idUser);
    masoquista.innerHTML = plantillasPerfil.pintarPerfil(usuario);
    eventosPerfil();
}

/*Eventos botones del perfil. Los tres botones son para ver la lista de películas pendientes, películas vistas y
borrar la cuenta.*/
const eventosPerfil = () => {
    d.getElementById("listaPendientes").addEventListener("click", cargarListaPendientes);
    d.getElementById("listaVistas").addEventListener("click", cargarListaVistas);
    d.getElementById("borrarCuenta").addEventListener("click", firebase.borrarCuenta);
}

/*Pintar la lista de películas de pendientes.*/
const cargarListaPendientes = async () => {
    resetMasoquista();

    console.log("Pendientes de " + idUser);
    let docP = await firebase.getPendientesUser(idUser);
    let listaP = await getFullListaJSON(docP.data().films);

    coleccion = 'p';
    buclePintarListas(listaP);
}

/*Pintar la lista de películas de vistas.*/
const cargarListaVistas = async () => {
    resetMasoquista();

    console.log("Pendientes de " + idUser);
    let docP = await firebase.getVistasUser(idUser);
    let listaP = await getFullListaJSON(docP.data().films);

    coleccion = 'v';
    buclePintarListas(listaP);
}

/*La función que recoge la lista que selecciona el usuario. ListaP son las películas que se pasan al evento
* de pintar. La variable lista se pasa para luego poder borrar películas.*/
export const buclePintarListas = (listaP, lista) => {
    for (let i = 0; i < listaP.length; i++){
        masoquista.innerHTML += plantillasPerfil.pintarListaPendientes(listaP[i]);
    }
    botonesListas(lista);
}

/*Esta la primera parte del evento para borrar películas de las listas.*/
export const botonesListas = (lista) => {
    let botones = d.getElementsByClassName('btnEliminar');
    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', async (lista) => {
            //No te fijes en esta monstruosidad. Perdón.
            let id = botones[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id; //lmfao
            await firebase.borrarPelicula(id, coleccion);
            cargarPerfil();
        });
    }
}


/* FILTROS - SIN IMPLEMENTAR
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
    /*Esto pertenece a unos filtros que tenemos sin implementar.*/
    //masoquista.innerHTML += plantillasPerfil.pintarMenuListas();
    //setupMenuListas(listaP);
    //eventosMenu(listaP);

    /*Esto pertenece a unos filtros que tenemos sin implementar.*/
    //masoquista.innerHTML += plantillasPerfil.pintarMenuListas();
    //setupMenuListas(listaP);
    //eventosMenu(listaP);*/

    /*export const setupMenuListas = (lista) => {
    listaOriginal = lista;
    console.log(listaOriginal);} */