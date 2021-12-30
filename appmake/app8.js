// 
/*
전체복습 후 코드 정리
https://nomadcoders.co/javascript-for-beginners/lectures/2906  
전체 복습강의

*/
const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 

function onLoginSubmit(event){
    event.preventDefault();        
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    // const username = loginInput.value;   3. 그럼 여기 이 변수를 만들 필요도 없음   localStorage.setItem(USERNAME_KEY, username); 이것
    localStorage.setItem(USERNAME_KEY, loginInput.value); // 4. 이렇게 수정하면됨 
    paintGreetings();   //1.  paintGreetings 함수 따로 인자 받을필요 없음 왜냐면 local storage에 유저정보가 존재하는걸 알고 있기 때문임 

} 


function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY); // 2. 그래서 여기 이코드를 추가해줌 localStorage에 뭔가를 저장하면 
    greeting.innerText = `Hello ${savedUserName}`;  // paintGreetings를 호출하는 순간에 그 유저정보는 이미localStorage에 저장 되어 있을것임 
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
   
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    
    paintGreetings();   
}

// 5. 이렇게 해도 똑같이 작동하지만  localStorage를 두번 열어본다는게 차이임 
// 하지만 는 이번 방법을 사용할거야 app7코드 말이야 