window.onresize = mensajeVentana;


function mensajeVentana() {
    if (screen.width >= 1000) {
        document.getElementById("navDesktop").style.display = 'flex';
        document.getElementById("navMobile").style.display = 'none';
    } else {
        document.getElementById("navDesktop").style.display = 'none';
        document.getElementById("navMobile").style.display = 'block';
    }
}

function moverLupa() {
    document.getElementById("searchBtn").style.marginRight = '-22rem';
    document.getElementById("searchBtn").style.transition = '.4s';
}
