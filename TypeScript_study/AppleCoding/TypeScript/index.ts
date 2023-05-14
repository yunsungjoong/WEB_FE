/* HTML조작시 narrowing 방법 5개 */

// let 제목 = document.querySelector('#title');
// if (제목 != null){
// 제목.innerHTML = '반가워요'
// }


/* 2. instanceof 연산자 */
// if (제목 instanceof Element){
//     제목.innerHTML = '반가워요'
// }

/* 3. as로 사기치기 */ 
// let 제목 = document.querySelector('#title123') as Element;
// 제목.innerHTML = '반가워요'


/* 4. 오브젝트에 붙이는 */
let 제목 = document.querySelector('#title')
if (제목?.innerHTML != undefined){  // narrowing 인정해줌   ?은 있으면 출력해주고 없으면 undefined로 
    제목.innerHTML = '반가워요 '
}

/* 5. */
// tscofig.json에서 strict 모드를 끄면 됨 



// 
