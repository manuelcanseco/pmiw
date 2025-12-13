class ControlesPelea {

  dibujar(juego) {
    let Avisos = juego.Avisos;
    let BotonesY = height - 90;
    fill(50);
    rect(0, height-150, width, 150);
    fill(255);
    textAlign(LEFT);
    text(Avisos, 30, height - 130);
    stroke(180);
    fill(100, 100, 200);
    rect(20, BotonesY, 140, 40);
    rect(170, BotonesY, 140, 40);
    rect(320, BotonesY, 140, 40);
    fill(200, 100, 100);
    rect(470, BotonesY, 140, 40);
    fill(255);
    textAlign(CENTER);
    text("Golpe", 90, BotonesY + 25);
    text("Fuerte", 240, BotonesY + 25);
    text("Patada", 390, BotonesY + 25);
    text("Huir", 540, BotonesY + 25);
  }
  mousePressed(juego) {
    let BotonesY = height - 90;

    if (juego.turno == 0) {
      if (mouseX > 20 && mouseX < 160 && mouseY > BotonesY && mouseY < BotonesY + 40) {
         juego.atacar(15, "Golpe suave", 1);
      }
      if (mouseX > 170 && mouseX < 310 && mouseY > BotonesY && mouseY < BotonesY + 40) {
         juego.atacar(25, "GOLPE FUERTE!", 2);
      }
      if (mouseX > 320 && mouseX < 460 && mouseY > BotonesY && mouseY < BotonesY + 40) {
         juego.atacar(20, "Patada", 3);
      }
      if (mouseX > 470 && mouseX < 610 && mouseY > BotonesY && mouseY < BotonesY + 40) {
         juego.Estado = 0;
         juego.musica_fondo.stop();
         juego.Reiniciar();
      }
    }
    else {
       juego.TurnoEnemigo();
    }
  }
}
