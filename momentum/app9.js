/*

html의 요소들을 가져오는 모든 방법 

const title = document.getElementById("something");
title.innerText = "got you";


Uncaught TypeError: Cannot set properties of null (setting 'innerText')
    at app9.js:2

    이런 오류가 난다면 아무것도 없는 (null) 의 inner Text 접근하려고 하는 것임 
    그이유는 document.getElementById("something"); 썸띵이라는 id 가 없기때문임 
    hello 라는 클래스 만 있기 때문임 

    index.html에 이렇게 있다고 했을때 
    <h1 class="hello">grab me!</h1>
    <h1 class="hello">grab me!</h1>
    <h1 class="hello">grab me!</h1>
    <h1 class="hello">grab me!</h1>
    <h1 class="hello">grab me!</h1>

            
*/

const hellos = document.getElementsByClassName("hello");
console.log(hellos); 

/*

HTMLCollection(5) [h1.hello, h1.hello, h1.hello, h1.hello, h1.hello]
0: h1.hello
1: h1.hello
2: h1.hello
3: h1.hello
4: h1.hello
length: 5

콘솔창에 이렇게 나옴 즉 배열이니 이걸로 뭔가를 가져올수 있음 

이것또한 html의 요소를 가져올수 있는 방법중 하나임 
가끔은 만은 element를 한번에 가지고 와야하는 경우가 있는데 
getElementsByClassName() 를 사용하면됨 
*/

const title = document.getElementsByTagName("h1");
console.log(title)

/*
const title = document.getElementsByTagName("h1"); 이렇게 해도 콘솔에
console.log(title)

HTMLCollection [h1]

이렇게 나옴 이것도 우리가 원하는게 아님 
title. 으로 뭔가를 할수가 없음 객체가 아니고 array기 때문임 

+ Tag 는 div, button 같은 태그들을 말함


내기준에서 element 가져오는 멋진 방법은 
querySelector와 quetySelectorAll이야 

querySelector 는 요소를 Css 방식으로 검색할 수 있어 
무슨말이냐면 hello란 클래스 내부에 있는 h1을 가지고 올수 있다는걸 
말해 
*/

const title2  = document.querySelector(".hello h1"); //(".hello h1") hello 라는 클래스를 찾고 그안에 h1태그를 가져와 달라는 것

console.log(title2);  // <h1>grab me!</h1> 잘가져옴 

/*
getElementsByClassName("hello"); 이때는 hello만 씀 
자바스크립트가 우리가 클래스 네임을 넘겨준다는 것을 알기때문이야 

하지만 querySelector에는 hello 가 calss name이라는 것과 그강ㄴ의
h1을 명시해줘야함 

querySelector는 단하나의 element를 return해줘 


<div class="hello">
         <h1>grab me! 1</h1>
        </div>
        <div class="hello">
         <h1>grab me! 2</h1>
        </div>
       <div class="hello">
        <h1>grab me! 3</h1>
        </div>

        이렇게 hello 클레스 안에 h1이 많을 수도 있어 근데
        리턴하는 것은 첫번째 것만 가져옴 물론 여기서는 같은 클레스가 3개지만 
        그래도 첫번째 것만 가져옴 


3개를 모두 가져오고 싶으면 const title3  = document.querySelectorAll(".hello h1");
querySelectorAll 쓰면됨 

*/
const title3  = document.querySelectorAll(".hello h1");

console.log(title3);//NodeList(3) [h1, h1, h1] 이렇게 배열형태로 줌 

/*
 querySelector("#hello") 이렇게 id값도 줄수 있음 

 document.getElementById("hello"); 이거랑 같은 역할을 하지만 

  querySelector는 id 하위의 form 가져온다던지 ex ("#hello form")
  할수있지만 getElementById는 못함 
 */


  title2.innerText = "hello"


  // index.html 코드 저장
  /*

  <html>
    <head>
            <meta charset="UTF-8">
            <title>momentum</title>
            <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="hello">
         <h1>grab me! 1</h1>
        </div>
        <div class="hello">
         <h1>grab me! 2</h1>
        </div>
       <div class="hello">
        <h1>grab me! 3</h1>
        </div>

            <script src="app9.js"></script>

            
    </body>
</html>

*/