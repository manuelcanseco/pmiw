class Pantalla {
  constructor(juego) {
    this.juego = juego;
  }

  dibujarMenu() { 
    image(fondo[1], 0, 0, width, height);
    textSize(16);
    textAlign(CENTER);
    stroke(200);
    fill(100, 100, 200);
    rect(width/2 - 75, 200, 150, 40);
    fill(255);
    text("JUGAR", width/2, 225);
    fill(100, 100, 200);
    stroke(200);
    rect(width/2 - 75, 260, 150, 40);
    fill(255);
    text("TUTORIAL", width/2, 285);
    fill(100, 100, 200);
    stroke(200);
    rect(width/2 - 75, 320, 150, 40);
    fill(255);
    text("CREDITOS", width/2, 345);
  }
  
  dibujarTutorial() {
    image(fondo[1], 0, 0);
    fill(0, 0, 0, 200);
    rect(0, 0, 640, 480);
    textAlign(CENTER);
    fill(255);
    textSize(16);
    text("1. Objetivo: Derrotar al OGRO.\n\n2. Turnos: La batalla es por turnos.\n\n3. Ataques: Elige entre los 3 ataques. Puedes huir para reiniciar.", width / 2 - 150, height / 3 + 20, 300);    
    fill(100);
    rect(width/2 - 50, 400, 100, 40);
    fill(255);
    text("VOLVER", width/2, 425);
  }

  dibujarCreditos() {
    image(fondo[1], 0, 0);
    fill(0, 0, 0, 200);
    rect(0, 0, 640, 480);
    textAlign(CENTER);
    fill(255);
    text("Hecho por Manuel Canseco", width/2, 200);
    text("Legajo: 118984/0", width/2, 240);
    fill(100);
    rect(width/2 - 50, 400, 100, 40);
    fill(255);
    text("VOLVER", width/2, 425);
  }
  
  dibujarGanaste() {
    image(fondo[1], 0, 0);
    fill(0, 0, 0, 200);
    rect(0, 0, 640, 480);
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("GANASTE!", width/2, height/2);
    textSize(20);
    text("toca para reiniciar", width/2, height/2 + 50);
  }
  
  dibujarPerdiste() {
    image(fondo[1], 0, 0);
    fill(0, 0, 0, 200);
    rect(0, 0, 640, 480);
    fill(255);
    textSize(40);
    textAlign(CENTER);
    text("PERDISTE...", width/2, height/2);
    textSize(20);
    text("toca para reiniciar", width/2, height/2 + 50);
  }
  
  dibujar() {
    if (this.juego.Estado === 0) this.dibujarMenu();
    else if (this.juego.Estado === 2) this.dibujarCreditos();
    else if (this.juego.Estado === 3) this.dibujarTutorial();
    else if (this.juego.Estado === 4) this.dibujarGanaste();
    else if (this.juego.Estado === 5) this.dibujarPerdiste();
  }

  mousePressedMenu() {
    if (mouseX > width/2 - 75 && mouseX < width/2 + 75 && mouseY > 200 && mouseY < 240) {
        this.juego.Estado = 1;
        this.juego.Reiniciar();
        if (this.juego.musica_fondo.isLoaded() && !this.juego.musica_fondo.isPlaying()) {
            this.juego.musica_fondo.loop();
        }
    }
    if (mouseX > width/2 - 75 && mouseX < width/2 + 75 && mouseY > 260 && mouseY < 300) {
        this.juego.Estado = 3;
    }
    if (mouseX > width/2 - 75 && mouseX < width/2 + 75 && mouseY > 320 && mouseY < 360) {
        this.juego.Estado = 2;
    }
  }
  
  mousePressedVolverCyT() {
    if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > 400 && mouseY < 440) {
        this.juego.Estado = 0;
    }
  }
  
  mousePressedFinDeJuego() {
    this.juego.Estado = 0;
    this.juego.musica_fondo.stop();
  }
  
  mousePressed() {
    if (this.juego.Estado === 0) {
      this.mousePressedMenu();
    }
    else if (this.juego.Estado === 2 || this.juego.Estado === 3) {
      this.mousePressedVolverCyT();
    }
    else if (this.juego.Estado === 4 || this.juego.Estado === 5) {
      this.mousePressedFinDeJuego();
    }
  }
}
