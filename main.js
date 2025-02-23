// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
//
//
// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
//
//
//     =======================================================================================================
//      що таке циклічні посилання і що таке map цей і цей метод що це за метод.
//     =======================================================================================================
//
//
//         #AiN5CoUQ
//     Створити функцію, яка робить глибоку копію об'єкту.
//     Додати перевірки на undefined, null, NaN.
//         Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
    console.log('Task: #AiN5CoUQ');
    //
    //
//
// Цей метод без обробки циклічних посилань. Але це означає, що вона може зациклитися, якщо передати об'єкт із посиланням на самого себе.
// Спрощена версія без WeakMap.
function deepClone(value) {
    // 1️⃣ Перевірка на примітивні типи
    if (value === null || value === undefined) return value;
    if (Number.isNaN(value)) return NaN;
    if (typeof value !== "object" && typeof value !== "function") return value;

    // 2️⃣ Копіюємо спеціальні об'єкти
    if (value instanceof Date) return new Date(value);
    if (value instanceof RegExp) return new RegExp(value);
    if (value instanceof Map) {
        const newMap = new Map();
        value.forEach((v, k) => newMap.set(deepClone(k), deepClone(v)));
        return newMap;
    }
    if (value instanceof Set) {
        const newSet = new Set();
        value.forEach(v => newSet.add(deepClone(v)));
        return newSet;
    }

    // 3️⃣ Копіюємо функції (зберігаємо стрілочні чи звичайні)
    if (typeof value === "function") {
        const clonedFunc = value.bind({});
        Object.assign(clonedFunc, value);
        return clonedFunc;
    }

    // 4️⃣ Копіюємо класові екземпляри
    if (value.constructor && value.constructor !== Object) {
        const newObj = Object.create(Object.getPrototypeOf(value));
        Object.getOwnPropertyNames(value).forEach(key => {
            newObj[key] = deepClone(value[key]);
        });
        return newObj;
    }

    // 5️⃣ Копіюємо звичайні об'єкти та масиви
    const newObj = Array.isArray(value) ? [] : {};
    Object.keys(value).forEach(key => {
        newObj[key] = deepClone(value[key]);
    });

    return newObj;
}
//
    //
    //
    // Цей метод з обробкою циклічних посилань. Це означає, що вона не може зациклитися, якщо передати об'єкт із посиланням на самого себе.+
    function deepCloneFull(value, map = new WeakMap()) {
        // Якщо цей об'єкт уже клонували, повертаємо копію (запобігаємо зацикленню)
        //
        // 1️⃣ Перевірка на примітивні типи
        if (value === null) return null;
        if (value === undefined) return undefined;
        if (Number.isNaN(value)) return NaN;
        if (typeof value !== "object" && typeof value !== "function") return value;

        // 2️⃣ Перевірка на циклічні посилання (захист від зациклення)
        if (map.has(value)) return map.get(value);

        // 3️⃣ Копіюємо спеціальні об'єкти
        if (value instanceof Date) return new Date(value);
        if (value instanceof RegExp) return new RegExp(value);
        if (value instanceof Map) {
            const newMap = new Map();
            map.set(value, newMap);
            value.forEach((v, k) => newMap.set(deepCloneFull(k, map), deepCloneFull(v, map)));
            return newMap;
        }
        if (value instanceof Set) {
            const newSet = new Set();
            map.set(value, newSet);
            value.forEach(v => newSet.add(deepCloneFull(v, map)));
            return newSet;
        }

        // 4️⃣ Копіюємо функції (зберігаємо стрілочні чи класичні)
        if (typeof value === "function") {
            const clonedFunc = value.bind({});
            Object.assign(clonedFunc, value);
            return clonedFunc;
        }

        // 5️⃣ Копіюємо класові екземпляри
        if (value.constructor && value.constructor !== Object) {
            const newObj = Object.create(Object.getPrototypeOf(value));
            map.set(value, newObj);
            Object.getOwnPropertyNames(value).forEach(key => {
                newObj[key] = deepCloneFull(value[key], map);
            });
            return newObj;
        }

        // 6️⃣ Копіюємо звичайні об'єкти та масиви
        const newObj = Array.isArray(value) ? [] : {};
        map.set(value, newObj);
        Object.keys(value).forEach(key => {
            newObj[key] = deepCloneFull(value[key], map);
        });

        return newObj;
    }
        //
    // Клас для тесту
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            return `Hello, ${this.name}!`;
        }
    }
    //
    // Об'єкт для копіювання
    const obj = {
        num: 42,
        str: "Hello",
        bool: true,
        nullVal: null,
        undefinedVal: undefined,
        nanVal: NaN,
        arr: [1, 2, 3],
        date: new Date(),
        regex: /test/i,
        map: new Map([["key1", "value1"]]),
        set: new Set([1, 2, 3]),
        func: function () { return "I am a function"; },
        arrowFunc: () => "I am an arrow function",
        instance: new MyClass("John"),
        anotherOne: {name: 'name 0', age: 20},
        anotherArr: [{name: 'name 1', age: 29}, {name: 'name 1', age: 29}, {name: 'name 1', age: 29}, [{name: 'name 1', age: 29}, {name: 'name 1', age: 29},[{name: 'name 1', age: 29}]]]
    };
        //
    // Глибока копія
    const clonedObj = deepCloneFull(obj);
    //
    //Перевірка чи правильна копія.
    console.log('original obj:');
    console.log(obj);
    console.log(' ');
    console.log(clonedObj); // Перевіряємо всі значення
    console.log(clonedObj.func()); // ✅ Функція працює
    console.log(clonedObj.arrowFunc()); // ✅ Стрілочна функція працює
    console.log(clonedObj.instance.sayHello()); // ✅ "Hello, John!"
    console.log(clonedObj === obj); // ❌ false (новий об'єкт)
    console.log(clonedObj.arr === obj.arr); // ❌ false (глибока копія масиву)
    console.log(clonedObj.map === obj.map); // ❌ false (глибока копія Map)
    console.log(clonedObj.set === obj.set); // ❌ false (глибока копія Set)
    console.log(' ');

    console.log(' ');
    // Перевірка глибоких вкладеностей в масивах і об'єктах.
    console.log(obj.anotherArr[3][2][0] === clonedObj.anotherArr[3][2][0]);
    //
    let clonedObjDemo = deepClone(obj);
    // Перевірка демо версії
    console.log(obj.anotherArr[3][2][0] === clonedObjDemo.anotherArr[3][2][0]);
    console.log(' ');
    console.log(' ');

//
//     #iz6emEsP2BA
//     - є масив
//     let coursesAndDurationArray = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
//     ];
//     за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//         Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
    console.log('Task: #iz6emEsP2BA');
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
    coursesAndDurationArray.map((value, index) => value.id = index + 1);
    console.log(coursesAndDurationArray);
    //
    console.log(' ');

