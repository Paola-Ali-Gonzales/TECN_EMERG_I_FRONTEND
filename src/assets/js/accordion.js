var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

//Boton del Modal de Agregar un Cliente
$("#btn-addClient").click(() => {
  $("#modalRegister").modal('show');
})
$('#modalRegister').modal({backdrop: 'static', keyboard: false})

$("#btnCloseModal").click(() => {
  
  $("#modalRegister").modal('toggle');
})



//Boton del Modal de Agregar un Producto
$("#button-option-list-sale").click(() => {
  $("#modalRegisterProduct").modal('show');
})
$('#modalRegisterProduct').modal({backdrop: 'static', keyboard: false})

$("#btnCloseModalProduct").click(() => {
  
  $("#modalRegisterProduct").modal('toggle');
})


//#region  VALIDACION FORMULARIOS
const campos ={
  nombre: false,
  apellido: false,
  nit: false,
  correo: false
}

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{1,3}$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const validarFormulario = (e) => {
  switch (e.target.name){
  case "correo":
    if (expresiones.correo.test(e.target.value)) {
      ColorCorreoBien();
      campos['correo'] = true;
    }else{
      ColorCorreoMal();
      campos['correo'] = false;
    }
  break;
  case "nit":
    if (expresiones.telefono.test(e.target.value)) {
      ColorNitBien();
      campos['nit']= true;
    }else{
      ColorNitMal();
      campos['nit'] = false;
    }
  break;
  case "apellido":
    if (expresiones.nombre.test(e.target.value)) {
      ColorApellidoBien();
      campos['apellido']= true;
    }else{
      ColorApellidoMal();
      campos['apellido'] = false;
    }
  break;
  case "nombre":
    if (expresiones.nombre.test(e.target.value)) {
      //console.log(e.target.value);
      ColorNombreBien();
      campos['nombre']= true;
    }else{
      //document.getElementById('validar').classList.add('formulario__grupo-correcto');
      //alert('El campo de Nombre tiene caracteres indebidos');
      ColorNombreMal();
      campos['nombre'] = false;
    }
  break;
  }
}
inputs.forEach((input) =>{
  input.addEventListener('keyup',validarFormulario);
  input.addEventListener('blur',validarFormulario);
});

//#endregion

//#region Colores Validacion
function ColorNombreMal() {

  document.getElementById("validarNombre").style.color = "red";

}
function ColorNombreBien() {

  document.getElementById("validarNombre").style.color = "green";

}
function ColorApellidoMal() {

  document.getElementById("validarApellido").style.color = "red";

}
function ColorApellidoBien() {

  document.getElementById("validarApellido").style.color = "green";

}
function ColorNitMal() {

  document.getElementById("validarNit").style.color = "red";

}
function ColorNitBien() {

  document.getElementById("validarNit").style.color = "green";

}
function ColorCorreoMal() {

  document.getElementById("validarCorreo").style.color = "red";

}
function ColorCorreoBien() {

  document.getElementById("validarCorreo").style.color = "green";

}
//#endregion

