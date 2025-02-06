// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль


// ======================================================================================



// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
const hello = 'hello';
const owu = 'owu';
const coM = 'com';
const ua = 'ua';
let one = 1;
let ten = 10;
let negative999 = -999;
let oneHundred23 = 123;
let pi = 3.14;
let twoPointSeven = 2.7;
let sixteen = 16;
const truthy = true;
const falsy = false;
//
console.log('Task 1:');
console.log(hello, owu, coM, ua, one, ten, negative999, oneHundred23, pi, twoPointSeven, sixteen, truthy, falsy);


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
const firstName = 'Yurii';
const middleName = 'Ruslanovich';
const lastName = 'Perun';
//
const person = firstName + ' ' + middleName + ' ' + lastName;
//
console.log('Task 2:');
console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
let a = 100; let b = '100'; let c = true;
//
console.log('Task 3:');
//
console.log(a + ' = ' + typeof a);
console.log(b + ' = ' + typeof  b);
console.log(c + ' = ' + typeof  c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//
console.log("Task 4:");
//
const yourName = prompt('Введіть своє ім\'я:');
const yourMiddleName = prompt('Введіть своє по батькові:');
const yourLastName = prompt('Введіть своє прізвище:');
//
console.log(yourName, yourMiddleName, yourLastName);
