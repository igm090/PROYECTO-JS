NOTAS DE LA VERSIÓN FINAL - Errores conocidos e implementaciones a medias.

Eliminación de usuarios no es completa.
    Firebase requiere un módulo de administrador para poder eliminar usuarios de la parte de autentificación.
    Esto hace que se pueda seguir iniciando sesión con unos credenciales que ya no existen en la base de datos,
    en caso de que se haya eliminado esa cuenta. 

    En este caso, la sesión estaría abierta, pero las funcionalidades de la página que dependen de la base de
    datos (la inmensa mayoría), no funcionen correctamente y esencialmente rompan la página.

Control de errores.
    La mayoría de los errores que produce la aplicación actualmente no perturban el funcionamiento de esta.
    Aún así, siguen siendo visibles mediante console.log().

Falta de avisos al usuario a través de la página.
    Sin la consola de desarrollador, el funcionamiento de la página quizás pueda ser confuso por falta de feedback.
    Aún así, se puede seguir el flujo del programa desde esta.

    Alertas por bootstrap están entre las ampliaciones que habíamos pensado. Desaparecen solas o con un click y no perturban.

Tiempos de carga.
    Pueden ser ligeramente altos, esto se debe a las constantes peticiones a la BD y la API.
    Pueden ser reducidos con algo más de trabajo.

Cerrado de sesión obligatorio.
    Pasa tanto al registrarse (lo cual puede ser confuso) como cada vez que se carga la página. Aunque es algo molesto
    para el usuario, evita muchos errores y asegura un buen funcionamiento ya que no queremos ninguna cookie suelta de 
    una sesión anterior.

Ampliaciones que no han podido ser
    - Top 4 del usuario. 4 películas concretas elegidas por cada usuario que se mostrarían en su perfil.
    - Que cada usuario pueda subir su propia foto de perfil.
    - Listas personalizadas. Como sub-colección de usuarios en Firebase.
    - Filtros. Casi implementados. Permitirían poder organizar cada lista de diferente manera.
    - Preview de tus listas con las portadas apiladas como si fueran cartas.
    - Alertas bootstrap. Previamente mencionado.
    - Comprobar contraseña. 
    - Control de duplicados en las listas.