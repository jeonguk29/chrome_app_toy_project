// 글귀 추출이랑 거의 같음 

const images = ["1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage); 확인 
const bgImage = document.createElement("img");
bgImage.src = `image/${chosenImage}`; 


// console.log(bgImage); // <img scr = "image/1.jpg"/>   이런식으로 html element생성된걸 볼수 있음  index.html에 저걸 적는거랑 똑같음 
// 이제 이 생성한걸 body에 넣어주면됨 아직 document에는 존재하지 않고 js에만 존재하거든 

document.body.appendChild(bgImage);  // appendChild 는 body에 html 추가할거임 





/*
지금까지 우리가 해온건 html에서부터 뭔가를 가져오는 거였음 
자바스크립트를 이용해서 뭔가를 가져왓음 

아직 자바스크립트에서 뭔가를 만들어서 그걸 html에 추가하는건 해본적 없음 
다시말해 우린 항상 html을 먼저 작성하고 js를 사용해 작성한 html을 다뤘음 ex 쿼리셀렉터 이용한다던지 

하지만 간단함 createElement() 이용하면됨 

*/

