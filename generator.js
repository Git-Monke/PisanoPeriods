const CS = window.innerWidth * 0.1;
const H_CS = CS / 2;

function calcPeriod(n) {
  let prev = 0;
  let curr = 1;
  let pisano = [0, 1];
  do {
    let temp = curr;
    curr = (prev + curr) % n;
    prev = temp;
    pisano.push(curr);
  } while (prev !== 0 || curr !== 1);
  pisano.splice(-2);
  return pisano;
}

function genPattern(n) {
  if (n === 0 || n === 1) {
    return;
  }
  console.log(n);
  let canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  canvas.width = CS;
  canvas.height = CS;

  ctx.font = "15px Arial";
  ctx.fillText(n, 15, 15);

  ctx.fillStyle = "#FFFFFF";
  ctx.lineWidth = 0.3;
  ctx.arc(H_CS, H_CS, H_CS, 0, Math.PI * 2);
  ctx.stroke();

  let pisano = calcPeriod(n);
  let max = pisano.reduce((p, c) => Math.max(p, c), 0) + 1;
  for (let i = 1; i < pisano.length; i++) {
    let s = (pisano[i - 1] / max) * Math.PI * 2;
    let e = (pisano[i] / max) * Math.PI * 2;

    let sx = H_CS + Math.cos(s) * H_CS;
    let sy = H_CS + Math.sin(s) * H_CS;

    let ex = H_CS + Math.cos(e) * H_CS;
    let ey = H_CS + Math.sin(e) * H_CS;

    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
  }
}

function fib(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 2;
  while (i < num) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    i += 1;
  }
  return num2;
}

for (let i = 1; i < 5002; i++) {
  genPattern(i);
}

// genPattern(100);
