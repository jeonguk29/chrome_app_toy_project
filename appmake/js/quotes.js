const qutoes = [
 {
    qutoe :  "조금도 위험을 감수하지 않는 것이 인생에서 가장 위험한 일일 것이라 믿는다.",
    author : "오프라 윈프리",
 },

{
qutoe :  "나는 삶에서 언제나 치열함을 추구하라고, 삶을 만끽하라고 배웠다.",
author : "니나 베르베로바",
},

{
qutoe :  "탁월하다는 것은 아는 것만으로는 충분치 않으며, 탁월해지기 위해, 이를 발휘하기 위해 노력해야 한다.",
author : "아리스토텔레스",
},

{
qutoe :  "만족은 결과가 아니라 과정에서 온다.",
author : "제임스 딘",
},

{
qutoe :  "새로운 것을 창조해내는 사람들은 드믈고, 그렇게 하지 못하는 사람들은 수없이 많다. 그러므로 후자가 더 강한 것이다.",
author : "가브리엘(코코)샤넬",
},


{
qutoe :  "만족은 결과가 아니라 과정에서 온다.",
author : "프리츠 쿤켈",
},
    
    

{
qutoe :  "행동만이 삶에 힘을 주고, 절제만이 삶에 매력을 준다.",
author : "장 폴 리히터",
},
            

{
qutoe :  "기운과 끈기는 모든 것을 이겨낸다.",
author : "벤자민 프랭클린",
},
        

{
qutoe :  "언제나 현재에 집중할 수 있다면 행복할 것이다.",
author : "파울로 코엘료",
},

{
qutoe :  "혁신은 연구개발 자금을 얼마나 갖고 있냐와 상관없습니다. 애플이 매킨토시를 출시했을 때 IBM은 연구개발에 최소 100배 이상의 비용을 쏟고 있었습니다. 돈이 문제가 아닙니다. 어떤 인력을 갖고 있느냐, 어떤 방향으로 가느냐, 결과가 얼마나 나오느냐에 관한 문제입니다.",
author : "스티브 잡스",
},


    
];

// 이 각 오브젝트 들은 string으로 된 명언을 가지고 있어 그걸 배열로 묶어준거고 

const qutoe = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = qutoes[Math.floor(Math.random() * qutoes.length)]; 

//  todaysQuote 현재 이안에는 qutoe, author있음 
qutoe.innerText =  todaysQuote.qutoe;
author.innerText = todaysQuote.author;

 



// 0부터 9까지 숫자를 주는 함수가 필요함 Math module을 사용할 것임 
/* 여러가지 지원하는데 
Math.random()
0.8157558805143315      
렌덤 함수는 0부터 1사이의 랜덤한 숫자 제공함 

Math.random() * 10  : 하지만 이렇게 10을 곱하면 0에서 10사이의 숫자들을 얻을수 있음 


Math.random() * 10
3.286917434841381   
하지만 이 소숫점은 불필요함 이럴때 사용할수 있는게 있음

Math.round() ; 이함수는 소수점 반올림 해줌  

Math.round(1.8); 
2

Math.ceil(1.1);  숫자를 천장까지 높여줌  1.0 만이 1이됨  1.01 또한 2를 반환함   
2

math.floor(1.9) 숫자를 바닥까지 낮춰줌 1.9 는 1이됨 


Math.floor(Math.random() * 10)
우린 이렇게 사용할거임 

console.log(qutoes[Math.floor(Math.random() * 10)]); 
확인해보면 잘 나옴 

문제는 근데 핸드 코딩임 숫자 10을 직접 세서 적어줌 명언 하나 추가하면 11로 바꿔야함 귀찮음 
그냥 배열의 길이를 알아내자  length이용하자  

[1,2,3,4,5].length   : 5출력됨  


console.log(qutoes[Math.floor(Math.random() * qutoes.length)]); 

 
*/