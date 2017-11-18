$('#boton_enviar').click(function(e){
  var $nombre_usuario = $('#nombre_usuario'),
      $email = $('#email'),
      $consulta = $('#consulta');

  if ($nombre_usuario.val().length == 0 ||
      $email.val().length == 0 ||
      $consulta.val().length == 0) {
    alert('Nombre de usuario, email o consulta no pueden estar vacios');
    return;
  }

  if ($nombre_usuario.val().length > 30) {
    alert('Nombre de usuario no puede superar los 30 caracteres');
    return;
  }

  alert('Su consulta ha sido enviada.');
});
