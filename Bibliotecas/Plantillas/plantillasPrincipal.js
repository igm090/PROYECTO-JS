"use strict";

export const pintarBody = () => {
    return `
<div id="home">
    <div class="landing-text">
        <div id="celdita">
        <h1>PAPRIKA STUDIOS'</h1>
        <h2>Film database</h2>
        <h3>Donde se recogen las películas más spicy.</h3>
        <a href="#" id="btnLanding" class="btn btn-default btn-lg">Regístrate</a> 
        </div>
        </div>
</div>

<div class="padding">
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <img class="spice" src="media/logo.png">
        </div>
        <div class="col-sm-6 text-center">
            <h2>Paprika Spice</h2>
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
            <img class="spice" src="media/meeting.jpg">
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
            <img src="media/logow.PNG" class="icon">
        </div>
    </div>
</footer>
`;
};

export const pintarTopGenerico = () => {
    return `
    <div class="padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <h4>Ejemplo 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati.</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <img src="media/logo.png" class="img-responsive">
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <h4>Ejemplo 2</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati.</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <img src="media/logo.png" class="img-responsive">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <h4>Ejemplo 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati.</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <img src="media/logo.png" class="img-responsive">
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <h4>Ejemplo 2</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati.</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <img src="media/logo.png" class="img-responsive">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <h4>Ejemplo 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati.</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <img src="media/logo.png" class="img-responsive">
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <h4>Ejemplo 2</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati.</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <img src="media/logo.png" class="img-responsive">
            </div>
        </div>
    </div>
    </div>
`;
};

export const pintarBuscar = () => {
    return `
        <input type="text" id='barrab' />
        <input type="text" id='anyob' />
        <input type="button" value="buscar" id='buscar' />
    </form>`}