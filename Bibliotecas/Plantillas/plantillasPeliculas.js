/**
 * Método que pinta las listas en el menú principal.
 */
    export const pintarPeliculasLanding = (pelicula) => {
return `   
    <div class="movie-card" id="${pelicula.imdbID}"> 

		<div class="movie-header" style="background: url(${pelicula.Poster}) no-repeat center center">
		</div><!--movie-header-->

		<div class="movie-content">
			<div class="movie-content-header">
                <div class="row">
                    <div class="col-sm-8">
                        <a href="#">
                            <h3 class="movie-title">${pelicula.Title} (${pelicula.Year})</h3>
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <img src="css/media/logow.PNG" alt="Sello Paprika">
			        </div>
                </div>
			<div class="movie-info">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="info-section">
                            <label>Duración</label>
                            <span>${pelicula.Runtime}</span>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="info-section">
                            <label>Género</label>
                            <span>${pelicula.Genre}</span>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="info-section">
                            <label>Paprika Spice</label>
                            <span>${pelicula.mediaPaprika}</span>
                        </div>
                    </div>
			</div>
		</div><!--movie-content-->
	</div><!--movie-card-->`
    };

    export const pintarPeliculasBusqueda = (pelicula) => {
        return `   
            <div class="movie-card" id="${pelicula.imdbID}"> 
        
                <div class="movie-header" style="background: url(${pelicula.Poster})">
                    <img src="css/media/sello2.png" alt="Sello Paprika">
                </div><!--movie-header-->
        
                <div class="movie-content">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="movie-content-header">
                                <a href="#">
                                    <h3 class="movie-title">${pelicula.Title} (${pelicula.Year})</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`
            };

            export const pintarPerfilPelicula = (pelicula) => {
                return `
                <div class="container emp-profile">
                <form method="post">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="movie-header" style="background: url(${pelicula.Poster})  no-repeat center center">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <h3 id="titPerfP">
                                    ${pelicula.Title}
                                </h3>
                                <h4>
                                    ${pelicula.Director}
                                </h4>
                                <p class="proile-rating">PAPRIKA SPICE: <span id="puntPerfP">8/10</span></p>
                            
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="sinopsis-tab" data-toggle="tab" href="#sinopsis" role="tab" aria-controls="sinopsis" aria-selected="true">Sinopsis</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="false">General</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="actores-tab" data-toggle="tab" href="#actores" role="tab" aria-controls="actores" aria-selected="false">Reparto</a>
                                    </li>
                                </ul>
                            </div>
            
                            <div class="tab-content profile-tab" id="myTabContent">
                            
                            <div class="tab-pane show active" id="sinopsis" role="tabpanel" aria-labelledby="sinopsis-tab">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p id="plotPerfP">${pelicula.Plot}</p>
                                    </div>
                                </div>
                            </div>
            
                            <div class="tab-pane" id="general" role="tabpanel" aria-labelledby="general-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Fecha de estreno:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${pelicula.Released}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Taquilla</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${pelicula.BoxOffice}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Restricción de edad:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${pelicula.Rated}</p>
                                        </div>
                                    </div>
                        </div>
            
                                <div class="tab-pane" id="actores" role="tabpanel" aria-labelledby="actores-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Directores:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${pelicula.Director}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Actores:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${pelicula.Actors}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Guionistas:</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>${pelicula.Writer}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                            </div>
                        </div>
            
                        <div class="col-md-2" id='${pelicula.imdbID}'>
                            <select id='selectAnyadir'>
                                <option value='none' selected>Selecciona una lista</option>
                                <option value='vistas'>Vistas</option>
                                <option value='pendientes'>Pendientes</option>
                            </select>
                            <input id='btnAnyadir' type="button" class="profile-edit-btn" name="btnAnyadir" value="Añadir a lista"/>
                        </div>
                        <hr>
                    </div>
            
                    <div class="row">
                        <div class="col-md-6 offset-md-6" id="grupPerfP">
                            <p>País</p>
                            <p class="blue">${pelicula.Country}<p>
                            <p>Premios</p>
                            <p class="blue">${pelicula.Awards}</p>
                        </div>
                        <div class="col-md-6 offset-md-6"></div>
                    </div>  
            
            
                </form>
            </div>
                `};
        
        