/*
//prompt 사용자에게 창을 띄울수 있도록 해줌
// 2개의 매개변수를 받음 처음은 우리가 보여주고 싶은 메세지임 
// 요즘은 사용 안함 css를 적용못시킴 너무 오래된 방법임 요즘은 대부분이 HTMl, CSS로 만든 자신만의 창을 사용함

const age = prompt("몇살이세요?");
console.log(typeof age, parseInt(age)); // typeof age 이렇게 하면 자료형을 알수 있음


parseInt() // string을 숫자로 변경해주는 함수임  '11' => 11
하지만 '정정욱' => NaN을 반환함 

*/

const age = parseInt(prompt("몇살이에요?"));
// 이렇게 하면 숫자가 아닌 다른걸 받았을때 NaN을 출력해서 우리는 알수가 있음 

console.log(age);
