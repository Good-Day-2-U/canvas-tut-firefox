// function draw() {
//   const canvas = document.getElementById("tutorial");
//   if (canvas.getContext) {
//     const ctx = canvas.getContext("2d");

//     // ctx.fillStyle = "rgb(200, 0, 0)";
//     // ctx.fillRect(10, 10, 50, 50);

//     // ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//     // ctx.fillRect(30, 30, 50, 50);

//     // ctx.fillRect(25, 25, 100, 100);
//     // ctx.clearRect(45, 45, 60, 60);
//     // ctx.strokeRect(50, 50, 50, 50);

//     ctx.beginPath();
//     ctx.moveTo(50, 50);
//     ctx.lineTo(75, 75);
//     ctx.stroke();
//     ctx.moveTo((62.5), (62.5));
//     ctx.lineTo(100, 75);
//     ctx.stroke();

//     // Usful to convert degrees into radians
//     // radians = (Math.PI/180)*degrees



//   }
// }
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 25 + j * 50; // x coordinate
        const y = 25 + i * 50; // y coordinate
        const radius = 20; // Arc radius
        const startAngle = 0; // Starting point on circle
        const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}

window.addEventListener("load", draw);