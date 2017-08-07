class Calculator {
    constructor(){


    }

    add(num1, num2){
        return num1 + num2;
    }

    sub(num1, num2){
        return num1 - num2;
    }

    multiply(num1, num2){
        return num1 * num2;
    }

    divide(num1, num2){
        return num1 / num2;
    }

    addAsync(num1, num2, callback) {
        callback(num1 + num2)
    }
}

module.exports = Calculator