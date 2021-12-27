
/*
if(condition){
    //conditon === ture
    // condition 컨디션은 boolean 이여야함 boolean 판독이 되야함 
    // 참 거짓 두가지 뿐   
} else{
    // condition === false

}



const age = parseInt(prompt("몇살이에요?"));
// console.log(isNaN(age));  isNaN숫자면 false 숫자가 아니면 true를 반환 

if(isNaN(age)) {
    console.log("숫자를 적어주세요");
} else {
    console.log("감사합니다");
}

*/

const age = parseInt(prompt("몇살이에요?"));

if (isNaN(age) || age < 0){ // 숫자가 아니거나 양의 정수일때를 방지함 
    console.log("양의 정수를 적어주세요");
} else if (age < 18){
    console.log("당신은 너무 어려요.");
} else if (age >= 18 && age <= 50){                  // && 양쪽이 모두 참이여야 ture를 반환 and 연산자 
                                                     // || 양쪽중 한쪽만 ture면 ture를 반환 or 연산자
    console.log("좋아 술을 먹을수 있습니다");
} else if (age > 50 && age <= 80) {
    console.log("you should exercise");
} else if (age === 100){
    console.log("굉장하시네요");
} else if (age > 80){
    console.log("하고싶은거 다해")
}

/*
 else if (age > 80){
    console.log("하고싶은거 다해")
} else if (age === 100){
    console.log("굉장하시네요");
}
이렇게 하면 굉장하시네요는 출력이 계속 안될것임 위에서부터
순서대로 실행되는데 조건이 중첩되서 아래가 묻혀버림 

a === b a와 b가 같다면
a !==b a와 b가 다르다면 

(a > 50 || b > 50 || c > 50  && d > 50) 이런식으로 복잡하게 조건을 추가할수도 있다는거 알고있자 

*/