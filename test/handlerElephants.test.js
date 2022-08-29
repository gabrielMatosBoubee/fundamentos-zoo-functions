const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testar se não recebe parametro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Testar se ao receber count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Testar se ao receber names retorna um array com o nome de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Testar se ao receber averageAge retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  test('Testar se ao receber location retorna a localização dos elefantes', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  test('Testar se ao receber popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  test('Testar se ao receber availability retorna a relação dos dias que é possivel visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
