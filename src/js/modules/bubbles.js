const config = {
  posXmin: -30,
  posXmax: 100,
  posYmin: -30,
  posYmax: 70,
  radiusMin: 100,
  radiusMax: 150,
  moveSpeed: 0.1,
};

let bubbles = [];

const bubblesContainer = document.querySelector('.bubbles');
export function init() {
  createRandomBubble();
  createRandomBubble();
  createRandomBubble();
  createRandomBubble();
  console.log(bubbles);
}

function createBubble(posX, posY, radius, isUp, moveFreedom, moveSpeed) {
  let bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.top = posY + '%';
  bubble.style.left = posX + '%';
  bubble.style.width = 2 * radius + 'px';
  bubble.style.height = 2 * radius + 'px';
  let bubbleObj = {
    div: bubble,
    startPosX: posX,
    startPosY: posY,
    currPosX: 0,
    currPosY: 0,
    moveFreedom: moveFreedom,
    moveDirectionUp: isUp,
    moveSpeed: moveSpeed,
    radius: radius,
  };
  bubbles.push(bubbleObj);
  bubblesContainer.appendChild(bubble);
}

function createRandomBubble() {
  let posX = Math.random() * (config.posXmax - config.posXmin) + config.posXmin;
  let posY = Math.random() * (config.posYmax - config.posYmin) + config.posYmin;
  let radius = Math.random() * (config.radiusMax - config.radiusMin) + config.radiusMin;
  let isUp = Math.random() > 0.5;
  let moveFreedom = (Math.random() + 5) * 3;
  let moveSpeed = (Math.random() + 0.01) / 2;
  createBubble(posX, posY, radius, isUp, moveFreedom, moveSpeed);
}

function updateBubbles() {
  bubbles.forEach((bubble) => {
    moveBubble(bubble);
  });
}

function moveBubble(bubble) {
  let coef = 2 - Math.abs(bubble.currPosY) / bubble.moveFreedom;
  if (coef > 1) {
    coef = 1;
  }
  let speed = bubble.moveSpeed * coef || 1;
  if (bubble.moveDirectionUp) {
    bubble.currPosY -= speed;
    if (bubble.currPosY < -bubble.moveFreedom) {
      bubble.moveDirectionUp = false;
    }
    bubble.div.style.transform = `translateY(${bubble.currPosY + '%'})`;
  } else {
    bubble.currPosY += speed;
    if (bubble.currPosY > bubble.moveFreedom) {
      bubble.moveDirectionUp = true;
    }

    bubble.div.style.transform = `translateY(${bubble.currPosY + '%'})`;
  }
}

// function parallax() {
//   const compStyles = getComputedStyle(bubblesContainer);
//   const maxScroll = parseInt(getComputedStyle(document.body).height) - parseInt(window.outerHeight);
//   const scrollProc = (window.scrollY / maxScroll) * 100;
//   bubblesContainer.style.transform = `translateY(-${scrollProc * 0.6}%)`;
//   console.log(window.scrollY, getComputedStyle(document.body).height);
//   console.log(compStyles.top, compStyles.height);
// }

// parallax();
// document.addEventListener('scroll', parallax);
function loop() {
  updateBubbles();
  window.requestAnimationFrame(loop);
}
loop();
