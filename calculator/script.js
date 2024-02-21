function show(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  let displayValue = document.getElementById('display').value;
  if (displayValue.match(/[\+\-\*\/]{2,}/)) {
    alert('The expression is incorrect');
    clearScr();
  } else {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
  }
}

function clearScr() {
  document.getElementById('display').value = '';
}


