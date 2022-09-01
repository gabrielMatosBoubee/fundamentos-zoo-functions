const data = require('../data/zoo_data');

const { species } = data;

const retornaTodosOsAnimais = () => {
  const ne = species.filter((element) => element.location === 'NE');
  const nw = species.filter((element) => element.location === 'NW');
  const se = species.filter((element) => element.location === 'SE');
  const sw = species.filter((element) => element.location === 'SW');
  const resultado = {
    NE: ne.map((element) => element.name),
    NW: nw.map((element) => element.name),
    SE: se.map((element) => element.name),
    SW: sw.map((element) => element.name),
  };
  return resultado;
};

const retornaTodosOsAnimaisComNome = () => {
  const ne = species.filter((element) => element.location === 'NE');
  const nw = species.filter((element) => element.location === 'NW');
  const se = species.filter((element) => element.location === 'SE');
  const sw = species.filter((element) => element.location === 'SW');
  const resultado = {
    NE: ne.map((element) =>
      ({ [element.name]: element.residents.map((residents) => residents.name) })),
    NW: nw.map((element) =>
      ({ [element.name]: element.residents.map((residents) => residents.name) })),
    SE: se.map((element) =>
      ({ [element.name]: element.residents.map((residents) => residents.name) })),
    SW: sw.map((element) =>
      ({ [element.name]: element.residents.map((residents) => residents.name) })),
  };
  return resultado;
};

const retornaTodosOsAnimaisComNomeOrdenados = () => {
  const ne = species.filter((element) => element.location === 'NE');
  const nw = species.filter((element) => element.location === 'NW');
  const se = species.filter((element) => element.location === 'SE');
  const sw = species.filter((element) => element.location === 'SW');
  const resultado = {
    NE: ne.map((element) =>
      ({ [element.name]: element.residents.map((residents) => residents.name).sort() })),
    NW: nw.map((element) =>
      ({ [element.name]: element.residents.map((residents) => residents.name).sort() })),
    SE: se.map((element) =>
      ({ [element.name]: element.residents.map((residents) => residents.name).sort() })),
    SW: sw.map((element) =>
      ({ [element.name]: element.residents.map((residents) => residents.name).sort() })),
  };
  return resultado;
};

const retornaTodosOsAnimaisComNomePeloGenêro = (sex) => {
  const nw = species.filter((element) => element.location === 'NW');
  const se = species.filter((element) => element.location === 'SE');
  const sw = species.filter((element) => element.location === 'SW');
  const resultado = {
    NE: species.filter((element) => element.location === 'NE').map((element) =>
      ({ [element.name]: element.residents.filter((residents) =>
        residents.sex === sex).map((e) => e.name) })),
    NW: nw.map((element) =>
      ({ [element.name]: element.residents.filter((residents) =>
        residents.sex === sex).map((e) => e.name) })),
    SE: se.map((element) =>
      ({ [element.name]: element.residents.filter((residents) =>
        residents.sex === sex).map((e) => e.name) })),
    SW: sw.map((element) =>
      ({ [element.name]: element.residents.filter((residents) =>
        residents.sex === sex).map((e) => e.name) })),
  };
  return resultado;
};

const retornaTodosOsAnimaisComNomePeloGenêroOrdenado = (sex) => {
  const nw = species.filter((element) => element.location === 'NW');
  const se = species.filter((element) => element.location === 'SE');
  const sw = species.filter((element) => element.location === 'SW');
  const resultado = {
    NE: species.filter((element) => element.location === 'NE').map((element) =>
      ({ [element.name]: element.residents.filter((residents) =>
        residents.sex === sex).map((e) => e.name).sort() })),
    NW: nw.map((element) =>
      ({ [element.name]: element.residents.filter((residents) =>
        residents.sex === sex).map((e) => e.name).sort() })),
    SE: se.map((element) =>
      ({ [element.name]: element.residents.filter((residents) =>
        residents.sex === sex).map((e) => e.name).sort() })),
    SW: sw.map((element) =>
      ({ [element.name]: element.residents.filter((residents) =>
        residents.sex === sex).map((e) => e.name).sort() })),
  };
  return resultado;
};

const diminuirComplexidade = (options) => {
  if (!options) return retornaTodosOsAnimais();
  const { includeNames, sorted } = options;
  if (!includeNames) {
    return retornaTodosOsAnimais();
  } if (sorted) {
    return retornaTodosOsAnimaisComNomeOrdenados();
  } return retornaTodosOsAnimaisComNome();
};

