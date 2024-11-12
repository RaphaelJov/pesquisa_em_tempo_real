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

        //seleciona o elemento anterior a class btn, sendo ela 
        const checklist = el.previousElementSibling;  

        // cria variavel vazia para armazenar futuramente
        let textoParaCopiar = "";

        //percorrer os nós filhos de   checklist
        checklist.childNodes.forEach(node => {

            //verifica se o que foi encontrado é do tipo texto e concatena com textoParaCopiar
            if (node.nodeType === Node.TEXT_NODE) {
                // Adiciona o texto fixo diretamente ao textoParaCopiar
                textoParaCopiar += node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'INPUT') {
                // Verifica se o input tem um valor preenchido
                const inputValue = node.value ? node.value : '';
                
                // Adiciona apenas o valor se houver, caso contrário pula o placeholder
                if (inputValue) {
                    textoParaCopiar += ` ${inputValue} `;
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
            container.classList.remove('desaparecer');
            window.location.reload();
        }, 2000);
    });
});