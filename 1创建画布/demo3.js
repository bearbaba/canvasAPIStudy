let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth - 50
canvas.height = window.innerHeight - 50

let c = canvas.getContext("2d")
c.strokeStyle = "blue"
c.strokeRect(100,100,100,100)