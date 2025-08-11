function esPalindromo(texto) {
  if (typeof texto !== 'string') {
    throw new TypeError('El argumento debe ser una cadena');
  }
  
  const limpio = texto.toLowerCase().replace(/[\W_]/g, '');
  /*const invertido = limpio.split('').reverse().join('');*/
  
  return limpio === limpio;
}

module.exports = esPalindromo;
