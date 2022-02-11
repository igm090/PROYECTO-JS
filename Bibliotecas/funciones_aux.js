"use strict";

var d = document;

var perfil = document.getElementById("perfil");
var login = document.getElementById("login");
var registro = document.getElementById("registro");
var cerrarSesion = document.getElementById("cerrarSesion");


/**
 * Vacía la página (menos header), para luego poder pintar dentro.
 */
export const resetMasoquista = () => {
    let masoquista = document.getElementById("masoquista");
    masoquista.innerHTML = "";
}

/**
 * Comprobación de formulario, el cual anexa el mensaje de error que llega.
 */
 export const errorFormulario = (mensaje) => {
    let error;
    if (!d.getElementById('errorForm')) {
        error = d.createElement('p');
        error.id = 'errorForm';
        d.getElementById('formRegistro').appendChild(error);
    }

    d.getElementById('errorForm').innerHTML = mensaje;
}

/**
 * Dependiendo del tipo de error escribe el mensaje correspondiente.
 */
export const recogerErrores = (email, pass) => {
    let mensajeError = "";
    if (email == '' || pass == ''){
        mensajeError += 'Hay campos vacíos.';
    }
    if (pass.length < 6){
        mensajeError += 'La contraseña debe contener al menos 6 carácteres.';
    }
    if (!emailValido(email)){
        mensajeError += 'La dirección de correo introducida no es válida.';   
    }
    return mensajeError;
}

/**
 * Recoge uno de los tipos de error del formulario.
 */
const emailValido = (string) => {
    let res = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
    return res.test(string);
}



export const getNombreUser = () => {
    var nombre = document.getElementById("nomRegistro").value;
    return nombre;
};


//Funciones de ocultar o mostrar botones con la sesión.
export const botonesConSesion = () => {
    perfil.classList.remove("hidden");
    login.classList.add("hidden");
    registro.classList.add("hidden");
    cerrarSesion.classList.remove("hidden");
};

export const botonesSinSesion = () => {
    perfil.classList.add("hidden");
    login.classList.remove("hidden");
    registro.classList.remove("hidden");
    cerrarSesion.classList.add("hidden");
};
