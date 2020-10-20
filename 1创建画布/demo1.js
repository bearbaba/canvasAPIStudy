var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext("2d") // 将绘图区的上下文给c

c.fillStyle = "pink" // 设置填充图形的颜色
c.fillRect(100, 100, 300, 200) // 绘制矩形，四个参数分别是距离画板左上角x距离、y距离、长、宽

c.beginPath() // 表示要开始绘制了（还没绘制），绘制前的预处理
c.moveTo(100, 500) // 直线的起始点坐标
c.lineTo(200, 100) // 直线的终点坐标
c.strokeStyle = "skyblue" // 设置直线的颜色
c.stroke() // 开始绘制 

c.beginPath()
c.arc(300,300, 100, 30, 0, true) // 参数分别代表 圆心距离画布左上角 x距离，y距离，圆的半径值，起始角的度数，终止角的度数，（度数均以弧度制表示） 是否逆时针。
c.stroke()
