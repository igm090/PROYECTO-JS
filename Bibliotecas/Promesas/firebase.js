import {app, autentificacion} from "./datosFirebase.js";
import {getFirestore, collection, updateDoc, getDocs, getDoc, doc, addDoc, arrayUnion} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const usersCol = collection(getFirestore(app), "usuarios");
const vistasCol = collection(getFirestore(app), "vistas");
const pendientesCol = collection(getFirestore(app), "pendientes");

/**
 * Devuelve todos los documentos de una coleccion
 * @param {*} coleccion 
 * @returns 
 */
export const getColeccion = async (coleccion) => {
    let obj = await getDocs(coleccion);
    return obj;
}

/**
 * Devuelve un objeto por su id.
 * @param {*} coleccion 
 * @param {*} id 
 * @returns
 */
export const getDocById = async (coleccion, id) => {
    let docu = await doc(coleccion, id);
    let obj = await getDoc(docu);
    return obj;
}

/**
 * Devuelve un DOCUMENTO por su id (necesario para update)
 * @param {*} coleccion 
 * @param {*} id 
 * @returns 
 */
export const getDoc = async (coleccion, id) => {
    let docu = await doc(listas, id);
    return docu;
}

/**
 * Añade un elemento (idFilm) a un array (lista)
 * @param {*} array 
 * @param {*} elem 
 */
export const updateDocArray = async (array, elem) => {
    await updateDoc(array, {films: arrayUnion(elem),});
}

/**
 * Crea un usuario y lo sube a firebase
 * @param {*} datos 
 */
export const crearUser = async (datos) => {
    await addDoc(usersCol, {
        nomDis: datos[0],
        nomMail: datos[1],
        favoritos: [],
        idPendientes: '',
        idVistas: ''
    });
    console.log("Nuevo usuario creado con éxito.");
}

export const crearVistas = async (idU) => {
    await addDoc(vistasCol, {
        films: [],
        idUser: idU
    });
    console.log("Lista 'vistas' creada con éxito.");
}

export const crearPendientes = async (idU) => {
    await addDoc(pendientesCol, {
        films: [],
        idUser: idU
    });
    console.log("Lista 'pendientes' creada con éxito.");
}

export const updateListasUser = async (idU) => {
    
}