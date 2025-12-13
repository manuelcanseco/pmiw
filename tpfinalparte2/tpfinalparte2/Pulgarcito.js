class Pulgarcito {
  constructor(vidaInicial) {
    this.Vida = vidaInicial;
    this.PosX = 400;
    this.PosY = 140;
  }

  dibujar(juego) {
    let Fondos = juego.Fondos;

    if (Fondos == 0) {
        image(sprite[4], this.PosX, this.PosY);
    } else if (Fondos >= 1 && Fondos <= 3) {
        if (Fondos == 1) image(sprite[1], this.PosX, this.PosY);
        if (Fondos == 2) image(sprite[2], this.PosX, this.PosY);
        if (Fondos == 3) image(sprite[3], this.PosX, this.PosY);
    } else if (Fondos == 4) {
        image(sprite[5], this.PosX, this.PosY);
    }

    fill(0, 255, 0);
    textAlign(LEFT);
    rect(width - 220, height - 180, this.Vida * 2, 20);
    fill(255);
    text("PULGARCITO: " + this.Vida, width - 220, height - 190);
  }
}
