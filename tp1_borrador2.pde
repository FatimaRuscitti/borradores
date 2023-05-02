//declaracion con asignacion:
String estado = "inicio";
//
int cuentaFotograma = 0;
PImage img;

void setup() {
  size(640, 480);
  //60 fps por defecto
  frameRate(30); //lo establecemos en 30
   img = loadImage("artedigital.png");
}

void draw() {
  //println( frameRate ); //muestra los fps reales
  background(#6CA2AF);
  textSize(18);
  textAlign(LEFT);
  text( cuentaFotograma, 20, 40);
  text( estado, 20, 55);

  if ( estado.equals("inicio") ) {
    //pantalla de inicio:
    fill(100);
    ellipse(width/2, 290, 100, 100);
    fill(0);
    textAlign(CENTER);
     textSize(30);
    text("Play", 320, 300 );
  } else if ( estado.equals("pantalla 1")  ) {
    
    //pantalla 1:
    image(img,-40,100);
    fill(0);
    textAlign(CENTER);
    textSize ( 40 );
    text("CryptoPunk #7804", width/2, cuentaFotograma );
    textSize(20);
    text("Autor: Matt Hall y John Watkinson", width/2, cuentaFotograma+20 );
    textSize(20);
    text("desarrollador: Larva Labs", width/2, cuentaFotograma+35 );

    //incremento del contador:
    cuentaFotograma++;
    //cuentaFotograma = cuentaFotograma+1;
    if ( cuentaFotograma>= 190 ) {
      estado = "pantalla 2";
      cuentaFotograma = 0;
    }
  } else if ( estado.equals("pantalla 2") ) {

    //pantalla 2:
    fill(0,map(cuentaFotograma,0,150,0,255));
    textAlign(CENTER);
    textSize(40);
    text("CryptoPunk #7804", width/2, height/2 );
    textSize(20);
    text("Año: 1978", width/2, height/2+20 );

    //incremento del contador:
    cuentaFotograma++;
    //cuentaFotograma = cuentaFotograma+1;
    if ( cuentaFotograma>= 150 ) {
      estado = "pantalla 3";
      cuentaFotograma = 0;
    }
  } else if ( estado.equals("pantalla 3") ) {

    //pantalla 3:
    fill(0);
    textAlign(CENTER);
    textSize(30);
    text("CryptoPunk #7804", width/2, height/2 );
    textSize(20);
    fill(0,map(cuentaFotograma,0,150,0,255));
    text("Premios: Mingo de Oro (1979)", width/2, height/2+20 );

    //incremento del contador:
    cuentaFotograma++;
    if ( cuentaFotograma>= 150 ) {
      estado = "inicio";
    }
  }
}

void mousePressed() {
  if ( estado.equals("inicio") ) {
    if ( dist(mouseX, mouseY, width/2, 300) < 50 ) {
      
      estado = "pantalla 1";
      cuentaFotograma = 0;
    }
  } else if ( estado.equals("pantalla 1") ) {
    estado = "pantalla 2";
    cuentaFotograma = 0;
  } else if ( estado.equals("pantalla 2") ) {
    estado = "pantalla 3";
    cuentaFotograma = 0;
  } else if ( estado.equals("pantalla 3") ) {
    estado = "inicio";
    cuentaFotograma = 0;
  }
}
