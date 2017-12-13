'use strict';

function validarFormulario() {
    var textoNombreUsuario = $('#nombre_usuario').val(),
        textoEmail = $('#email').val(),
        textoConsulta = $('#consulta').val();

    return textoNombreUsuario &&
        textoEmail &&
        textoConsulta;
}

function enviarFormulario(event) {

    var $mensajeError = $('.msj-error-validacion'),
        $mensajeOk = $('.msj-enviado');

    $mensajeError.hide();
    $mensajeOk.hide();

    if (!validarFormulario()) {
        $mensajeError.show();
        event.stopPropagation();
        return;
    }

    $mensajeOk.show();
    event.preventDefault();
}

