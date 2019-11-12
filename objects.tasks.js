// 1. Определите, пуст ли объект. Создайте функцию isEmpty(obj), которая возвращает true, 
// если в объекте нет свойств и false – если хоть одно свойство есть. 

var schedule = {};

function isEmpty(schedule) {
    var counter = 0;
    for (var prop in schedule) {
        counter++;
    }
    if (counter == 0) {
        return true;
    } else {
        return false;
    }
}
isEmpty(schedule);

// 2. Сумма свойств. Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
// Если объект пустой, то результат должен быть 0. Например:
//... ваш код выведет 650
// P.S. Сверху стоит use strict, чтобы не забыть объявить переменные.

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

function countSalaries(salaries) {
    var sum = 0;
    for (var prop in salaries) {
        sum += salaries[prop];
    }
    return sum;
}
countSalaries(salaries);

// 3. Свойство с наибольшим значением. Есть объект salaries с зарплатами. 
// Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников». 

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxName = name;
    }
}
alert(maxName || "нет сотрудников");

// 4. Создайте калькулятор. Создайте объект calculator с тремя методами:

// если значения из prompt записаны в числовые свойства (индексы):

var calculator = {
    read: function () { // запрашивает prompt два значения и сохраняет их как свойства объекта
        calculator[0] = +prompt('введите первое значение');
        calculator[1] = +prompt('введите второе значение');
    },
    sum: function () { // возвращает сумму этих двух значений
        return this[0] + this[1];
    },
    mul: function () { // возвращает произведение этих двух значений
        return this[0] * this[1];
    }
}
console.log(calculator.read());
console.log(calculator.sum()); // 3
console.log(calculator.mul()); // 2

// если значения из prompt записаны в строковые свойства:

var calculator = {
    read: function () { // запрашивает prompt два значения и сохраняет их как свойства объекта
        calculator.first = +prompt('введите первое значение');
        calculator.second = +prompt('введите второе значение');
    },
    sum: function () { // возвращает сумму этих двух значений
        return this.first + this.second;
    },
    mul: function () { // возвращает произведение этих двух значений
        return this.first * this.second;
    }
}
console.log(calculator.read());
console.log(calculator.sum()); // 3
console.log(calculator.mul()); // 2

// 5. Цепочка вызовов. Есть объект «лестница» ladder:

var ladderObj = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this; // решение состоит в том, чтобы каждый раз возвращать текущий объект
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this; // решение состоит в том, чтобы каждый раз возвращать текущий объект
    },
    showStep: function () { // вывести текущую ступеньку
        alert(this.step);
        return this; // решение состоит в том, чтобы каждый раз возвращать текущий объект
    }
};

// Сейчас, если нужно последовательно вызвать несколько методов объекта, это можно сделать так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

// Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой, вот так:

ladder.up().up().down().up().down().showStep(); // 1

// Как видно, такая запись содержит «меньше букв» и может быть более наглядной.
// Такой подход называется «чейнинг» (chaining) и используется, например, во фреймворке jQuery.

// 6. Сумма произвольного количества скобок. Напишите функцию sum, которая будет работать так:

function sum(a) {

    var currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}
console.log(sum(1)(2));
console.log(sum(1)(2)(3));
console.log(sum(5)(-1)(2));
console.log(sum(6)(-1)(-2)(-3));
console.log(sum(0)(1)(2)(3)(4)(5));

// 7. Создать Calculator при помощи конструктора.
// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
// + Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// + Метод sum() возвращает сумму запомненных свойств.
// + Метод mul() возвращает произведение запомненных свойств.

function Calculator(name) {
    this.read = function () {
        calculator[0] = +prompt('введите первое значение');
        calculator[1] = +prompt('введите второе значение');
    };
    this.sum = function () {
        return this[0] + this[1];
    };
    this.mul = function () {
        return this[0] * this[1];
    }
}

var calculator = new Calculator();
calculator.read();
alert("Сумма=" + calculator.sum());
alert("Произведение=" + calculator.mul());

