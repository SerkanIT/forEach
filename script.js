// For Each() Map() //

// for while //

// let front927 = [
//   "Hasan",
//   "Abdulloh",
//   "Ulugbek",
//   "MuhammadQodir",
//   "MuhammadAli",
//   "Serkan",
//   "Diyorik",
// ];

// front927.forEach((item, index, array) => {
//   console.log(index + " " + item + " " + array);
// });

// front927.map((item, index, array) => {
//   console.log(index + ": " + item + ", ");
// });

// front927.map((item, index, array) => {
//   console.log("Hello" + " " + item);
// });

// front927.forEach((item, index, array) => {
//   if (index % 2 === 0) {
//     console.log(array[index] + "juft");
//   } else {
//   }
// });

// for (const key in front927) {
//   console.log(key);
// }

let savol = prompt("Random Raqam Kiriting!")

// Создаем пустой массив
let originalArray = [];

// Заполняем массив числами от 1 до 10
for (let i = 1; i <= 10; i++) {
  originalArray.push(i);
}

// Создаем новый пустой массив для хранения удвоенных чисел
let doubledArray = [];

// Удваиваем каждое число из originalArray и добавляем в новый массив
originalArray.forEach((num) => {
  let doubledNumber = num * 2;
  doubledArray.push(doubledNumber);
});

// Выводим новый массив на консоль
console.log(doubledArray);
