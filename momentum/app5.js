/*
const calculator = {
    add : function (a,b) {
        console.log(a + b);
        alert(a+b);
    },

    mie : function (a,b) {
        console.log(a - b);
        alert(a-b);
    },

    mul : function (a,b) {
        console.log(a * b);
        alert(a*b);
    },

    div: function (a,b) {
        console.log(a / b);
        alert(a/b);
    },

};

calculator.add(2,2);
calculator.mie(2,2);
calculator.mul(2,2);
calculator.div(4,2);
*/

const calculator = {

    add : function (a,b) {
        return(a+b);
        console.log("리턴 함수다음 작동안함");
    },

    mie : function (a,b) {
        return(a-b);
    },

    mul : function (a,b) {
        return(a*b);
    },

    div: function (a,b) {
        return(a/b);
    },

    test : function (a,b) {
        console.log(a+b);
    },

};

const plusResult = calculator.add(1,2);
const mieResult = calculator.mie(plusResult,2);
const mulResult = calculator.mul(mieResult,2);
const divResult = calculator.div(mulResult,2);

console.log(calculator.test(1,1));