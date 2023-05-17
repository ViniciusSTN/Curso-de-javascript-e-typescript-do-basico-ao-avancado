// IIFE -> immediately invoked function expression
// objetivo de proteger do escopo global

function qualquer() {
    // essa função toca o escopo global, pode gerar bug quando usado junto com biblioteca
    console.log(123123);
}
qualquer();

// ---------------------------------------------------------------------------
// para resolver usando jquery (usado antigamente)
// essa função é invocada imediatamente
(function(){
    // não haverá conflito com o escopo global
    const nome = 'luiz';
    console.log(nome);
})();

// simulando uma constade de alguma lib usada no escopo global
const nome = 'qualquer coisa'