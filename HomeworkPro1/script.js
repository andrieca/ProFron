// задача 1
// const arr = {
//     'ru': ['голубой','красній','зелений'],
//     'en': ['blue','red','green'],
// };
// console.log(arr.ru[0]);


// задача 2
// let obj = {
//     'Koly' : '200',
//     "Vasy" : '300',
//     'Pety' : '400',
// };
// for (let key in obj){
//     console.log(key +"-зарплата "+ obj[key]+ " долларов.")
// };


// задача 3
// let obj = {
//     js : ['jQuery','Angular'], 
//     php : 'hello',
//     css : 'world',
// }
// console.log(obj.js[0]);

// задача 4
// let obj ={
//     ru : ['понедельник','вторник','среда','четверг','пятница'],
//     en : ['sunday','monday','tuesday','wednesday'],
// }
// console.log(obj.ru[0]);
// console.log(obj.en[3]);


// задача 5
// let obj = {
//     1 : 'понедельник',
//     2 : 'вторник',
//     3 : 'среда',
//     4 : 'четверг',
//     5 : 'пятница',
// }
//     console.log(obj[3]);




// задача 6
//    let arr = [];
// function getNum (num1,num2){
//      let user = {};
//    for(let tag = 0; tag < num2; tag++){
//       user[num1 + tag] = num1;}
//         return user;
       
// }

// let num1 = prompt('введите строку');
//  let num2 = Number(prompt('введите число'));
//   arr.push(getNum(num1,num2));
//    console.log(arr);



// задача 7
// let arr = [5,2,7,4,1];
// function maxNum(arr){
//   let sum1 = 0;
//   for( let i = 0; i <= arr.length; i++){
//    if (arr[i] % 2 === 0) {
//     sum1 += arr[i];}
   
//   }
//   return sum1;
// }
// function minNum(arr){
//   let sum2 = 0;
//   for( let i = 0; i <= arr.length; i++){
//    if (arr[i] % 2 === 1) {
//     sum2 += arr[i];}
   //   }
//   return sum2;
// }
// function maxSum(sum1,sum2){
 
//   sum1 > sum2 ? console.log(sum1): console.log(sum2);
// }

// console.log(maxNum(arr));
// console.log(minNum(arr));
// maxSum(maxNum(arr),minNum(arr));



// задача 8
// function Fareng(num){
//   let gr = num*9/5+32;
//   return gr
// }
// console.log(Fareng(3));