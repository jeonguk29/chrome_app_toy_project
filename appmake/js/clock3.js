const clock = document.querySelector("h2#clock");



function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // 참고로 date.getHours()엔 padStart()를 쓸수 없음 왜냐면 getHours()은 number라서 string으로 감쌓아주자 
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`); 
  
}

getClock(); // 바로 시간 보여주려고 한번 불러옴 
setInterval(getClock, 1000);

//   https://nomadcoders.co/javascript-for-beginners/lectures/2910  : clock.js 전체복습 















/* padStart 함수는 문자열 padding을 추가해달라고 하는 것임 즉 2면 '1' 라는 문자앞에 '01' 이런식으로 
즉 스타트 부분의 패딩을 늘리는것 그럼 "12"가 들어오면 아무 일도 일어나지 않음 

padStart(2,"0");

padEnd라는 함수도 있음 padEnd(2,"0"); 이렇게 해주면 
"1" 입력시  "10" 이렇게 나옴


"hello".padStart(20, "x");
'xxxxxxxxxxxxxxxhello'

즉 길이가 20이되어야하는 string이라고 말해주는 것 그렇지 않다면 "x"이문자로 채워서 원하는 길이로 만들어달라는 것 
*/