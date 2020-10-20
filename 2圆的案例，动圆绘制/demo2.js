let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth - 50
canvas.height = window.innerHeight - 50

let inWidth = canvas.width
let inHeight = canvas.height
let c = canvas.getContext('2d')

/* let x = 200
let y = 200
let dx = 4
let dy = 4
let radius = 50 */

/* function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, inWidth,inHeight)
  c.beginPath()
  c.strokeStyle = "#14274E"
  c.arc(x, y, radius, 0, 30, false)
  if (x > (inWidth - radius) || x < radius) {
    dx = -dx
  }
  if (y > (inHeight - radius) || y < radius) {
    dy = -dy
  }
  x += dx
  y += dy
  c.stroke()
}

animate() */

class Circle {
  constructor(radius) {
    this.x = Math.random()*(inWidth-2*radius)+radius
    this.y = Math.random()*(inHeight-2*radius)+radius
    this.dx = (Math.random() - 0.5) * 10
    this.dy = (Math.random() - 0.5) * 10
    this.radius = radius
    this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255},1)`
  }

  draw() {
    c.beginPath()
    // c.strokeStyle = this.color
    c.fillStyle = this.color
    c.arc(this.x, this.y, this.radius, 0, 30, false)
    
    // c.stroke()
    c.fill()
  }

  updateCircle() {

    if (this.x > (inWidth - this.radius) || this.x < this.radius) {
      this.dx = -this.dx
    }
    if (this.y > (inHeight - this.radius) || this.y < this.radius) {
      this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
}

let circleList = []
for(let i=0;i<100;i++){
  let cri = new Circle(50)
  circleList.push(cri)
}

function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, inWidth, inHeight)
  for (let i=0; i<100; i++){
    circleList[i].updateCircle()
    console.log(circleList[i])
  }
}

animate()
