class Ogro {
  constructor(vidaInicial) {
    this.Vida = vidaInicial;
    this.PosX = 60;
    this.PosY = 80;
  }

  dibujar(juego) {
    let Fondos = juego.Fondos;

    if (Fondos == 0) {
        image(sprite[6], this.PosX, this.PosY);
    } else if (Fondos >= 1 && Fondos <= 3) {
        image(sprite[8], this.PosX, this.PosY);
    } else if (Fondos == 4) {
        image(sprite[7], this.PosX, this.PosY);
    }
    
    fill(255, 0, 0);
    textAlign(LEFT);
    rect(20, 20, this.Vida * 2, 20);
    fill(255);
    text("OGRO: " + this.Vida, 20, 15);
  }
}
