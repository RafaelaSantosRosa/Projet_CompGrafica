"use strict"; //indica ao navegador para trabalhar apenas com dados já definidos

var canvas = document.getElementById("tela"); //recupera a referência ao objeto do canvas html
var ctx = canvas.getContext("2d"); //recupera o contexto do desenho bidimensional

var x = 200, y = 100, larg = 300, alt = 150;

function desenhar(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = "rgb(32, 247, 79)"; //estilo de preenchimento - nesse caso: cor laranja r-red; g-green; b-blue
    ctx.fillRect(x, y, larg, alt);
    requestAnimationFrame(desenhar);
}

document.onkeydown = function (evt){ //evento de tecla - onkeyDOWN - tecla é afundada || onkeyUP - tecla é solta
    console.log(evt.keyCode);
    if(evt.keyCode === 38) //tecla pra cima é = 38
        y -= 5;
    if(evt.keyCode === 40) //tecla pra baixo
        y += 5;
    if(evt.keyCode === 37) //tecla da esquerda
        x -= 5;
    if(evt.keyCode === 39) //tecla da direita
        x += 5;
} 

requestAnimationFrame(desenhar);