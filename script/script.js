//funcao para mostrar a opcao principal
document.querySelectorAll('.opcao').forEach(function(el){
    el.style.display = 'none'
})

function mostrar(opcao){

    //exibir elemnto principal ou submenu

    document.getElementById(opcao).style.display = 'block'
}

