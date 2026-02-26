// assets/js/scripts.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  console.log('✅ JavaScript conectado correctamente');

  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío tradicional

    if (validateForm()) {
      alert('✅ ¡Formulario válido! Registro exitoso.');
      // Opcional: limpiar formulario
      // form.reset();
    } else {
      alert('❌ Por favor, corrija los errores en el formulario.');
    }
  });
});

/**
 * Función principal de validación del formulario
 * Retorna true si todos los campos son válidos, false si hay errores
 */
function validateForm() {
  let isValid = true;

  // =========================
  // Obtener campos por ID
  // =========================
  const nombre = document.getElementById('nombre');
  const apellidoPaterno = document.getElementById('apellidoPaterno');
  const apellidoMaterno = document.getElementById('apellidoMaterno');
  const cedula = document.getElementById('cedula');
  const motivo = document.getElementById('motivo');
  const tipoCuenta = document.getElementById('tipoCuenta');

  const calle = document.getElementById('calle');
  const numero = document.getElementById('numero');
  const interseccion = document.getElementById('interseccion');

  const foto = document.getElementById('foto'); // input type="file"

  // =========================
  // Validaciones
  // =========================

  // 1) Nombre: no vacío, min 2
  if (!validarCampoTexto(nombre, 2)) isValid = false;

  // 2) Apellido paterno: no vacío, min 2
  if (!validarCampoTexto(apellidoPaterno, 2)) isValid = false;

  // 3) Apellido materno: no vacío, min 2
  if (!validarCampoTexto(apellidoMaterno, 2)) isValid = false;

  // 4) Cédula: exactamente 10 dígitos numéricos
  const valorCedula = cedula.value.trim();
  const regexCedula = /^\d{10}$/;

  if (!regexCedula.test(valorCedula)) {
    cedula.classList.add('no-valid');
    isValid = false;
  } else {
    cedula.classList.remove('no-valid');
  }

  // 5) Motivo: no vacío, min 10 caracteres
  const valorMotivo = motivo.value.trim();
  if (valorMotivo === '' || valorMotivo.length < 10) {
    motivo.classList.add('no-valid');
    isValid = false;
  } else {
    motivo.classList.remove('no-valid');
  }

  // 6) Tipo de cuenta (select): debe elegir una opción
  if (tipoCuenta.value === '') {
    tipoCuenta.classList.add('no-valid');
    isValid = false;
  } else {
    tipoCuenta.classList.remove('no-valid');
  }

  // 7) Calle: no vacío, min 3
  if (!validarCampoTexto(calle, 3)) isValid = false;

  // 8) Número: no vacío (solo no vacío según enunciado)
  const valorNumero = numero.value.trim();
  if (valorNumero === '') {
    numero.classList.add('no-valid');
    isValid = false;
  } else {
    numero.classList.remove('no-valid');
  }

  // 9) Intersección: no vacío, min 3
  if (!validarCampoTexto(interseccion, 3)) isValid = false;

  // 10) Foto (opcional)
  // Si tu profesor la pide obligatoria, descomenta este bloque:
  /*
  if (!foto.files || foto.files.length === 0) {
    foto.classList.add('no-valid');
    isValid = false;
  } else {
    foto.classList.remove('no-valid');
  }
  */

  return isValid;
}

/**
 * Valida un campo de texto:
 * - No vacío
 * - Longitud mínima
 * Aplica/remueve la clase .no-valid
 */
function validarCampoTexto(campo, minLength) {
  const valor = campo.value.trim();

  if (valor === '' || valor.length < minLength) {
    campo.classList.add('no-valid');
    return false;
  } else {
    campo.classList.remove('no-valid');
    return true;
  }
}