var canvas,backgroundImage ;
var gameState = 0 ;
var playerCount;
var database ;
var form,player,game

function setup(){
  
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(500,500);

  game = new Game()
  game.gameState()
  game.start()
}

function draw(){
  
}

