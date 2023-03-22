// Recupera o elemento canvas
const canvas = document.getElementById("canvas");

// Define a largura e altura do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Obtenha o contexto 2D do canvas
const ctx = canvas.getContext("2d");

// Define a cor de fundo do canvas
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Define a cor padrão da linha
ctx.strokeStyle = "#000";

// Define a largura padrão da linha
ctx.lineWidth = 5;

// Define o modo de desenho padrão
ctx.lineCap = "round";
ctx.lineJoin = "round";