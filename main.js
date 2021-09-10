//변수와 상수 과제
// 1번
let admin;
// let name;

// name = "John";
// admin = name;

// alert(admin);

// 2번

const ourPlanet = "Earth";

const currentUserName = "Anna";

// 3번

const BIRTHDAY = '18 April 1982';

const age = new Date(BIRTHDAY).getFullYear();
const today = new Date().getFullYear();
console.log(today - age);

// 자료형 과제
let name = "Ilya";

// alert( `hello ${1}` ); // 답: hello 1

// alert( `hello ${"name"}` ); // hello name

// alert( `hello ${name}` ); // hello Ilya


// alert, prompt, confirm을 이용한 상호작용 과제

// let question = prompt("당신의 이름이 무엇인가요?", "홍길동");

// alert(question);


// 기본 연산자와 수학 과제
// 1번
// let a = 1, b = 1;
// let c = ++a;  // c = 2 / a = 2
// let d = b++;  // d = 1 / b = 2
// 2번
// let a = 2;
// let x = 1 + (a *= 2);
// a = 4  / x = 5
// 3번
/*
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
*/

//4번
let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(+a + +b); // 12