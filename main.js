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

let question = prompt("당신의 이름이 무엇인가요?", "홍길동");

alert(question);