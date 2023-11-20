class Pantalla {
  constructor(numero, color, mensaje, imagen) {
    this.numero = numero;
    this.color = color;
    this.mensaje = mensaje;
    this.imagen = imagen;
  }

  mostrar() {
    fill(this.color);
    ellipse(width / 2, height / 2, 100, 100);
    fill(0);
    text(this.mensaje, width / 2, height / 2 + 50);

    // Verificar si hay una imagen y dibujarla
    if (this.imagen) {
      image(this.imagen, 0, 0, width, height);
    }
  }
}

// ...

let pantallas = [];
let boton;
let imagen001;  // Variable para almacenar la imagen "001"

function preload() {
  // Cargar la imagen antes de iniciar el programa
  imagen001 = loadImage('data/001.png');  // Asegúrate de que la imagen esté en la misma carpeta
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(20);

  // Crear instancias de Pantalla
  pantallas.push(new Pantalla(1, color(255, 0, 0), "Pantalla 1: Círculo Rojo"));
  pantallas.push(new Pantalla(2, color(0, 255, 0), "Pantalla 2: Círculo Verde", imagen001));
  pantallas.push(new Pantalla(3, color(0, 0, 255), "Pantalla 3: Círculo Azul"));
  pantallas.push(new Pantalla(4, color(255, 255, 0), "Pantalla 4: Círculo Amarillo"));

  // ...
}
