// XMLHttpRequest   -> AJAX

// Use objetos XMLHttpRequest (XHR) para interagir com servidores. Você pode recuperar dados de um URL sem precisar fazer uma atualização completa da página. Isso permite que uma página da Web atualize apenas parte de uma página sem interromper o que o usuário está fazendo.

// importante entender um pouco sobre códigos http
// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status


// está em desuso atualmente
// é usado axios (menos verboso)
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);  // true: assincrono; false: sincrono
        xhr.send();  // post: pode ser null
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }
            else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });
    });
}

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
        console.log(href);

    
        const response = await request({ method: 'GET', url: href });
        carregaResultado(response);
    }
    catch (err) {
        console.log(err);
    }
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
