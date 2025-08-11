const esPalindromo = require('../esPalindromo');

test('retorna true para "oso"', () => {
  expect(esPalindromo('oso')).toBe(true);
});

test('retorna true para "Anita lava la tina"', () => {
  expect(esPalindromo('Anita lava la tina')).toBe(true);
});

test('retorna false para "hola"', () => {
  expect(esPalindromo('hola')).toBe(false);
});

test('lanza error si no es una cadena', () => {
  expect(() => esPalindromo(123)).toThrow();
});
