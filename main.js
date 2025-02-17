// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
//
//
//
//====================================================================================================================================
//
//
//
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
    console.log('Task: #dFeorS3m7u');
    console.log('hello world'.length);
    console.log('lorem ipsum'.length);
    console.log('javascript is cool'.length);
    console.log(' ');

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
    console.log('Task: #8lld9HMxXWB');
    console.log('hello world'.toUpperCase());
    console.log('lorem ipsum'.toUpperCase());
    console.log('javascript is cool'.toUpperCase());
    console.log(' ');

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
    console.log('Task: #ClDsAm7xba7');
    console.log('HELLO WORLD'.toLowerCase());
    console.log('LOREM IPSUM'.toLowerCase());
    console.log('JAVASCRIPT IS COOL'.toLowerCase());
    console.log(' ');

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
    let str = ' dirty string   ';
    //
    console.log('Task: #0b89BkYZwu');
    console.log(str.trim());
    console.log(' ');

//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
    console.log('Task: #bfoJuse4ZzP');
    let stringToarray = function (str) {
        return str.split(' ');
    }
    //
    str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str);
    console.log(arr);
    console.log(' ');

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
    console.log('Task: #Rbr5kEQ');
    arr = [10,8,-7,55,987,-1011,0,1050,0];
    console.log(arr.map(value => value.toString()));
    console.log(' ');

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
    console.log('Task: #5hqyKTfmc');
    //
    let sortNums = function (array, direction) {
        switch (direction) {
            case 'ascending':
                array.sort((a, b) => {
                    return a - b;
                })
                break;
                case 'descending':
                array.sort((a, b) => {
                    return b - a;
                })
                break;
            default:
                console.log('Not valid direction!!!');
        }
    }
    let nums = [11,21,3];
    sortNums(nums,'ascending');
    console.log(nums);
    sortNums(nums,'descending');
    console.log(nums);
    console.log(' ');
// ==========================

// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
    console.log('Task: #yo06d74c1C');
    //
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    //
    console.log(coursesAndDurationArray.sort((a, b) => {
        return a.monthDuration - b.monthDuration;
    }));
    //
    console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
    //
    console.log(coursesAndDurationArray.map((value, index) => {
        return {id: index + 1, ...value};
    }));
    //
    console.log(' ');
// =========================

//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
    console.log('Task: #bolvdlhP');
    //
    let cardsValues = {
        suits: ['spade', 'diamond','heart', 'clubs'],
        values: [6, 7, 8, 9, 10, 'ace','jack','queen','king'],
        colors: ['red', 'black']
    }
    // створюю колоду
    let cards = [];
    cardsValues.values.forEach(value => {
        cardsValues.suits.forEach(suit => {
            if (suit === 'spade' || suit === 'clubs') {
                cards.push({cardSuit: suit, value: value, color: cardsValues.colors[1]})
            } else {
                cards.push({cardSuit: suit, value: value, color: cardsValues.colors[0]})
            }
        })
    })
    //
    let findAce = cards.find((value) => value.value === 'ace' && value.cardSuit === 'spade');
    console.log(findAce);
    //
    console.log(cards.filter(value => value.value === 6));
    //
    console.log(cards.filter(value => value.color === 'red'));
    //
    console.log(cards.filter(value => value.cardSuit === 'clubs'));
    //
    console.log(cards.filter(value => value.cardSuit === 'clubs' && value.value !== 8 && value.value !== 7 && value.value !== 6));
    //
    console.log(' ');
// =========================

//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
    console.log('Task: #EP5I1UUzAX');
    //
    let suitsReducing = cards.reduce((previousValue, currentValue) => {
            switch (currentValue.cardSuit) {
                case 'spade':
                    previousValue.spades.push(currentValue);
                    break;
                case 'diamond':
                    previousValue.diamonds.push(currentValue);
                    break;
                case 'heart':
                    previousValue.hearts.push(currentValue);
                    break;
                case 'clubs':
                    previousValue.clubs.push(currentValue);
                    break;
                default:
                    console.log('Not valid suit');
            }
            return previousValue;
        },
        {
            spades:[],
            diamonds:[],
            hearts:[],
            clubs:[]
        })
    //
    console.log(suitsReducing);
    //
    console.log(' ');
// =========================

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
//
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
    //
    console.log('Task: #4LJn7zBx');
    //
    console.log('sass availability: ');
    coursesArray.forEach(value => {
        if (value.modules.includes('sass') === true) {
            console.log(value);
        }
    })
    //
    console.log('docker availability: ');
    coursesArray.forEach(value => {
        if (value.modules.includes('docker') === true) {
            console.log(value);
        }
    })
    //
    console.log(' ');