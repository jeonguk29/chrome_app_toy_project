const title = document.querySelector("div.hello:first-child h1");
// 이렇게 hello 클레스를 가진 div 내부에 첫번째 자식 h1 찾아오게 가능함 
console.log(title);


// element의 내부를 보고 싶다면 
console.dir(title);  // object로 표시한 element를 보여줄것임 

/*
보면 on으로 시작하는 것들이 엄청 많은데 이것들은 event임 
객체안 에 요소들을 바꿀수 있다고 함 아래처럼 h1의 스타일을
자바스크립트에서 바꿀수도 있음 

title.style.color = "blue"; 
*/



/*
하지만 우리가 자바스크립트에서 대부분 작업할 일은 event를 listen 하는 것임
이벤트는 내가 클릭을 하면 그게 이벤트임 
또한 내가 입력을 끝내거나 내이름을 적거나 엔터를 누르는 것 다 이벤트임 
하물며 wifi에서 접속 해제되경우 다 이벤트임 
*/

function handleTitleClick(){
    console.log("title was clicked!");
    title.style.color = "blue"; 
}

 title.addEventListener("click", handleTitleClick);
 /*
  타이틀에 EventListener 추가 EventListener는 말그대로 이벤트를 listen 하는것 
  하지만 자바스크립트에 무슨 이벤트를 listen하고 싶은지 알려줘야함 
 title.addEventListener("click") 이렇게하면 나는 click 이벤트에 알아보고 싶은것

그럼 자바스크립트에서는 title을 지켜보다가 말그대로 누군가가 title을 click 하는 것을 listen 할것임 
하지만 누군가가 클릭했을때 무언가를 해줘야 겠지 그래서 우리는 함수를 정의해줄거야 
function handleTitleClick(){
    console.log("title was clicked!");
}
 이렇게 

 그리고 handleTitleClick을 addEventListener의 두번째 인수로 줄거야 
 그럼 자바스크립트가 클릭이 들어오면 나대신 이 함수를 실행시켜줌
 절대 저기 인자로 handleTitleClick()이렇게 함수 실행 하는 ()까지 주지마
 
*/ 
