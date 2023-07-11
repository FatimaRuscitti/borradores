// 1 foto_incio.png
PImage img1;
void setup () {
  size (600,600);
  img1 = loadImage("foto inicio.png");
}
void draw () {
  background (0,0,0);
  image (img1,0,0);
  dibujaBotonRectangular( width/2, height/1.19, 150, 80, "PLAY");
}
