let chance1 = 1;

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let box9 = document.querySelector("#box9");
let scoreX = document.querySelector("#scoreX");
let scoreO = document.querySelector("#scoreO");
let rate = 0;
let Reset = document.querySelector("#Reset");

let clicked1 = "";
let clicked2 = "";
let clicked3 = "";
let clicked4 = "";
let clicked5 = "";
let clicked6 = "";
let clicked7 = "";
let clicked8 = "";
let clicked9 = "";

box1.addEventListener('click', () => { 
    if(chance1 % 2 == 1){
        clicked1 = "X";
        box1.innerText = "X";
    } else {
        clicked1 = "O";
        box1.innerText = "O";
    }
    chance1++;
    checkWin();
}, { once: true });

box2.addEventListener('click', () => { 
    if(chance1 % 2 == 1){
        clicked2 = "X";
        box2.innerText = "X";
    } else {
        clicked2 = "O";
        box2.innerText = "O";
    }
    chance1++;
    checkWin();
}, { once: true });

box3.addEventListener('click', () => { 
    if(chance1 % 2 == 1){
        clicked3 = "X";
        box3.innerText = "X";
    } else {
        clicked3 = "O";
        box3.innerText = "O";
    }
    chance1++;
    checkWin();
}, { once: true });

box4.addEventListener('click', () => { 
    if(chance1 % 2 == 1){
        clicked4 = "X";
        box4.innerText = "X";
    } else {
        clicked4 = "O";
        box4.innerText = "O";
    }
    chance1++;
    checkWin();
}, { once: true });

box5.addEventListener('click', () => { 
    if(chance1 % 2 == 1){
        clicked5 = "X";
        box5.innerText = "X";
    } else {
        clicked5 = "O";
        box5.innerText = "O";
    }
    chance1++;
    checkWin();
}, { once: true });

box6.addEventListener('click', () => { 
    if(chance1 % 2 == 1){
        clicked6 = "X";
        box6.innerText = "X";
    } else {
        clicked6 = "O";
        box6.innerText = "O";
    }
    chance1++;
    checkWin();
}, { once: true });

box7.addEventListener('click', () => { 
    if(chance1 % 2 == 1){
        clicked7 = "X";
        box7.innerText = "X";
    } else {
        clicked7 = "O";
        box7.innerText = "O";
    }
    chance1++;
    checkWin();
}, { once: true });

box8.addEventListener('click', () => { 
    if(chance1 % 2 == 1){
        clicked8 = "X";
        box8.innerText = "X";
    } else {
        clicked8 = "O";
        box8.innerText = "O";
    }
    chance1++;
    checkWin();
}, { once: true });

box9.addEventListener('click', () => { 
    if(chance1 % 2 == 1){
        clicked9 = "X";
        box9.innerText = "X";
    } else {
        clicked9 = "O";
        box9.innerText = "O";
    }
    chance1++;
    checkWin();
}, { once: true });

function checkWin() {
    if (clicked1 && clicked1 === clicked2 && clicked2 === clicked3){
         alert(clicked1 + " wins") ;
            if(clicked1==="X"){
                rate=rate+1
                scoreX.innerText="X - "+rate;
            }else{
                rate=rate+1
                scoreO.innerText="O - "+rate;
            }}
    else if (clicked4 && clicked4 === clicked5 && clicked5 === clicked6){
         alert(clicked4 + " wins") ;
            if(clicked4==="X"){
                rate=rate+1
                scoreX.innerText="X - "+rate;
            }else{
                rate=rate+1
                scoreO.innerText="O - "+rate;
            }}
    else if (clicked7 && clicked7 === clicked8 && clicked8 === clicked9){
         alert(clicked7 + " wins") ;
            if(clicked7==="X"){
                rate=rate+1
                scoreX.innerText="X - "+rate;
            }else{
                rate=rate+1
                scoreO.innerText="O - "+rate;
            }}
    else if (clicked1 && clicked1 === clicked4 && clicked4 === clicked7){
         alert(clicked1 + " wins") ;
            if(clicked1==="X"){
                rate=rate+1
                scoreX.innerText="X - "+rate;
            }else{
                rate=rate+1
                scoreO.innerText="O - "+rate;
            }}
    else if (clicked2 && clicked2 === clicked5 && clicked5 === clicked8){
         alert(clicked2 + " wins") ;
            if(clicked2==="X"){
                rate=rate+1
                scoreX.innerText="X - "+rate;
            }else{
                rate=rate+1
                scoreO.innerText="O - "+rate;
            }}
    else if (clicked3 && clicked3 === clicked6 && clicked6 === clicked9){
         alert(clicked3 + " wins") ;
            if(clicked3==="X"){
                rate=rate+1
                scoreX.innerText="X - "+rate;
            }else{
                rate=rate+1
                scoreO.innerText="O - "+rate;
            }}
    else if (clicked1 && clicked1 === clicked5 && clicked5 === clicked9){
         alert(clicked1 + " wins") ;
            if(clicked1==="X"){
                rate=rate+1
                scoreX.innerText="X - "+rate;
            }else{
                rate=rate+1
                scoreO.innerText="O - "+rate;
            }}
    else if (clicked3 && clicked3 === clicked5 && clicked5 === clicked7){
         alert(clicked3 + " wins") ;
            if(clicked3==="X"){
                rate=rate+1
                scoreX.innerText="X - "+rate;
            }else{
                rate=rate+1
                scoreO.innerText="O - "+rate;
            }}
}

Reset.addEventListener("click",()=>{
    location.reload();
})
