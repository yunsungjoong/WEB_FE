// 미리 들어올수있는 변수를 지정하는것을 Literal types 이라 한다 
// let 이름 : 123


// let 접니다 : '대머리' | '솔로';
// const 변수 = 'kim'

// function 함수(a : '가위' | '바위' | '보') : ('가위' | '바위' | '보') []{
//     return ['가위']
// }
// 함수('가위')


/* Literal type의 문제점
var 자료 = {
    name : 'kim'
} as const // 타입지정을 리터럴 타입으로 변경

function 내함수(a : 'kim'){

}
내함수('kim')

 */