/*
일을 할때 그일에 적합한 도구를 사용하는걸 추천해 스타일에 적합한 도구는 css이기 때문에 
자바스크립트 안에 css 작업을 하는걸 원치 않아 그 대신에 나는 여러분에게 자바스크립트와 HTML, CSS 적절하게 작업을 보여줄거야 

내가 자바스크립트에서 이 h1에 css 파일에 active class 를 전달해줄거임 
*/

const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick() {
    const clickedClass = "active";
    if(h1.className === clickedClass){ // 여기 엑티브 스펠링 css에 적용하고 싶은거랑 똑같이 해줘야함 직접 계속 적는거 보다 
       h1.className = "";               //변수로 생성 하는게 안전함 오류가 날 확률 엄청 줄여줌
    } else {
        h1.className = clickedClass;
    }
}


h1.addEventListener("click", handleTitleClick);

/*
이렇게 하면 자바스크립트가 css에게 직접 대화하지 않게 되었어 
자바스크립트는 HTML을 변경할거고, CSS는 HTML을 바라보고 있지 

하지만 문제점이 있어

1) HTML파일은 CSS문서와 JS문서를 임포트 하고있음.
2) CSS에 .active라는 class를 생성해주고
3) addEventListener로 h1을 클릭하면 handleTitleClick 함수가 작동
4) handleTitleClick 함수는 h1의 class name을 "active" 로 바꿈    기존에 <h1 class="sexy-font"> 이렇게 되있는것도 같이 바뀜
5) .active의 color는 토마토색이기 때문에 토마토 색이 됨

즉 h1에 기존 클레스 이름을 최근걸로 바꿔버리고 기존에 정의되있던 클레스 이름이 날아가니 기능까지 없어짐 





index.html


<html>
    <head>
            <meta charset="UTF-8">
            <title>momentum</title>
            <link rel="stylesheet" href="style2.css">
    </head>
    <body>
        <div class="hello">
         <h1 class="sexy-font">Click me! 1</h1>
        </div>
  
            <script src="app14.js"></script>

            
    </body>
</html>
*/