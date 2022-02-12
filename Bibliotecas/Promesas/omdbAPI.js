/**
 *  ejemplo json - guardianes de la galaxia 2 http://www.omdbapi.com/?i=tt3896198&apikey=1d78ab91
 * 
 *  documentación http://www.omdbapi.com/
 *  url posters http://img.omdbapi.com/?apikey=1d78ab91&
 *  url data requests http://www.omdbapi.com/?apikey=1d78ab91&
 */

const apiKey = "&apikey=32fc8355"; //añadir al final de cada url
const url = "http://www.omdbapi.com/?";

//getFilm (todo)
export const getFilmById = async (id) => {
    let dir = `${url}i=${id}${apiKey}`;
    let film = await fetch(dir);
    let filmJSON = await film.json();
    if (filmJSON.Ratings.length == 3 && filmJSON.Ratings) filmJSON.mediaPaprika = getMediaPaprika(filmJSON);
    else filmJSON.mediaPaprika = "N/A";
    console.log("Se ha devuelto una película de la API.");
    return filmJSON;
}

/**Buscar películas por título y año
 * Devuelve un array*/
export const getFilmsBusqueda = async (titulo, anyo) => {
    let dir = `${url}s=${titulo}`;
    if (anyo.trim() != '') dir += `y=${anyo.trim()}`;
    dir += `${apiKey}`;
    let film = await fetch(dir);
    let a = await film.json();
    console.log("Se ha realizado una búsqueda en la API");
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

export const getFullListaJSON = async (lista) => {
    let all = [];
    for (const e of lista) {
        let film = await getFilmById(e);
        all.push(film);   
    }
    return all;
}

export const getIdsBusqueda = (films) => {
    let ids = [];
    for (let i = 0; i < films.Search.length; i++) {
        ids[i] = films.Search[i].imdbID;
        console.log(films.Search[i].imdbID);
    }
    return ids;
}

//FILTROS (GRITOS DE FONDO)
//*********************************************************************************/
//*********************************************************************************/

//año
export const sortAnyoAsc = (lista) => {
    return lista.sort((a, b) => (a.Year > b.Year) ? 1 : -1);
}
export const sortAnyoDesc = (lista) => {
    return lista.sort((a, b) => (a.Year < b.Year) ? 1 : -1);
}
//década (amplación)
export const filterDecada = (lista) => {
    let all = [];
    lista.forEach(film => {if (film.Year < 1999 && film.Year > 1990) all.push(film);});
    return all;
}

//alfabético
export const sortTituloAsc = (lista) => {
    return lista.sort((a, b) => (a.Title > b.Title) ? 1 : -1);
}
export const sortTituloDesc = (lista) => {
    return lista.sort((a, b) => (a.Title < b.Title) ? 1 : -1);
}

//por puntuacion (solo media paprika)
export const sortMediaAsc = (lista) => {
    return lista.sort((a, b) => (a.mediaPaprika > b.mediaPaprika) ? 1 : -1);
}
export const sortMediaDesc = (lista) => {
    return lista.sort((a, b) => (a.mediaPaprika < b.mediaPaprika) ? 1 : -1);
}

//por género
export const filterGenero = (lista, genero) => {
    let all = [];
    lista.forEach(film => {
        if (film.Genre.toLowerCase().search(genero.toLowerCase()) != -1) all.push(film);
    });
    return all;
}