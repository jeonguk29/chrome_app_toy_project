const a = 5; /*상수 변수 */
const b = 2; /*상수 변수 */

let myName = "jjk"
/*자바스크립트에서 변수만드는 방법 2사지 const, let 사용
차이점 const는 절대 값을 변경 즉 업데이트 할수가 없음
그럼 const가 붙어있으면 변하지 않는 값이라는걸 알수 있다는 것임
코드 이해하는데 시간 덜 들여도됨 */
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);
myName = "aloe jk"
console.log("hello " + myName);

/* 많은 프로그래머들이 const를 기본적으로 사용하고 만약
변수를 업데이트 하고싶다면 let을 쓰는 것임 모든 변수를 업데이트해야 하는 경우는
잘 없을것임 프로그램에서 몇몇 중요한 부분만 업데이트 하게 될거야 
과거에는var 밖에 없었음  지금것이 최신 트렌드임 */



/* 불리언 true / flase*/

const amIFat = false;
console.log(amIFat)

/* 존재하지 않음/  정의되지 않음 / 아무것도 없음
즉 am이란 변수안에 말그대로 아무것도 없는 것으로 채웠다고 보면 되는 것*/

const am = null;
console.log(am)

let anyThing;
console.log(anyThing) /* undefined(타입) 이렇게 변수는 만들었지만 아무 값도 주지 않음 
즉 정의되지 않음 


null은 자연적으로 발생하지않음 "비어있어요"를 의도적으로 표현한것임 
정의되지 않은거랑 다름 

파이썬에서는 null 대신 None이 있고 Ture와 False를 사용 
생긴건 다르지만 개념은 같음

ture / false : 켜저있음 / 꺼져있음
null : 비어있음
undefined : 변수가 메모리에 만들어 졌고 컴퓨터가 이 변수에 대해서 인지하고 있지만
값이 없는 것임 */