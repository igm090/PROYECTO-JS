/**Se recogen los botones de la cabecera para luego poder cargar el registro de usuario y el inicio de sesión.
 * Cada botón de la cabecera pinta su formulario y se les añade los eventos a los botones correspondientes. **/
"use strict";
import * as plantillasLogin from "../Plantillas/plantillasLogin.js";
import { validarFormulario, iniciarSesion } from "../Promesas/firebase.js"
import { resetMasoquista } from "../funciones_aux.js";

//Variables.
var d = document;
    /*Este es el contenedor principal (porque le gusta que le machaquen). 
    Lo especificamos por si has empezado leyendo por aquí.*/
var masoquista = d.getElementById("masoquista");


/*Los dos eventos siguientes limpian el contenedor y pintan los formularios de login o registro dependiendo del clic.
* También cada uno de ellos tiene una pequeña función que referencia una letra pequeña en el formulario por si le has dado
* a iniciar sesión pero no te has registrado, te puedas cambiar más cómodamente y viceversa.
*/
// --Cargar Iniciar Sesión --
export const cargarLogin = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasLogin.pintarLogin();
    
    let btnLogin = d.getElementById("btnLogin");
    //Este evento es el que una vez clic, comprueba tus datos.
    eventLogin(btnLogin);

    let miniRegistro = d.getElementById("miniRegistro");
    eventMiniRegistro(miniRegistro);
}

// --Cargar Registrarse --
export const cargarRegistro = () => {
    resetMasoquista();
    masoquista.innerHTML += plantillasLogin.pintarRegistro();

    //Este evento es el que una vez clic, comprueba tus datos.
    let btnRegistro = d.getElementById("btnRegistrarse");
    eventRegistrarse(btnRegistro);

    let miniLogin = d.getElementById("miniLogin");
    eventMiniLogin(miniLogin);
}



/*Event Listener Registrarse. Cuando envías el formulario se llamará a la
función para validar el formulario. La validación ya sucede en firebase.js.*/
const eventRegistrarse = (reg) => {
    reg.addEventListener("click", validarFormulario);
}

/*Event Listener iniciar sesión. Cuando le das al botón se llama a la
función para comprobar que los campos son correctos. La validación ya sucede en firebase.js.*/
const eventLogin = (log) => {
    log.addEventListener(
    "click",
    () => {
        let email = d.getElementById("emailLogin").value;
        let pass = d.getElementById("passLogin").value;
        iniciarSesion(email, pass);
    },
    false
    );
}


/*Event Listeners de los botones pequeños de los formularios.
 Desde iniciar sesión te lleva a registrarte y viceversa.*/
const eventMiniLogin = (log) => {
    log.addEventListener("click", cargarLogin);
}

const eventMiniRegistro = (reg) => {
    reg.addEventListener("click", cargarRegistro);
}