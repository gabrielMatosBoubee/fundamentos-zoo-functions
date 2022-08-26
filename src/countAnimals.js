const data = require('../data/zoo_data');

const { species } = data;

const vericaResidents = (parametro) => {
  const solucao = species.filter((element) => element.name === parametro.specie);
  const retorno = solucao.map((ele) => ele.residents);
  const [indice0] = retorno;
  return indice0;
};
function countAnimals(animal) {
  if (animal === undefined) {
    const resultado = species.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length;
      return acc;
    }, {});
    return resultado;
  }
  if (!animal.sex) {
    return vericaResidents(animal).length;
  } const resident = vericaResidents(animal);
  const test = resident.filter((element) => element.sex === animal.sex);
  return test.length;
}

module.exports = countAnimals;
