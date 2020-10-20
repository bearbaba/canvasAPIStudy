# canvas 教程

## 创建画布

如果想要使用`canvas`绘制图形，首先需要在 HTML 中使用`<canvas></canvas>`标签。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      canvas {
        border: 1px solid black;
      }

      body {
        margin: 0px;
      }
    </style>
  </head>

  <body>
    <canvas></canvas>
    <script src="./demo1.js"></script>
  </body>
</html>
```

`<canvas></canvas>`就类似于一个画布，我们将在 JS 中设置这个画布的大小。并在 JS 　中在画布上绘制图形。

```js
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

在这里，我们简单地把画布的宽高设置成了`window.innerWidth`与`window.innerHeight`的大小。

## 绘制图形

如果想要开始绘制图形，首先需要将画布的上下文赋值给一个变量，通过这个变量来进行各种图形的绘制。

```js
var c = canvas.getContext("2d"); // 将绘图区的上下文给c
```

因为我们将要绘制的是平面图形，故把参数"2d"传参给了`canvas.getContext()`方法。

### 绘制矩形

我们可以使用`fillRect()`方法绘制一个矩形图形。

```js
c.fillRect(100, 100, 300, 200); // 绘制矩形，四个参数分别是距离画板左上角x距离、y距离、长、宽
```

如上所述，这个方法拥有四个参数，四个参数表示距离画布左上角 x 距离、y 距离、长、宽的值。

### 绘制线段

绘制线段之前需要使用`beginPath()`表示要开始绘制路径，或者清空之前的所有的路劲操作。

```js
c.beginPath(); // 表示要开始绘制了（还没绘制），绘制前的预处理
c.moveTo(100, 500); // 线段的起始点坐标
c.lineTo(200, 100); // 线段的终点坐标
c.stroke(); // 正式绘制
```

如上所述，`moveTo()`中的参数表示线段的起始点坐标，`lineTo()`中的参数表示要绘制到终点的坐标（两点确定一条直线），`stroke()`表示线段的绘制操作。

### 颜色的设定

我们可以使用`strokeStyle`为线条设置颜色，使用`fillStyle`设置填充的颜色，颜色值可以使用 CSS 中能上的颜色值。

```js
let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");
c.fillStyle = "#389393";
c.fillRect(100, 100, 100, 100);

c.beginPath();
c.strokeStyle = "red";
c.moveTo(100, 500);
c.lineTo(300, 500);
c.stroke();
```

只是需要注意的是，正如画笔需要先涂颜料才能上色，我们也需要先设置颜色，才能改变线条或者填充部分的颜色。

### 绘制圆形

有趣的是圆形的绘制不同于矩形只需要一个函数就能生成，而更像是线段，也需要`beginPath()`清空下之前绘制的圆形的配置。

```js
c.beginPath();
c.arc(300, 300, 100, 30, 0, true); // 参数分别代表 圆心距离画布左上角 x距离，y距离，圆的半径值，起始角的度数，终止角的度数，（度数均以弧度制表示） 是否逆时针。
c.stroke();
```

如上所述，`c.arc()`需要五个参数。

可以选择设置圆形的轮廓颜色，也可以选择设置圆形的填充颜色。

```js
// c.strokeStyle = color
c.fillStyle = color;
```

不过选择了`strokeStyle`，那么只能使用`stroke()`来绘图，选择了`fillStyle`，只能使用`fill()`来绘图。

`stroke()`与`fill()`区别在于一个是实心，一个只有轮廓。

也能使用`strokeRect()`绘制只有轮廓的矩形。

```js
let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

let c = canvas.getContext("2d");
c.strokeStyle = "blue";
c.strokeRect(100, 100, 100, 100);
```

### 圆的案例，绘制动态圆形

```js
let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

let inWidth = canvas.width;
let inHeight = canvas.height;
let c = canvas.getContext("2d");

let x = 200;
let y = 200;
let dx = 4;
let dy = 4;
let radius = 50;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, inWidth, inHeight);
  c.beginPath();
  c.strokeStyle = "#14274E";
  c.arc(x, y, radius, 0, 30, false);
  if (x > inWidth - radius || x < radius) {
    dx = -dx;
  }
  if (y > inHeight - radius || y < radius) {
    dy = -dy;
  }
  x += dx;
  y += dy;
  c.stroke();
}

animate();
```

```js
class Circle {
  constructor(radius) {
    this.x = Math.random() * (inWidth - 2 * radius) + radius;
    this.y = Math.random() * (inHeight - 2 * radius) + radius;
    this.dx = (Math.random() - 0.5) * 10;
    this.dy = (Math.random() - 0.5) * 10;
    this.radius = radius;
    this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    },1)`;
  }

  draw() {
    c.beginPath();
    // c.strokeStyle = this.color
    c.fillStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, 30, false);

    // c.stroke()
    c.fill();
  }

  updateCircle() {
    if (this.x > inWidth - this.radius || this.x < this.radius) {
      this.dx = -this.dx;
    }
    if (this.y > inHeight - this.radius || this.y < this.radius) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

let circleList = [];
for (let i = 0; i < 100; i++) {
  let cri = new Circle(50);
  circleList.push(cri);
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, inWidth, inHeight);
  for (let i = 0; i < 100; i++) {
    circleList[i].updateCircle();
    console.log(circleList[i]);
  }
}

animate();
```
