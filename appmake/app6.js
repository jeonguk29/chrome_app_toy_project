// 유저 이름 저장하기
const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 

function onLoginSubmit(event){
    event.preventDefault();        
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; 
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;   
    greeting.classList.remove(HIDDEN_CLASSNAME);

} 

/*
 
// 브라우저에 공짜로 뭔가를 기억할 수 있게 해주는 기능이 존재해 그 api 이름은 local storage야 
// 브라우저에서 검사 누르고 개발자 도구에서 application 들어가면 local storage 볼수 있음 
// localStorage.setItem("username","nico"); 이렇게 콘솔창에서 한줄 입력하고 도구에서 local storage 보면 들어갈걸 확인 할 수 있음 


localStorage.getItem("username");  이렇게 해주면 값을 불러올수도 있음 
'nico' 

localStorage.removeItem("username");   삭제도 가능 

작은 DB 같은것임 우리는 key와 value만 준비하면 됨 
*/ 

loginForm.addEventListener("submit", onLoginSubmit); 

