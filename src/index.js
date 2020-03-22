function eval() {
    // Do not use eval!!!
    return;
}
let item1;
let item2;
let item3;
let item4;
let item5;
const checkMult = (item) =>{
    if (item.indexOf('*')+1) {
        let indexMultiply = expr.indexOf('*');
        let startStr = expr.slice(0, indexMultiply)
        let endStr = expr.slice(indexMultiply+1, expr.length)
         return parseInt(startStr) * parseInt(endStr)
    }
}

function expressionCalculator(expr) {
    expr = expr.split(' ').join('')
    if (expr.includes("/0")) {
        throw Error("TypeError: Division by zero.")
    }
    let lBrackets = 0;
    let rBrackets = 0;

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] == '(') {
            lBrackets++;
        } else if (expr[i] == ')') {
            rBrackets++;
        }
    }
    if (lBrackets != rBrackets) {
        throw Error("ExpressionError: Brackets must be paired")
    }
    
    if (expr.indexOf('*')+1) {
        let indexMultiply = expr.indexOf('*');
        let startStr = expr.slice(0, indexMultiply)
        let endStr = expr.slice(indexMultiply+1, expr.length)
         return parseInt(startStr) * parseInt(endStr)
    }
    if (expr.indexOf('/')+1) {
        let indexMultiply = expr.indexOf('/');
        let startStr = expr.slice(0, indexMultiply)
        let endStr = expr.slice(indexMultiply+1, expr.length)
         return parseInt(startStr) / parseInt(endStr)
    }
    if (expr.indexOf('+')+1) {
        let indexMultiply = expr.indexOf('+');
        let startStr = expr.slice(0, indexMultiply)
        let endStr = expr.slice(indexMultiply+1, expr.length)
         return parseInt(startStr) + parseInt(endStr)
    }
    if (expr.indexOf('-')+1) {
        let indexMultiply = expr.indexOf('-');
        let startStr = expr.slice(0, indexMultiply)
        let endStr = expr.slice(indexMultiply+1, expr.length)
         return parseInt(startStr) - parseInt(endStr)
    }
    return expr
}

module.exports = {
    expressionCalculator
}