const container = document.querySelector('.container');
const input = document.getElementById('input');
const checklist = document.querySelectorAll('.checklist');
const btn = document.querySelectorAll('.btn');
const mensagem_final = document.getElementById('mensagem_final'); 


input.addEventListener('input', () => {
    const consulta = input.value.toLowerCase();

    checklist.forEach(el => {
        // a  variavel texto obtem o valor do atributo getAttribute('data-text')
        // e obtem tudo em minusculo
        const texto = el.getAttribute('data-text').toLowerCase();

        // se a consulta retorna vazia
        if (consulta === '') {
            el.classList.remove('visivel');
        } else if (texto.includes(consulta)) {
            el.classList.add('visivel');
        } else {
            el.classList.remove('visivel');
        }
    });
});

btn.forEach(el => {
    el.addEventListener('click', () => {
        // Seleciona o elemento anterior à classe btn
        const checklist = el.previousElementSibling;  

        // Variável para armazenar o texto que será copiado
        let textoParaCopiar = "";

        // Percorre os nós filhos de checklist
        checklist.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                // Concatena o texto fixo diretamente ao textoParaCopiar
                textoParaCopiar += node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'INPUT') {
                if (node.type === "text") {
                    // Verifica se o input do tipo texto tem valor
                    textoParaCopiar += ` ${node.value ? node.value : ''} `;
                } else if (node.type === "checkbox") {
                    // Adiciona "Sim" ou "Não" dependendo do estado do checkbox
                    textoParaCopiar += node.checked ? " Sim " : " Não ";
                }
            }
        });

        // Usa a API Clipboard para copiar o texto combinado
        navigator.clipboard.writeText(textoParaCopiar.trim())
            .then(() => {
                console.log("Copiado com sucesso!");
            })
            .catch(err => {
                console.error("Erro ao copiar: ", err);
            });

        // Exibe a mensagem_final temporária de feedback
        container.classList.add('desaparecer');
        mensagem_final.classList.add('visivel');

        // Remove a visibilidade da mensagem_final após 2 segundos
        setTimeout(() => {
            mensagem_final.classList.remove('visivel');
            window.location.reload();
        }, 2000);
    });
});
