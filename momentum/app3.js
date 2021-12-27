
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

const nonsense = [1, 2, "hello", false, null, true, undefined, "jjk"];

console.log(daysOfWeek, nonsense);

// Get item from array
console.log(daysOfWeek[5]);

// add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// 배열의 목적은 하나의 변수 안에 데이터의 리스트를 가지는 것임 


// objects

/*
const playerName = "jjk";
const playerPoints = 1139;
const playerHandsome = false;
const playerFat = "little bit";

현재 name  ..  등등 모두 player 한개의 개체 를 설명하고 있음 
우리가 하려는 것은 데이터를 가능한 최선으로 정리 하는 것임 

배열로 우리가 const player = ["jjk", 1139, false, little bit];
딱히 좋아보이지 않음 배열 값이 무슨 의미인지 안알려주고 있음
그래서 우리는 오브젝트를 사용할것임 */

const player = {
    name : "jjk",
    point : 15,
    fat : true,
};

/* 보다시피 object안에서의 규칙은 밖이랑은 다름 안에서는  = 사용하지 않음 
: 사용 그리고 하나의 속성을 쓰면 , 를 사용   */

console.log(player);
console.log(player.name);
/*자 이말은 즉 console 또한 객체이고 log는 이객체의 속성이라는 것  
리스트는 모든 값이 같은 의미를 가짐 만약 내가 한주의 요일 리스트를 가진다면 
그 리스트에 있는 모든 것이 한주의 요일이라는 것을 알지 
뭔가 더 설명이 필요 없음

하지만 objects에서는 그게 무엇인지 알수없는 property(속성)들도 있음 
그래서 player.name .point .fat 이런식으로 쓰는 것임 
*/

console.log(player["name"]); // 이렇게도 가능 

console.log(player);
player.fat = false; // update
console.log(player);

/* 우리는 constant를 수정 할수 없다고 함 
지금 여기서 하는 것은 object 안의 무언가를 수정하는 것이지 
object는 아직도 동일함 에러는 constant 전체를 하나의 값으로서 업데이트 하려고 할때
발생함 ex player = false; 오류 player.fat = false; 오류 아님 
const 안의 무언가를 업데이트 할때는 아무문제 없음  
*/

player.lastName = "aloe";
console.log(player);
player.point = player.point + 15;
console.log(player);
player.point += 15;
console.log(player);