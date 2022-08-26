const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const bichos = species.filter(element => {
    return ids.some(e => {
      return element.id === e
    })
    })
  return bichos
}
console.log(getSpeciesByIds(data))
module.exports = getSpeciesByIds;