const diminuirComplexidadeDeNovo = (options) => {
  const { sex, sorted } = options;
  if (sex && !sorted) {
    return retornaTodosOsAnimaisComNomePeloGenêro(options.sex);
  } return retornaTodosOsAnimaisComNomePeloGenêroOrdenado(options.sex);
};

function getAnimalMap(options) {
  if (!options || !options.sex || !options.includeNames) {
    return diminuirComplexidade(options);
  } return diminuirComplexidadeDeNovo(options);
}
// console.log(getAnimalMap());
module.exports = getAnimalMap;

// const retornaAnimaisForEach = () => {
//   return retornaTodosOsAnimais().NE.forEach((element, ind) => ind);
// };

// const retornaTodosOsAnimaisComSeusNomes = () => {
//   const [lions, giraffes] = species.filter((element) => element.location === 'NE');
//   const [tigers, bears, elephants] = species.filter((element) => element.location === 'NW');
//   const [penguins, otters] = species.filter((element) => element.location === 'SE');
//   const [frogs, snakes] = species.filter((element) => element.location === 'SW');
//   const resultado = {
//     NE: [{ lions: lions.residents.map((element) => element.name) },
//       { giraffes: giraffes.residents.map((element) => element.name) }],
//     NW: [{ tigers: tigers.residents.map((element) => element.name) },
//       { bears: bears.residents.map((element) => element.name) },
//       { elephants: elephants.residents.map((element) => element.name) }],
//     SE: [{ penguins: penguins.residents.map((element) => element.name) },
//       { otters: otters.residents.map((element) => element.name) }],
//     SW: [{ frogs: frogs.residents.map((element) => element.name) },
//       { snakes: snakes.residents.map((element) => element.name) }],
//   };
//   return resultado;
// };

// const retornaTodosOsAnimaisComSeusNomesOrdenados = () => {
//   const [lions, giraffes] = species.filter((element) => element.location === 'NE');
//   const [tigers, bears, elephants] = species.filter((element) => element.location === 'NW');
//   const [penguins, otters] = species.filter((element) => element.location === 'SE');
//   const [frogs, snakes] = species.filter((element) => element.location === 'SW');
//   const resultado = {
//     NE: [{ lions: lions.residents.map((element) => element.name).sort() },
//       { giraffes: giraffes.residents.map((element) => element.name).sort() }],
//     NW: [{ tigers: tigers.residents.map((element) => element.name).sort() },
//       { bears: bears.residents.map((element) => element.name).sort() },
//       { elephants: elephants.residents.map((element) => element.name).sort() }],
//     SE: [{ penguins: penguins.residents.map((element) => element.name).sort() },
//       { otters: otters.residents.map((element) => element.name).sort() }],
//     SW: [{ frogs: frogs.residents.map((element) => element.name).sort() },
//       { snakes: snakes.residents.map((element) => element.name).sort() }],
//   };
//   return resultado;
// };

// const retornaTodosOsAnimaisComSeusNomesMale = (sexo) => {
//   const [lions, giraffes] = species.filter((element) => element.location === 'NE');
//   const [tigers, bears, elephants] = species.filter((element) => element.location === 'NW');
//   const [penguins, otters] = species.filter((element) => element.location === 'SE');
//   const [frogs, snakes] = species.filter((element) => element.location === 'SW');
//   const resultado = {
//     NE: [{ lions: lions.residents.map((element) => element).sort() },
//       { giraffes: giraffes.residents.map((element) => element.name).sort() }],
//     NW: [{ tigers: tigers.residents.map((element) => element.name).sort() },
//       { bears: bears.residents.map((element) => element.name).sort() },
//       { elephants: elephants.residents.map((element) => element.name).sort() }],
//     SE: [{ penguins: penguins.residents.map((element) => element.name).sort() },
//       { otters: otters.residents.map((element) => element.name).sort() }],
//     SW: [{ frogs: frogs.residents.map((element) => element.name).sort() },
//       { snakes: snakes.residents.map((element) => element.name).sort() }],
//   };
//   return resultado;
// };
// const retornaTodosOsAnimaisComSeusNomes = () => {
//   const { ne } = retornaTodosOsAnimais();
//   const [lions, ne1] = retornaTodosOsAnimais().NE;
//   const [nw0, nw1, nw2] = retornaTodosOsAnimais().NW;
//   const [se0, se1] = retornaTodosOsAnimais().SE;
//   const [sw0, sw1] = retornaTodosOsAnimais().SW;
//   const resultado = {
//     NE: { lions: retornaTodosOsAnimais().se.residents.map((element) => element.name), ne1 },
//     NW: { nw0, nw1, nw2 },
//     SE: { se0, se1 },
//     SW: { sw0, sw1 },
//   };
//   return resultado;
// };
