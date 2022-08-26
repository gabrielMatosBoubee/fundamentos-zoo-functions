const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // const [teste]  = employees;
  // const {managers} = teste;
  const resultado = employees.some((element) =>
    element.managers.some((element2) =>
      element2 === id));
  return resultado;
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const resultado1 = employees.filter((element) =>
    element.managers.some((element2) =>
      element2 === managerId));
  const solucao = resultado1.map((nome) => `${nome.firstName} ${nome.lastName}`);
  return solucao;
}
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
module.exports = { isManager, getRelatedEmployees };
