//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
let reloadButton = document.getElementById('task9-reload-button');
reloadButton.onclick = function () {
    location.reload();
}
let timeNow = new Date();

let sessionsArr = JSON.parse(localStorage.getItem('pageVisiting')) || [];

const moneyBlock = document.getElementById(`moneySpan`);

if (sessionsArr.length > 0) {
    let lastSession = sessionsArr[sessionsArr.length - 1];

    // Перевірка, чи пройшло більше 10 секунд з часу останнього сеансу
    if (timeNow - new Date(lastSession.time).getTime() > 10000) {
        // Оновити суму та час
        let newSum = lastSession.sum + 10;
        sessionsArr.push({ sum: newSum, time: timeNow });
        moneyBlock.innerText = newSum;
    } else {
        // Якщо пройшло менше 10 секунд, залишити попередню суму та тільки оновити час
        sessionsArr.push({ sum: lastSession.sum, time: timeNow });
        moneyBlock.innerText = lastSession.sum;
    }
} else {
    // Якщо сеанси відсутні, ініціалізувати значенням за замовчуванням 100
    let initialSum = 100;
    sessionsArr.push({ sum: initialSum, time: timeNow });
    moneyBlock.innerText = initialSum;
}
// Оновити localStorage
localStorage.setItem('pageVisiting', JSON.stringify(sessionsArr));



