const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const crianca = entrants.filter((element) => element.age < 18);
  const adulto = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  const resultado = { adult: adulto.length, child: crianca.length, senior: senior.length };
  return resultado;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  } if (Object.keys(entrants).length === 0) {
    return 0;
  }
  return countEntrants(entrants).adult * prices.adult
   + countEntrants(entrants).child * prices.child
    + countEntrants(entrants).senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
