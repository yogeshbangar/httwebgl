/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require("express");
const next = require("next");

const drawCanvas = require("./server/textures/index");
const drawCanvasThree = require("./server/threeRend/index");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get("/drawCanvasImage", function (req, res) {
    const image = drawCanvas();
    const data = `<p><img src='data:image/png;base64,${image}' alt='Red dot' /></p>`;
    return res.end(data);
  });
  server.get("/drawCanvasThree", function (req, res) {
    drawCanvasThree();
    const data =
      '{"name": "yogesh","surname": "bangar","job": "drawCanvasThree"}';
    return res.end(data);
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
