const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const resultado = employees.find((element) =>
    element.firstName === employeeName
  || element.lastName === employeeName);
  return resultado === undefined ? {} : resultado;
}

module.exports = getEmployeeByName;
