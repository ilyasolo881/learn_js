// Задача 1
// let name = prompt('Як вас звати?', );
// alert(`Привіт, ${name}! Як ти поживаєшь?`);



//Задача 2

// 1)Запросить у пользователя Имя, Фамилию, Возраст и город
// 2)Для этих данных создать по отдельной переменной с соответствующим названием
// 3)Переобразовать данные по возрасту в тип "Число"
// 4)Создать новый объект пользователя который будет содержать все эти данные
// 5)Спросить у пользователя разрешает ли он показывать его данные с помощью confirm
// 6)И написать такую логику с помощью тернарного оператора condition ? result1 : result2
// Если Да тогда в консоль вывести все данные которые мы преобразовали в строку типа
// Имя пользователя ${user.name} Фамилия ${user.surname} - это тоже новая переменная должны быть
// и так далее...

// Если нет то отобразить с помощью alert что пользователь запретил показывать данные

// let name = prompt("Введіть ваше ім'я: ", );
// let surname = prompt('Введіть вашу фамілію: ', );
// let age = prompt('Введіть ваш вік: ', );
// let city = prompt('Введіть ваше місто: ', );

// age = Number(age);
// или age = +age; 

// let user = new Object();
// или let user = {}

// user.name = name;
// user.surname = surname;
// user.age = age;
// user.city = city;

// let is_user = confirm('Чи дозволяєте ви показувати свої данні?');

// console.log(is_user);

// is_user == true ? console.log(`Ваші данні: ваше Ім'я: ${user.name}, Фамілія: ${user.surname}, Вік: ${user.age}, Місто: ${user.city}`): alert('Ви заборонили показувати данні!');



// Задача 3

// 1) Запросить у пользователя 2 числа, это должны быть разные переменные
// Если пользователь не ввел первое число оно будет равнятся 0
// Если пользователь не ввел второе число оно будет равнятся 22
// Не ввел означает результат выполнения prompt() - пустая строка

// 2) Создать еще одну переменную - Если обе предыдущие переменные имеют значение по Булеву true, тогда эта переменная
// Будет равняться 80 иначе, если хоть одна из двух предыдущих равняется false то эта переменная будет равна 40
// Вы должны помнить что по булеву Пустая строка, 0, false, undefined и null считаюься как false!!!!

// 3)Создаем пустой обьект

// 4)Проверяем если Первая переменная больше или равно 90 то добавляем в обьект поле size = 'big'
// Проверяем если Первая переменная меньше или равно 40 то добавляем в обьект поле size = 'small'
// Иначе  добавляем в обьект поле size = 'medium'

// 5)Дальше создаем еще одну переменную

// 6)С помощью конструкции switch case пишем такую логику
// Если поле size в обьекте 'big' присваиваем этой переменной 1000
// Если поле size в обьекте 'medium' присваиваем этой переменной 100
// Если поле size в обьекте 'small' присваиваем этой переменной 10
// В конце программы перемножаем все числа, записываем результат в переменную и проверяем если остаток от деление на 2 не равен нулю,
// Выводим в консоль какое то сообщение, придумайте сами 😂
// Иначе проверяем что второе число которое ввел пользователь больше 50 и тогда показываем alert() - это число



// let a = prompt('Введіть перше число: ', ); 
// let b = prompt('Введіть друге число: ', ); 

// if (a == false) {
//     a = 0;
// }
// if (b == false) {
//    b = 22;
// } 

// console.log(a,b);
// let c 
// a || b == true? c = 80: c = 40;

// let obj = {};

// if (a >= 90) {
//     obj.size = 'big';
// } else if (a <= 40) {
//     obj.size = 'small';
// } else {
//     obj.size = 'medium';
// }

// console.log(obj.size);

// let i;

// switch (obj.size) {
//     case('big'):
//     i = 1000;
//      break;
//     case('small'):
//     i = 10;
//      break;
//     case('medium'):
//     i = 100;
//      break;
// }

// let m = a*b*c*i;
// console.log(m);
// if ((m%2) !== 0) {
//     console.log('Якесь повідомлення!')
// }
// else if (b>50) {
//     alert(`Ваше друге число: ${b}`)
// }
// else{
//     console.log('Pchel')
// }


// Задача 4

// Вивести в консоль в один рядок через кому числа від 10 до 20.
// Вивести в консоль в один рядок через кому квадрати чисел від 10 до 20.
// Знайти добуток усіх цілих чисел від 15 до 35.
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// ------------------------------------------
// let i;
// let arr = [];
// for (i = 10;i <= 20; i++){
//     arr.push(i);
// }
// console.log(arr);

// or

// a = '';
// for (i = 10; i <= 20; i++){
//     (i <= 19)? a += i + ',': a += i + '.';
// }
// console.log(a);
// ------------------------------------------
// arr = [];
// for (i = 10; i <= 20; i++){
//     arr.push(i**2);
// }
// console.log(arr);
// ------------------------------------------
// square = '';
// for (let i = 10; i<= 20; i++){
//     (i <= 19)? square += i**2 + ',': square += i**2 + '.';
// }
// console.log(square)
// ------------------------------------------
// let count = 1;
// for (i = 15; i <=35; i++){
//     count = count * i;
// }
// console.log(count);
// ------------------------------------------
// count = 0
// for (i = 1; i <=500; i++){
//     count = count + i;
// }
// console.log(count/500);
// ------------------------------------------
// count = 0;
// for (i = 30; i<=80; i++){
//     if (i % 2 == 0) {
//         count = count + i
//     }
// }
// console.log(count);
// ------------------------------------------
// arr = [];
// for (i = 100; i <= 200; i++){
//     if (i % 3 == 0){
//         arr.push(i);
//     }
// }
// console.log(arr)
// ------------------------------------------
// let a = prompt('Введіть будь-яке число: ', );
// a = Number(a);
// if (a % a== 0 && a ){
// }
// ------------------------------------------
// Задача 5

// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
// Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, інші обнулити.
// // ------------------------------------------
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// // let result = arr.reduce((sum, current) => sum + current);
// // console.log (result);
// let sum = 0
// let count = 0
// for (let number of arr){
//     if (number > 0) {
//         count += 1
//         sum += number
//     }   
// }
// console.log(count)
// console.log(sum)
// // ------------------------------------------
// let i 
// let max = 0
// let index
// for (i = 0; i < arr.length; i++){
//     if (arr[i] > max){
//         max = arr[i]
//         index = i
//     }   
// }
// console.log(max)
// console.log(index)
// // ------------------------------------------
// let min = 0
// for (i = 0; i < arr.length; i++){
//     if (arr[i] < min){
//         min = arr[i]
//         index = i
//     }   
// }
// console.log(min)
// console.log(index)
// // ------------------------------------------
// count = 0
// for (number of arr){
//     if (number < 0){
//         count += 1
//     }
// }
// console.log(count)
// // ------------------------------------------
// count = 0
// for (number of arr){
//     if(number > 0 && number % 2 !== 0){
//         count += 1
//     }
// }
// console.log(count)
// // ------------------------------------------
// count = 0
// for (number of arr){
//     if(number > 0 && number % 2 == 0){
//         count += 1
//     }
// }
// console.log(count)
// // ------------------------------------------
// sum = 0
// for (number of arr){
//     if(number > 0 && number % 2 == 0){
//         sum += number
//     }
// }
// console.log(sum)
// // ------------------------------------------
// sum = 0
// for (number of arr){
//     if(number > 0 && number % 2 !== 0){
//         sum += number
//     }
// }
// console.log(sum)
// // ------------------------------------------
// sum = 1
// for (number of arr){
//     if(number > 0){
//         sum *= number
//     }
// }
// console.log(sum)
// // ------------------------------------------
// // Знайти найбільший серед елементів масиву, інші обнулити.
// max = 0
// index = 0
// for (i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//         index = i
//     }
// }
// console.log(i)
// console.log(index)
// for (i = 0; i < arr.length; i++){
//     if(i < index || i > index){
//         arr[i] = 0
//     }
// }
// // arr.splice(0, index - 1)
// // arr.splice(index + 1)
// // console.log(Math.max([20,-20,304,0,293]))
// // console.log(Math.max([10, 20]));
// // let arr_max = Math.min.apply(null,arr)
// // console.log(arr_max)
// console.log(max)
// console.log(index)
// console.log(arr)
// ------------------------------------------

// Задача 6

// 1)Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);

// Результат: [1, 2, 3, 4, 6, 7]
// ------------------------------------------
// 2)Реалізуйте функцію generateKey(length, characters), 
// яка повертає рядок випадкових символів із набору characters довжиною length. span>
// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i
// ------------------------------------------
// 3)Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
// ------------------------------------------
// 4)Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// Первый вызов
// ﻿sum(3) = 3 
// Второй вызов
// sum(5) = 8
// Третий вызов
// sum(20) = 28
// ------------------------------------------
// 1)
// const arr = [1, 2, 3, 4, 5, 6, 7];
// function removeArrElement(array, item){
//   array.splice(array.indexOf(item), 1);
//   return array;
// }
// console.log(removeArrElement(arr, 3))
// ------------------------------------------
// 2)
// let newSample = '';
// const sample = 'abcdefghijklmnopqrstuvwxyz0123456789';
// function generateKey(amount, string){
//     for (let i = 0; i < amount; i++){
//         newSample += string[getRandom(0, string.length - 1)]; 
//     }
//     return newSample 
// }
// function getRandom(min, max) {
// 	return Math.floor(Math.random() * max - min + 1) + min;
// }
// console.log(generateKey(10,sample));
// ------------------------------------------
// 3)
// let str = "hello world";
// let letters = prompt('Введіть літери, що потрібно видалити для рядка "hello world": ')
// let strToArr = str.split('');
// let lettersToArr = letters.split('');
// console.log(lettersToArr);
// console.log(strToArr);
// for (let i = 0; i <= lettersToArr.length - 1; i++){
//     for (let j = 0; j <= strToArr.length - 1; j++){
//         if(strToArr[j] === lettersToArr[i]){
//             strToArr.splice(j,1);
//             j--
//         }
//     }
// }
// console.log(strToArr);
// alert(strToArr);
// ------------------------------------------
// 4) 
// function summing(n){
//    return function (num){
//         return console.log(n = n + num)
//     }
// }
// let sum = summing(0) 
// sum(3)
// sum(5)
// sum(2)
// sum(5)
// // console.log(sum(10))
// // console.log(sum(Number(prompt('Введіть одне число: '))))
// ------------------------------------------

// Задача 7

// Дан масив об'єктів. 
// Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. 
// І знайти суму всіх балансів користувачів

let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]
for(let key in users){
    if (key == balance && users.balance >= 2000 ){

    }
}