// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//
// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".



///////////////////////////////////////////////////////////////////////////////////////////



// Масиви та об'єкти
//
//
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
    const array = ['one', 2, 3, 4, 5, 'six', 'seven', 8, 9, 10];
    //
    console.log('   Task (1): #67kfznmiMl');
    console.log(array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]);
//
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let obj1 = {
    title: 'book1',
    pageCount: 1,
    genre: 'genre2'
}
let obj2 = {
    title: 'book2',
    pageCount: 2,
    genre: 'genre2'
}
let obj3 = {
    title: 'book3',
    pageCount: 3,
    genre: 'genre3'
}
//
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let object1 = {
    title: 'book1',
    pageCount: 1,
    genre: 'genre2',
    authors: [
        {
            name: 'name1',
            age: 1
        },
        {
            name: 'name2',
            age: 2
        }
    ]
}
let object2 = {
    title: 'book2',
    pageCount: 2,
    genre: 'genre2',
    authors: [
        {
            name: 'name1',
            age: 1
        }
    ]
}
let object3 = {
    title: 'book3',
    pageCount: 3,
    genre: 'genre3',
    authors: [
        {
            name: 'name1',
            age: 1
        },
        {
            name: 'name2',
            age: 2
        },
        {
            name: 'name3',
            age: 3
        }
    ]
}
//
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr4 = [
    {   name: 'name 1',
        username: 'username 1',
        password: 'password1'
    },
    {   name: 'name 2',
        username: 'username 2',
        password: 'password2'
    },
    {   name: 'name 3',
        username: 'username 3',
        password: 'password3'
    },
    {   name: 'name 4',
        username: 'username 4',
        password: 'password4'
    },
    {   name: 'name 5',
        username: 'username 5',
        password:'password5'
    },
    {   name: 'name 6',
        username: 'username 6',
        password: 'password6'
    },
    {   name: 'name 7',
        username: 'username 7',
        password: 'password7'
    },
    {   name: 'name 8',
        username: 'username 8',
        password: 'password8'
    },
    {   name: 'name 9',
        username: 'username 9',
        password: 'password9'
    },
    {   name: 'name 10',
        username: 'username 10',
        password: 'password10'
    },
]
//
console.log('   Task (4): #jCHFnEbdmFd');
console.log(arr4[0].password, arr4[1].password, arr4[2].password, arr4[3].password, arr4[4].password, arr4[5].password, arr4[6].password, arr4[7].password, arr4[8].password, arr4[9].password);
//
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let temperatureArr = [
    {
        name: 'Monday',
        morning: '11',
        day: '16',
        night: '21'
    },
    {
        name: 'Tuesday',
        morning: '12',
        day: '17',
        night: '22'
    },
    {
        name: 'Wednesday',
        morning: '13',
        day: '18',
        night: '23'
    },
    {
        name: 'Thursday',
        morning: '14',
        day: '19',
        night: '24'
    },
    {
        name: 'Friday',
        morning: '15',
        day: '20',
        night: '25'
    },
    {
        name: 'Saturday',
        morning: '16',
        day: '21',
        night: '26'
    },
    {
        name: 'Sunday',
        morning: '17',
        day: '22',
        night: '26'
    },

]
//
//
// Логічні розгалуження:
//
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log('Task (6): #bAUsaq6LI');

let x = 1;
console.log(x !== 0 ? 'Вірно' : 'Невірно');
x = 0;
console.log(x !== 0 ? 'Вірно' : 'Невірно');
x = -3;
console.log(x !== 0 ? 'Вірно' : 'Невірно');
//
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log('   Task (7): #3ckURgvs');
//
let time = 21;
if (time >= 0 && time <= 14) {
    console.log('1 part of time');
} else if (time >= 15 && time <= 29) {
    console.log('2 part of time');
} else if (time >= 30 && time <= 44) {
    console.log('3 part of time');
} else if (time >= 45 && time <= 59) {
    console.log('4 part of time');
} else {
    console.log('Not correct time');
}
//
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
console.log('   Task (8): #UMoNq4biWGe');
//
let day = 19;
//
if (day >= 1 && day <= 10) {
    console.log('1 декада');
} else if (day >= 11 && day <= 20) {
    console.log('2 декада');
} else if (day >= 21 && day <= 31) {
    console.log('3 декада');
} else {
    console.log('Error');
}
//
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
console.log('   Task (9): #KzrtqyQ');
//
let dayOfWeek = +prompt('Завдання 9: Введіть номер дня в діапазоні 1-7.', '3');
switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Not correct number!!!');
}
//
//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
console.log('   Task (10): #uwsz1RnTQJ1');
//
let digit1 = +prompt('Введіть перше число:', 22);
let digit2 = +prompt('Введіть друге число:', 34);
//
if (digit1 > digit2) {
    console.log(digit1 + ' більше.');
} else if (digit2 > digit1) {
    console.log(digit2 + ' більше.');
} else if (digit2 === digit1) {
    console.log('Числа однакові)');
} else {
    console.log('Некоректні дані');
}
//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
console.log('   Task (11): #iBvqtjEm');
//
x = NaN;
if (isNaN(x) || x === undefined || x === 0 || x === false || x === '') {
    x = 'default';
}
console.log(x);
//
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
console.log('   Task (12): #awLXL6TBzg');
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}