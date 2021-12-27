/*
const loginForm = document.getElementById("login-form");
//  document.querySelector("#login-form") 이용할땐 #login-form 여기 이렇게 클레스 인지 id인지 정확하게 입력하기 
// .querySelector로 클레스 네임 테그 네임 다 검색 가능하니까 

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); // document 아닌 loginForm 에서 불러왔으니 여기서 찾을수 있음 
*/

// 이렇게 하면 코드 더 줄어듬 방법은 두가지임 
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.log("hello",loginInput.value);      // 이런식으로 input value 얻을수 있음 
}                    // 하지만 사용자가 현재 이름을 입력하지 않고 버튼을 눌러도 됨 이부분을 if else 활용해서 고칠거임

loginButton.addEventListener("click", onLoginBtnClick);