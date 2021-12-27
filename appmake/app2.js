const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const username = loginInput.value   
    console.log(username);  
    /*
    if(username === ""){
        alert("이름을 입력해주세요");
    }else if(username.length > 15){
        alert("이름이 너무 길어요!");

    }   이렇게 할수도 있지만 선호하는 방법이 아님 브라우저 자체의 기능을 사용할수 있음 즉 JavaScript에서 구현하는 대신 할 수 있다면 
        HTML의 기본 속성을 최대한 이용하기 즉 있는게 있다면 이렇게 만들지말고 활용하자는 듯임 
        input maxlength="15"  이렇게 자체적으로 속성을 줄수 있음 html이 이미 우리를 위해 해주고 있음 
        근데 이 인풋이 유효한 값인지 확인하려면 div 태그가 아니라 from 태그 안에 있어야함 

         <div id="login-form"> 가 아닌  <form id="login-form"> 안에 있어야 된다는 뜻 
         div안에 있으면 전송(버튼) 눌러도 작동을 안함  폼 안에서 버튼태그는 전송을 뜻함 


         +
         input안에 있는 button을 누르거나 type이 submit인 input을 클릭하면 내가 작성한 form이 submit 됨 
         이제 더이상 클릭이벤트로 처리할 필요가 없음 
         HTML에서 form안에서 엔터를 누르고 input이 더 존재하지 않는다면 자동으로 submit 된다는 규칙이 있기 때문에 
         이제 우리의 관심사는 form을 submit 하는 것임 

    
    */  
}                    

// loginButton.addEventListener("click", onLoginBtnClick);