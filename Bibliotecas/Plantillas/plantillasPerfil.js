"use strict";

export const pintarPerfil = (usuario) => {
    return `    
<div class="row gutters-sm">
    <div class="card">
        <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
                <img src="media/foto-defecto.jpg" alt="Tu foto de perfil" class="rounded-circle" width="150">
            </div>
            <div class="mt-12">
                <h4>${usuario.data().nomDisplay}</h4>
            </div>
        </div>
    </div>
</div>


<div class="row gutters-sm">
        <div class="col-sm-6 mb-6">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="mb-0">Lista Pendientes</h3>
                    <input type="button" value="Lista Pendientes" id="listaPendientes">
                </div>
            </div>
        </div>
        <div class="col-sm-6 mb-6">
            <div class="card h-100">
                <div class="card-body">
                    <h3 class="mb-0">Lista Vistas</h3>
                    <input type="button" value="Lista Vistas" id="listaVistas">
                </div>
            </div>
        </div>
        </div>
    </div>
</div>


<div class="row gutters-sm">
    <div class="card mt-3">
        <ul class="list-group list-group-flush">

            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h4 class="mb-0">Correo:</h4>
            <span class="text-secondary">${usuario.data().nomMail}</span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h4 class="mb-0">Fecha Registro:</h4>
            <span class="text-secondary">15/11/2022</span>
            </li>

            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h4 class="mb-0">Borrar cuenta:</h4>
            <input type="button" value="Borrar Cuenta" id="borrarCuenta">
            </li>
        </ul>
    </div>
</div>

`};


        /*      SUBIR          <div class="file btn btn-lg btn-primary">
                    Change Photo
                <input type="file" name="file"/> */

export const pintarListaVistas = (pelicula) => {
    return `   
        <div class="movie-card" id="${pelicula.imdbID}"> 
    
            <div class="movie-header" style="background: url(${pelicula.Poster})">
                <img src="media/sello2.png" alt="Sello Paprika">
            </div><!--movie-header-->
    
            <div class="movie-content">
                <div class="movie-content-header">
                    <a href="#">
                        <h3 class="movie-title">${pelicula.Title} (${pelicula.Year})</h3>
                    </a>
                    <input type="button" value="Eliminar"/>
                </div>
        </div><!--movie-card-->`
};

export const pintarListaPendientes = (pelicula) => {
    return `   
        <div class="movie-card" id="${pelicula.imdbID}"> 
    
            <div class="movie-header" style="background: url(${pelicula.Poster})">
                <img src="media/sello2.png" alt="Sello Paprika">
            </div><!--movie-header-->
    
            <div class="movie-content">
                <div class="movie-content-header">
                    <a href="#">
                        <h3 class="movie-title">${pelicula.Title} (${pelicula.Year})</h3>
                    </a>
                    <input type="button" value="Eliminar"/>
                </div>
        </div><!--movie-card-->`
};