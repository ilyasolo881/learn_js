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
// Знайти найбільший серед елементів масиву, ост альні обнулити.

let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let result = arr.reduce((sum, current) => sum + current);
console.log (result);

for (let item of arr){
    (item < 0)?:;
}