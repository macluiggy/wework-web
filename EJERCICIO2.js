// Función para calcular el promedio
function promedio(precios) {
  const total = precios.reduce((acc, curr) => acc + curr, 0);
  return total / precios.length;
}

// Función para calcular el valor máximo
function valorMaximo(precios) {
  return Math.max(...precios);
}

// Función para calcular la moda
function moda(precios) {
  const counts = {};
  let maxValue = 0;
  let maxCount = 0;
  for (const precio of precios) {
    if (!counts[precio]) {
      counts[precio] = 1;
    } else {
      counts[precio]++;
    }
    if (counts[precio] > maxCount) {
      maxCount = counts[precio];
      maxValue = precio;
    }
  }
  return maxValue;
}

// Función para calcular la suma total de los precios
function sumaTotal(precios) {
  return precios.reduce((acc, curr) => acc + curr, 0);
}

// Función para calcular la suma de los precios que son menores a 1500 dólares
function sumaMenores1500(precios) {
  return precios
    .filter((precio) => precio < 1500)
    .reduce((acc, curr) => acc + curr, 0);
}
const precios = [1045.0, 234, 456.98, 238.98, 3455, 234, 1045.0, 234];

const promedioPrecios = promedio(precios);
console.log("Promedio de precios:", promedioPrecios);

const valorMaximoPrecio = valorMaximo(precios);
console.log("Valor máximo de precios:", valorMaximoPrecio);

const modaPrecio = moda(precios);
console.log("Moda de precios:", modaPrecio);

const sumaTotalPrecios = sumaTotal(precios);
console.log("Suma total de precios:", sumaTotalPrecios);

const sumaMenores1500Precios = sumaMenores1500(precios);
console.log("Suma de precios menores a 1500:", sumaMenores1500Precios);
