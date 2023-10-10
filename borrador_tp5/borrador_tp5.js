let jugador;
let circuloVerde; 
let enemigos = [];
let puntuacion = 0;
let estado = 0; // 0 para pantalla de inicio, 1 para juego
let juego;


function setup() {
  createCanvas(400, 400);
  noStroke();
  textSize(18);
  textAlign(CENTER);
  reiniciarJuego();
}

function draw() {
  if (estado === 0) {
    // Pantalla de inicio
    background(0);
    fill(255);
    text("Presiona Enter para empezar", width / 2, height / 2);
    fill(255);
    text("DEBES LLEGAR AL CIRULO VERDE \n SIN MORIR EN EL INTENTO", width / 2, height / 4);
  } else if (estado === 1) {
    // Juego
    background(0);

    jugador.mostrar();
    jugador.mover();

    circuloVerde.mostrar();

    for (let i = 0; i < enemigos.length; i++) {
      enemigos[i].mostrar();
      enemigos[i].mover();
      if (jugador.colision(enemigos[i])) {
        finDeJuego = true;
      }
    }

    if (jugador.colision(circuloVerde)) {
      puntuacion++;
      circuloVerde.reset();
    }

    fill(255);
    text(`Puntuación: ${puntuacion}`, width / 2, 30);

    if (puntuacion >= 5) {
      finDeJuego = true;
      fill(0, 255, 0);
      text("¡Ganaste! Presiona R para reiniciar", width / 2, height / 2);
    }

    if (finDeJuego) {
      estado = 2;
    }
  } else if (estado == 2) {
    // Pantalla de Game Over
    background(0);
    fill(255);
    text("¡Game Over! Presiona R para reiniciar", width / 2, height / 2);
  }
}

function keyPressed() {
  if (estado === 0 && keyCode === ENTER) {
    estado = 1;
  } else if (estado === 1) {
    if (key === 'p' || key === 'P') {
      if (finDeJuego) {
        reiniciarJuego();
        estado = 0;
      } else {
        finDeJuego = !finDeJuego;
      }
    }
  } else if (estado === 2) {
    if (key === 'r' || key === 'R') {
      reiniciarJuego();
      estado = 0;
    }
  }
}

function reiniciarJuego() {
  jugador = new Jugador(width / 2, height / 2);
  circuloVerde = new CirculoVerde(); // Cambiado de circuloVerde() a CirculoVerde()
  puntuacion = 0;
  finDeJuego = false;
  enemigos = [];
  for (let i = 0; i < 15; i++) {
    enemigos.push(new Enemigo(random(width), random(height)));
  }
}
