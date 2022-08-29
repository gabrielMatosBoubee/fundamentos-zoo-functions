const data = require('../data/zoo_data');

const { employees, species } = data;
const achaPessoa = () => {
  const resultado = [];
  employees.forEach((element, index) => {
    const speciesId = species.filter((element1) =>
      element.responsibleFor.some((element2) => element1.id === element2));
    // const [det, det2, det3, det4] = speciesId;
    resultado[index] = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: speciesId.map((animal) => animal.name),
      locations: speciesId.map((local) => local.location),
    };
  });
  return resultado;
};

const achaNomeOuId = (test) => {
  const variavelDeComparacao = achaPessoa();
  const resultado = variavelDeComparacao.filter((element) =>
    element.fullName.includes(test.name) || element.id.includes(test.id));
  const [primeiro] = resultado;
  if (primeiro === undefined) {
    throw new Error('Informações inválidas');
  }
  return primeiro;
};

function getEmployeesCoverage(test) {
  if (test === undefined) {
    return achaPessoa();
  } if (test.name || test.id) {
    return achaNomeOuId(test);
  }
}

module.exports = getEmployeesCoverage;
