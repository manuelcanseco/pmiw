function mouseDentro(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function dibujarBoton(x, y, w, h, texto) {
  let isHover = mouseDentro(x, y, w, h);
  fill(isHover ? color(180, 150, 100) : color(120, 60, 32)); 
  noStroke();
  rect(x, y, w, h, 8);
  push();
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
  pop();
}


function dibujarBotones() {
  let e = escenas[escena];
  const buttonW = BUTTON_W_GAME; 
  const buttonH = BUTTON_H;
  const buttonY = height - 60;


  if (e[0] !== "") { 
    
    let x1 = width / 2 - buttonW - 20; 
    dibujarBoton(x1, buttonY, buttonW, buttonH, e[0]);
  }

  // Boton 2
  if (e[2] !== "") { 
    let x2 = width / 2 + 20; 
    dibujarBoton(x2, buttonY, buttonW, buttonH, e[2]);
  }
}


function cambiarEscena(nueva) {
  if (nueva >= -2 && nueva < escenas.length) { 
    escena = nueva;
  }
  if (nueva === -1 && typeof sonido !== 'undefined' && sonido && sonido.isPlaying()) {
      sonido.stop();
  }
}

function pantallaInicio() {
  const buttonW = BUTTON_W_UI; 
  const buttonH = BUTTON_H;
  const x_btn = width / 2 - buttonW / 2; 
  
  fill(30, 40, 50); 
  rect(0, 0, width, height);
  if (inicio) {
    image(inicio, 0, 0, width, height);
  }
  push();
  textAlign(CENTER, CENTER);
  
  textSize(25);
  fill(255, 255, 255);
  stroke(20, 20, 20);
  strokeWeight(3);
  text("LAS AVENTURAS DE PULGARCITO", width / 2, height / 4);

  dibujarBoton(x_btn, height / 2 - 20, buttonW, buttonH, "INICIAR");
  dibujarBoton(x_btn, height / 2 + 40, buttonW, buttonH, "CRÉDITOS");
  pop();
}

function pantallaCreditos() {
    const buttonW = BUTTON_W_UI; 
    const buttonH = BUTTON_H;
    const x_btn = width / 2 - buttonW / 2; 
    
    fill(40, 60, 80); 
    rect(0, 0, width, height);
    if (inicio) {
    image(inicio, 0, 0, width, height);
  }
    push();
    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();

    textSize(28);
    text("CRÉDITOS", width / 2, height / 4);

    textSize(16);
    textAlign(LEFT, TOP);
    let creditText = "MANUEL CANSECO \n COMISION 5 \n LEGAJO: 118984/0"
    text(creditText, width / 2 - 150, height / 3 + 20, 300, 200);

    dibujarBoton(x_btn, height - 80, buttonW, buttonH, "VOLVER");
    pop();
}

function mousePressed() {
  const buttonW_UI = BUTTON_W_UI; 
  const buttonH_UI = BUTTON_H; 
  const x_btn_UI = width / 2 - buttonW_UI / 2; 

  
  if (escena === -1) {
    // boton incia
    if (mouseDentro(x_btn_UI, height / 2 - 20, buttonW_UI, buttonH_UI)) {
      cambiarEscena(0); 
      if (typeof sonido !== 'undefined' && sonido && !sonido.isPlaying()) {
          sonido.loop(); 
      }
    }
    
    // boton cerditos
    if (mouseDentro(x_btn_UI, height / 2 + 40, buttonW_UI, buttonH_UI)) {
      cambiarEscena(-2); 
    }
    return;
  }

  if (escena === -2) {
    let y_btn = height - 80;
    // boton volver
    if (mouseDentro(x_btn_UI, y_btn, buttonW_UI, buttonH_UI)) {
      cambiarEscena(-1); 
    }
    return; 
  }
  
  let e = escenas[escena];
  const buttonW = BUTTON_W_GAME; 
  const buttonH = BUTTON_H; 
  const buttonY = height - 60;

  if (e[0] !== "") { 
    let x1 = width / 2 - buttonW - 20; 
    if (mouseDentro(x1, buttonY, buttonW, buttonH)) {
      cambiarEscena(e[1]);
    }
  }

  if (e[2] !== "") {
    let x2 = width / 2 + 20; 
    if (mouseDentro(x2, buttonY, buttonW, buttonH)) {
      cambiarEscena(e[3]);
    }
  }
}
