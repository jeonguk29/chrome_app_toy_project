/*
여러분이 listen 하고싶은 event를 찾는 가장 좋은 방법은 구글에 찾고싶은 element의 이름 예를들어 h1 element을 
mozilla developer Network인 MDN에 검색 해보는거야 그럼 html 설명말고 우리가 원하는건 자바스크립트 설명이니까
https://developer.mozilla.org/ko/docs/Web/API/HTMLElement 이처럼
WebAPI를 검색해서 봐 이건 자바스크립트 관점에서 HTML Heading Element란 의미이기 때문이야 


https://developer.mozilla.org/ko/docs/Web/API/Element 여기 들어가서 보면 다양한 이벤트들이 엄청 많음 

또는 console.dir을 통해서 element를 콘솔에 출력해보면 on들어간게 다 이벤트임 

onmouseenter 찾았으면 on 뺴고 title.addEventListener("mouseenter", handleMouseEnter); 이런식으로 해줘 
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




title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

