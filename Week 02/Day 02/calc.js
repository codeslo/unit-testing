function Calculator() {};

let cp = Calculator.prototype;

cp.add = function (a, b) {
    return a + b;
}

cp.subtract = function (a, b) {
    return a - b;
}

cp.multiply = function (a, b) {
    return a * b;
}

cp.divide = function (a, b) {
    return a / b;
}

cp.calculate = function (a, b, operator) {
    switch (operator) {
        case '+':
            return this.add(a, b)
            break;
        case '-':
            return this.subtract(a, b)
            break;
        case '*':
            return this.multiply(a, b)
            break;
        case '/':
            return this.divide(a, b)
            break;
        default:
            return ('bad operator error');
    }
}