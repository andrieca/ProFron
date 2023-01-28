// const body = document.querySelector("body");
// const cars = [
//     {
//       title: "BMW",
//       price: "40000",
//       count: "15",
//     },
//     {
//       title: "Toyota",
//       price: "25000",
//       count: "13",
//     },
//     {
//       title: "Ford",
//       price: "15000",
//       count: "26",
//     },
//     {
//       title: "Chevrolet",
//       price: "5000",
//       count: "60",
//     },
//     {
//       title: "Mercedes",
//       price: "30000",
//       count: "20",
//     },
//   ];
//   for (let i =0;i< cars.length; i++){
//     let carlist = document.createElement("ol");

//     let title = document.createElement("li");
//     title.innerText =cars[i].title;

//     let price = document.createElement("li");
//     price.innerText =cars[i].price;

//     let count = document.createElement("li");
//     count.innerText =cars[i].count;

//     let sum = document.createElement("li");
//     sum.innerText =cars[i].price*cars[i].count;
    

//     carlist.append(title,price,count,sum);
//     body.append(carlist);
//   }
  
//   let sum2 = 0;
//    for(let key =0; key< cars.length; key++){

//     sum2 += +cars[key].count;
//   }
//     let sumAll = document.createElement("p");
//     sumAll.innerText = `Total cars: ${sum2}`;

//    body.append(sumAll);
  


// function countAll(arr){
//   let sum3 = 0;
//   for(let key in arr){
//     sum3 += +cars[key].price*cars[key].count;
   
//   }
//   let countAll = document.createElement("p");
//   countAll.innerText = `Total cost: ${sum3}$`;

// body.append(countAll);
// }

// countAll(cars);



// задача2

// const body = document.querySelector("body");
// const Name = document.createElement("table");
  // // Name.setAttribute("table");

  // let num = document.createElement("tr");
  // let str1 = document.createElement("th");
  // str1.innerText = "№";
  // let str2 = document.createElement("th");
  // str2.innerText = "Full Name";
  // let str3 = document.createElement("th");
  // str3.innerText = "Position";
  // let str4 = document.createElement("th");
  // str4.innerText = "Salary";

  // let Bill = document.createElement("tr");
  // let str1B = document.createElement("td");
  // str1B.innerText = "1";
  // let str2B = document.createElement("td");
  // str2B.innerText = "Bill Gates";
  // let str3B = document.createElement("td");
  // str3B.innerText = " Founder Microsoft";
  // let str4B = document.createElement("td");
  // str4B.innerText = "$1000";


  // let Steve = document.createElement("tr");
  // let str1S = document.createElement("td");
  // str1S.innerText = "2";
  // let str2S = document.createElement("td");
  // str2S.innerText = "Steve Jobs";
  // let str3S = document.createElement("td");
  // str3S.innerText = "Founder Apple";
  // let str4S = document.createElement("td");
  // str4S.innerText = "$1200";


  // let Larry = document.createElement("tr");
  // let str1L = document.createElement("td");
  // str1L.innerText = "3";
  // let str2L = document.createElement("td");
  // str2L.innerText = "Larry Page";
  // let str3L = document.createElement("td");
  // str3L.innerText = "Founder Googl";
  // let str4L = document.createElement("td");
  // str4L.innerText = "$1100";


  // let Mark = document.createElement("tr");
  // let str1M = document.createElement("td");
  // str1M.innerText = "4";
  // let str2M = document.createElement("td");
  // str2M.innerText = "Mark Zuckeberg";
  // let str3M = document.createElement("td");
  // str3M.innerText = "Founder Facebook";
  // let str4M = document.createElement("td");
  // str4M.innerText = "$1300";



  // num.append(str1, str2 , str3 , str4);
  // Bill.append(str1B,str2B,str3B,str4B);
  // Steve.append(str1S,str2S,str3S,str4S);
  // Larry.append(str1L,str2L,str3L,str4L);
  // Mark.append(str1M,str2M,str3M,str4M);
  // Name.append(num , Bill, Steve, Larry,Mark);
  // body.append(Name);





  // вариант2
  // const body = document.querySelector("body");
  // const Founder = [
  //   {
  //     number : "№",
  //     name : "Full Name" ,
  //     position : "Position",
  //     salary : "Salary",

  //   },
  //   {
  //     number : "1",
  //     name : "Bill Gates" ,
  //     position : "Founder Microsoft",
  //     salary : "$ 1000",

  //   },
  //   {
  //     number : "2",
  //     name : "Steve Jobs" ,
  //     position : "Founder Apple",
  //     salary : "$ 1200",

  //   },
  //   {
  //     number : "3",
  //     name : "Larry Page" ,
  //     position : "Founder Google",
  //     salary : "$ 1100",

  //   },
  //   {
  //     number : "4",
  //     name : "Mark Zuckeberg" ,
  //     position : "Founder Facebook",
  //     salary : "$ 1300",

  //   }
  //  ]

  //  function Tabl (arr){
  //   for(i=0; i < arr.length; i++){
  //     const Name = document.createElement("table");
  //  Name.setAttribute("table",4);

  //     let num = document.createElement("tr");
  // let str1 = document.createElement("td");
  // str1.innerText = arr[i].number;
  // let str2 = document.createElement("td");
  // str2.innerText = arr[i].name;
  // let str3 = document.createElement("td");
  // str3.innerText = arr[i].position;
  // let str4 = document.createElement("td");
  // str4.innerText = arr[i].salary;


  // num.append(str1,str2,str3,str4);
  // Name.append(num);
  // body.append(Name);
  //   }
  //  }
  // console.log(Tabl(Founder));

