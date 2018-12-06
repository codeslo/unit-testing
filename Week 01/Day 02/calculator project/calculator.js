// add should return sum of two numbers
function add(num1, num2){
    return num1 + num2;
}
// subtract should return difference of two numbers
function subtract(num1, num2){
    return num1 - num2;
}

// multiply should return product of two numbers
function multiply(num1, num2){
    return num1 * num2;
}

// divide should return quotient of two numbers or error message if either parameter is zero.
function divide(num1, num2){
    if(num1 === 0 || num2 ===0){
        return "Can't divide by zero";
        
    }else{
        return num1 / num2;
    }
}