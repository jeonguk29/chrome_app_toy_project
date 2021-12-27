/*
콘솔 창에서 document.title 해보면 html을 읽어 오는 것을 확인할수 있음
(html 안에 title 태그를 읽어옴 )  자바스크립트는 html을 읽어올수 있음 

브라우저가 html정보가 아주많이 들어있는 document라는 객체를 
전달해주는 것임 

우리는 HTML코드를 자바스크립트 관점에서 보고 있는 것임 
정말 멋진것임 html 에 있는 title을 자바스크립트로 가져다 쓸수 있는 거니까

생각해보면 객체에서 properties 속성을 가지고 올수 있었고 
변경도 가능했음 

document.title = "HI" 라고 하면 title 변경됨 

자바스크립트에서 HTML을 읽어올뿐만 아니라 HTML을 변경할수도 있음

우리는 자바스크립트가 HTML에 이미 연결되어 있으니 둘을 연결하려고
노력하지 않아도됨 브라우저가 document 객체를 주니까 

다시 정리 
Javascript는 HTML에 이미 연결되어 있음
Javascript는 우리의 HTML에 접근하고 읽을 수 있어 
그리고 모든 것들은 document로 부터 시작함 
document가 모든것들의 시작점임 document는 우리의
web site를 의미하거든 
콘솔창에 document 만 처봐도 우리가 작성한 HTMl정보가 다나옴

document.body 하면 body항목만 가지고 올수있음 



-----------------------------------

우리가 자바스크립트로 정보를 가지고 올 수 있는 방법은
documenet 객체와 element를 가져오는 수많은 함수들을 이용하는 것임


console에서

document.getElementById("title");
<h1 id=​"title">​Grab me!​</h1>​ 

이렇게 하면 html에 id 값이 title인것을 가져올수 있음



*/


const title = document.getElementById("title");

console.dir(title); // console.log 대신 dir을 사용하면 H1에 element요소들을 더 자세하게 볼수 있음 
// id가 title인 <h1> 태그 하나에서 가져올수 있는 많은덧들을 볼수 있음 


/*
우리가 여기서 하고 있는것은 HTML을 가져오는 거지만 그걸 js에서 하는 것임 
그리고 js는 이 HTML element를 가지고 오지만 HTML자체를 보여주지는 않아 
js는 이 object를 보여주지 

index.html h1 태그에 className을 주면 콘솔창애서 확인해보면명령 : document.getElementById("title"); className: "hello" 되어있는것을 볼수있음 
하지만 우리가 콘솔창에서 js 명령어로 이것을 바꿀수도 있음 
*/


title.innerText = "got you"; // 이렇게 하고 index.html에 h1태그에 아무 것도 입력하지 않아도
// 브라우저에 got you 라고 출력됨 자바스크립트에 의해 변경된것

console.log(title.id);
console.log(title.className); 