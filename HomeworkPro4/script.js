const body = document.querySelector('body');

const foto = [
    "https://gamerwall.pro/uploads/posts/2022-06/1655517648_1-gamerwall-pro-p-zakat-na-beregu-morya-priroda-krasivo-foto-1.jpg" ,
    "https://gtn-pravda.ru/static/2015/07/zakat.jpg ",
    "https://miro.medium.com/max/1024/1*YvdMSIbFe6wIlxtT5nh8cQ.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiaOOAKrQQbMp-Lpf1-O_pGZvQaMSO3I5po4diy2AMm2ZvgE8W4pTBqLiuqov1IIgy3c&usqp=CAU",

]

const div1 = document.querySelector(".mini");
for(i=0; i < foto.length; i++){
    

    let img1 = document.createElement("img");
    img1.setAttribute("src",foto[i]);

    let newA = document.createElement("a");
    newA.setAttribute("href", foto[i]);

    newA.append(img1);
    div1.append(img1);
    body.append(div1);

     img1.onclick = () =>{
       let div2= document.querySelector(".big");
       let img2 = document.createElement("img");
       img2.setAttribute("src", newA);

       div2.textContent= ""
   
        div2.append(img2);
        body.append(div2);

        }

    }
