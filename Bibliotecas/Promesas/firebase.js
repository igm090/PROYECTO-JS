import {app, autentificacion} from "./datosFirebase.js";
import {getFirestore, collection, updateDoc, getDocs, getDoc, doc, addDoc, arrayUnion} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import * as aux from "../funciones_aux.js";

const usersCol = collection(getFirestore(app), "usuarios");
const vistasCol = collection(getFirestore(app), "vistas");
const pendientesCol = collection(getFirestore(app), "pendientes");

//Variables
var d = document;

/**
 * Comprueba el form, si está bien crea el user.
 */
export const validarFormulario = () => {
    let email = d.getElementById('emailRegistro').value.trim();
    let pass = d.getElementById('passRegistro').value.trim();
    let mensajeError = aux.recogerErrores(email, pass);
    
    if(mensajeError !== ""){
        aux.errorFormulario(mensajeError);
    }
    else{
        crearUsuarioAuth(email, pass);
    }
}

/**
 * Crea el usuario para Auth, manda las credenciales para la BD.
 */
const crearUsuarioAuth = (mail, contra) => {
    createUserWithEmailAndPassword(autentificacion, mail, contra)
      .then((credenciales) => {
        console.log("Autenticación válida.");
        console.log("Credenciales autenticación: " + credenciales);
        crearUserBd(credenciales);
      })
      .catch((error) => {
        console.log(error);
      });
  };

/**
 * Crea documento usuario y lo sube a firebase.
 */
 export const crearUserBd = async (datos) => {

    var nombre = aux.getNombreUser();

    await addDoc(usersCol, {
        nomDisplay: nombre,
        nomMail: datos.user.email,
        idAuth: datos.user.uid,
        favoritos: [],
        idPendientes: '',
        idVistas: ''
    });
    document.getElementById("formRegistro").reset();
    console.log("Usuario añadido a la BD con éxito.");
}


/**
 * Devuelve todos los documentos de una coleccion
 */
export const getColeccion = async (coleccion) => {
    let obj = await getDocs(coleccion);
    return obj;
}

/**
 * Devuelve un objeto por su id.
 */
export const getDocById = async (coleccion, id) => {
    let docu = await doc(coleccion, id);
    let obj = await getDoc(docu);
    return obj;
}

/**
 * Devuelve un DOCUMENTO por su id (necesario para update)
 */
/*export const getDoc = async (coleccion, id) => {
    let docu = await doc(listas, id);
    return docu;
}*/

/**
 * Añade un elemento (idFilm) a un array (lista)
 */
export const updateDocArray = async (array, elem) => {
    await updateDoc(array, {films: arrayUnion(elem),});
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