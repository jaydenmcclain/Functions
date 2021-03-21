var wrap = document.body.querySelector(".wrap")
var begin = 0;
var fireDamage = 3;
var iceDamage = 2;
var poisonDamage = 4;
var health;
 
function start(fire){
  var box = document.createElement("div");
  var health = begin += fireDamage;
  box.innerHTML = "Total Dragon Damage: " + health;
  wrap.appendChild(box);
    if(begin <=10){ 
  var box3 = document.createElement("div");
  var health = begin;
  box3.innerHTML = "Dragon Damage: " + health;
  wrap.appendChild(box3);
  }
  else{
  winning();  
  }
}

function ice(){
  var box2 = document.createElement("div");
  var health = begin += iceDamage;
  box2.innerHTML = "Total Dragon Damage: " + health;
  wrap.appendChild(box2);
  if(begin <=10){ 
 var box3 = document.createElement("div");
  var health = begin;
  box3.innerHTML = "Dragon Damage: " + health;
  wrap.appendChild(box3);
  }
  else{
  winning();  
  }
}
 
function poison(){
  var box3 = document.createElement("div");
  var health = begin += poisonDamage;
  box3.innerHTML = "Total Dragon Damage: " + health;
  wrap.appendChild(box3);
  if(begin <=10){ 
 var box3 = document.createElement("div");
  var health = begin;
  box3.innerHTML = "Dragon Damage: " + health;
  wrap.appendChild(box3);
  }
  else{
  winning();  
  }
}
  
//this is the function for displaying "You Win" when hitting the Final Damage button
 function winning(){
   var box3 = document.createElement("div");
   box3.innerHTML = "YOU WIN";
   wrap.appendChild(box3);
 }
//This where the clickers start

document.body.querySelector(".clicker1").addEventListener("click", function(){
  start();
})
 
document.body.querySelector(".clicker2").addEventListener("click", function(){
  ice();
})
 
document.body.querySelector(".clicker3").addEventListener("click", function(){
  poison();
})