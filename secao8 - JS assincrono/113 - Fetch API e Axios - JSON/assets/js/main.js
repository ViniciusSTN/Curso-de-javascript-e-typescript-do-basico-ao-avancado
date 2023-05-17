// -----------------------------------------------------------------

// Usando Fetch API:

// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaNaPagina(json));

// -----------------------------------------------------------------

// Usando AXIOS:

axios('pessoas.json')
    .then(resposta => carregaNaPagina(resposta.data));


// -----------------------------------------------------------------

function carregaNaPagina(json) {

    const table = document.createElement("table");

    for (let pessoa of json) {
        const tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const result = document.querySelector('.resultado');
    result.appendChild(table);

}

// -----------------------------------------------------------------

// para usar o AXIOS, colar no HTML:
/* <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script> */


