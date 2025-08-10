const esEntero = require('../EsEntero');

test('esEntero debe retornar true para un entero', () => {
    expect(esEntero(5)).toBe(true);
});

test('esEntero debe retornar false para un número decimal', () => {
    expect(esEntero(5.5)).toBe(false);
});