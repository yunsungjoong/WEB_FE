
/*
// type alias 에 함수 type 저장해서 쓰는 법
type 함수타입 = (a : string) => number;   // 1. 함수타입은 ()=>{} 모양으로
let 함수 : 함수타입 = function(a) { // 2.함수표현식에만 type alias 사용가능  &  함수 정의하는 다른 방법
    return 10
}
*/

/*
function 함수() {}  // 함수선언식
*/



// object 안에 함수만들 수 있음

let 회원정보 = {
    name : 'kim',
    plusOne(a){
        return a + 1
    },
    chnageName : () => {}
}




// function type 저장가능  
//type numOut = (x : number, y:number)  => number;

// 참고) 화살표함수 
/* 
(파라미터)=>{}  //arrow function 문법
function(파라미터){} //  일반 function 문법

차이는 this 값이 달라지는것

arrow function의 장점 기호 생략기능을 제공해주는 점 
1. arrow function에 중괄호안에 return 코드밖에 없으면 중괄호 {} 생략
2. 파라미터가 한개 밖에 없으면 소괄호 () 생략해도 봐준다.
*/

// function 함수이름 : NumOut(){} 이런식으로 불가능 function 키워드에 () 이거 내부랑 오른쪽에만 타입지정이 가능하다.

/*
type NumOut = (x : number, y : number) => number
let ABC : NumOut = function(x,y){
    return x + y
}

함수를 만들 때 let 함수명 = function(){} 이렇게 해도 되니까 함수명 오른쪽에 함수명 : 타입별명
이렇게 지정해서 사용하는 것 type alias 만들기 싫으면 그냥 함수만들 때 직접 타입작성하면 된다.
*/

// methods 안에 타입지정하기 
/* object 자료 안에 함수도 맘대로 집어 넣을 수 있다. 

let 회원정보 = {
    name : 'kim',
    age : 30,
    plusOne (){
        return x + 1
    },
    chnageName : () => {
        console.log('안녕')
    }
}
회원정보.plusOne(1);
회원정보.chnageName();
*/


// 숙제
/* 
(숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 

- plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
- changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
- type 키워드를 쓰든 말든 알아서 합시다.


type Member = () => {
    name : string,
    age : number,
    plusOne : ( x : number , y : number ) => number,
    changeName : () => void
}

*/




/*
(숙제3) 함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 

이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.


type 함수타입1 = (a :string) => string;
type 함수타입2 = (a :string) => number;

function 만들함수(a :string, func1 :함수타입1, func2 :함수타입2){
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2)
}
만들함수('010-1111-2222', cutZero, removeDash)  //1011112222 출력잘됨
*/




