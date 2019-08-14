
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
