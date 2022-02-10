import {app, autentificacion} from "./datosFirebase.js";
import {getFirestore, collection, onSnapshot, updateDoc, getDocs, getDoc, doc, where, addDoc, arrayUnion, query} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import * as aux from "../funciones_aux.js";
import {cargarPrincipal} from "../Funciones Principal/cargarPrincipal.js"

const usersCol = collection(getFirestore(app), "usuarios");
const vistasCol = collection(getFirestore(app), "vistas");
const pendientesCol = collection(getFirestore(app), "pendientes");

//Variables
var d = document;
var nombreSesion = d.getElementById("nomSesion");

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
        crearUserAuth(email, pass);
    }
}

/**
 * Crea el usuario para Auth, manda las credenciales para la BD.
 */
const crearUserAuth = (mail, contra) => {
    createUserWithEmailAndPassword(autentificacion, mail, contra)
      .then((credenciales) => {
        console.log("Autenticación válida. Credenciales:");
        console.log(credenciales);
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
 * Inicia la sesión.
 */
export const iniciarSesion = (mail, contra) => {
    signInWithEmailAndPassword(autentificacion, mail, contra)
      .then((credenciales) => {
        let uid = credenciales.user.uid;
        recogerUserBD(uid);
      })
      .catch((error) => {
        console.log(error);
      });
  };

/*Cuando iniciamos la sesión recogemos al usuario en la BD para luego usar
sus datos o cargar las listas.*/
const recogerUserBD = async (uid) => {
    const consulta = await query(usersCol, where("idAuth", "==", uid));
  
    const usuarioIniciado = await onSnapshot(consulta, (user) => {
        //NO USAR MAP SI ES POSIBLE
      user.docs.map((documento) => {
        let nomDisplay = documento.data().nomDisplay;
        //Traer listas después;
        manejarSesion(nomDisplay);
      });
    });
  };


const manejarSesion = (nomDisplay) => {
    nombreSesion.innerHTML = "Hola, " + nomDisplay;
    cargarPrincipal();
};

//Comprobamos el estado de la sesión en cuanto cambia.
onAuthStateChanged(autentificacion, (usuario) => {
    if (usuario) {
      console.log("el uid del usuario " + usuario.uid);
    } else {
      console.log("No se ha iniciado sesión");
    }
  });

  //Cerrar sesión dejaría el programa limpio por así decirlo
export const cerrarSesion = () => {
    autentificacion
      .signOut()
      .then(() => {
        nomSesion.innerHTML =
          "¡Bienvenido! Indentifícate D:";
        console.log("Salir");
      })
      .catch((error) => {
        console.log(error);
      });
  };

/*************ABAJO SIN USAR DE MOMENTO**********/
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

/** {DEPRECATED: DUPLICATED IMPORT GETDOC}
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