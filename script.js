// Задача 1
// let name = prompt('Як вас звати?', );
// alert(`Привіт, ${name}! Як ти поживаєшь?`);

// Задача 2

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

let name = prompt("Введіть ваше ім'я: ", );
let surname = prompt('Введіть вашу фамілію: ', );
let age = prompt('Введіть ваш вік: ', );
let city = prompt('Введіть ваше місто: ', );

age = Number(age);

let user = new Object();
user.name = name;
user.surname = surname;
user.age = age;
user.city = city;

let is_user = confirm('Чи дозволяєте ви показувати свої данні?');

console.log(is_user);

is_user == true ? console.log(`Ваші данні: ваше Ім'я: ${user.name}, Фамілія: ${user.surname}, Вік: ${user.age}, Місто: ${user.city}`): alert('Ви заборонили показувати данні!');

