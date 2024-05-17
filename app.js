function appendToDisplay(value) {
    var display = document.getElementById('display');

    if (display.value === "0") {
        display.value = value;
    } else {
        var lastChar = display.value.slice(-1);
        if ((['+', '-', '*', '/'].indexOf(lastChar) !== -1) && (['+', '-', '*', '/'].indexOf(value) !== -1)) {
            return;
        }
        display.value += value;
    }
}

function calculate() {
    var display = document.getElementById('display');
    var recentResult = document.getElementById('recent-result');
    var expression = display.value;

    var result = eval(expression);

    recentResult.textContent = expression + ' = ' + result;

    display.value = '0';

    var historyList = document.getElementById('historyList');
    var div = document.createElement('div');
    div.textContent = expression + ' = ' + result;
    historyList.prepend(div);

    var historyAnimation = document.getElementById('historyAnimation');
    var li = document.createElement('li');
    li.textContent = expression + ' = ' + result;
    historyAnimation.prepend(li);
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}