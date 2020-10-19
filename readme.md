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

`<canvas></canvas>`就类似于一个画布，我们将在 JS 中设置这个画布的大小。并在 JS　中在画布上绘制图形。

```js
var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
```

在这里，我们简单地把画布的宽高设置成了`window.innerWidth`与`window.innerHeight`的大小。

## 绘制图形

如果想要开始绘制图形，首先需要将画布的上下文赋值给一个变量，通过这个变量来进行各种图形的绘制。

```js
var c = canvas.getContext("2d") // 将绘图区的上下文给c
```

因为我们将要绘制的是平面图形，故把参数"2d"传参给了`canvas.getContext()`方法。

### 绘制矩形

我们可以使用`fillRect()`方法绘制一个矩形图形。

```js
c.fillRect(100, 100, 300, 200) // 绘制矩形，四个参数分别是距离画板左上角x距离、y距离、长、宽
```

如上所述，这个方法拥有四个参数，四个参数表示距离画布左上角x距离、y距离、长、宽的值。

### 绘制线段

绘制线段之前需要使用`beginPath()`表示要开始绘制路径，或者清空之前的所有的路劲操作。

```js
c.beginPath() // 表示要开始绘制了（还没绘制），绘制前的预处理
c.moveTo(100, 500) // 线段的起始点坐标
c.lineTo(200, 100) // 线段的终点坐标
c.stroke() // 正式绘制
```

如上所述，`moveTo()`中的参数表示线段的起始点坐标，`lineTo()`中的参数表示要绘制到终点的坐标（两点确定一条直线），`stroke()`表示线段的绘制操作。

### 颜色的设定

