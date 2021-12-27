const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick() {
    h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleTitleClick);


/*

classList 우리가 class들의 목록으로 작업할수 있게끔 허용해준다.
className은 이전calss를 상관하지않고 모든걸 교체해 버린다.


classList에 contains함수는 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해준다
포함 되어있으면 지우고 없으면 추가 시켜주는 코드가 위에 코드임 이렇게 해주면 
모든 classname 교체할 필요가 없음 
이러한 작업은 개발자들이 정말 많이함 우리도 정말 많이 할것임 이것을 위해 더 편한 함수가 있음 

function handleTitleClick() {
    const clickedClass = "active";
    if(h1.classList.contains(clickedClass)){ 
       h1.classList.remove(clickedClass);               
    } else {
        h1.classList.add(clickedClass);
    }
}


토글은 클레스 이름이 존재하는지 확인 존재하면 클레스 네임 제거 만약 존재하지 않으면 클레스네임 추가  
그러니까 기본적으로 토글은 위에 코드를 구현함  h1.classList.toggle("clicked"); 이한줄이 저 위에 5줄이랑 똑같은 기능을 함 

ex)
toggle은 h1의 classList에 clicked class가 이미있는지 확인하여
만약있다면 toggle 이 clicked를 제거해준다
만약 class name이 존재하지 않는다면 toggle은 classname 추가


toggle은 토큰이 존재하면 토큰제거 
토큰존재 하지않으면 토큰 추가



*/