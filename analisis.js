// Helpers Utils
function isPair(number) {
  return (number % 2 === 0);
}

function calculateMediaArithmetic(list) {
  const sumList = list.reduce(
    function (valorAccumulate = 0, newElement) {
      return valorAccumulate + newElement;
    }
  );

  const averageList = sumList / list.length;
  return averageList;
}

// Calculadora mediana
function medianSalary(list) {
  const half = parseInt(list.length / 2);

  if (isPair(list.length)) {
    const personHalf1 = list[half - 1];
    const personHalf2 = list[half];

    const median = calculateMediaArithmetic([personHalf1, personHalf2]);
    return median
  } else {
    const personHalf = list[half];
    return personHalf;
  }
}

// Mediana General
const salaryVe = venezuela.map(
  function (person) {
    return person.salary;
  }
);

const salaryVeSorted = salaryVe.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB
  }
);

const medianGeneralVe = medianSalary(salaryVeSorted);

// Mediana del top 10%
const spliceStart = (salaryVeSorted.length * 90) / 100;
const spliceCount = salaryVeSorted.length - spliceStart;

const salaryVeTop10 = salaryVeSorted.splice(
  spliceStart,
  spliceCount,
);

const medianTop10Ve = medianSalary(salaryVeTop10);

console.log(
  medianGeneralVe,
  medianTop10Ve,
)