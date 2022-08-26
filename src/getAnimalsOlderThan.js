const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const resultado = species.filter((element) => element.name === animal);
  const [pedrinho] = resultado;
  const { residents } = pedrinho;
  const solucao = residents.every((element) => element.age >= age);
  return solucao;
}
module.exports = getAnimalsOlderThan;
