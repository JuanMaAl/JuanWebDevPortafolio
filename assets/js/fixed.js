(function(){

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let alturaNavbar = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - alturaNavbar;
    let ventanaPosicion; 
    let isFixed = false;

    function actualizaPosicion() {
        ventanaPosicion = window.scrollY;
    }

    function onScroll() {

        actualizaPosicion();

        if(ventanaPosicion >= breakpoint && !isFixed) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + alturaNavbar + "px;";
            isFixed = true;

        } else if (ventanaPosicion < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top" + 0;
            isFixed = false;
        }

    }

    document.addEventListener('scroll', onScroll);

})()