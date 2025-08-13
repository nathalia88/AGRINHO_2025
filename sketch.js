let cityBuildings = [];
let farmElements = [];

function setup() {
  createCanvas(800, 600);
  noStroke();
  
  // Criando elementos da cidade
  for (let i = 0; i < 10; i++) {
    let building = {
      x: random(500, 750),
      y: random(200, 400),
      w: random(30, 50),
      h: random(50, 150)
    };
    cityBuildings.push(building);
  }
  
  // Criando elementos do campo
  for (let i = 0; i < 5; i++) {
    let element = {
      x: random(100, 300),
      y: random(400, 550),
      w: random(40, 70),
      h: random(30, 60)
    };
    farmElements.push(element);
  }
}

function draw() {
  background(220);
  
  // Desenhando o céu
  drawSky();
  
  // Desenhando o campo
  drawField();
  
  // Desenhando os elementos do campo
  drawFarmElements();
  
  // Desenhando a cidade
  drawCity();
  
  // Conectando campo e cidade
  drawConnection();
}

function drawSky() {
  let gradient = drawingContext.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, '#87CEEB');  // Cor do céu (azul)
  gradient.addColorStop(1, '#FFFFFF');  // Cor do céu perto do horizonte (branco)
  drawingContext.fillStyle = gradient;
  rect(0, 0, width, height);
}

function drawField() {
  fill(34, 139, 34);  // Verde do campo
  rect(0, 400, width, 200);  // Representa o campo
}

function drawFarmElements() {
  fill(139, 69, 19);  // Cor da madeira (para representar árvores ou pequenos edifícios)
  for (let elem of farmElements) {
    rect(elem.x, elem.y, elem.w, elem.h);
  }
}

function drawCity() {
  fill(169, 169, 169);  // Cor de concreto
  for (let building of cityBuildings) {
    rect(building.x, building.y, building.w, building.h);
  }
}

function drawConnection() {
  // Desenhando linhas que conectam o campo e a cidade
  stroke(255, 215, 0);  // Cor amarela brilhante
  strokeWeight(3);
  
  for (let i = 0; i < farmElements.length; i++) {
    let farmX = farmElements[i].x + farmElements[i].w / 2;
    let farmY = farmElements[i].y + farmElements[i].h / 2;
    let cityX = cityBuildings[i % cityBuildings.length].x + cityBuildings[i % cityBuildings.length].w / 2;
    let cityY = cityBuildings[i % cityBuildings.length].y + cityBuildings[i % cityBuildings.length].h / 2;
    
    line(farmX, farmY, cityX, cityY);  // Conectando o campo e a cidade com linhas
  }
}