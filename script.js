'use strict';
// console.log(document.querySelector('.message').textContent);
// (document.querySelector('.guess').value)=2;

// Generating global random no
let randomGlobal=Math.trunc(Math.random()*20)+1;
 //console.log(randomGlobal);

 // global counter for decreasing score;
 let newValue= document.querySelector('.score').textContent;


// adding eventListner to check! 
document.querySelector('.check').addEventListener('click',function(){
    //console.log(22);
    // on clicking that button, value that user enter should be fetch and mathch with radomGlobal
    // const randomLocal=Math.trunc(Math.random()*20)+1;
    // document.querySelector('.guess').value=randomLocal;
   // console.log(document.querySelector('.guess').value);


// on each click score decreases by one till it match in 2 cases only;
// newValue-=1;
// document.querySelector('.score').textContent=newValue;
// console.log(newValue);
  // console.log(document.querySelector('.score').textContent);

   const randomLocal=Number(document.querySelector('.guess').value);
 // console.log(typeof randomLocal);
// if value match then message text should be change and ? should be replace with actual globalRandomno
   if(randomGlobal===randomLocal){

    document.querySelector('.message').textContent='✨Correct Number!';

    // changing the ? text according to randomGlobal;
    document.querySelector('.number').textContent=randomGlobal;

    // background color of body should change to green
    document.querySelector('body').style.backgroundColor="green";
    // Highest score will be update be newValue if its greater than current score;
    //console.log(document.querySelector('.highscore').textContent);
    if(newValue>document.querySelector('.highscore').textContent)
       document.querySelector('.highscore').textContent=newValue;

   }

   // if randomLocal<randomGlobal
   // score should be dereases 
   // message should be too less;


   // if score===newValue is >0 then only do all other wise you lost the game;
   if(newValue>1){
    if(randomLocal<randomGlobal){
        document.querySelector('.message').textContent='📉 Too low!';
        newValue-=1;
        document.querySelector('.score').textContent=newValue;
    
       }
       if(randomLocal>randomGlobal){
        document.querySelector('.message').textContent='📈 Too high!';
        newValue-=1;
        document.querySelector('.score').textContent=newValue;
    
       }
       // when no i/p and press button  no number!
       if(randomLocal===0){
        document.querySelector('.message').textContent='💀 No number!';
    
       }

   }
   if(newValue===0){
    document.querySelector('.message').textContent='✘ You lost the game!';

   }

   
})

// on clicking Again page should be refresh
// use location.reload();

document.querySelector('.again').addEventListener("click",function(){
    // this will reload the whole web page but we want highscore to be preserve;
   // location.reload();
   document.querySelector('.message').innerHTML='Start guessing...';
   document.querySelector('.score').innerHTML=20;
   newValue=20;
   document.querySelector('.number').textContent='?';
   document.querySelector('body').style.backgroundColor="#8AAAE5";

   document.querySelector('.guess').value='';
   randomGlobal=Math.trunc(Math.random()*20)+1;
  // console.log(randomGlobal);
   
})