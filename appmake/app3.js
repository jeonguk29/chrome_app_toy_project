
const loginForm = document.querySelector("#login-form"); // 우리가 지금 필요한건 로그인폼 그자체임 
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault();    // 여기 event는 선택사항이 이렇게 변수로 만들어주면 js에서 event 정보로 체워줄거임           
    console.log(event);
    console.log(loginInput.value);
} 


// 이제는 서브밋을 감지해야함 다행이 서브밋 이벤트가 있음   (서브밋은 엔터 or 버튼 클릭할때 발생함 )
loginForm.addEventListener("submit", onLoginSubmit); // 이벤트는 서브밋 감지함 근데 여전히 새로고침 되는건 그대로임 




/*

unction onLoginSubmit(event){
event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하게 막기 
                        // event object는 preventDefault함수를 기본적으로 갖고 있음
console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트가 발생한다면, onLoginSubmit함수를 실행시킨다는 의미 
// JS는 onLoginSubmit함수 호출시 인자를 담아서 호출함. 해당 인자는 event object를 담은 정보들

★ 중요 ★
form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!

이 preventDefault 함수는 EventListener 함수의 '첫 번째 argument' 안에 있는 함수이다. 첫 argument는 지금 막 벌어진 
event들에 대한 정보를 갖고 있다.
JS는(기본적으로)argument를 담아서 함수를 호출하는데, 이 argument가 기본 정보들을 제공하고 있다. 
ex) 누가 submit주체인지, 몇 시에 submit을 했는지 등등 콘솔에 출력해보면 알 수 있음


SubmitEvent {isTrusted: true, submitter: input, type: 'submit', target: form#login-form, currentTarget: form#login-form, …}
이 정보가 방금 실행된 event 라는 것 






index.html



<html>
<head>
    <meta charset="UTF-8">
    <title>momentum APP</title>
</head>
<body>
    
    <form id="login-form">
    <input required maxlength="15" type="text" placeholder="what is your name?"/>
    
    <input type="submit" value="Log in"/>
    <!-- <button>Log in </button> --> 
    </form>
    <script src="app3.js"></script>
        
</body>
</html> 

*/