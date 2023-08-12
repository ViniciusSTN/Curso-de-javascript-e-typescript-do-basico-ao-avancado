const html1 = '<p>Olá mundo</p>    <p>Olá mundo2</p>   <div>Sou a div</div>';
const html2 = '<p class="teste">Olá mundo</p>    <p id="sla">Olá mundo2</p>';

// $1 $2 $3 -> retrovisores
// podem ser referenciados com \1 \2 \3

// . -> qualquer caractere exceto quebra de linha

const regExp1 = /<(\w+)>.+?<\/\1>/g; 
// \1 referencia ao primeiro grupo
// ou seja, a tag de fechamento deve ser a mesma da inicialização
// o preblema é que se tiver algo dentro da tag nesse caso não conseguirá pegar, exemplo class -> para resolver isso: regExp2

// console.log(html1.match(regExp1));

// -----------------------------------------------------------------------------

const regExp2 = /<(\w+).*?>.+?<\/\1>/g;
// console.log(html2.match(regExp2));

// temos mais um problema, a quebra de linha, para resolver isso: regExp3

// -----------------------------------------------------------------------------

const html3 = `
  <p 
    class="teste"
    id="teste"
  >
    Olá mundo
  </p>    

  <p id="sla">Olá mundo2</p>
`;

const regExp3 = /<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g;

// console.log(html3.match(regExp3));

// [\s\S] -> seleciona tudo, mas por que não usar '.+?' ?

// resposta do chatGPT:

// [\s\S]*?: Isso corresponde a qualquer caractere (espaço, não espaço, quebra de linha, etc.), repetido zero ou mais vezes, de forma não gananciosa. A parte "não gananciosa" é indicada pelo "?" após o "*", o que significa que a correspondência será feita pelo menor número possível de caracteres.

// O motivo pelo qual [\s\S] é usado em vez de simplesmente "." (ponto) é que o "." normalmente corresponderia a qualquer caractere, exceto quebras de linha. No entanto, em alguns contextos, como quando você está lidando com conteúdo HTML/XML, é importante corresponder a todos os caracteres possíveis, incluindo quebras de linha, para lidar com diferentes formas de formatação.

// Portanto, usando [\s\S], a expressão regular pode funcionar de maneira mais abrangente, correspondendo a qualquer caractere, independentemente de ser um espaço, uma quebra de linha ou outro caractere. Isso ajuda a garantir que a expressão regular funcione corretamente em uma variedade de casos, inclusive quando há formatação complexa ou espaços/quebras de linha no conteúdo das tags.

// -----------------------------------------------------------------------------

// manipulando usando retrovisores

//                1  2   3           4         5          contagem de grupos
const regExp4 = /(<(\w+)([\s\S]*?)>)([\s\S]*?)(<\/\2>)/g;

// remontando a tag html
// para isso é preciso da abertura da tag -> $1 (engloba $2 e $3)
// conteudo -> $4
// fechamento da tag -> $5
// console.log(html3.replace(regExp4, '$1$4$5')); // nada mudará

console.log(html3.replace(regExp4, '$1 MUDEI $5')); // altera o conteudo para MUDEI

// -----------------------------------------------------------------------------

// OBS: é possivel desconsiderar a contagem de um grupo

// (?: )  -> desconsidera a contagem do grupo (não salva na memória)

//                1 2                  3         4    
const regExp5 = /(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g;
