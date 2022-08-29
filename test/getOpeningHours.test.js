const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testar se ao receber um parametro vazio retorna um objeto com todos os dias e horarios', () => {
    expect(getOpeningHours()).toEqual({
      Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 } });
  });
  const zoologicoFechado = 'The zoo is closed';
  test('testar se ao receber "Monday" como parametro retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(zoologicoFechado);
  });
  test('testar se ao receber "Tuesday" e "09:00-AM" como parametro retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('testar se ao receber "Wednesday" e "09:00-AM" como parametro retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(zoologicoFechado);
  });
  test('testar se ao receber um dia diferente como paramentro da erro', () => {
    expect(() => getOpeningHours('Tuday', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  test('testar se ao receber um formato de hora maior que 12 como paramentro da erro', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });
  test('testar se ao receber um formato de minutos maior que 59 como paramentro da erro', () => {
    expect(() => getOpeningHours('Tuesday', '00:60-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
  test('testar se ao receber um formato hora escrito como string como paramentro da erro', () => {
    expect(() => getOpeningHours('Tuesday', '0N:00-AM')).toThrow(/^The hour should represent a number$/);
  });
  test('testar se ao receber um formato de horario diferente de AM ou PM como paramentro da erro', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-Al')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  // test('testar se ao receber "Friday" e "09:00-AM" como parametro retorna "The zoo is closed"', () => {
  //   expect(getOpeningHours('Friday', '12:00-PM')).toBe(zoologicoFechado);
  // });
  // test('testar se ao receber "Friday" e "09:00-AM" como parametro retorna "The zoo is closed"', () => {
  //   expect(getOpeningHours('Friday', '12:00-PM')).toBe(zoologicoFechado);
  // });
  // test('testar se ao receber "" e "09:00-AM" como parametro retorna "The zoo is closed"', () => {
  //   expect(getOpeningHours('Friday', '00:00-AM')).toBe('The zoo is open');
  // });
});
