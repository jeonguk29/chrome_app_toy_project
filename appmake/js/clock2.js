const clock = document.querySelector("h2#clock");



function getClock() {
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); 
    /*
    이렇게 해주면 매초마다 우리는 date object를 만들고 있는거임 
    new date object는 현재 날짜, 시간, 분, 초에 대한 정보를 가지고 있고 우린 그런 object를 매 초마다 새로 create 하고 있는것임 
    */
}

getClock(); // 바로 시간 보여주려고 한번 불러옴 
setInterval(getClock, 1000);



















// 우리는 시간을 보여주고 싶음 이번에는 javascript가 가지고 있는 data object라는 멋진 tool을 써볼게 
/*

new Date()  이 코드를 치면 오늘 날짜를 가져옴 
Tue Dec 28 2021 23:53:06 GMT+0900 (한국 표준시) 

const date = new Date();
date.getDate();      // 28일 알려줌
28 

date.getDay();  // 2 오늘 화요일임 
2

date.getHours();    // 시간
23

date.getMinutes();  // 분 
54          

date.getSeconds(); // 초 
19

*/