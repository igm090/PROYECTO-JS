/**
 * Biblioteca de operaciones con Firebase.
 * Peticiones a la base de datos, CRUD de usuarios y listas.
 * Nota - Firebase no permite eliminar usuarios de su módulo de autentificación. Más en el archivo README.txt
 */

import {app, autentificacion} from "./datosFirebase.js";
import {getFirestore, collection, onSnapshot, updateDoc, getDocs, deleteDoc, getDoc, doc, where, addDoc, arrayUnion, query, arrayRemove, } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import * as aux from "../funciones_aux.js";
import {setupPrincipal} from "../Funciones/principal.js"

//COLECCIONES
const usersCol = collection(getFirestore(app), "usuarios");
const vistasCol = collection(getFirestore(app), "vistas");
const pendientesCol = collection(getFirestore(app), "pendientes");

//VARIABLES
var d = document;
var idSesion = d.getElementsByTagName("li")[0];
var uidSesion;

/**
 * Función auxiliar. Permite acceder facilmente al id de usuario
 */
export const getSesionId = () => {
  return uidSesion;
}

/********************************************************************************/
//PETICIONES A BD (get)

/**
 * Devuelve todos los documentos de una coleccion
 */
 export const getColeccion = async (coleccion) => {
  let obj = await getDocs(coleccion);
  console.log("Colección recogida con éxito.");
  return obj;
}

/**
* Devuelve un objeto por su id.
*/
export const getDocById = async (coleccion, id) => {
  let docu = await doc(coleccion, id);
  let obj = await getDoc(docu);
  console.log("Documento recogido por ID con éxito.");
  return obj;
}

/*
* Devuelve un DOCUMENTO por su id (necesario para update)
*/
export const getDocumento = async (coleccion, id) => {
  let docu = await doc(coleccion, id);
  console.log("Documento primitivo recogido por ID con éxito.");
  return docu;
}

/**
 * Devuelve una lista de una colección sin especificar
 */
export const getListaQuery = async (col, idU) => {
  const resol = await getDocs(query(col, where("idUser", "==", idU)));
  let d;
  resol.forEach((doc) => {
    d = doc;
  })
  return d;
}

/**
 * Devuelve la lista "Vistas" de un usuario concreto
 */
export const getVistasUser = async (idU) => {
  const resol = await getDocs(query(vistasCol, where("idUser", "==", idU)));
  let d;
  resol.forEach((doc) => {
    d = doc;
  })
  return d;
}

/**
 * Devuelve la lista "Pendientes" de un usuario concreto
 */
export const getPendientesUser = async (idU) => {
  const resol = await getDocs(query(pendientesCol, where("idUser", "==", idU)));
  let d;
  resol.forEach((doc) => {
    d = doc;
  })
  return d;
}

/**
 * Devuelve un usuario (BD) por su código de autentificación
 */
export const getUserByIdAuth = async (idU) => {
  const resol = await getDocs(query(usersCol, where("idAuth", "==", idU)));
  let d;
  resol.forEach((doc) => {
    d = doc;
  })
  return d;
}

/********************************************************************************/
//CREACIÓN DE DOCUMENTOS (no incluye usuarios)

/**
 * Crea la lista por defecto "Vistas" para un usuario concreto.
 */
export const crearVistas = async (idU) => {
  await addDoc(vistasCol, {
      films: [],
      idUser: idU
  });
  console.log("Lista 'vistas' creada con éxito.");
}

/**
 * Crea la lista por defecto "Vistas" para un usuario concreto.
 */
export const crearPendientes = async (idU) => {
  await addDoc(pendientesCol, {
      films: [],
      idUser: idU
  });
  console.log("Lista 'pendientes' creada con éxito.");
}



/********************************************************************************/
//MODIFICACIONES/ACTUALIZACIONES

/**
 * Añade un elemento al array films de una lista concreta
 */
 export const updateDocArray = async (array, elem) => {
  await updateDoc(array, {films: arrayUnion(elem)});
  console.log(`Elemento añadido a lista ${array.id}`);
}

/**
 * Elimina un elemento del array films de una lista concreta
 */
export const deleteFromDocArray = async (array, elem) => {
await updateDoc(array, {films: arrayRemove(elem)});
console.log(`Elemento eliminado de lista ${array.id}`);
}

/**
 * Elimina un elemento de array films de una lista
 */
export const borrarPelicula = async (idFilm, charCol) => {
  let col = (charCol == 'v') ? vistasCol : pendientesCol;
  let lista = await getListaQuery(col, uidSesion);
  let doc = await getDocumento(col, lista.id);
  await deleteFromDocArray(doc, idFilm);
  return true;
}

/**
 * Añade un elemento al array films de una lista
 */
export const addPelicula = async (idUser, filmId, tipoLista) => {
  let docL;
  let col;
  console.log(`${idUser}, ${filmId}, ${tipoLista}`);
  if (tipoLista == 'vistas') { docL = await getVistasUser(idUser); col = vistasCol;
  } else { docL = await getPendientesUser(idUser); col=pendientesCol;}
  let listaDoc = await getDocumento(col, docL.id);
  updateDocArray(listaDoc, filmId);
}

