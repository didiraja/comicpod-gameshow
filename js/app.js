var i = 0;

function getTime(number){
  i = 10;
  onTimer();
};

function onTimer() {
  document.getElementById('counter').innerHTML = i + " segundos restantes!";
  i--;
  if (i < 0) {
    confirm('Tempo Encerrado!!!');
  }
  else {
    setTimeout(onTimer, 1000);
  }
};

var array = [
  "1. Tema um",
  "2. Tema dois",
  "3. Tema três",
  "4. Tema quatro",
  "5. Tema cinco",
];

function drawNext(){
  if(array.length == 0){
    document.getElementById('theme').innerHTML = "<p>"+"</p>"+" Os Temas Acabaram!"
  }
  else{
    var index = Math.floor( Math.random()*array.length );
    console.log( array[index] ); // Log the item
    document.getElementById('theme').innerHTML = "<p>"+"</p>"+array[index];
    document.getElementById('sub-'+index).checked = true;
    array.splice( index, 1 );
  }
};

function drawSides(){
  arrowLeft = "<p class='sides-arrow'><---</p>";
  arrowRight = "<p class='sides-arrow'>---></p>";	
  sides = ["<b class='sides-text' style='color:green;'>\tConcorda\t</b>", "<b class='sides-text' style='color:red;'>\tDiscorda\t</b>"];
  shuffle(sides);

  document.getElementById('sides').innerHTML = "<br />" + arrowLeft + sides + arrowRight;
}

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
