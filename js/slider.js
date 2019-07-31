var intervalo = 3000;

/*function slide1(){
    document.getElementById("slidee").src="../img/eletricista.png";
    setTimeout("slide2()", intervalo);
}

function slide2(){
    document.getElementById("slidee").src="../img/third3.png";
    setTimeout("slide3()", intervalo);
}

function slide3(){
    document.getElementById("slidee").src="../img/encanador.png";
    setTimeout("slide1()", intervalo);
}*/

function muda1(){
    document.getElementById("main_home").style.width = '100%';
    document.getElementById("main_home").style.height = '400px';
    document.getElementById("main_home").style.marginTop = '95px';
    
    document.getElementById("main_home").style.background = 'url("https://i.imgur.com/xe91xqk.png") no-repeat center';
    document.getElementById("main_home").style.backgroundSize = 'cover';
    setTimeout("muda2()", intervalo)
}

function muda2(){
    document.getElementById("main_home").style.width = '100%';
    document.getElementById("main_home").style.height = '400px';
    document.getElementById("main_home").style.marginTop = '95px';
    
    document.getElementById("main_home").style.background = 'url("https://i.imgur.com/W2SdiGo.png") no-repeat center';
    document.getElementById("main_home").style.backgroundSize = 'cover';
    setTimeout("muda3()", intervalo)
}

function muda3(){
    document.getElementById("main_home").style.width = '100%';
    document.getElementById("main_home").style.height = '400px';
    document.getElementById("main_home").style.marginTop = '95px';
    
    document.getElementById("main_home").style.background = 'url("https://i.imgur.com/3fEqJON.png") no-repeat center';
    document.getElementById("main_home").style.backgroundSize = 'cover';
    setTimeout("muda1()", intervalo)
}