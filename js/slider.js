var intervalo = 3000;

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
    setTimeout("muda4()", intervalo)
}

function muda4(){
    document.getElementById("main_home").style.width = '100%';
    document.getElementById("main_home").style.height = '400px';
    document.getElementById("main_home").style.marginTop = '95px';
    document.getElementById("main_home").style.background = 'url("https://i.imgur.com/sF4lxJ1.png") no-repeat center';
    document.getElementById("main_home").style.backgroundSize = 'cover';
    setTimeout("muda1()", intervalo)
}


function navTopo(navId){
    const modal = document.getElementById(navId);
    modal.classList.add('introducaoTopo');
}

function navNormal(navId){
    const modal = document.getElementById(navId);
    modal.classList.remove('introducaoTopo');
}

document.addEventListener('scroll', function(){
    if(window.pageYOffset > 50)
        navTopo('nav_id');

    if(window.pageYOffset <= 100)
        navNormal('nav_id');
}, false);

/* modal */

function mostraModal(idModal){
    const modal = document.getElementById(idModal);
    modal.classList.add('mostrar');
}

function removerModal(idModal){
    const modal = document.getElementById(idModal);
    modal.classList.remove('mostrar');
}

document.addEventListener('scroll', function(){
    if(window.pageYOffset > 90)
        mostraModal('modal_id');

    if(window.pageYOffset <= 100)
        removerModal('modal_id');
}, false);

/* conhiza_banheiro */

function mostraServicos(){
        const section = document.getElementById('cozinha_banheiro');
        section.classList.add('mostrar_modal_area');
}

function tiraServicos(){
    const section = document.getElementById('cozinha_banheiro');
        section.classList.remove('mostrar_modal_area');
        console.log('bc');
}

function mostraServicos2(){
    const section = document.getElementById('quarto_sala');
    section.classList.add('mostrar_modal_area');
}

function tiraServicos2(){
    const section = document.getElementById('quarto_sala');
    section.classList.remove('mostrar_modal_area');
    console.log('qs');
}

var li_bc = document.querySelector('[data-js="cb"]');
var li_qs = document.querySelector('[data-js="qs"]');


li_bc.addEventListener('mouseover', mostraServicos, false);
li_bc.addEventListener('mouseout', tiraServicos, false);

li_qs.addEventListener('mouseover', mostraServicos2, false);
li_qs.addEventListener('mouseout', tiraServicos2, false);