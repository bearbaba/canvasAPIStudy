/*
 * @Author: your name
 * @Date: 2021-04-21 20:50:52
 * @LastEditTime: 2021-04-21 21:13:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \canvasDemo\lineToDemo.js
 */

window.onload = function () {
  const canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#00ff33";
  ctx.lineWidth = 3;

  ctx.beginPath();

  ctx.moveTo(100, 100);
  ctx.lineTo(200, 100);

  ctx.moveTo(100, 140);
  ctx.lineTo(200, 140);
  ctx.moveTo(200, 140);
  ctx.lineTo(250, 120);
  ctx.lineTo(200, 100);
  ctx.moveTo(100, 100);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}