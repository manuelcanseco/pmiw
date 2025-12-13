class Juego {
  constructor() {
    this.Estado = 0;
    this.turno = 0;
    this.Avisos = "¡Apareció un OGRO!";
    this.Fondos = 0;
    this.pulgarcito;
    this.ogro;
    this.controlesPelea; 
    this.musica_fondo; 
    this.pantallas;
  }
  inicializar() {
    this.pulgarcito = new Pulgarcito(100);
    this.ogro = new Ogro(120);
    this.controlesPelea = new ControlesPelea();
    this.musica_fondo = musica; 
    this.pantallas = new Pantalla(this);
  }
  
  dibujar() {
    if (this.Estado === 1) {
        image(fondo[2], 0, 0); 
        this.ogro.dibujar(this);          
        this.pulgarcito.dibujar(this);    
        this.controlesPelea.dibujar(this);
    } else {
        this.pantallas.dibujar();
    }
  }

  mousePressed() {
    if (this.Estado === 1) {
      this.controlesPelea.mousePressed(this);
    } else {
      this.pantallas.mousePressed();
    }
  }

  atacar(dano, nombre, fondo) {
    this.ogro.Vida -= dano;
    if (this.ogro.Vida < 0) this.ogro.Vida = 0;
    this.Avisos = "Usaste " + nombre + ". El ogro perdio " + dano + " vida.";
    this.Fondos = fondo; 
    this.turno = 1;
    if (this.ogro.Vida <= 0) {
      this.Estado = 4;
    }
  }

  TurnoEnemigo() {
    if (this.Fondos != 4) {
       this.Fondos = 4;
       let dano_ogro = 19;
       this.pulgarcito.Vida -= dano_ogro;
       this.Avisos = "¡El ogro te pegó! Te sacó " + dano_ogro;
       if (this.pulgarcito.Vida <= 0) {
       this.Estado = 5;
       }
    } else {
       this.Fondos = 0;
       this.turno = 0;
       this.Avisos = "Tu turno. ¿Qué vas a hacer?";
    }
  }

  Reiniciar() {
    this.pulgarcito.Vida = 100;
    this.ogro.Vida = 120;
    this.turno = 0;
    this.Avisos = "¡A pelear!";
    this.Fondos = 0;
  }
}
