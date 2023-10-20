let verifiqueDatos = document.getElementById('verifiqueDatos');
let verifiqueDatosInscripcion = document.getElementById('verifiqueDatosIns');

let nombre = document.getElementById('formNombre');
let email = document.getElementById('formMail');
let mensaje = document.getElementById('formMensaje');

let nombreInscripcion=document.getElementById('nombreInscripcion');

function contieneSoloLetras(texto) {
  return /^[A-Za-z\s]+$/.test(texto);
}

function enviarFormulario(){
  
  if (nombre.value === '' || email.value === '' || mensaje.value === '') {
    verifiqueDatos.innerHTML = 'Verifique los datos';
      return false;
    } else if (!contieneSoloLetras(nombre.value)) {
      verifiqueDatos.innerHTML = 'Verifique los datos';
      return false;
    } else {
      verifiqueDatos.innerHTML='Enviado correctamente';
      return true;
    }
}

function enviarInscripcion(){

  if(contieneSoloLetras(nombreInscripcion.value)) {
    return true;
  }else {
    verifiqueDatosInscripcion.innerHTML = 'Verifique los datos';
    return false;
  }
}