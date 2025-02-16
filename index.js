// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
//
//
//
// ==========================================================================================
//
//
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    const rectangleArea = (a, b) => {
        return a * b;
    }
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
    const circleArea = (r) => {
        return 3.14 * (r * r);
    }
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
    const cylinderArea = (h, r) => {
        return 2 * 3.14 * r * (r + h);
    }
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
    const arrLog = (arr) => {
        for (const arrElement of arr) {
            console.log(arrElement);
        }
    }
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
    const paragraphWrite = (text) => {
        document.write(`<h4>Task: #59g0IsA</h4>`);
        document.write(`<p>${text}</p>`);
    }
    //
    paragraphWrite(`hello okten`);
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
    document.write(`<h4>Task: #hOL6126</h4>`);
    //
    const ulCreate = (text) => {
        document.write(`<ul>`)
        for (let i = 0; i < 3; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write(`</ul>`)
    }
    //
    ulCreate(`li element`);
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
    document.write(`<h4>Task: #hOL6126</h4>`);
    //
    const ulCreates = (text, count) => {
        document.write(`<ul>`)
        for (let i = 0; i < count; i++) {
            document.write(`<li style="list-style-type: circle">${text}</li>`)
        }
        document.write(`</ul>`)
    }
    //
    ulCreates(`li element`, 4);
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
    document.write(`<h4>Task: #gEFoxMMO</h4>`);
    //
    const elementsArrWriter = (...arr) => {
        document.write(`<ul>`)
        for (let i = 0; i < arr.length; i++) {
            document.write(`<li style="list-style-type: square">${arr[i]}</li>`)
        }
        document.write(`</ul>`)
    }
    //
    elementsArrWriter(1, 5, `asdfasd`, true, `dsa`, false, 0);
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
    document.write(`<h4>Task: #bovDJDTIjt</h4>`);
    //
    const elementsFunctionWriter = (arr) => {
        for (const arrElement of arr) {
            document.write(`<p>id: ${arrElement.id}; name: ${arrElement.name}; age: ${arrElement.age}.</p>`)
        }
    }
    //
    const elemArr = [
        {
            id: 1,
            name: `name1`,
            age: 101
        },
        {
            id: 2,
            name: `name2`,
            age: 102
        },
    ]
    elementsFunctionWriter(elemArr);
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
    const lowestNumber = (arr) => {
        let number = arr[0];
        for (const arrElement of arr) {
            if (number >= arrElement) {
                number = arrElement;
            }
        }
        return number;
    }
    //
    console.log(`Task: #pghbnSB`);
    console.log(lowestNumber([6, 4, 5, 1, 3, 0, 2, -1, 0, -2, -1]));
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
    const sum = (arr) => {
        let summDigit = 0;
        for (const arrElement of arr) {
            summDigit += arrElement;
        }
        return summDigit;
    }
    //
    console.log(`Task: #EKRNVPM`);
    console.log(sum([1, 2, 10]));
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
    const swap = (arr, index1, index2) => {
        let temporaryVariable = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temporaryVariable;
        // return arr;
    }
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
    const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
        for (const currencyValue of currencyValues) {
            if (exchangeCurrency === currencyValue.currency) {
                return sumUAH / currencyValue.value;
            }
        }
        return `Not appropriate currency!!!`;
    }
    //
    console.log(`Task: #mkGDenYnNjn`);
    console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));