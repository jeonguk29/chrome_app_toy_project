
const loginForm = document.querySelector("#login-form"); 
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();        
    console.log(event);
    console.log(loginInput.value);
} 

function handelLinkClick(event){
    event.preventDefault();  // 이제 a태그즉 링크를 눌러도 이동하지 않음 막고있기 때문임   
    console.log(event);    //우리는 가끔 기본동작 막아야 할때있음 뭐가 클릭 됬는지 어디가 클릭됬는지 등 정보를 알고 싶을때가 있어서
    alert("클릭!");
}

loginForm.addEventListener("submit", onLoginSubmit); 

link.addEventListener("click", handelLinkClick);

// 다시 가시 가장 중요한건 addEventListener안에 함수는 직접 실행 하지 않는다는것 handelLinkClick() 이런식으로 하지마
// 브라우저가 해주는 것임 안에 handelLinkClick(evnet) 이렇게 정보도 담아서