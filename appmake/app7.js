// 유저 이름 로딩하기 
/* 이제 우리가 할일은 local storege에 유저 정보 유무를 확인 하는 거야.
유저 정보가 없으면 form 보여주고  아니면 정보 가져오면 됨 

localStorage.getItem("username"); 해서 정보가 없으면 null 반환 할것임

*/
const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // 유저네임 반복적으로 사용해서 변수로 만들어줌  

function onLoginSubmit(event){
    event.preventDefault();        
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

} 


function paintGreetings(username){
    greeting.innerText = `Hello ${savedUserName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    // show the form
    // savedUserName 값이 null이라면 form의 hidden class 명을 지워줄거임 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    //show the greetings
    paintGreetings(savedUserName);   // 반복되어서 출력부분을 그냥 함수로 만들어버림 
}

/* 우리가 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오게 될거야 
local storege에 유저 정보가 있으면 거기서 유저정보를 받아서 인자로 넣어줄거야 
만약 없다면 form에 submit을 기다리고 form이 submit되면 우리는 input으로 부터 유저정보를 받고, 
input에서 받은 user를 가진 paintGreeting을 호출 할거야 이렇게 코드를 좀 더 정리해봤고 이게 끝이야 

*/