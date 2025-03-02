// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//


let sessionsListArr = JSON.parse(localStorage.getItem('sessionsList'));

let sessionsBox = document.getElementById(`sessionsBox`);

if (sessionsListArr) {
    for (let i = 0; i < sessionsListArr.length; i++) {
        const p = document.createElement('p');
        p.innerText = `${i + 1}: ${sessionsListArr[i]}`;
        sessionsBox.appendChild(p);
    }
} else {
    const p = document.createElement('p');
    p.innerText = 'Not any date!';
    sessionsBox.appendChild(p);
}