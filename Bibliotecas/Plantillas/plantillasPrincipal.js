"use strict";

export const pintarBody = () => {
    return `
<div id="home">
    <div class="landing-text">
        <div id="celdita">
        <h1>PAPRIKA STUDIOS'</h1>
        <h2 id="estData">Film database</h2>
        <h3>Donde se recogen las películas más spicy.</h3>
        <a href="#" id="btnLanding" class="btn btn-default btn-lg">Regístrate</a> 
        </div>
        </div>
</div>

<div class="padding">
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <img class="spice" src="css/media/logo.png">
        </div>
        <div class="col-sm-6 text-center">
            <h3>Paprika Spice</h3>
            <p class="lead"> Ese sentimiento de alivio cuando los buenos ganan, esa despedida amarga cuando los amantes tienen
            que separarse en el camino, la diversión cuando te metes de lleno en aventuras fantásticas, todo eso es ¡La Paprika Spice!
            Ese el nivel del sabor inolvidable que sientes cuando una película que te marca.</p>
        </div>
    </div>
</div>
</div>

<div class="padding">
<div class="container">
    <div class="row" id="contPeliculas">
        
    </div>
</div>
</div>

<div id="fixed">

</div>

<div class="padding">
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <h3>Nuestros expertos en Paprika Studios.</h3>
            <p>Nuestros expertos te recomiendan que te hagas una cuenta con nosotros para que puedas recoger todas
            las películas que has visto y las que aún están por ver.</p>
            <p>Gracias a nuestra puntuación personalizada de Paprika Spice tienes las mejores recomendaciones para
            disfrutrar del mejor cine habido y por haber.</p>
        </div>
        <div class="col-sm-6">
            <img class="spice" src="css/media/meeting.jpg">
        </div>
    </div>
</div>
</div>
    `;
};



export const pintarFooter = () => {
    return `
    <footer class="container-fluid text-center">
    <div class="row">
        <div class="col-sm-4">
            <h3>LEGAL</h3>
            <br>
            <h4>Copyright© Paprika Studios.</h4>
            <h4>Todos los derechos reservados.</h4>
            <h4>Página por Isela G.M y Álvaro V.C.</h4>
        </div>
        <div class="col-sm-4">
            <h3>SÍGUENOS</h3>
            <br>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-linkedin"></a>
            <a href="#" class="fa fa-youtube"></a>            
        </div>
        <div class="col-sm-4">
            <img src="css/media/logow.PNG" class="icon">
        </div>
    </div>
</footer>
`;
};

export const pintarBuscar = () => {
    return `

    <div class="padding">
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <h3>¡Busca las películas que quieras!</h3>
                <p>Desde clásicos del cine hasta películas recién salidas del horno. Puedes buscar la película que
                más se te antoje, ¡y no solo eso!</p>
                <p>¿No estás seguro de cómo se llamaba esa película de tu infancia? Pon solo una palabra en el buscador
                y nosotros nos encargamos de encontrar las más similares. Quién sabe, puede que encuentres que tiene una
                secuela de la que nunca habías oído hablar. 
            </div>
            <div class="col-sm-6">
                <div class="input-group">
                    <input type="text" id='barrab'placeholder="Nombre Película" />
                    <input type="text" id='anyob' placeholder="Año (opcional)"/>
                    <input class="btn btn-outline-primary" type="button" value="buscar" id='buscar' />
                </div>
            </div>
        </div>
        <div class="row" id="contPeliculasBuscar">
        </div>
    </div>
    </div>

    `}