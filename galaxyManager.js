const binCount = 1024;
let particles = new Array(binCount);

function positionParticles() {
  for (let i = 0; i < particles.length; i++) {
    let x = random(0, width);
    let y = random(-height, 0);
    let position = createVector(x, y);
    let partickle = new Particle(position);
    particles[i] = partickle;
  }
}

function updateParticles(spectrum) {
  spectrum.forEach((bin, i) => {
    let binLevel = map(bin, 0, 255, 0, 1);
    particles[i].update(binLevel);
    particles[i].draw();
  });
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
