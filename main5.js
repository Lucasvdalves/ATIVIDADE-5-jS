// main.js
const readline = require('readline');
const filtrarPares = require('./filtrarPares');
const somaImpares = require('./somaImpares');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um array de números (separados por vírgula): ', (input) => {
  const numbers = input.split(',').map(num => parseInt(num.trim()));
  
  const pares = filtrarPares(numbers);
  const soma = somaImpares(numbers);
  
  console.log('Números pares:', pares);
  console.log('Soma dos números ímpares:', soma);

  rl.close();
});







