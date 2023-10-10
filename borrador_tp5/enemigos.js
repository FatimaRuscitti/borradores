class Enemigo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 15;
  }

  mostrar() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.tamano);
  }

  mover() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }
}