// 8. Создать Accumulator при помощи конструктора.
// Напишите функцию-конструктор Accumulator(startingValue). 
// Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
// Более формально, объект должен:
// + Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
// + Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
// + Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), 
// с учетом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение

function Accumulator(startingValue) {
    this.startingValue = startingValue;
    var userNumber = +prompt('введите второе значение');
    this.read = function () {
        return this.startingValue += userNumber;
    }
}
var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.startingValue);

// 9. Дан массив с элементами 'Привет, ', 'мир' и '!'. 
// Необходимо вывести на экран фразу 'Привет, мир!'.

var arr = ['Привет', 'мир', '!'];
alert(arr[0] + ', ' + arr[1] + arr[2]);

// 10. Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'. 
// Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.

// так:

var arr = ['Привет', ',', 'мир', '!'];
var text = '';
for (var i = 0; i < arr.length; i++) {
    text += arr[i];
}
console.log(text);

// или так:

var arr = ['Привет', ',', 'мир', '!'];
var text = arr.join('');
console.log(text);

// или так:

var arr = ['Привет', 'мир', '!'];
var text = arr[0] + ', ' + arr[1] + arr[2];
alert(text);

// 11. Дан массив ['Привет, ', 'мир', '!']. 
// Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').

// так:

var arr = ['Привет', 'мир', '!'];
var elementExist = arr.indexOf('Привет');
arr[elementExist] = 'Пока';
console.log(arr);

// или так:

var arr = ['Привет', 'мир', '!'];
arr[0] = 'Пока';
console.log(arr);

// 12. Создайте ассоциативный массив (объект) заработных плат obj. 
// Выведите на экран зарплату Пети и Коли.

// так:

var salaryObj = {
    Петя: 30,
    Коля: 20,
}

for (var key in salaryObj) {
    console.log(key + ':' + ' ' + salaryObj[key]);
}

// или так:

var salaryObj = {
    Петя: 30,
    Коля: 20,
}

console.log(salaryObj['Коля']);

// 13. Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.

// так:

var arr = [1, 2, 3, 4, 5];
console.log(arr);

// или так:

var arr = [];

for (var i = 1; i <= 5; i++) {
    arr.push(i);
}
console.log(arr);

// 14. Дан многомерный массив arr. Выведите с его помощью слово 'голубой'.

var arr = {
    'ru': ['голубой', 'красный', 'зеленый'],
    'en': ['blue', 'red', 'green'],
};
console.log(arr['ru'][0]);

// 15. Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

var arr = ['a', 'b', 'c'];
alert(arr);

// 16. С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

var arr = ['a', 'b', 'c'];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 17. Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

var arr = ['a', 'b', 'c', 'd'];
console.log(arr[0] + '+' + arr[1]);
console.log(arr[2] + '+' + arr[3]);

// 18. Создайте массив arr с элементами 2, 5, 3, 9. 
// Умножьте первый элемент массива на второй, а третий элемент на четвертый. 
// Результаты сложите, присвойте переменной result. 
// Выведите на экран значение этой переменной.

var arr = [2, 5, 3, 9];
var sumOne = arr[0] * arr[1];
var sumTwo = arr[2] * arr[3];
var result = sumOne + sumTwo;
console.log(result);

// 19. Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.

var obj = { a: 1, b: 2, c: 3 };
console.log(obj['c']);
console.log(obj.c);

// 20. Создайте объект с днями недели. 
// Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). 
// Выведите на экран текущий день недели.

var week = {
    1: 'ПН',
    2: 'ВТ',
    3: 'СР',
    4: 'ЧТ',
    5: 'ПТ',
    6: 'СБ',
    7: 'ВС'
}
console.log(week[5]);

// 21. Перепишите суммирование аргументов. Есть функция sum, которая суммирует все элементы массива:

function sum(arr) {
    return arr.reduce(function (a, b) {
        return a + b;
    });
}

alert(sum([1, 2, 3])); // 6 (=1+2+3)

// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

// мой вариант:

