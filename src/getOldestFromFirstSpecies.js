const data = require('../data/zoo_data');

const { employees, species } = data;
function getOldestFromFirstSpecies(id) {
  const resultado = employees.find((element) => element.id === id);
  const [primeiroAnimalDalista] = resultado.responsibleFor;
  const achaAnimal = species.find((element) => element.id === primeiroAnimalDalista);
  // const [residents] = achaAnimal.residents;
  const AnimalMaisVelho = achaAnimal.residents.reduce((acc, crr) =>
    (acc.age > crr.age ? acc : crr), []);
  return Object.values(AnimalMaisVelho);
}

module.exports = getOldestFromFirstSpecies;
