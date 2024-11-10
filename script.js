const desaparecer_tudo = document.querySelector('.container');
const buscar_input = document.getElementById('buscar_input');
const balao = document.querySelectorAll('.balao');
const botoesCopiar = document.querySelectorAll('.copiarBotao');
const mensagem = document.getElementById('mensagem'); 

buscar_input.addEventListener('input', () => {
    const consulta = buscar_input.value.toLowerCase();

    balao.forEach(el => {
        const texto = el.getAttribute('data-text').toLowerCase();

        if (consulta === '') {
            el.classList.remove('visivel');
        } else if (texto.includes(consulta)) {
            el.classList.add('visivel');
        } else {
            el.classList.remove('visivel');
        }
    });
});

botoesCopiar.forEach(el => {
    el.addEventListener('click', () => {
        const textoParaCopiar = el.previousElementSibling.innerText;
        
        // Usa a API Clipboard para copiar o texto selecionado
        navigator.clipboard.writeText(textoParaCopiar);
        
        // Exibe a mensagem por 2 segundos
        desaparecer_tudo.classList.add('desaparecer');
        mensagem.classList.add('visivel');

        // Remove a visibilidade dos elementos após 2 segundos
        setTimeout(() => {
            mensagem.classList.remove('visivel');
            desaparecer_tudo.classList.remove('desaparecer');
            window.location.reload();
        }, 2000);
    });
});