function sumArgs() {
    var args = [].slice.call(arguments);
    var sumElements = 0;
    for (var i = 0; i < args.length; i++) {
        sumElements += args[i];
    }
    return sumElements;
}
console.log(sumArgs(1, 2, 3));

// второй не мой вариант:

function sumArgs() {
    arguments.reduce = [].reduce; // скопируем reduce из массива
    return arguments.reduce(function (a, b) {
        return a + b;
    });
}
alert(sumArgs(4, 5, 6)); // 15

//  третий не мой вариант:

function sumArgs() {
    return [].reduce.call(arguments, function (a, b) { // запустим reduce из массива напрямую
        return a + b;
    });
}
alert(sumArgs(4, 5, 6)); // 15

// 22. Умножьте численные свойства на 2.
// Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. 
// Например:

// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

// P.S. Для проверки на число используйте функцию:

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// моё решение без проверки типа данных:

var menu = { // когда в переменную присваивается объект - это не сам объект, а ссылка на него, а объект где-то в памяти
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    var newObj = [];
    for (var key in menu) {
        console.log(menu[key] * 2); // достала значение ключа, где width - это ключ, а menu[key] - это 200 (значение ключа)
    }
}
multiplyNumeric(menu); // когда мы передаём объект в функцию - мы передаём ссылку на него

// 23. Определите, пуст ли объект.
// Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.

var schedule = {};
var counter = 0;

function isEmpty(schedule) {
    for (var key in schedule) {
        counter++;
    }
    if (counter == 0) {
        return true;
    } else {
        return false;
    }
}
isEmpty(schedule);
schedule["8:30"] = "подъём"; // добавили свойство и его значение в объект
isEmpty(schedule);

// 24. Создайте калькулятор. Создайте объект calculator с тремя методами:
// + read() запрашивает prompt два значения и сохраняет их как свойства объекта
// + sum() возвращает сумму этих двух значений
// + mul() возвращает произведение этих двух значений