///ELIMINAR USUARIO
export const borrarCuenta = async () => {
  let userId = getSesionId();
  let vistas = await getVistasUser(userId);
  await borrarVistas(vistas);
  let pendientes = await getPendientesUser(userId);
  await borrarPendientes(pendientes);
  await getBorrarUser(userId);
  //borrarUserAuth(userId);
}

export const borrarUser = async (doc) => {
  let docUno = await getDocumento(usersCol, doc.id);
  let docDos = await getDocumento(usersCol, docUno.id);
  await deleteDoc(docDos);
  console.log("Usuario eliminado de la base de datos.");
}

export const borrarVistas = async (doc) => {
  let docUno = await getDocumento(vistasCol, doc.id);
  let docDos = await getDocumento(vistasCol, docUno.id);
  await deleteDoc(docDos);
  console.log("Lista vistas eliminada de la base de datos.");
}
export const borrarPendientes = async (doc) => {
  let docUno = await getDocumento(pendientesCol, doc.id);
  let docDos = await getDocumento(pendientesCol, docUno.id);
  await deleteDoc(docDos);
  console.log("Lista pendientes eliminada de la base de datos.");
}

/* Borrar usuario auth - No puede funcionar sin SDK admin
export const borrarUserAuth = (uid) => {
  deleteUser(uid).then(() => {
    console.log('Usuario eliminado con éxito.');
  }).catch((error) => {
    console.log('Error al eliminar usuario:', error);
  });
}
*/

/********************************************************************************/
//AUTENTIFICACIÓN (creación de usuarios)

/*
* Comprueba el estado de la sesión
*/
onAuthStateChanged(autentificacion, (usuario) => {
  if (usuario) {
    aux.botonesConSesion();
    console.log("Usuario conectado:" + usuario.uid);
    uidSesion = usuario.uid;
  } else {
    setupPrincipal();
    aux.botonesSinSesion();
    console.log("No se ha iniciado sesión");
  }
});

/**
 * Crea el usuario en Auth. Envía las credenciales para la BD.
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
 * Añade el usuario a la base de datos. Llama a crearVistas/Pendientes() y cierra sesión para evitar errores.
 */
 export const crearUserBd = async (datos) => {
  var nombre = aux.getNombreUser();
  let fecha = aux.getFecha();
  let uid = datos.user.uid;

  await addDoc(usersCol, {
      nomDisplay: nombre,
      nomMail: datos.user.email,
      regDate: fecha,
      idAuth: uid,
      favoritos: []
  });
  document.getElementById("formRegistro").reset();
  console.log("Usuario añadido a la BD con éxito.");
  //Llamamos para crear sus litas.
  crearVistas(uid);
  crearPendientes(uid);
  cerrarSesion();
}

/**
 * Comprueba el formulario de registro.
 */
export const validarFormulario = () => {
    let email = d.getElementById('emailRegistro').value.trim();
    let pass = d.getElementById('passRegistro').value.trim();
    let mensajeError = aux.recogerErrores(email, pass);
    
    if(mensajeError !== "") aux.errorFormulario(mensajeError);
    else crearUserAuth(email, pass);
}

/**
 * Inicia la sesión.
 */
export const iniciarSesion = (mail, contra) => {
    signInWithEmailAndPassword(autentificacion, mail, contra)
      .then((credenciales) => {
        let uid = credenciales.user.uid;
        recogerUserBD(uid);
        setupPrincipal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

/**
 * Carga los datos del usuario después de iniciar sesión.
 */
const recogerUserBD = async (uid) => {
    const consulta = await query(usersCol, where("idAuth", "==", uid));
  
    const usuarioIniciado = await onSnapshot(consulta, (user) => {
      user.docs.map((documento) => {
        let nomDisplay = documento.data().nomDisplay;
        manejarSesion(nomDisplay, uid);
      });
    });
  };

/**
 * Guarda el id de usuario en una variable para su fácil acceso 
 * y modifica el DOM para mostrar un mensaje al usuario-
 */
const manejarSesion = (nomDisplay, uid) => {
    d.getElementsByTagName("li")[0].firstChild.innerHTML = "Hola, " + nomDisplay;
    idSesion.id = uid;
};

/**
 * Cierra la sesión actual
 */
export const cerrarSesion = () => {
    autentificacion.signOut().then(() => {
        d.getElementsByTagName("li")[0].firstChild.innerHTML = "";
        uidSesion = null;
        console.log("Sesión cerrada.");
      }).catch((error) => {
        console.log(error);
      });
  };


//borrar usuario y sus listas
export const getBorrarUser = async (idU) => {
  const resol = await query(usersCol, where('idAuth','==', idU));
  
  const filtrado = await onSnapshot(resol, (col) => {
    col.forEach((doc) => {
      borrarUser(doc);
    });
  });
}