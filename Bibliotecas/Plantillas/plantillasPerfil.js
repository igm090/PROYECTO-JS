/*Estas son las plantillas que pertenecen en su totalidad a perfil.js. Pintan tanto perfil como películas, pero de
cualquier manera son las películas pertenecientes a las listas del perfil del usuario, por eso las hemos dejado aquí,
nos parecía más claro así.*/

//Pinta el perfil del usuario, mostrando también los botones para acceder a su lista o borrar su cuenta.
export const pintarPerfil = (usuario) => {
    return `    
<div class="row gutters-sm">
    <div class="card">
        <div class="card-body">
            <div class="d-flex flex-column align-items-center text-center">
                <img src="css/media/foto-defecto.jpg" alt="Tu foto de perfil" class="rounded-circle" width="150">
            </div>
                <h4>${usuario.data().nomDisplay}</h4>
        </div>
    </div>
</div>


<div class="row">
    <div class="col-sm-6 mb-6">
        <div class="card h-100">
            <div class="card-body">
                <input type="button" value="Lista Pendientes" id="listaPendientes">
            </div>
        </div>
    </div>
    <div class="col-sm-6 mb-6">
        <div class="card h-100">
            <div class="card-body">
                <input type="button" value="Lista Vistas" id="listaVistas">
            </div>
        </div>
    </div>
</div>

        <div class="row datosPerf">
            <div class="col-md-3">
            </div>
            <div class="col-md-3">
                <label class="perfilMsj">Correo</label>
            </div>
            <div class="col-md-3">
                <p class="perfilMsj">${usuario.data().nomMail}</p>
            </div>
            <div class="col-md-3">
            </div>
        </div>

        <div class="row datosPerf">
            <div class="col-md-3">
            </div>
            <div class="col-md-3">
                <label class="perfilMsj">Fecha Registro:</label>
            </div>
            <div class="col-md-3">
                <p class="perfilMsj">$${usuario.data().regDate}</p>
            </div>
            <div class="col-md-3">
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <input type="button" value="Borrar Cuenta" id="borrarCuenta">
            </div>
        </div>
`};

/*Pinta la lista de películas vistas. Es básicamente idéntica a la de pendientes. No hemos quitado una y adaptado el
código por falta de tiempo y porque en principio si tenían más diferencias entre ellas con botones y alguna función,
pero no se ha podido implementar todo.*/
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
                <div class="col-sm-12">
                    <div class="info-section">
                        <input type="button" value="Eliminar"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
};

//Plantilla igual a la superior de lista de películas vistas.
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
                        <div class="col-sm-12">
                            <div class="info-section">
                                <input type="button" value="Eliminar" class='btnEliminar' />
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
        </div>`
};


/*      SIN IMPLEMENTAR. Queríamos que los usuarios pudieran subir su propia foto de perfil en su perfil.
Como no nos ha dado tiempo hemos dejado una por defecto algo tenebrosa.
    <div class="file btn btn-lg btn-primary">
        Change Photo
    <input type="file" name="file"/> */
    

//año, alfabetico, media paprika. search genero
/*SIN IMPLEMENTAR. Tanto aquí como en perfil.js se pueden ver varios métodos comentados porque estábamos trabajando
en que el usuario pudiera filtrar sus listas por varias opciones, pero no ha sido posible. Lo dejamos como futura mejora.
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
}*/

