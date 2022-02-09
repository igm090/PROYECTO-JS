"use strict";

export const pintarLogin = () => {
    return `
<div class="container">
<div class="row">
    <div class="col-md-4 offset-md-4">
        <div class="login-form bg-light mt-4 p-4">
            <form action="" method="" class="row g-3">
                <h4>¡Bienvenido!</h4>
                <div class="col-12">
                    <label>Usuario</label>
                    <input type="text" name="username" class="form-control" placeholder="Usuario">
                </div>
                <div class="col-12">
                    <label>Contraseña</label>
                    <input type="password" name="password" class="form-control" placeholder="Contraseña">
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="rememberMe">
                        <label class="form-check-label" for="rememberMe"> Recuérdame</label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-dark float-end">Inicia sesión</button>
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
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <form action="" class="mt-5 border p-4 bg-light shadow">
                    <h4 class="mb-5 text-secondary">Crea tu cuenta</h4>
                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label>Nombre<span class="text-danger">*</span></label>
                            <input type="text" name="fname" class="form-control" placeholder="Introduce tu nombre">
                        </div>

                        <div class="mb-3 col-md-6">
                            <label>Apellidos<span class="text-danger">*</span></label>
                            <input type="text" name="Lname" class="form-control" placeholder="Introduce tus apellidos">
                        </div>

                        <div class="mb-3 col-md-12">
                            <label>Contraseña<span class="text-danger">*</span></label>
                            <input type="password" name="password" class="form-control" placeholder="Introduce tu contraseña">
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Repite la contraseña<span class="text-danger">*</span></label>
                            <input type="password" name="confirmpassword" class="form-control" placeholder="Confirma la contraseña">
                        </div>
                        <div class="col-md-12">
                           <button class="btn btn-primary float-end">Regístrate</button>
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">Si ya tienes una cuenta, <a id="miniLogin" href="#">Inicia Sesión</a></p>
            </div>
        </div>
    </div>
</div>`;
};