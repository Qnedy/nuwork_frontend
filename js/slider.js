var intervalo = 3000;

function muda1(){
    document.getElementById("main_home").style.width = '100%';
    document.getElementById("main_home").style.height = '392px';
    document.getElementById("main_home").style.marginTop = '98px';
    document.getElementById("main_home").style.backgroundImage = "url('../img/engenheiro.png')";
    document.getElementById("main_home").style.backgroundSize = 'cover';
    document.getElementById("main_home").style.transition = '0.5s ease-out';
    setTimeout("muda2()", intervalo)
}

function muda2(){
    document.getElementById("main_home").style.width = '100%';
    document.getElementById("main_home").style.height = '392px';
    document.getElementById("main_home").style.marginTop = '98px';
    document.getElementById("main_home").style.backgroundImage = "url('../img/eletricista.png')";
    document.getElementById("main_home").style.backgroundSize = 'cover';
    document.getElementById("main_home").style.transition = '0.5s ease-out';
    setTimeout("muda3()", intervalo)
}

function muda3(){
    document.getElementById("main_home").style.width = '100%';
    document.getElementById("main_home").style.height = '392px';
    document.getElementById("main_home").style.marginTop = '98px';
    document.getElementById("main_home").style.backgroundImage = "url('../img/encanador2.png')";
    document.getElementById("main_home").style.backgroundSize = 'cover';
    document.getElementById("main_home").style.transition = '0.5s ease-out';
    setTimeout("muda4()", intervalo)
}

function muda4(){
    document.getElementById("main_home").style.width = '100%';
    document.getElementById("main_home").style.height = '392px';
    document.getElementById("main_home").style.marginTop = '98px';
    document.getElementById("main_home").style.backgroundImage = "url('../img/pintor2.png')";
    document.getElementById("main_home").style.backgroundSize = 'cover';
    document.getElementById("main_home").style.transition = '0.5s ease-out';
    setTimeout("muda5()", intervalo)
    
}

function muda5(){
    document.getElementById("main_home").style.width = '100%';
    document.getElementById("main_home").style.height = '392px';
    document.getElementById("main_home").style.marginTop = '98px';
    document.getElementById("main_home").style.backgroundImage = "url('../img/pedreiro.png')";
    document.getElementById("main_home").style.backgroundSize = 'cover';
    document.getElementById("main_home").style.transition = '0.5s ease-out';
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
    if(window.pageYOffset > 80)
        navTopo('nav_id');

    if(window.pageYOffset <= 90)
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

function mostraServicos3(){
    const section = document.getElementById('externo');
    section.classList.add('mostrar_modal_area');
}

function tiraServicos3(){
    const section = document.getElementById('externo');
    section.classList.remove('mostrar_modal_area');
    console.log('ex');
}

function mostraServicos4(){
    const section = document.getElementById('geral');
    section.classList.add('mostrar_modal_area');
}

function tiraServicos4(){
    const section = document.getElementById('geral');
    section.classList.remove('mostrar_modal_area');
    console.log('ge');
}

var li_bc = document.querySelector('[data-js="cb"]');
var li_qs = document.querySelector('[data-js="qs"]');
var li_ex = document.querySelector('[data-js="ex"]');
var li_ge = document.querySelector('[data-js="ge"]');


li_bc.addEventListener('mouseover', mostraServicos, false);
li_bc.addEventListener('mouseout', tiraServicos, false);

li_qs.addEventListener('mouseover', mostraServicos2, false);
li_qs.addEventListener('mouseout', tiraServicos2, false);

li_ex.addEventListener('mouseover', mostraServicos3, false);
li_ex.addEventListener('mouseout', tiraServicos3, false);

li_ge.addEventListener('mouseover', mostraServicos4, false);
li_ge.addEventListener('mouseout', tiraServicos4, false);

/* fade slide */
