//Manuel Canseco
//Legajo:118984/0
//Video:https://youtu.be/sz31sGD0eDE

let escena = -1; // comienza en -1 para la pantalla de inicio
let imagenes = [];
let sonido;
let inicio;
let textos;

const BUTTON_W_GAME = 250; 
const BUTTON_W_UI = 150; 
const BUTTON_H = 40;


function preload() {
 inicio = loadImage(`data/inicio.jpg`); 
 textos = loadStrings("data/textos.txt"); 
 sonido = loadSound('data/pulgarcin.mp3');
  for (let i = 0; i < nombresImagenes.length; i++) {
    imagenes[i] = loadImage(nombresImagenes[i]);
  }
}

function setup() {
  createCanvas(640, 480);
  print(textos[0]);
}

function draw() {
  clear();

  if (escena === -1) {
    pantallaInicio();
    return;
  }
  
  if (escena === -2) {
    pantallaCreditos();
    return;
  }


  if (imagenes[escena]) {
    image(imagenes[escena], 0, 0, width, height);
  }

  fill(255);
  textAlign(LEFT, TOP);
  textSize(18);
  if (textos && textos[escena]) {
    text(textos[escena], 20, 20, width - 40, height - 100);  
  } 

  dibujarBotones();
}
