/*
Задание 1.
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой
элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null
и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию,
 проанализируйте синтаксис.*/

let arr = ['W','V', 5, 6, 9, 0, 88, 12, 42, 6, 7, 0];
let arr2 = [45, 22, 3, 95, 2, 0, 3, 'age', 'name']

function getAmountElem(array) {
  let even = 0;
  let odd = 0;
  let zero = 0;

  for (let i = 0; i < array.length; i++){
  if (typeof array[i] != "number"){
    console.log( `${array[i]} не число`)
  } else if (array[i] % 2 == 0 && array[i] != 0){
    even++
  } else if (array[i] % 2 != 0) {
    odd++
  } else if(array[i] === 0) {
    zero++
  }
}
  console.log(`четных ${even}`)
  console.log(`нечетных ${odd}`)
  console.log(`нулей ${zero}`)
}

getAmountElem(arr)
getAmountElem(arr2)

// let arr = ['W','V', 5, 6, 9, 0, 88, 12, 42, 6, 7];
// let even = 0;
// let odd = 0;
// let zero = 0;
//
// for (let i = 0; i < arr.length; i++){
//   if (typeof arr[i] != "number"){
//     console.log( `${arr[i]} + не число`)
//   } else if (arr[i] % 2 == 0 && arr[i] != 0){
// //     even++
//   } else if (arr[i] % 2 != 0) {
//     odd++
//   } else if(arr[i] === 0) {
//     zero++
//   }
// }
//
// console.log(`четных ${even}`)
// console.log(`нечетных ${odd}`)
// console.log(`нулей + ${zero}`)

