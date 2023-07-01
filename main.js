// somaArray.js
function somaArray(array) {
    return array.reduce((acc, num) => acc + num, 0);
  }
  
  module.exports = somaArray;

// multiplicaArray.js
function multiplicaArray(array) {
    return array.reduce((acc, num) => acc * num, 1);
  }
  
  module.exports = multiplicaArray;

  // main.js
const readline = require('readline');
const somaArray = require('./somaArray');
const multiplicaArray = require('./multiplicaArray');
const calculaMedia = require('./calculaMedia');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um array de números separados por espaço: ', (input) => {
  const array = input.split(' ').map(Number);

  const soma = somaArray(array);
  const multiplicacao = multiplicaArray(array);
  const media = calculaMedia(array);

  console.log(`Soma: ${soma}`);
  console.log(`Multiplicação: ${multiplicacao}`);
  console.log(`Média: ${media}`);

  rl.close();
});

  
  
