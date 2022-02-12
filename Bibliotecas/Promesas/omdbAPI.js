/**
 * Biblioteca de operaciones a la API OMDb.
 * 
 *  Ejemplo JSON - http://www.omdbapi.com/?i=tt3896198&apikey=1d78ab91
 *  Documentación - http://www.omdbapi.com/
 */

const apiKey = "&apikey=32fc8355"; //añadir al final de cada url
const url = "http://www.omdbapi.com/?";

/**
 * Devuelve el objecto JSON completo
 */
export const getFilmById = async (id) => {
    let dir = `${url}i=${id}${apiKey}`;
    let film = await fetch(dir);
    let filmJSON = await film.json();
    if (filmJSON.Ratings.length == 3 && filmJSON.Ratings) filmJSON.mediaPaprika = getMediaPaprika(filmJSON);
    else filmJSON.mediaPaprika = "N/A";
    console.log("Se ha devuelto una película de la API.");
    return filmJSON;
}

/**
 * Sistema de búsqueda de OMDb. Busca por título (obligario) y año (opcional)
 * Devuelve un array de resultados limitados, no el objeto JSON completo.
 */
export const getFilmsBusqueda = async (titulo, anyo) => {
    let dir = `${url}s=${titulo}`;
    if (anyo.trim() != '') dir += `y=${anyo.trim()}`;
    dir += `${apiKey}`;
    let film = await fetch(dir);
    let a = await film.json();
    console.log("Se ha realizado una búsqueda en la API");
    return a;
}

/**
 * Devuelve el atributo imdbID (string) de una película (JSON)
 */
export const getIdFilm = (film) => {
    return film.imdbID;
}

/**
 * Devuelve la media de los 3 ratings de un objeto JSON de película
 */
export const getMediaPaprika = (film) => {
    return Math.round((parseInt(film.Ratings[0].Value.substring(0, film.Ratings[0].Value.indexOf('/')).split(".").join("")) + parseInt(film.Ratings[1].Value.substring(0, film.Ratings[1].Value.indexOf('%'))) + parseInt(film.Ratings[2].Value.substring(0, film.Ratings[2].Value.indexOf('/')).split(".").join(""))) / 3) / 10;
}

/**
 * Devuelve un array de objetos JSON a partir de un array de strings (atributo imdbID)
 */
export const getFullListaJSON = async (lista) => {
    let all = [];
    for (const e of lista) {
        let film = await getFilmById(e);
        all.push(film);   
    }
    return all;
}

/**
 * Devuelve un array de strings (imdbID) a partir de un array de JSON
 */
export const getIdsBusqueda = (films) => {
    let ids = [];
    for (let i = 0; i < films.Search.length; i++) {
        ids[i] = films.Search[i].imdbID;
    }
    return ids;
}

//FILTROS - SIM IMPLEMENTAR
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