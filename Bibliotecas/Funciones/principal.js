/*En esta biblioteca manejaremos la carga principal del programa donde imprimimos películas al azar dentro
del contenedor principal. También tenemos un botón nada más empezar que te puede llevar a registrarte y desde aquí
también manejamos el evento que carga la parte de búsqueda de películas.*/
"use strict";
import * as principal from "../Plantillas/plantillasPrincipal.js";
import * as peliculas from "../Plantillas/plantillasPeliculas.js";
import * as acceso from "../Acceso/acceso.js";
import { resetMasoquista } from "../funciones_aux.js";
import * as api from "/Bibliotecas/Promesas/omdbAPI.js";
import * as firebase from "/Bibliotecas/Promesas/firebase.js";
import * as aux from '/Bibliotecas/funciones_aux.js';

//Variables
var d = document;
var masoquista = d.getElementById("masoquista");
var contenedorPelis;
var bufferArray = '';


//Esto es parte de la generación de películas randomizadas que generamos cuando vamos a cargar el contenido en el menú de inicio.
//Se preparan 9 películas aleatorias en este caso. En funciones auxiliares está con detalle.
export const setupPrincipal = async () => {
    if (bufferArray == '') bufferArray = await aux.textFileToArray();
    let shortlist = aux.generarShortlist(bufferArray);
    shortlist = await api.getFullListaJSON(shortlist);

    //Ahora ya si cargamos el menú de inicio junto con las películas generadas como parámetro.
    cargarPrincipal(shortlist);
}

//Se limpia el contenedor y pintamos el body y footer. Después asignamos los eventos y las películas.
export const cargarPrincipal = async (films) => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarBody();
    masoquista.innerHTML += principal.pintarFooter();
    eventBtnLanding();
    cargarPeliculasLanding(films);
}

//Esta función pinta las películas que ha llamado el evento anterior de cargar principal.
export const cargarPeliculasLanding = (films) => {
    contenedorPelis = d.getElementById("contPeliculas");

    for (let i = 0; i < films.length; i++) {
        contenedorPelis.innerHTML += peliculas.pintarPeliculasLanding(films[i]);
    }
    //Aquí llamamos al evento para que puedas ver el perfil de las películas.
    eventCargarPerfilPelicula(films);
}

/*En esta función que acabamos de llamar en la carga de las películas, creamos un array donde recogemos cada
una de las películas y le asignamos la carga con el eventlistener.*/
export const eventCargarPerfilPelicula = async (films) => {
    var arrayPeliculas = d.getElementsByClassName("movie-title");
    for (let i = 0; i < films.length; i++) {
        arrayPeliculas[i].addEventListener("click", () =>{
            cargarPerfilPelicula(films[i]);
        });
    }
}

//Esta es la función que pinta el perfil detallado de las películas, tras limpiar el contenedor.
export const cargarPerfilPelicula = (pelicula) => {
    resetMasoquista();
    masoquista.innerHTML += peliculas.pintarPerfilPelicula(pelicula);
    masoquista.innerHTML += principal.pintarFooter();
    setupMenu();
}

//Evento del botón para registrarse que se encuentra al principio del inicio
const eventBtnLanding = () => {
    d.getElementById("btnLanding").addEventListener("click", acceso.cargarRegistro);
}

/*Esta es la función que carga la búsqueda de películas.*/
export const cargarBuscar = (id) => {
    resetMasoquista();
    masoquista.innerHTML += principal.pintarBuscar();
    d.getElementById("buscar").addEventListener("click", async () => {
        //Como para buscar la película requiere los valores de los input del formulario, se llama a esta función.
        let datos = getDatosBusqueda();
        if (datos !== false) {
            let films = await api.getFilmsBusqueda(datos[0], datos[1]);
            pintarBusqueda(films);
        } else console.log("Error en el formulario.");
    })
}

//Aquí cogemos los datos para poder hacer la búsqueda de la película.
const getDatosBusqueda = () => {
    let nom = d.getElementById("barrab").value;
    let anyo = d.getElementById("anyob").value;
    if (nom.trim() != '') {
        if (anyo != '' && !Number.isNaN(anyo) && anyo < 2022 && anyo > 1900) return new Array (nom, anyo);
        else return new Array (nom, '');
    } else return false;
}

/*Una vez tenemos los resultados de la búsqueda, pintamos las películas. Aunque no sepamos cuantas llegan porque 
depende de lo que introduzca el usuario, como llegan en array podemos recorrerlo para pintar todos los resultados.*/
const pintarBusqueda = async (films) => {
    let contenedorPelisBusqueda = d.getElementById("contPeliculasBuscar");
    for (let i = 0; i < films.Search.length; i++) {
        contenedorPelisBusqueda.innerHTML += peliculas.pintarPeliculasBusqueda(films.Search[i]);
    }
    let ids = api.getIdsBusqueda(films);
    let pelis = await api.getFullListaJSON(ids);
    eventCargarPerfilPelicula(pelis);
}

//********************************************** */
/*Menú perfil película. Sirve para ocultar o mostrar el menú de añadir película a 
la lista seleccionada en el select dependiendo de si hay un usuario con inicio de sesión o no.*/
const setupMenu = () => {
    if (firebase.getSesionId() == '' || firebase.getSesionId() == null) d.getElementById('btnAnyadir').parentElement.classList.add('hidden');
    else d.getElementById('btnAnyadir').parentElement.classList.remove('hidden');

    d.getElementById('btnAnyadir').addEventListener('click', async function () {
        console.log("boton añadir");
        let op = d.getElementById('selectAnyadir').options[d.getElementById('selectAnyadir').selectedIndex].value;
        if (op != "none") {
            let filmId = this.parentElement.id;
            let userId = firebase.getSesionId();
            firebase.addPelicula(userId, filmId, op)
        } else {
            alert("Selecciona una lista");
        }
    });
}