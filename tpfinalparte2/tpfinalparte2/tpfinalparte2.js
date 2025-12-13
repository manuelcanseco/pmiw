//Manuel Canseco
//legajo:118984/0

let juego;
let sprite = [];
let fondo = [];
let musica;

function preload() {
  for (let i = 1; i <= 8; i++) {
      sprite[i] = loadImage('data/sprite' + i + '.png');
  }
  for (let i = 1; i <= 2; i++) {
    fondo[i] = loadImage('data/fondo' + i + '.png');
  }
  musica = loadSound('data/musica.mp3');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  juego.inicializar();
}

function draw() {
  juego.dibujar();
}

function mousePressed() {
  juego.mousePressed();
}
