/* 이벤트는 그저 클릭이나 마우스가 엔터 enter, leave 하는 정도만 처리 하는게 아님 
더 많은 것을 할 수 있음 내가 여기서 보여주고 싶은 건 window의 인터페이스, object야 

이벤트를 사용하는데 두가지 방법이 있음 
첫번째 title.addEventListener("click", handleTitleClick); 

두번째 
title.onclick = handleTitleClick;


addEventListener를 더 선호하는 이유는  나중에 removeEventListenr를 통해 이벤트 event listenr를 제거 할수 있기 때문이야 
그리고 리게더 보기 좋음 

다시 윈도우로 돌아 가보자 
지금 title 이것은 html element 이고 
*/

const title = document.querySelector("div.hello:first-child h1");
console.dir(title);

function handleTitleClick(){
    title.style.color = "blue"; 
}

function handleMouseEnter(){
    title.innerHTML = "mouse is here!";
}

function handleMouseLeave(){
    title.innerHTML = "mouse is gone!";
}


function handleWindowResize(){
    // 이제 우리의 window가 resize(화면크기가 바뀜)될 경우에 
    document.body.style.backgroundColor = "tomato";
   /* 여기서 이 body가 중요함 
    document의 body,head,title 이런것들은 중요하기 때문에
    document.body.style~의 명령이 허용되지만, div같은것들은 호출이 안됨
    나머지 element들은 querySelector나 getElementById로 불러와야됨!
   */
 }

function handleWindowCopy(){
    alert("copier");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL Good");
}

 title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);  // 사용자가 카피하면 알려줌 브라우저에서 ctrl + c 눌러봐 

// 와이파이 꺼지거나 켜지면 작동함 
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
















/*

title.onclick = handleMouseEnter;
title.addEventListener(“mouseenter” , handleMouseEnter);

위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

document에서 body,head,title 은 중요해서 언제든
ex) document.body 로 가져올수있지만
div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
ex) document.querySelector(“h1”);

window는 기본제공
function handleWindowResize(){
document.body.style.backgroundColor = “tomato”;
}
function handleWindowCopy(){
alert(“copier”);
}

window.addEventListener(“resize”, handleWindowResize);
window.addEventListener(“copy”, handleWindowCopy);


*/

