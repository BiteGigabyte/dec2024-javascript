// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//

let sessionsListArr = JSON.parse(localStorage.getItem('sessionsList'));

if (sessionsListArr) {
    sessionsListArr[sessionsListArr.length] = new Date();
    localStorage.setItem('sessionsList', JSON.stringify(sessionsListArr));
} else {
    sessionsListArr = [];
    sessionsListArr[sessionsListArr.length] = new Date();
    localStorage.setItem('sessionsList', JSON.stringify(sessionsListArr));
}


