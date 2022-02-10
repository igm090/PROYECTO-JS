import * as jlinq from "/Bibliotecas/jLINQ/jlinq.js";
/**
 *  ejemplo json - guardianes de la galaxia 2 http://www.omdbapi.com/?i=tt3896198&apikey=1d78ab91
 * 
 *  documentación http://www.omdbapi.com/
 *  url posters http://img.omdbapi.com/?apikey=1d78ab91&
 *  url data requests http://www.omdbapi.com/?apikey=1d78ab91&
 */

const apiKey = "&apikey=1d78ab91"; //añadir al final de cada url
const url = "http://www.omdbapi.com/?";

//getFilm (todo)
export const getFilmById = async (id) => {
    let dir = `${url}i=${id}${apiKey}`;
    let film = await fetch(dir);
    let a = await film.json();
    return a;
}

/**Buscar películas por título y año
 * Devuelve un array*/
export const getFilmsBusqueda = async (titulo, anyo) => {
    let dir = `${url}s=${titulo}`;
    if (anyo.trim() != '') dir += `y=${anyo.trim()}`;
    dir += `${apiKey}`;

    let film = await fetch(dir);
    let a = await film.json();
    return a;
}

//getPoster (solo poster a lo mejor name y año)
export const getMicroPreview = async (id) => {
    let film = await getFilmById(id);
    return new Array [film.imdbID, film.Poster, film.Title, film.Year];
}

//getPreview (poster, nombre, año, genero, media)
export const getPreview = async (id) => {
    let film = await getFilmById(id);
    let mediaPaprika = getMediaPaprika(film);
    return new Array [film.imdbID, film.Poster, film.Title, film.Year, film.Genre, mediaPaprika];
}

//getIdFilm
export const getIdFilm = (film) => {
    return film.imdbID;
}

/** Devuelve la media de las puntuaciones de la película*/
export const getMediaPaprika = (film) => {
    return Math.round((parseInt(film.Ratings[0].Value.substring(0, film.Ratings[0].Value.indexOf('/')).split(".").join("")) + parseInt(film.Ratings[1].Value.substring(0, film.Ratings[1].Value.indexOf('%'))) + parseInt(film.Ratings[2].Value.substring(0, film.Ratings[2].Value.indexOf('/')).split(".").join(""))) / 3) / 10;
}

//funciones sort() (para listas del usuario)
//documentación jlinq - http://hugoware.net:4000/projects/jlinq/demo


export const getFullListaJSON = async (lista) => {
    let all = [];
    lista.forEach(e => {
        let film = await getFilmById(e.id);
        all.push(film);
    });
    return all;
}

jlink.from(films.genre)