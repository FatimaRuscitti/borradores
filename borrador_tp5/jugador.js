class Jugador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 20;
  }

  mostrar() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.tamano);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 3;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 3;
    }
  }

  colision(objeto) {
    let d = dist(this.x, this.y, objeto.x, objeto.y);
    return d < this.tamano / 2 + objeto.tamano / 2;
  }
}
