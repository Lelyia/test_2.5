/*
Задание 1: Создание и работа с объектами
Инструкция: Создайте объект user с полями name, age, и email. Заполните его значениями. Затем,
используя объект, выведите информацию о пользователе в формате:
"Имя: [name]"
"Возраст: [age]"
"Email: [email]"*/
let person = {
 name: "Olga Bukhina",
 age: 34,
 email: "olga@bukhina.ru",
};
// Выведите информацию о пользователе здесь
console.log("Имя: " + person.name);
console.log("Возраст: " + person.age);
console.log("Email: " + person.email);


/*Задание 2: Обновление свойств объекта
Инструкция: Измените значение свойства age у объекта user на 30 и добавьте новое свойство
isAdmin со значением true. Выведите обновленный объект.*/
let person1 = {
 name: "John Doe",
 age: 25,
 email: "john.doe@example.com",
};
// Обновите объект здесь
person1.age = 30;
person1.isAdmin = true;
console.log(person1);

/*Задание 3: Удаление свойства из объекта
Инструкция: Удалите свойство email из объекта user, а затем проверьте, что оно действительно
удалено, выведя объект в консоль.*/
let person2 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
// Удалите свойство здесь
delete person2.email;
console.log(person2);


/*Задание 4: Преобразование объекта
Инструкция: Напишите функцию transformUser, которая принимает объект user и возвращает новый
объект, содержащий только name и email, при этом name должно быть преобразовано в верхний
регистр.*/
function transformUser(person3) {
 // Реализуйте преобразование здесь
const {email, name} = person3
const uppercasedName = name.toUpperCase();
return {
name: uppercasedName,
email: email
}
}; // Возвращайте новый объект
let person3 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
let transformedUser = transformUser(person3);
console.log(transformedUser); // Ожидаемый результат: { name: "JOHN DOE", email:"john.doe@example.com"}

/*
Задание 5: Копирование объектов
Инструкция: Используя оператор "spread" (...), создайте копию объекта user и измените в копии
значение name на "Jane Doe". Оригинальный объект не должен измениться.*/
let person4 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
// Создайте копию и измените свойство name здесь
console.log(person4); // Оригинальный объект

let person4Copy = { ...person4};
person4Copy.name = "Jane Doe";
console.log(person4Copy); // Измененная копия


/*Задание 6: Преобразование объекта по условию
Инструкция: Напишите функцию filterProperties, которая принимает объект и массив строк
(названия свойств). Функция должна возвращать новый объект, содержащий только те свойства,
которые указаны в массиве.*/

function filterProperties(obj, keys) {
 // Реализуйте фильтрацию здесь
const keysToKeep = ["name", "email"]; 
let filteredObj = Object.fromEntries(
    Object.entries(person5).filter(([keys]) => keysToKeep.includes(keys))
);
 return filteredObj; // Возвращайте новый объект
}
let person5 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
let filteredUser = filterProperties(person5, ["name", "email"]);
console.log(filteredUser); // Ожидаемый результат: { name: "John Doe", email:"john.doe@example.com"}


/*
Задание 7: Изменение структуры данных объекта
Инструкция: Напишите функцию convertUser, которая принимает объект user и возвращает новый
объект, где свойства name и age заменены на одно свойство profile, содержащее эти данные.*/
function convertUser(person6) {
 // Реализуйте преобразование здесь
const copyPerson6 = Object.assign({}, person6);
delete copyPerson6.name;
delete copyPerson6.age;
copyPerson6.profile = {age: person6.age, name: person6.name }
console.log(copyPerson6);
 // Возвращайте новый объект
 return copyPerson6;
}
let person6 = {
 name: "John Doe",
 age: 30,
 email: "john.doe@example.com",
 isAdmin: true,
};
let convertedUser = convertUser(person6);
console.log(convertedUser);
// Ожидаемый результат:{ profile: { name: "John Doe", age: 30 }, email:"john.doe@example.com", isAdmin: true }


/*Задание 8: Объединение объектов
Инструкция: Используя метод Object.assign, объедините два объекта user и details, чтобы
получить один объединенный объект.*/
let person7 = {
 name: "John Doe",
 email: "john.doe@example.com",
};

let details = {
 age: 30,
 isAdmin: true,
};
// Объедините объекты здесь
let mergedUser = Object.assign(person7, details);
for (var key of Object.keys(person7)) {
    console.log(key + ": " + person7[key])
}
console.log(mergedUser);
// Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com", age: 30, isAdmin: true

/*
Задание 9: Динамическое создание свойств
Инструкция: Создайте объект product и добавьте в него свойства name, price и category, используя
динамические ключи, которые задаются переменными.*/
let key1 = "name";
let key2 = "price";
let key3 = "category";
let product = {
    [key1]: "Laptop",
    [key2]: 1500,
    [key3]: "Electronics"
}; // Создайте объект и добавьте свойства динамически
console.log(product);
// Ожидаемый результат: { name: "Laptop", price: 1500, category: "Electronics" }
