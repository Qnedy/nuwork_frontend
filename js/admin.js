
function iniciaModal(){
    const modal = document.querySelector('[data-js="modal_bemVindo"]');
    modal.classList.add("mostrar_bemVindo");
    console.log(modal);
}

function fechaModal(){
    const modal = document.querySelector('[data-js="modal_bemVindo"]');
    modal.classList.remove("mostrar_bemVindo");
}

iniciaModal();

const botaoFechar = document.querySelector('[data-js="btn_fecharModal"]');
botaoFechar.addEventListener('click', fechaModal, false)



function abreModalCompra(){
    const modalCompra = document.querySelector('[data-js="modal_compra"]');
    modalCompra.classList.add("mostrar_compra");
    
}

function fechaModalCompra(){
    const modalCompra = document.querySelector('[data-js="modal_compra"]');
    modalCompra.classList.remove("mostrar_compra");
}

const botaoAbreCompra = document.querySelector('[data-js="btn_comprarMoeda"]');
botaoAbreCompra.addEventListener('click', abreModalCompra, false)

const botaoFecharCompra = document.querySelector('[data-js="btn_fecharModalCompra"]');
botaoFecharCompra.addEventListener('click', fechaModalCompra, false)