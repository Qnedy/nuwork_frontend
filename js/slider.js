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
    modal.classList.remove('introducaoTopoZero');
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
    if(window.pageYOffset > 80)
        mostraModal('modal_id');

    if(window.pageYOffset <= 90)
        removerModal('modal_id');
}, false);

/* conhiza_banheiro */

function mostraServicos(){
    const section = document.getElementById('cozinha_banheiro');
    const azul = document.querySelector('.ativo1');
    azul.classList.add('deixaItemAzul');
    azul.classList.add('deixaItemAzul2');
    section.classList.add('mostrar_modal_area');
}

function tiraServicos(){
    const section = document.getElementById('cozinha_banheiro');
    const azul = document.querySelector('.ativo1');
    azul.classList.remove('deixaItemAzul');
    azul.classList.remove('deixaItemAzul2');
    section.classList.remove('mostrar_modal_area');
    
}

function mostraServicos2(){
    const section = document.getElementById('quarto_sala');
    const azul = document.querySelector('.ativo2');
    azul.classList.add('deixaItemAzul');
    azul.classList.add('deixaItemAzul2');
    section.classList.add('mostrar_modal_area');
}

function tiraServicos2(){
    const section = document.getElementById('quarto_sala');
    const azul = document.querySelector('.ativo2');
    azul.classList.remove('deixaItemAzul');
    azul.classList.remove('deixaItemAzul2');
    section.classList.remove('mostrar_modal_area');
    console.log('qs');
}

function mostraServicos3(){
    const section = document.getElementById('externo');
    const azul = document.querySelector('.ativo3');
    azul.classList.add('deixaItemAzul');
    azul.classList.add('deixaItemAzul2');
    section.classList.add('mostrar_modal_area');
}

function tiraServicos3(){
    const section = document.getElementById('externo');
    const azul = document.querySelector('.ativo3');
    azul.classList.remove('deixaItemAzul');
    azul.classList.remove('deixaItemAzul2');
    section.classList.remove('mostrar_modal_area');
    console.log('ex');
}

function mostraServicos4(){
    const section = document.getElementById('geral');
    const azul = document.querySelector('.ativo4');
    azul.classList.add('deixaItemAzul');
    azul.classList.add('deixaItemAzul2');
    section.classList.add('mostrar_modal_area');
}

function tiraServicos4(){
    const section = document.getElementById('geral');
    const azul = document.querySelector('.ativo4');
    azul.classList.remove('deixaItemAzul');
    azul.classList.remove('deixaItemAzul2');
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


/* numeros animados */



var $h3 = document.querySelector('[data-js="number_cresc"]');
var $h32 = document.querySelector('[data-js="number_cresc2"]');
var $h33 = document.querySelector('[data-js="number_cresc3"]');
var id_contador;
var numero = 0;
var textoNumber;

function crescNumber(){
    if(numero <=10000){
        numero = +numero + 5;
        $h3.innerHTML = numero;
        id_contador = setTimeout(crescNumber, 5);
        console.log("aqui");
    }
}

function crescNumber2(){
    if(numero <=15000){
        numero = +numero + 3;
        $h32.innerHTML = numero;
        id_contador = setTimeout(crescNumber2, 5);
    }
}

function crescNumber3(){
    if(numero <=17000){
        numero = +numero + 7;
        $h33.innerHTML = numero;
        id_contador = setTimeout(crescNumber3, 5);
    }
}

document.addEventListener('scroll', function(){
    if(window.pageYOffset > 725){
        crescNumber();
        crescNumber2();
    crescNumber3();
    }
        
}, false);


/* botao fechar modal top */

const btn_fechar = document.querySelector('[data-js="btn_fecharJs"]');

console.log(btn_fechar);

function fechaModalTop(){
    const modal = document.getElementById('modal_id');
    const introducao = document.getElementById('nav_id');
    modal.classList.remove('mostrar');
    introducao.classList.remove('introducaoTopo');
    introducao.classList.add('introducaoTopoZero');
    
}

btn_fechar.addEventListener('click', fechaModalTop, false);