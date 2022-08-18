"use strict"; //indica ao navegador para trabalhar apenas com dados já definidos

var canvas = document.getElementById("tela"); //recupera a referência ao objeto do canvas html
var ctx = canvas.getContext("2d"); //recupera o contexto do desenho bidimensional

var x = 200, y = 100, larg = 300, alt = 150;

function desenharRetangulo(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillStyle = "rgb(32, 247, 79)"; //estilo de preenchimento
    ctx.fillRect(x, y, larg, alt);
    desenharTriangulo();
    //y++; "andar sozinho na tela"
    //x++;
    desenharCirculo();
    requestAnimationFrame(desenharRetangulo);
}

function desenharTriangulo(){   
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo((x+50),(y+50));
    ctx.lineTo(x-50,y+50);
    ctx.fillStyle = "rgb(223, 222, 0)";
    ctx.fill();
    ctx.closePath();
}

function desenharCirculo(){
    // for(var i=0;i<4;i++){
    //     for(var j=0;j<3;j++){
    //       ctx.beginPath();
    //       var x              = 25+j*50;               // coordenada x
    //       var y              = 25+i*50;               // coordenada y
    //       var radius         = 20;                    // Raio do Arco
    //       var startAngle     = 0;                     // Ponto inicial no círculo
    //       var endAngle       = Math.PI+(Math.PI*j)/2; // Ponto final no círculo
    //       var anticlockwise  = i%2==0 ? false : true; // horário ou anti-horário
  
    //       ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  
    //       if (i>1){
    //         ctx.fill();
    //       } else {
    //         ctx.stroke();
    //       }
    //     }
    //   }

    ctx.beginPath();
    ctx.arc(x+50, y+250, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fill();
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

requestAnimationFrame(desenharRetangulo);
//requestAnimationFrame(desenharRetangulo);