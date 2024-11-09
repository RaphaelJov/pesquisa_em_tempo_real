const buscar_input = document.getElementById('buscar_input')
const balao = document.querySelectorAll('.balao')

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

const botoesCopiar = document.querySelectorAll('.copiarBotao')
let p = document.getElementById('resposta_texto_copiado')

botoesCopiar.forEach(el => {
    el.addEventListener('click', () => {
        //seleciona o paragrafo do texto
        const textoParaCopiar = el.previousElementSibling.innerText
        
        //Usa api Clipboard para copiar o texto
        navigator.clipboard.writeText(textoParaCopiar)
        
        //exibe a mensagem por 2 segundos
        const desaparecer_tudo = document.getElementById('desaparecer_tudo')
        desaparecer_tudo.classList.add('visivel')
        mensagem.classList.add('visivel')

        setTimeout(() => {
            window.location.reload()
        }, 2000);

    })
})


// botoesCopiar.forEach(botao => {
//     botao.addEventListener('click', () => {
//         //seleciona o paragrafo do texto
//         const textoParaCopiar = botao.previousElementSibling.innerText

//         //Usa api Clipboard para copiar o texto
//         navigator.clipboard.writeText(textoParaCopiar)
//             .then(() => {
//                 alert('Texto copiado!')
//                 setTimeout(() => { })
//                 window.location.reload(true);
//             })
//             .catch(err => {
//                 console.error(err)
//             })
//     })
// })