var calculator = {
    read() {
        this.first = +prompt('введите первое значение');
        this.second = +prompt('введите второе значение');
    },
    sum() {
        return this.first + this.second;
    },
    mul() {
        return this.first * this.second;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// название свойств объекта задаёт пользователь:

var nameFirst = prompt('Введите название первого свойства');
var nameSecond = prompt('Введите название второго свойства');

var calculator = {
    read() {
        this[nameFirst] = +prompt('введите первое значение'); // обращение к свойству объекта с названием из переменной через []
        this[nameSecond] = +prompt('введите второе значение');
    },
    sum() {
        return this[nameFirst] + this[nameSecond];
    },
    mul() {
        return this[nameFirst] * this[nameSecond];
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
console.log(calculator);

// 25. Создайте калькулятор. Создайте объект calculator с тремя методами:

var calculator = {
    read: function () { // запрашивает prompt два значения и сохраняет их как свойства объекта
        calculator[0] = +prompt('введите первое значение');
        calculator[1] = +prompt('введите второе значение');
    },
    sum: function () { // возвращает сумму этих двух значений
        return this[0] + this[1];
    },
    mul: function () { // возвращает произведение этих двух значений
        return this[0] * this[1];
    }
}
console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());

// модифицировать калькулятор и пересоздать через конструктор new:

function Calculator() {
    this.read = function () { // запрашивает prompt два значения и сохраняет их как свойства объекта
        calculator[0] = +prompt('введите первое значение');
        calculator[1] = +prompt('введите второе значение');
    },
        this.sum = function () { // возвращает сумму этих двух значений
            return this[0] + this[1];
        },
        this.mul = function () { // возвращает произведение этих двух значений
            return this[0] * this[1];
        }
}
var calculator = new Calculator();
calculator.read();

// 26. Создайте калькулятор. Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
// Эта задача состоит из двух частей, которые можно решать одна за другой.

// + Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» 
// (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.

// + Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. 
// Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
// Например, добавим операции умножить *, поделить / и возвести в степень **:

// мой правильный вариант, но реализован неверно, он не учит калькулятор новым арифметическим операциям:

function Calculator() {
    this.calculate = function (str) {
        var strElem = str.split(' ');
        if (strElem[1] == '+') {
            var sum = +strElem[0] + +strElem[2];
            return sum;
        }
    },
        this.addMethod = function (name, a, b) {
            if (name == '*') {
                return a * b;
            }
        };
}

var calc = new Calculator();
calc.calculate("3 + 7"); // 10

var powerCalc = new Calculator();
powerCalc.addMethod("*", 2, 3); // 6

// поместила арифметические знаки напрямую в объект, а надо передавать их:

function Calculator() {

    var operationSymbols = {
        '+': function plus(a, b) {
            return a + b;
        },
        '-': function minus(a, b) {
            return a - b;
        },
        '*': function multiple(a, b) {
            return a * b;
        },
        '/': function separate(a, b) {
            return a / b;
        },
        '**': function pow(a, b) {
            return a ** b;
        }
    };

    this.calculate = function (str) {
        var strElem = str.split(' ');
        a = +strElem[0];
        b = +strElem[2];
        var symbolElem = +strElem[1];
        for (var key in operationSymbols) {
            if (key == symbolElem) {
                return a + b;
            }
        }
    }
}

var calc = new Calculator();
calc.calculate("3 + 7"); // 10

var powerCalc = new Calculator();
powerCalc.addMethod("*", 2, 3); // 6

var result = powerCalc.calculate("2 ** 3");
alert(result); // 8

// правильный вариант, Антон помог:

function Calculator() {
    let operationSymbols = {};

    this.calculate = function (str) {
        let strElem = str.split(' ');
        let aa = +strElem[0];
        let bb = +strElem[2];
        let symbolElem = strElem[1];

        let operationFunction = operationSymbols[symbolElem];
        if (operationFunction === undefined) {
            return "Неизвестный оператор"
        }
        // var obj = {prop: "aswe"};
        // var value = obj.prop ;
        // var value = obj['prop'];
        // var str = "prop"; ... var value = obj[str];
        return operationFunction(aa, bb);
    }

    this.addMethod = function (operatorStr, operationFunc) {
        operationSymbols[operatorStr] = operationFunc;
    }
}

// var calc = new Calculator();
// calc.calculate("3 + 7"); // 10

var powerCalc = new Calculator();

powerCalc.calculate("1 + 1");
powerCalc.addMethod("+", function (a, b) {
    return a + b;
});
powerCalc.calculate("1 + 1") // 2

// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

powerCalc.calculate("1 - 1");
powerCalc.addMethod("-", function (a, b) {
    return a - b;
});
powerCalc.calculate("10 - 5") // 5

// '+': function plus(a,b) {
//     return a+b;
// },
// '-': function minus(a,b) {
//     return a-b;
// },
// '*': function multiple(a,b) {
//     return a*b;
// },
// '/': function separate(a,b) {
//     return a/b;
// },
// '**': function pow(a,b) {
//     return a**b;
// }

// 27. Превратите объект в JSON. Превратите объект leader из примера ниже в JSON.
// После этого прочитайте получившуюся строку обратно в объект.

var leader = {
    name: "Василий Иванович",
    age: 35
};

var str = JSON.stringify(leader); // превратила объект leader в JSON
console.log(str);

leader = JSON.parse(str); // превратила обратно
console.log(leader);

// 28. Превратите объекты со ссылками в JSON. 

var leader = {
    name: "Василий Иванович"
};

var strLeader = JSON.stringify(leader); // превратила объект в JSON
console.log(strLeader);

var soldier = {
    name: "Петька"
};

var strSoldier = JSON.stringify(soldier); // превратила объект в JSON
console.log(strSoldier);

// 29. Алгоритм для поиска. Есть объекты:

var head = {
    glasses: 1
};

var table = {
    pen: 3,
    __proto__: head
};

var bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

var pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.sheet); // true
alert(head.money); // undefined

// Задание состоит из двух частей:
// + Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.
// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.


