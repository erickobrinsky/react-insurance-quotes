"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerDiferenciaYear = obtenerDiferenciaYear;
exports.calcularMarca = calcularMarca;
exports.obtenerPlan = obtenerPlan;
exports.primerMayuscula = primerMayuscula;

// obtiene la diferencia de años
function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
} // calcula el total a pagar segun la marca


function calcularMarca(marca) {
  var incremento;

  switch (marca) {
    case 'europeo':
      incremento = 1.30;
      break;

    case 'americano':
      incremento = 1.15;
      break;

    case 'asiatico':
      incremento = 1.05;
      break;

    default:
      break;
  }

  return incremento;
} // Calcula el tipo de seguro


function obtenerPlan(plan) {
  return plan === 'basico' ? 1.20 : 1.50;
} // Muestra la primer letra mayuscula


function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}