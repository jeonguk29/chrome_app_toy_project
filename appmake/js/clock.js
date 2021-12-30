const clock = document.querySelector("h2#clock");

/*
interval 이란 '매번'일어나야 하는 무언가를 말함 ex 매 2초 라고 하면 이게 인터벌이 되는것 
즉 매 2초마다 무슨일이 일어나게 하고 싶을때 이게 interval 이 되는 것

*/

function sayHello() {
    console.log("hello"); // 매2초마다 이 함수 작동시키고 싶은데 자바스크립트에서 이런 기능을 제공하는 tool이 있음 바로 setInterval()임
}

setInterval(sayHello, 5000);  // 두개의 argument를 받음 첫번째는 실행하고자 하는 함수, 두번째는 호출되는 함수를 몇 ms(milliseconds)로 할지 쓰면됨 
// 5000ms면 5초임 

// setTimeout(sayHello,5000);   Interval이랑 기능 똑같음 