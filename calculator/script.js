function show(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue);
    document.getElementById('display').value = result;
}

