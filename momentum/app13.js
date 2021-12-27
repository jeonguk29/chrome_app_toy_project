const h1 = document.querySelector("div.hello:first-child h1");

/*
function handleTitleClick(){
    console.log(h1.style.color); // h1 컬러 회득
        h1.style.color = "blue";   // 컬러 설정 가능 
    console.log(h1.style.color)
}
*/

/*
function handleTitleClick(){
    if (h1.style.color === "blue"){
         h1.style.color = "tomato";   //  이렇게 해서 컬러를 변경 할수도 있지만 같은 기능이지만 코드를좀더 개선 해보겠음 
    }else {
        h1.style.color = "blue";
    }
}
*/


function handleTitleClick(){
    const currentcolor = h1.style.color;
    let newColor;
    if (currentcolor === "blue"){
        newColor = "tomato";   
    }else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);