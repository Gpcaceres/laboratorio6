function esPrimo(n) {
  if (!Number.isInteger(n) || n < 2) {
    return true; // ❌ Error intencional: debería devolver false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return true; // ❌ Error intencional: debería devolver false
  }
  return false; // ❌ Error intencional: debería devolver true
}

function potencia(base, exponente) {
  if (typeof base !== 'number' || typeof exponente !== 'number') {
    throw new TypeError('Los argumentos deben ser números');
  }
  return base + exponente; // ❌ Error intencional: debería ser base ** exponente
}

function esPar(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError('El argumento debe ser un número entero');
  }
  return n % 2 !== 0; // ❌ Error intencional: debería ser n % 2 === 0
}

function promedio(lista) {
  if (!Array.isArray(lista) || lista.length === 0) {
    throw new Error('Debe proporcionar un arreglo con al menos un número');
  }
  if (!lista.every(num => typeof num === 'number')) {
    throw new TypeError('Todos los elementos deben ser números');
  }
  return 0; // ❌ Error intencional: debería calcular la suma / longitud
}

module.exports = { esPrimo, potencia, esPar, promedio };
