

export const perfilPelicula = () => {
    return `
    <div class="container emp-profile">
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
                        <a class="nav-link" id="sinopsis-tab" data-toggle="tab" href="#sinopsis" role="tab" aria-controls="sinopsis" aria-selected="true">General</a>
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
            <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Backend Editar maybe"/>
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


            <div class="tab-content sinopsis-tab" id="myTabContent">
            
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
            </div>

            <div class="tab-pane fade" id="general" role="tabpanel" aria-labelledby="general-tab">
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

                <div class="tab-pane fade" id="actores" role="tabpanel" aria-labelledby="actores-tab">
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
                </div>

        </div>
    </div>                
</div>
    `};

/**
 * <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        
                          
                    </div>
                </div>
            </form>           
        </div>`;
 */


    export const cargarPeliculasLanding = (idPelicula, posterPelicula, tituloPelicula,
        anyoPelicula, generoPelicula, notaPaprika) => {

return `   
    <div class="movie-card">

		<div class="movie-header manOfSteel">
		</div><!--movie-header-->

		<div class="movie-content">
			<div class="movie-content-header">
				<a href="#">
					<h3 class="movie-title">Man of Steel</h3>
				</a>
				<div class="paprika-logo"></div>
			</div>
			<div class="movie-info">
				<div class="info-section">
					<label>Date & Time</label>
					<span>Sun 8 Sept - 10:00PM</span>
				</div><!--date,time-->
				<div class="info-section">
					<label>Screen</label>
					<span>03</span>
				</div><!--screen-->
				<div class="info-section">
					<label>Row</label>
					<span>F</span>
				</div><!--row-->
				<div class="info-section">
					<label>Seat</label>
					<span>21,22</span>
				</div><!--seat-->
			</div>
		</div><!--movie-content-->
	</div><!--movie-card-->


    <div class="movie-card" ${idPelicula}> 

		<div class="movie-header ${posterPelicula}">
		</div><!--movie-header-->

		<div class="movie-content">
			<div class="movie-content-header">
				<a href="#">
					<h3 class="movie-title">${tituloPelicula}</h3>
				</a>
				<div class="paprika-logo"></div>
			</div>
			<div class="movie-info">
				<div class="info-section">
					<label>Fecha de estreno</label>
					<span>${anyoPelicula}</span>
				</div>
				<div class="info-section">
					<label>Género</label>
					<span>${generoPelicula}</span>
				</div>
				<div class="info-section">
					<label>Nota Paprika</label>
					<span>${notaPaprika}</span>
				</div>
			</div>
		</div><!--movie-content-->
	</div><!--movie-card-->`
    };