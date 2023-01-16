
//    задача 1
//    let word = "cat";
//     const newWord = [];
//     for( let i = word.length-1; i >= 0; i--){
//         newWord.push(word[i]);
//     }
//    console.log(newWord);

 
 
// задача 2
// function Word(string){
//     if (string.split("").reverse().join("") == string.split("")) {
//        console.log("Это палиндром")
//    } else {
//        console.log("Это не палиндром")
//    }
//  }
//  Word("cat");




// задача 3
// let a = 0;
// let b = 50;
// sum1 = 0;
// for (let i = a; i<=b; i++){
//     if(i%5 === 0){
//         sum1 += i;
//     }
// }
// console.log(sum1);




// задача 4
// const product = [
//     {
//     title: "Nike",
//     price: 300,
//     type: "shoe",
// },
// {
//     title: "Puma",
//     price: 450,
//     type: "shoe",  
// },
// {
//     title: "Channel",
//     price: 1200,
//     type: "bag",
// },
// {
//     title: "BMW",
//     price: 7000,
//     type: "shoe",
// },
// ];
// for(let i in product){
//     console.log(product[i].title);
// }



// задача 5
// const product = [
//     {
//     title: "Nike",
//     price: 300,
//     type: "shoe",
// },
// {
//     title: "Puma",
//     price: 450,
//     type: "shoe",  
// },
// {
//     title: "Channel",
//     price: 1200,
//     type: "bag",
// },
// {
//     title: "BMW",
//     price: 7000,
//     type: "shoe",
// },
// ];
// for(let i in product){
//     console.log(`"${product[i].title} (${product[i].price})"`);
// }




// задача 6
const product = [
    {
    title: "Nike",
    price: 300,
    type: "shoe",
},
{
    title: "Puma",
    price: 450,
    type: "shoe",  
},
{
    title: "Channel",
    price: 1200,
    type: "bag",
},
{
    title: "BMW",
    price: 7000,
    type: "shoe",
},
];


function maxPrice(product){
    let max = product[0];
    for( let i = 0; i< product.length; i++){
        if(product[i].price > max.price) 
        {
    
        max = product[i];
         }
        
     } return max;
}

 console.log(maxPrice(product));
 