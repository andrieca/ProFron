const body = document.querySelector('body');

// const colors = [
//     {color : "red"},
//     {color : "blue"},
//     {color : "green"},
//     {color : "yellow"},
// ]
// let Ul = document.createElement("ul");
// Ul.style.margin = "40px";
// Ul.style.fontSize = "30px";


// function getColor(colors){
    
//     for(let i=0; i< colors.length; i++){  
//     let Li = document.createElement('li');
//     Li.innerText= colors[i].color;

//     Li.onmouseover = () =>{
//         body.style.backgroundColor = Li.innerText;   
//     }
//     Li.onmouseout =() =>{
//         body.style.backgroundColor = "white";
//     }

//     Ul.append(Li);
//     body.append(Ul);
//     }
// }

// getColor(colors);




// // задача 2
// let p = document.createElement("p");
// p.style.width = "500px";
// p.style.height = "100px";
// p.style.padding = "15px";
// p.style.margin = "15px";
// p.style.border = "2px solid blue";


// let btn = document.createElement("button");
// btn.style.width = "80px";
// btn.style.marginLeft = "230px";

// p.innerText= "Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.";
// btn.innerText = "Click";
// body.append(p);
// body.append(btn);

// btn.onclick = () =>{
//     if(p.innerText === ""){
//         p.innerText= "Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно.";
//     } else
//     p.innerText = "";
// }


// задача 3
const arr =[
    {name : "Лига монстров",
     content :"В мире, где монстры живут бок о бок с людьми, чудища‑спортсмены участвуют в невероятно популярных состязаниях по реслингу. Девочка Винни мечтает стать тренером и берёт под свою опеку монстра‑неудачника, чтобы превратить его в чемпиона."},

    {name : "Монстри на каникулах: Трансформация",
     content :"Уже четвёртый фильм в серии о приключениях незадачливого графа Дракулы, владельца отеля «Трансильвания». На этот раз он и его друзья станут жертвами таинственного луча, превращающего монстров в людей и наоборот."},

    {name : "Ледниковий период: Приключения Бака",
     content :"Братья опоссумы ищут новый дом. Им вновь придётся отправиться в путешествие, в котором они встретятся с самыми разными обитателями своего времени." },

    {name : "Пламенное сердце",
    content :"Франко‑канадский мультфильм рассказывает о девочке Джорджии, которая с самого детства мечтала стать пожарной, как её отец. Но так как учиться этой профессии берут только парней, она решает притвориться мужчиной."},

    {name : "Странній мир",
    content : "Семья исследователей изучает самые странные места в мире, решает сложные задачи и избегает ловушек. И ради самой тяжёлой миссии им придётся забыть о личных разногласиях."},
]
for( let i=0; i<arr.length; i++){
    let menu = document.createElement("div");
    menu.style.display = "inline-block";
    menu.style.width = "300px";
    menu.style.margin = "15px";
    menu.style.padding = "15px";

    let film = document.createElement("h2");
    film.innerText= arr[i].name;


    let cont = document.createElement("p");

    film.onclick = () =>{

    cont.innerText= arr[i].content;
    cont.style.backgroundColor = "bisque";
    cont.style.height= "350px";
    cont.style.padding= "15px";
    cont.style.margin = "15px";
    };
    body.style.display = "flex";
    body.style.justifyContent = "space-evenly";

    menu.append(film, cont);
        body.append(menu);}
