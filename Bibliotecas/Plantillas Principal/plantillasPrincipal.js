"use strict";

export const pintarHeader = () => {
  return `
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><img class="logo" src="media/logow.PNG"></a>
    </div>
    <div class="collapse navbar-collapse" id="navbar-collapse-main">
        <ul class="nav navbar-nav navbar-right">
            <li><a class="active" href="#">Inicio</a></li>
            <li><a href="#">Listas</a></li>
            <li><a href="#">Perfil</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </div>
  </div>
</nav>
  `;
};


export const pintarBody = () => {
    return `
    <div id="home">
    <div class="landing-text">
        <h1>PAPRIKA</h1>
        <h3>Página de inicio.</h3>
        <a href="#" class="btn btn-default btn-lg">Regístrate</a> 
    </div>
</div>

<div class="padding">
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <img src="media/placeholder2.jpg">
        </div>
        <div class="col-sm-6 text-center">
            <h2>Aquí van a haber pelis muy chulas</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati id
                consequuntur quis numquam maxime voluptatem temporibus non ipsa, amet recusandae animi asperiores vitae distinctio illo.</p>
            <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati id
                consequuntur quis numquam maxime voluptatem temporibus non ipsa, amet recusandae animi asperiores vitae distinctio illo.</p>
        </div>
    </div>
</div>
</div>

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
</div>
</div>

<div id="fixed">

</div>

<div class="padding">
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <h4>Te explico por qué somos unos genios.</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati id
                consequuntur quis numquam maxime voluptatem temporibus non ipsa, amet recusandae animi asperiores vitae distinctio illo.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati id
                consequuntur quis numquam maxime voluptatem temporibus non ipsa, amet recusandae animi asperiores vitae distinctio illo</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati id
                consequuntur quis numquam maxime voluptatem temporibus non ipsa, amet recusandae animi asperiores vitae distinctio illo.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam similique odio tempore reprehenderit obcaecati id
                consequuntur quis numquam maxime voluptatem temporibus non ipsa, amet recusandae animi asperiores vitae distinctio illo</p>
        </div>
        <div class="col-sm-6">
            <img src="media/placeholder3.png">
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
            <h3>Contacto</h3>
            <br>
            <h4>Información de contacto</h4>
        </div>
        <div class="col-sm-4">
            <h3>Redes o algo así xddd</h3>
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