document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {

    try {
        const href = el.getAttribute("href");
        const response = await fetch(href)
    
        if (response.status !== 200) throw new Error('ERRO ao carregar');
    
        const html = await response.text();
        carregaResultado(html);
    }
    catch (err) {
        console.error(err);
    }

    // fetch(href)
    //     .then(response => {
    //         if (response.status !== 200) throw new Error('ERRO ao carregar');
    //         return response.text();
    //     })
    //     .then(html => carregaResultado(html))
    //     .catch(err => console.error(err));

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// -------------------------------------------------------------

// estrutura da fetch()

// por padrão já retorna uma promise
fetch('pagina1.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('ERRO ao carregar');
        // para retornar o html:
        // obs: essa função retorna uma promise, portanto precisa de outro then()
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(err => {
        // console.warn()
        console.error(err);
    })

