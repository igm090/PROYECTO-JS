/*Estas son las dos plantillas que pertenecen a acceso.js simplemente. La primera pinta el formulario de inicio
de sesión y la segunda plantilla es para pintar el formulario de registro.*/
"use strict";

export const pintarLogin = () => {
    return `
<div class="container">
<div class="row">
    <div class="col-md-10 offset-md-4">
        <div class="login-form bg-light mt-4 p-4">
            <form action="" method="" class="row g-3" id="formLogin">
                <h4>¡Bienvenido!</h4>
                <div class="col-12">
                    <label>Email</label>
                    <input type="email" id="emailLogin" name="mail" class="form-control" placeholder="Email">
                </div>
                <div class="col-12">
                    <label>Contraseña</label>
                    <input type="password" id="passLogin" name="password" class="form-control" placeholder="Contraseña">
                </div>
                <div class="col-12">
                    <input type="button" id="btnLogin" class="btn btn-dark float-end" value="Inicia sesión"/>
                </div>
            </form>
            <hr class="mt-4">
            <div class="col-12">
                <p class="text-center mb-0">¿Aún no tienes cuenta? <a id="miniRegistro" href="#">Regístrate</a></p>
            </div>
        </div>
    </div>
</div>
</div>`;
};

export const pintarRegistro = () => {
    return `
<div class="container">
    <div class="row">
    <div class="padding>
        <div class="col-md-12 offset-md-4">
            <div class="signup-form">
                <form action="" class="mt-5 border p-4 bg-light shadow" id="formRegistro">
                    <h4 class="mb-5 text-secondary">Crea tu cuenta</h4>
                    <div class="row">
                        <div class="mb-4 col-md-12">
                            <label>Nombre<span class="text-danger">*</span></label>
                            <input type="text" id="nomRegistro" name="fname" class="form-control" placeholder="Introduce tu nombre">
                        </div>

                        <div class="mb-4 col-md-12">
                            <label>Email<span class="text-danger">*</span></label>
                            <input type="email" id="emailRegistro" name="fmail" class="form-control" placeholder="Introduce tu email">
                        </div>

                        <div class="mb-4 col-md-12">
                            <label>Contraseña<span class="text-danger">*</span></label>
                            <input type="password" id="passRegistro" name="password" class="form-control" placeholder="Introduce tu contraseña">
                        </div>

                        <div class="col-md-12">
                           <input type="button" id="btnRegistrarse" class="btn btn-primary float-end" value="Regístrate"/>
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">Si ya tienes una cuenta, <a id="miniLogin" href="#">Inicia Sesión</a></p>
            </div>
        
        </div>
        </div>
    </div>
</div>`;
};

/* SIN IMPLEMENTAR. Es un trozo de código que queríamos añadir después para confirmar la contraseña.
    <div class="mb-4 col-md-4">
        <label>Repite la contraseña<span class="text-danger">*</span></label>
        <input type="password" name="confirmpassword" class="form-control" placeholder="Confirma la contraseña">
    </div> */