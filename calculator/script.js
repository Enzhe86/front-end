const show = function(value) {
  document.getElementById('display').value += value;
}

const clearScr = function() {
  document.getElementById('display').value = '';
}

const calculate = function() {
  let displayValue = document.getElementById('display').value;
  let result = Function(`"use strict"; return (${displayValue})`)();
  document.getElementById('display').value = result;
}
