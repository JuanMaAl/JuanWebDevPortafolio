(function() {
    
    const boton1 = document.querySelector("#boton1");
    const boton2 = document.querySelector("#boton2");
    const boton3 = document.querySelector("#boton3");

    boton1.addEventListener('click', () => {
        open('Braindead1800/Braindead1800.html');
    })

    boton2.addEventListener('click', () => {
        open('piano-angular/index.html');
    })

    boton3.addEventListener('click', () => {
        open('404-not-found-master/404-notFound.html');
    })

})()