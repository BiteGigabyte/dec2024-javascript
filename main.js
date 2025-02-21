// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
//
//
// =================================================================================================
// =================================================================================================
//
//
//     #XjJuucOMR0
//     - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
    function User (id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
    //
    let usersArr = [];
    //
    for (let i = 0; i < 10; i++) {
        usersArr[i] = new User(i + 1, `name${i + 1}`, `surname${i + 1}`, `email${i + 1}`, `phone${i + 1}`);
    }
    //
    console.log('Task: #XjJuucOMR0');
    console.log(usersArr);
    //
    console.log('==  ==  ==  ==  ==  ==  ==');
    console.log(' ');

// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
    let pairedObjects = usersArr.filter(value => value.id % 2 === 0);
    //
    console.log('Task: #2ikXsE2WiKZ');
    console.log(pairedObjects);
    //
    console.log('==  ==  ==  ==  ==  ==  ==');
    console.log(' ');

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
    pairedObjects.sort((a, b) => a.id - b.id);
    //
    console.log('Task: #pOeHKct');
    console.log(pairedObjects);
    //
    console.log('==  ==  ==  ==  ==  ==  ==');
    console.log(' ');

// #nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
    class Client {
        constructor(id, name, surname , email, phone, order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }
    //
    let clients = [];
    //
    // цикл створення 10 клієнтів
    for (let i = 0; i < 10; i++) {
        let commodities = [];

        if (i < 4 && i >= 0) {
            for (let j = 0; j < 4; j++) {
                commodities[j] = `commodity${j + 1}`;
            }
        } else if (i >= 4 && i < 7) {
            for (let j = 0; j < 3; j++) {
                commodities[j] = `commodity${j + 1}`;
            }
        } else if (i >= 7 && i < 9) {
            for (let j = 0; j < 2; j++) {
                commodities[j] = `commodity${j + 1}`;
            }
        } else {
            commodities[0] = `commodity1`;
        }
        //
        clients[i] = new Client(i + 1, `name${i + 1}`, `surname${i + 1}`, `email${i + 1}`, `phone${i + 1}`, commodities);
    }
    //
    console.log('Task: #nkMXISv');
    console.log(clients);
    //
    console.log('==  ==  ==  ==  ==  ==  ==');
    console.log(' ');

//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
    clients.sort((a, b) => a.order.length - b.order.length);
    //
    console.log('Task: #8abtVjRv');
    console.log(clients);
    //
    console.log('==  ==  ==  ==  ==  ==  ==');
    console.log(' ');

//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
    function Car (model, manufacturer, yearOfRelease, maxSpeed, engineDisplacement) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfRelease = yearOfRelease;
        this.maxSpeed = maxSpeed;
        this.engineDisplacement = engineDisplacement;

        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }

        this.info = function () {
            for (const key of Object.keys(this)) {
                if (typeof this[key] !== 'function')
                console.log(`${key} - ${this[key]}`);
            }
        }

        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = newSpeed;
        }

        this.changeYear = function (newValue) {
            this.yearOfRelease = newValue;
        }

        this.addDriver = function (driver) {
            this.driver = driver;
        }
    }
    //
    console.log('Task: #vV9a6584I5');
    //
    let cars = new Car ('m5', 'bmw', '1996', 320, 3);
    cars.info();
    //
    cars.increaseMaxSpeed(400);
    console.log(cars.maxSpeed);
    //
    cars.addDriver({name: 'Petya', surname: 'Ivanov'});
    console.log(cars.driver);
    //
    console.log('==  ==  ==  ==  ==  ==  ==');
    console.log(' ');

//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
    class CarClass  {
        constructor (model, manufacturer, yearOfRelease, maxSpeed, engineDisplacement) {

            this.model = model;
            this.manufacturer = manufacturer;
            this.yearOfRelease = yearOfRelease;
            this.maxSpeed = maxSpeed;
            this.engineDisplacement = engineDisplacement;

        }
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        info () {
            for (const key of Object.keys(this)) {
                if (typeof this[key] !== 'function')
                    console.log(`${key} - ${this[key]}`);
            }
        }
        increaseMaxSpeed (newSpeed) {
            this.maxSpeed = newSpeed;
        }
        changeYear (newValue) {
            this.yearOfRelease = newValue;
        }
        addDriver (driver) {
            this.driver = driver;
        }
    }
    //
    console.log('Task: #5kla3yMpgp');
    //
    let classCars = new CarClass ('m5', 'bmw', '1996', 320, 3);
    classCars.info();
    //
    classCars.increaseMaxSpeed(400);
    console.log(classCars.maxSpeed);
    //
    classCars.addDriver({name: 'Petya', surname: 'Ivanov'});
    console.log(classCars.driver);
    //
    console.log('==  ==  ==  ==  ==  ==  ==');
    console.log(' ');

//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
    console.log('Task: #zg6Fifnqig');
    //
    class Cinderella {
        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }
    }
    //
    const cinderellas = [];
    for (let i = 0; i < 10; i++) {
        cinderellas[i] = new Cinderella(`name${i + 1}`, 17 + i +1, 32 + i + 1);
    }
    console.log(cinderellas);
    //
    class Prince {
        constructor(name, age, foundShoe) {
            this.name = name;
            this.age = age;
            this.foundShoe = foundShoe;
        }
    }
    //
    const prince = new Prince('Prince', 28, 37);
    console.log(prince);
    //
    for (let i = 0; i < cinderellas.length; i++) {
        if (cinderellas[i].footSize === prince.foundShoe) {
            console.log(cinderellas[i]);
        }
    }
    console.log(cinderellas.find(value => value.footSize === prince.foundShoe));
    //
    console.log('==  ==  ==  ==  ==  ==  ==');
    console.log(' ');
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
//
    console.log('*Task: #gsKLAsNWM');
    //
    Array.prototype.foreach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    };
    //
    cinderellas.foreach(value => console.log(value));
    console.log('-  -  -  -  -  -  -  -');
    //
    Array.prototype.filterf = function (callback) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    }
    //
    console.log(cinderellas.filterf(value => value.footSize === prince.foundShoe));
    //
    console.log('==  ==  ==  ==  ==  ==  ==');
    console.log(' ');