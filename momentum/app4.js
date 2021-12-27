// function은 어떤 코드를 캡슐화 해서 실행을 여러번 할수 있게 해줘
function sayHello(){
    console.log("hello!");
}

function sayHello2(nameOfperson, age){
    console.log("hello my name is " + nameOfperson + "and i'm " + age);
}
sayHello();
sayHello2("jjk", 22);


/*
function add(a,b){
    console.log(a,b); // undefined undefined(이것도 데이터타입에 한종류임 자바스크립트에서만)
}

add(); 

 console.log(a+b); 이렇게 하면 NaN 이렇게 나옴 NOT A Number 숫자가 아님 
*/

function add(a,b){
    console.log(a+b); // a,b는 지금 이 함수 안에서만 존재하는것임 밖에서는 못씀
}

add(8,60); 


// 객체 안에서는 함수 만드는 구조가 약간 다름 
const player = {
    name : "jjk",
    seyHello: function(otherPersonName){
        console.log("hello! "+otherPersonName);
    },
};

console.log(player.name);
player.seyHello("jjk");