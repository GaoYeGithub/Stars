let fft;
let starImage;
let song;

let Particle = function(position) {
  this.position = position;
  this.speed = createVector(0, random(0.5, 2));
  this.angle = 0;
  this.rotationSpeed = random(0.01, 0.05);

  this.draw = function() {
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(starImage, 0, 0, this.diameter, this.diameter);
    pop();
  };

  this.update = function(energy) {
    this.position.y += this.speed.y * energy * 10;
    if (this.position.y > height) {
      this.position.y = random(-height, 0);
    }
    this.diameter = random(5, 7) + (energy * 100);
    this.angle += this.rotationSpeed;
  };
};

function preload() {
  starImage = loadImage('star.png');
  song = loadSound('song.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  fft = new p5.FFT();
  fft.setInput(song);

  positionParticles();
  song.loop();
}

function draw() {
  background(0, 0, 0);

  let spectrum = fft.analyze();
  updateParticles(spectrum);
}
