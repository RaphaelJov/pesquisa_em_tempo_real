const buscar_input = document.getElementById('buscar_input')
const balao = document.querySelectorAll('.balao')

buscar_input.addEventListener('input', () => {
    const consulta = buscar_input.value.toLowerCase()

    if (consulta === '') {
        balao.forEach(el => {
            el.style.display = 'none'
        })
    } else {
        balao.forEach(el => {
            const texto = el.getAttribute('data-text').toLowerCase()

            if (texto.includes(consulta)) {
                el.style.display = 'inline-block'
            } else {
                el.style.display = 'none'
            }
        })
    }

})

const botoesCopiar = document.querySelectorAll('.copiarBotao')
let p = document.getElementById('resposta_texto_copiado')

    botoesCopiar.forEach( botao => {
        botao.addEventListener('click', () => {
        //seleciona o paragrafo do texto
        const textoParaCopiar = botao.previousElementSibling.innerText

        //Usa api Clipboard para copiar o texto
        navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            // alert('Texto copiado')
            p.innerText ='Texto copiado!'
        })
        .catch(err => {
            console.error(err)
        })
    })
})

// function copiarTexto () {
//     //seleciona o texto
//     const texto = document.getElementById( 'texto_para_copiar' ).innerText

//     //cria um elemento temporario de input para copiar o texto
//     const inputTemp = document.createElement('textarea')
//     inputTemp.value = texto
//     document.body.appendChild(inputTemp)

//     //seleciona o conteudo do elemento temporario a copiar
//     inputTemp.select()
//     document.execCommand('copy')

//     //remove o elemento temporario
//     document.body.removeChild(inputTemp)

//     //confirma a copia 
//     alert('Texto copiado')
// }