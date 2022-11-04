/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const { loadImage, createCanvas } = require("canvas");
const drawCanvasSaveImage = () => {
  const width = 1200;
  const height = 650;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillStyle = "#2b03a3";
  context.fillRect(0, 0, width, height);
  context.font = "bold 72pt Menlo";
  context.textBaseline = "top";
  context.textAlign = "center";
  context.fillStyle = "#f7ab07";
  const imgText = "Tiny Text on Canvas";
  const textAlign = context.measureText(imgText).width;
  context.fillRect(590 - textAlign / 2 - 10, 170 - 5, textAlign + 20, 120);
  context.fillStyle = "#ffffff";
  context.fillText(imgText, 555, 120);
  context.fillStyle = "#ffffff";
  context.font = "bold 32pt Menlo";
  context.fillText("positronx.io", 755, 600);
  loadImage("public/countdown.jpg").then((data) => {
    context.drawImage(data, 340, 515, 70, 70);
    const imgBuffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./resources/drawnImage.png", imgBuffer);
  });
};
const drawCanvas = () => {
  const width = 1200;
  const height = 650;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillStyle = "#2b03a3";
  context.fillRect(0, 0, width, height);
  context.font = "bold 72pt Menlo";
  context.textBaseline = "top";
  context.textAlign = "center";
  context.fillStyle = "#f7ab07";
  const imgText = "Tiny Text on Canvas";
  const textAlign = context.measureText(imgText).width;
  context.fillRect(590 - textAlign / 2 - 10, 170 - 5, textAlign + 20, 120);
  context.fillStyle = "#ffffff";
  context.fillText(imgText, 555, 120);
  context.fillStyle = "#ffffff";
  context.font = "bold 32pt Menlo";
  context.fillText("positronx.io", 755, 600);
  // context.drawImage(data, 340, 515, 70, 70);
  return canvas.toBuffer("image/png").toString("base64");
};
module.exports = drawCanvas;
