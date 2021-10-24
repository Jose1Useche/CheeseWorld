document.onload = inicio();

function inicio() {
    window.onresize = mensajeVentana;
}


function mensajeVentana() {
    if (screen.width > 1092) {
        document.getElementById("navDesktop").style.display = 'flex';
        document.getElementById("navMobile").style.display = 'none';
    } else {
        document.getElementById("navDesktop").style.display = 'none';
        document.getElementById("navMobile").style.display = 'flex';
        document.getElementById("navMobile").style.zIndex = '2';
    }
}

function moverLupa() {
    document.getElementById("searchBtn").style.marginRight = '-22rem';
    document.getElementById("searchBtn").style.transition = '.4s';
}
