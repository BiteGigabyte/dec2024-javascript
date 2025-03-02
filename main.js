// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
//
//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
//     ===================================================================================================
//     ===================================================================================================
//
//
// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
    let randomBlock = document.getElementById(`text`);
    let textButton = document.getElementById(`text-button`);
    //
    textButton.onclick = function () {
        randomBlock.classList.toggle(`hiddenBlock`);
    }
//
//         #j693ca8
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
    let task2button = document.getElementById('task2button');
    task2button.onclick = function () {
        let task2input = document.getElementById('task2input');
        if (+task2input.value >= 18) {
            document.getElementById(`task2P`).innerText = 'Age is good.';
        } else {
            document.getElementById(`task2P`).innerText = 'Small age!';
        }
    }
//
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
    let task3Form = document.getElementById(`task3Form`);
    task3Form.onsubmit = function (e) {
        e.preventDefault();
        //
        const name = document.getElementById('task3NameInput').value;
        const surname = document.getElementById('task3SurnameInput').value;
        const age = document.getElementById('task3AgeInput').value;
        //
        const task3P = document.getElementById('task3P');
        task3P.innerText = `name: ${name}, surname: ${surname}, age: ${age};`
    }

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
    let task4Block = document.getElementById(`task4Block`);
    let savedNumber = +localStorage.getItem(`number`);
    if (savedNumber) {
        savedNumber += 1;
        localStorage.setItem(`number`, savedNumber);
        task4Block.innerText = savedNumber;
    } else {
        localStorage.setItem(`number`, task4Block.innerText);
    }

// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
    //Виконав в папці task5...
    console.log('Task 5: #LhSfdhM3');
//

//
// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
    let kgInput = document.getElementById(`task6KgInput`);
    let lbInput = document.getElementById(`task6LbInput`);
    //
    kgInput.oninput = function () {
        lbInput.value = +kgInput.value * 2.2046226;
    }
    lbInput.oninput = function () {
        kgInput.value = +lbInput.value * 0.4535923745;
    }

//
// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
//
    function addToLocalStorage (arrayName,objToAdd) {
        let storageArr = JSON.parse(localStorage.getItem(arrayName));

        if (storageArr) {
            storageArr.push(objToAdd);
            localStorage.setItem(arrayName, JSON.stringify(storageArr));
        }
    }

//
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
    let task8Box = document.getElementById(`task8Box`);
    let rowsInput = document.getElementById(`rows-input`);
    let columnsInput = document.getElementById(`columns-input`);
    let contentInput = document.getElementById(`content-input`);
    //
    let task8Button = document.getElementById('task8Button');
    //
    let task8Table = document.getElementById('task8Table');
    //
    task8Button.onclick = function () {
        if (rowsInput.value > 0 && columnsInput.value > 0 && contentInput.value !== '') {
            task8Table.innerHTML = '';
            let firstTr = document.createElement('tr');
            for (let thI = 0; thI < +columnsInput.value; thI++) {
                let th = document.createElement('th');
                th.innerText = `header ${thI + 1}`;
                firstTr.appendChild(th);
            }
            task8Table.appendChild(firstTr);
            for (let i = 0; i < +rowsInput.value; i++) {
                let tr = document.createElement('tr');
                for (let j = 0; j < +columnsInput.value; j++) {
                    let td = document.createElement('td');
                    td.innerText = contentInput.value;
                    tr.appendChild(td);
                }
                task8Table.appendChild(tr);
            }
            //
            task8Table.scrollIntoView({ behavior: 'smooth' });
        }
    }

//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
    // 'Task 9: #bq1zkx7WP'
    console.log('Task 9: #bq1zkx7WP');

//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

    let user = function (c) {
    //створив дані щоб не писати вручну.
    const names = ["John", "Jane", "Bob", "Mary", "Tom", "Kate"];
    const surnames = ["Smith", "Doe", "Johnson", "Lee", "Brown", "Davis"];
    const emails = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com"];
    const orders = [["book"], ["phone"], ["laptop"], ["shoes"], ["shirt"], ["hat"], ["book", "phone"], ["phone", "laptop"], ["laptop", "shoes"],
        ["shoes", "shirt"], ["shirt", "hat"], ["book", "phone", "laptop"], ["phone", "laptop", "shoes"], ["laptop", "shoes", "shirt"],
        ["shoes", "shirt", "hat"]];
    //масив для заповнення через класс.
    let client = [];
    //цикл для авто заповнення 10 елементів.
    for (let i = 0; i < c; i++) {
        const name = names[Math.floor(Math.random() * names.length)];
        const surname = surnames[Math.floor(Math.random() * surnames.length)];
        const email = `${name.toLowerCase()}.${surname.toLowerCase()}@${emails[Math.floor(Math.random() * emails.length)]}`;
        const phone = `+380-${Math.floor(Math.random() * 100000000 + 900000000)}`;
        const order = orders[Math.floor(Math.random() * orders.length)];
        client[i] = {id: Math.floor(Math.random() * 9000000 + 1000000), name, surname, email, phone, order};
    }
        return client;
    }
    //
    let users = user(100);
    //
    //
    let task10Box = document.getElementById('task10Box');
    let prevButton = document.getElementById('previousButton');
    let nextButton = document.getElementById('nextButton');
    //
    let pageLimit = 10;
    let firstElementNumber = 0;
    //
    function usersDisplay () {
        task10Box.innerHTML = '';
        for (let i = firstElementNumber; i < firstElementNumber + pageLimit; i++) {
            let p = document.createElement(`p`);
            p.innerText = JSON.stringify(users[i]);
            task10Box.appendChild(p);
        }
        //Зробив ще виведення номеру сторінки
        //
        let pageNumberBlock = document.getElementById('task10PageSpan');
        pageNumberBlock.innerText = `${(firstElementNumber + 10) / 10}/${users.length / 10}`;
    }
    usersDisplay();
    //
    prevButton.onclick = function () {
        firstElementNumber -= 10;
        if (firstElementNumber < 0) {
            firstElementNumber = users.length - pageLimit;
        }
        usersDisplay();
    }
    nextButton.onclick = function () {
        firstElementNumber += 10;
        if (firstElementNumber > users.length - 1) {
            firstElementNumber = 0;
        }
        usersDisplay();
    }
    console.log('Task 10: #NKB0tgWIK1G');
    console.log(users);
    //
    //

    // Зробив кнопку очистки сховища localStorage.
    let clearStorageButton = document.getElementById('clearStorage');
    //
    clearStorageButton.onclick = function () {
        localStorage.clear();
    }