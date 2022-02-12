"use strict";

export const pintarPerfil = (usuario) => {
    return `    
<div class="row gutters-sm">
    <div class="card">
        <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
                <img src="css/media/foto-defecto.jpg" alt="Tu foto de perfil" class="rounded-circle" width="150">
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
            <span class="text-secondary">${usuario.data().regDate}</span>
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
    
    <div class="movie-header" style="background: url(${pelicula.Poster}) no-repeat center center">
        <img src="css/media/sello2.png" alt="Sello Paprika">
    </div><!--movie-header-->

    <div class="movie-content">
        <div class="movie-content-header">
            <div class="row">
                <div class="col-sm-12">
                    <a href="#">
                        <h3 class="movie-title">${pelicula.Title} (${pelicula.Year})</h3>
                    </a>
                </div>
            </div>
        <div class="movie-info">
            <div class="row">
                <div class="col-sm-6">
                    <div class="info-section">
                        <input type="button" value="Pendiente"/>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="info-section">
                        <input type="button" value="Eliminar"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
};

export const pintarListaPendientes = (pelicula) => {
    return `   
        <div class="movie-card" id="${pelicula.imdbID}"> 
    
            <div class="movie-header" style="background: url(${pelicula.Poster}) no-repeat center center">
                <img src="css/media/sello2.png" alt="Sello Paprika">
            </div><!--movie-header-->

            <div class="movie-content">
                <div class="movie-content-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <a href="#">
                                <h3 class="movie-title">${pelicula.Title} (${pelicula.Year})</h3>
                            </a>
                        </div>
                    </div>
                <div class="movie-info">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="info-section">
                                <input type="button" value="Vista"/>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="info-section">
                                <input type="button" value="Eliminar"/>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
        </div>`
};

//año, alfabetico, media paprika. search genero
export const pintarMenuListas = () => {
    return `
    <div class="padding">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <input type='text' id='genBusqueda' placeholder='Filtrar por género' /> 
                    <input type='button' id='btnGenBusqueda' value='Filtrar' />
                </div>
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <select id='selectOrdenar'>
                        <option value='none' selected>Ordenar lista</option>
                        <optgroup label='Afabético' >
                            <option value='A-asc'>Asc.</option>
                            <option value='A-desc'>Desc.</option>
                        </optgroup>
                        <optgroup label='Fecha de estreno' >
                            <option value='Y-asc'>Asc.</option>
                            <option value='Y-desc'>Desc.</option>
                        </optgroup>
                        <optgroup label='Spicy level' >
                            <option value='P-asc'>Asc.</option>
                            <option value='P-desc'>Desc.</option>
                        </optgroup> 
                    </select>
                    <input type='button' value='Ordenar' id='btnOrdenar' />
                </div>
            </div>
        </div>
    </div>
    `;
}