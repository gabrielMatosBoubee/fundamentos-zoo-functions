const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const dias = Object.keys(hours);

const diaSemana = (dia) => {
  const resposta = {};
  resposta[dia] = {
    officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: species.filter((element) => element.availability.find((element1) =>
      element1 === dia)).map((nome) => nome.name),
  };
  return resposta;
};

const diaMonday = () => {
  const resposta = {};
  dias.forEach((dayWeek) => {
    if (dayWeek === 'Monday') {
      resposta[dayWeek] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return resposta;
};

const AnimaisDias = (test) => {
  const resposta = {};
  dias.forEach((dayWeek) => {
    if (dayWeek === 'Monday') {
      resposta[dayWeek] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      resposta[dayWeek] = {
        officeHour: `Open from ${hours[dayWeek].open}am until ${hours[dayWeek].close}pm`,
        exhibition: species.filter((element) => element.availability.find((element1) =>
          element1 === dayWeek)).map((nome) => nome.name),
      };
    }
  });
  return resposta;
};

function getSchedule(scheduleTarget) {
  const verificaNome = species.some((element) => element.name === scheduleTarget);
  const verificaDia = species.some((element) =>
    element.availability.some((dia) =>
      dia === scheduleTarget));
  if (verificaNome) {
    const teste = species.find((element) => element.name === scheduleTarget);
    return teste.availability;
  }
  if (verificaDia || scheduleTarget === 'Monday') {
    if (scheduleTarget === 'Monday') {
      return diaMonday();
    }
    return diaSemana(scheduleTarget);
  } return AnimaisDias();
}
getSchedule('lions');
module.exports = getSchedule;
// const trybe = {
//   Tuesday: { officeHour: 'Open from 8am until 6pm',
//   exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'] },
//   Wednesday: {},
//   Thursday: 6,
//   Friday: 3,
//   Saturday: 5,
//   Sunday: 3,
//   Monday: 3 };
// const arrayFiltrado = species.filter((element) => element.name === scheduleTarget);
// const resultado = arrayFiltrado.reduce((acc, crr) => crr.availability, {});
// const resultadoManipulado = resultado.filter((element) => element === 'string');
// return {
//   [day]: {
//     officeHour: `Open from ${open}am until ${close}pm`,
//     exhibition: getAnimals(scheduleTarget),
//   },
// };
// const solucao = species.reduce((acc, crr) => {
//   acc[crr.name] = crr.availability;
//   return acc;
// }, {});
// const tribo = Object.entries(hours);
// // return {
// //   [tribo]: {
// //     officeHour: `Open from ${hours.open} am until ${hours.close}pm`,
// //     exhibition: 'test',
// //   },
// // };
// return solucao;
