<<<<<<< HEAD


/*export const perfilPelicula = () => {
    return `
<div class="container emp-profile">
            <form method="post">
                <div class="row">
                   <div class="col-md-4">
                        <div class="profile-img">
                            <img src="../media/placeholder4.jpg" alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                                Kill BIll
                            </h5>
                            <h6>
                                Quentin Tarantino
                            </h6>
                            <p class="proile-rating">PAPRIKA SPICE: <span>8/10</span></p>
                        
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="sinopsis-tab" data-toggle="tab" href="#sinopsis" role="tab" aria-controls="sinopsis" aria-selected="true">Sinopsis</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="false">General</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="actores-tab" data-toggle="tab" href="#actores" role="tab" aria-controls="actores" aria-selected="false">Actores</a>
                            </li>
                        </ul>
                    </div>
                </div>
        <div class="col-md-2">
            <input type="submit" class="profile-edit-btn" name="btnAnyadir" value="Añadir película"/>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="profile-work">
                <p>Precuelas</p>
                <a href="">Ninguna</a><br/>
                <p>Secuelas</p>
                <a href="">Kill Bill Vol. 2</a><br/>
                <a href="">Kill Bill Vol. 3</a><br/>
            </div>
        </div>
        <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
            
                <div class="tab-pane show active" id="sinopsis" role="tabpanel" aria-labelledby="sinopsis-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>EL cargo</label>
                                </div>
                                <div class="col-md-6">
                                    <p>Lanzador de lanzas</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Sinopsis</label>
                                </div>
                                <div class="col-md-6">
                                    <p>Kill Bill es una película de acción y suspenso estadounidense de dos partes estrenada en 2003 y 2004 respectivamente, que fue escrita y dirigida por Quentin Tarantino. Kill Bill, que originalmente fue propuesta para tener un lanzamiento único en los cines, pero con una duración de más de cuatro horas, fue separada en dos volúmenes: Kill Bill: Volumen 1, lanzada a finales de 2003, y Kill Bill: Volumen 2, lanzada a inicios de 2004. Las dos películas fueron bien recibidas por la crítica, muchos resaltando su estilo de dirección y su homenaje a géneros cinematográficos como las películas de artes marciales hongkonesa, las películas de samuráis, spaghetti western, chicas con armas y venganza. </p>
                                </div>
                            </div>
                </div>

                <div class="tab-pane" id="general" role="tabpanel" aria-labelledby="general-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Rodada en</label>
                                </div>
                                <div class="col-md-6">
                                    <p>este sitio</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Precio</label>
                                </div>
                                <div class="col-md-6">
                                    <p>10$r</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Duración de rodaje</label>
                                </div>
                                <div class="col-md-6">
                                    <p>1 month</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label>Your Bio</label><br/>
                                    <p>Your detail description</p>
                                </div>
                            </div>
                </div>

                <div class="tab-pane" id="actores" role="tabpanel" aria-labelledby="actores-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Actore Principale:</label>
                                </div>
                                <div class="col-md-6">
                                    <p>El destructor 123</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Sidekick:</label>
                                </div>
                                <div class="col-md-6">
                                    <p>El ganso</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>El malo:</label>
                                </div>
                                <div class="col-md-6">
                                    <p>Jose</p>
                                </div>
                            </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label>Your Bio</label><br/>
                                <p>Your detail description</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>  
    </form>
</div>
    `};*/


    export const pintarPerfilPelicula = (pelicula) => {
        return `
    <div class="container emp-profile">
                <form method="post">
                    <div class="row">
                       <div class="col-md-4">
                            <div class="movie-header" style="background: url(${pelicula.Poster})">
                               
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <h5>
                                    ${pelicula.Title}
                                </h5>
                                <h6>
                                    ${pelicula.Director}
                                </h6>
                                <p class="proile-rating">PAPRIKA SPICE: <span>8/10</span></p>
                            
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
                    </div>
            <div class="col-md-2" id='${pelicula.imdbID}' >
                Añadir a lista
                <select id='selectAnyadir'>
                    <option value='none' selected>Selecciona una lista</option>
                    <option value='vistas'>Vistas</option>
                    <option value='pendientes'>Pendientes</option>
                </select>
                <input id='btnAnyadir' type="button" class="profile-edit-btn" name="btnAnyadir" value="Añadir a lista"/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="profile-work">
                    <p>País</p>
                    <a href="">${pelicula.Country}</a><br/>
                    <p>Premios</p>
                    <a href="">${pelicula.Awards}</a><br/>
                </div>
            </div>
            <div class="col-md-8">
                <div class="tab-content profile-tab" id="myTabContent">
                
                    <div class="tab-pane show active" id="sinopsis" role="tabpanel" aria-labelledby="sinopsis-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Sinopsis</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>${pelicula.Plot}</p>
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
                </div>
            </div>  
        </form>
    </div>
        `};









=======
/**
 * Método que pinta las listas en el menú principal.
 */
>>>>>>> fc198385ef52b7a9c3e70e2b7b2a02211e4f5693
    export const pintarPeliculasLanding = (pelicula) => {
return `   
    <div class="movie-card" id="${pelicula.imdbID}"> 

		<div class="movie-header" style="background: url(${pelicula.Poster})">
		</div><!--movie-header-->

		<div class="movie-content">
			<div class="movie-content-header">
				<a href="#">
					<h3 class="movie-title">${pelicula.Title} (${pelicula.Year})</h3>
				</a>
				<div class="paprika-logo"></div>
			</div>
			<div class="movie-info">
				<div class="info-section">
					<label>Duración</label>
					<span>${pelicula.Runtime}</span>
				</div>
				<div class="info-section">
					<label>Género</label>
					<span>${pelicula.Genre}</span>
				</div>
				<div class="info-section">
					<label>Paprika Spice</label>
					<span>${pelicula.mediaPaprika}</span>
				</div>
			</div>
		</div><!--movie-content-->
	</div><!--movie-card-->`
    };

    export const pintarPeliculasBusqueda = (pelicula) => {
        return `   
            <div class="movie-card" id="${pelicula.imdbID}"> 
        
                <div class="movie-header" style="background: url(${pelicula.Poster})">
                </div><!--movie-header-->
        
                <div class="movie-content">
                    <div class="movie-content-header">
                        <a href="#">
                            <h3 class="movie-title">${pelicula.Title} (${pelicula.Year})</h3>
                        </a>
                        <div class="paprika-logo"></div>
                    </div>
                    <div class="movie-info">
                    </div>
                </div><!--movie-content-->
            </div><!--movie-card-->`
            };

            export const pintarPerfilPelicula = (pelicula) => {
                return `
            <div class="container emp-profile">
                        <form method="post">
                            <div class="row">
                               <div class="col-md-4">
                                    <div class="movie-header" style="background: url(${pelicula.Poster})">
                                       
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="profile-head">
                                        <h5>
                                            ${pelicula.Title}
                                        </h5>
                                        <h6>
                                            ${pelicula.Director}
                                        </h6>
                                        <p class="proile-rating">PAPRIKA SPICE: <span>8/10</span></p>
                                    
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
                            </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAnyadir" value="Añadir película"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>País</p>
                            <a href="">${pelicula.Country}</a><br/>
                            <p>Premios</p>
                            <a href="">${pelicula.Awards}</a><br/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                        
                            <div class="tab-pane show active" id="sinopsis" role="tabpanel" aria-labelledby="sinopsis-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Sinopsis</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>${pelicula.Plot}</p>
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
                        </div>
                    </div>  
                </form>
            </div>
                `};
        
        