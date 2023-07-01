// somaImpares.js
function somaImpares(array) {
    return array.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
  }
  
  module.exports = somaImpares;
  