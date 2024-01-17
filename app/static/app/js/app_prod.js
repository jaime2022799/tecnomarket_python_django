/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app_dev.js":
/*!***********************!*\
  !*** ./js/app_dev.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//llamamos a los archivos que queramos juntar
__webpack_require__(/*! ./feriados */ "./js/feriados.js");

__webpack_require__(/*! ./traducciones */ "./js/traducciones.js");

__webpack_require__(/*! ./menu */ "./js/menu.js");

__webpack_require__(/*! ./formulario_jquery */ "./js/formulario_jquery.js");

__webpack_require__(/*! ./conceptos */ "./js/conceptos.js");

/***/ }),

/***/ "./js/conceptos.js":
/*!*************************!*\
  !*** ./js/conceptos.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

//alert("este es un mensaje")
//nombre = "elias"
var nombre = "elias";
var edad = 20;

if (edad >= 18 && edad <= 64) {
  console.log("mayor de edad");
} else if (edad <= 0 || edad >= 120) {
  console.log("edad incorrecta");
} else if (edad >= 65) {
  console.log("adulto mayor");
} else {
  console.log("menor de edad");
}

var i = 0;

while (i < 10) {
  console.log("while: " + i);
  i++;
}

for (var _i = 0; _i < 5; _i++) {
  console.log("for: " + _i);
}

var nombres = ["rodrigo", "matias", "juan"];
console.log(nombres[0]);
nombres.forEach(function (item) {
  console.log(item);
});
nombres.forEach(function (item) {
  console.log(item);
}); //JSON

var persona = {
  nombre: "adrian",
  edad: 30,
  estatura: 1.8
};
console.log(persona.nombre);
var estatura = "2";

if (estatura === 2) {
  console.log("ingresa");
}

/***/ }),

/***/ "./js/feriados.js":
/*!************************!*\
  !*** ./js/feriados.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

var url = "https://api.control-z.cl/api/feriados"; //let url = "https://mindicador.cl/api"
//ajax

fetch(url).then(function (respuesta) {
  return respuesta.json();
}).then(function (respuesta) {
  /*console.log(respuesta)
  respuesta.forEach(function(feriado) {
      console.log(feriado.nombre)
  })*/
  console.log(respuesta[0].nombre + " " + respuesta[0].fecha);
  var enlaceFeriado = document.getElementById("feriado");
  enlaceFeriado.innerText = respuesta[0].nombre; //console.log(respuesta.uf.valor)
});

/***/ }),

/***/ "./js/formulario_jquery.js":
/*!*********************************!*\
  !*** ./js/formulario_jquery.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//este es un comentario
//otro cambio  adsf
//validaciones con jquery validate
$.validator.addMethod("terminaCon", function (value, element, parametro) {
  //value-> lo que escribio el usuario en la caja
  //element -> el elemento html
  //parametro -> lo que se le entrega para validar -> duoc.cl
  //true|false
  if (value.endsWith(parametro)) {
    return true;
  }

  return false; //{0} siempre pasa el parametro recibido por la funcion
}, "Debe terminar con {0}");
$("#formulario_contacto").validate({
  rules: {
    nombre: {
      required: true,
      minlength: 3,
      maxlength: 50
    },
    email: {
      required: true,
      email: true,
      terminaCon: "alumnos.duoc.cl" //@duoc.cl
      //number: true
      //min: 3
      //max: 5000

    },
    tipo_solicitud: {
      required: true
    },
    mensaje: {
      required: true,
      minlength: 5,
      maxlength: 200
    }
  },
  messages: {
    nombre: {
      required: "Este campo es requerido",
      minlength: "minimo debe tener 3 caracteres"
    }
  }
});

function cargarTablaContactos() {
  //conectarse con la api, rescatar los registros, crear el html necesario
  //tr -> td -> datos -> pasarle el html creado a la tabla
  var url = "https://api.control-z.cl/api/contacto";
  $.get(url, function (respuesta) {
    var htmlTabla = "\n           <tr>\n            <th>Nombre</th>\n            <th>Email</th>\n           </tr>\n        ";
    respuesta.forEach(function (item) {
      htmlTabla += "\n                <tr>\n                    <td>".concat(item.nombre, "</td>\n                    <td>").concat(item.email, "</td>\n                </tr>\n            ");
    }); //pasarle el html a la tabla <table>

    $("#tabla_contactos").html(htmlTabla);
  }, "json");
}

cargarTablaContactos(); //let guardar = document.getElementById("guardar")
//addEventListener('click', func)

$("#guardar").click(function () {
  //verificar si todo es valido
  if (!$("#formulario_contacto").valid()) {
    return;
  } //console.log("boton pinchado")


  var nombre = $("#nombre").val();
  var email = $("#email").val();
  var tipoSolicitud = $("#tipo_solicitud").val();
  var mensaje = $("#mensaje").val();
  var avisos = $("#avisos").is(":checked"); //console.log(nombre)???

  var url = "https://api.control-z.cl/api/contacto";
  var data = {
    nombre: nombre,
    email: email,
    tipo_solicitud: tipoSolicitud,
    mensaje: mensaje,
    avisos: avisos ? 1 : 0
  };
  $.post(url, data, function (respuesta) {
    console.log(respuesta);
    cargarTablaContactos();
    Swal.fire({
      title: "Felicitaciones",
      text: "Tu mensaje ha sido enviado, te estaremos llamando ;)",
      icon: "success" //error, warning, info y question

    });
  }, "json").fail(function () {
    Swal.fire({
      title: "Ups!",
      text: "Ha ocurrido un error FATAL",
      icon: "error",
      toast: true,
      position: 'top-right',
      timer: 2000,
      timerProgressBar: true
    });
  });
});

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var menu = document.getElementById("menu");
var header = document.getElementById("header");
var nav = document.getElementById("nav");
menu.addEventListener("click", function () {
  if (header.style.height == "60px" || header.offsetHeight == 60) {
    header.style.height = 60 + nav.offsetHeight + "px";
  } else {
    header.style.height = "60px";
  }
});
window.addEventListener("resize", function () {
  var ancho = document.documentElement.clientWidth;

  if (ancho > 480) {
    header.style = "none";
  }
});

/***/ }),

/***/ "./js/traducciones.js":
/*!****************************!*\
  !*** ./js/traducciones.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES
 */
jQuery.extend(jQuery.validator.messages, {
  required: "Este campo es obligatorio.",
  remote: "Por favor, rellena este campo.",
  email: "Por favor, escribe una dirección de correo válida",
  url: "Por favor, escribe una URL válida.",
  date: "Por favor, escribe una fecha válida.",
  dateISO: "Por favor, escribe una fecha (ISO) válida.",
  number: "Por favor, escribe un número entero válido.",
  digits: "Por favor, escribe sólo dígitos.",
  creditcard: "Por favor, escribe un número de tarjeta válido.",
  equalTo: "Por favor, escribe el mismo valor de nuevo.",
  accept: "Por favor, escribe un valor con una extensión aceptada.",
  maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
  minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
  rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
  range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
  max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
  min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
});

/***/ }),

/***/ "./scss/estilos.scss":
/*!***************************!*\
  !*** ./scss/estilos.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./js/app_dev.js ./scss/estilos.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/moisessepulveda/Desktop/DWY/009V/clase2semana1/tecnomarket/js/app_dev.js */"./js/app_dev.js");
module.exports = __webpack_require__(/*! /Users/moisessepulveda/Desktop/DWY/009V/clase2semana1/tecnomarket/scss/estilos.scss */"./scss/estilos.scss");


/***/ })

/******/ });