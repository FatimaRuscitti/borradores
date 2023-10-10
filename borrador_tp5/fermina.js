class CirculoVerde { // Cambiado de circuloVerde a CirculoVerde
  constructor() {
    this.reset();
    this.tamano = 35;
  }

  mostrar() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.tamano);
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
  }
}
