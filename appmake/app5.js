// 유저 이름 받아오기 
const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을때 사용함 
                                // 그리고 loginForm 이나 input 처럼 중요한 정보를 담으게 아니라서 대문자로 작성함 

function onLoginSubmit(event){
    event.preventDefault();        
    loginForm.classList.add(HIDDEN_CLASSNAME); // 기본동작을 막아주고 hidden이라는 클레스 네임을 줘서 form을 숨기고 
    const username = loginInput.value; // 유저의 이름을 변수로 저장해주고 그 이름은 h1안에 넣어줄거야 
    greeting.innerText = `Hello ${username}`;  // "Hello " + username 대체 방법 둘다 변수를 string 안에서 사용할 수 있게 해줘 
    // 이방법은 두가지 규칙이 있음 ${변수명} Hello ${username} 님 방가워요   이렇게 뒤에 뭘 추가해도 상관 없음 `` 단 이걸로 시작하고 끝나야함 '' "" 아님 
    greeting.classList.remove(HIDDEN_CLASSNAME);

} 
 
loginForm.addEventListener("submit", onLoginSubmit); 