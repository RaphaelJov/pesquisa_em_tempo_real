const desaparecer_tudo = document.getElementById('desaparecer_tudo')
const buscar_input = document.getElementById('buscar_input')
const balao = document.querySelectorAll('.balao')
const botoesCopiar = document.querySelectorAll('.copiarBotao')

buscar_input.addEventListener('input', () => {
    const consulta = buscar_input.value.toLowerCase()

    balao.forEach(el => {
        const texto = el.getAttribute('data-text').toLowerCase()

        if (consulta === '') {
            el.classList.remove('visivel')
        } else if (texto.includes(consulta)) {
            el.classList.add('visivel')
        } else {
            el.classList.remove('visivel')
        }
    })
})

botoesCopiar.forEach(el => {
    
    el.addEventListener('click', () => {
        //previousElementSibling serve para selecionar o elemento anterior do html
        //no caso seleciona o anterior ao botoesCopiar
        // que se refere ao para grafo p do texto do html.
        const textoParaCopiar = el.previousElementSibling.innerText
        
        //Usa api Clipboard para copiar o texto selecionado anteriormente
        navigator.clipboard.writeText(textoParaCopiar)
        
        //exibe a mensagem por 2 segundos
        desaparecer_tudo.classList.add('desaparecer')
        mensagem.classList.add('visivel')

        setTimeout(() => {
            window.location.reload()
        }, 2000);
    })
})