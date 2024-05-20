//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// variáveis R oponenete
let xOponente = 585;
let yOponente = 150;
let velocidadeYOponente = 2;  

let colidiu = false;

//placar do jogo
let ponto = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("pink");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  // verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca(xOponente,yOponente);
  mostraRaquete(xOponente,yOponente);
  colisaoMinhaRaqueteBiblioteca(xRaquete,yRaquete);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcouPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca(x,y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}

 function movimentaRaqueteOponente() {
   
  velocidadeYOponente = yBolinha - yOponente - raqueteComprimento / 2 - 30 ;
  yOponente += velocidadeYOponente
    
  }

  function incluiPlacar() {
    stroke(255)
    textAlign(CENTER);
    textSize(20);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(ponto, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOponente, 470, 26);
}

  function marcouPonto() {
    
    if (xBolinha > 590) {
        ponto += 1;
    }
    
    if (xBolinha < 10) {
        pontosOponente += 1;
    }
}
