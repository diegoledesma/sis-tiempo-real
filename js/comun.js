'use strict';

function aplicarColor(nombreColor) {
    $('body').css({'background-color': nombreColor});
}

function validarTamanoFuente(tamanoFuente) {
    if (tamanoFuente < 10 || tamanoFuente > 25) {
        alert('Debe ingresar un tamaño de letra de entre 10px y 25px');
        return false;
    }

    return true;
}

function aplicarTamanoFuente() {
    var valorTamanoFuente = $('.cambio-letra input').val();
    if (validarTamanoFuente(valorTamanoFuente)) {
        $('body').css({'font-size': `${valorTamanoFuente}px` })
    }
}