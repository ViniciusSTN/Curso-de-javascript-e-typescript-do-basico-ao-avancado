
// (?= )  -> positive lookahead
// (?! )  -> negative lookahead

// (?<= ) -> positive lookbehind
// (?<! ) -> negative lookbehind

// melhor sempre usar positive

// -------------------------------------------------------------------

const text = `
OFFLINE 192.145.252.0.1 ABCDEF active
ONLINE 192.145.252.0.2 ABCDEF inactive
OFFLINE 192.145.252.0.3 ABCDEF active
ONLINE 192.145.252.0.4 ABCDEF active
OFFLINE 192.145.252.0.5 ABCDEF inactive
ONLINE 192.145.252.0.6 ABCDEF active
`;

// -------------------------------------------------------------------

// retorna tudo que for active na frase
const regExp1 = /.+[^in]active/gim;

const found1 = text.match(regExp1);
// console.log(found1);

// -------------------------------------------------------------------

// positive lookahead

// (?= ) -> positive lookahead
// checa o que está a frente da frase
// como se fosse um regex dentro do regex

const regExp2 = /.+(?=[^in]active)/gim;

// console.log(text.match(regExp2));

// -------------------------------------------------------------------

// negative lookahead (não é muito comum pois é mais confuso)

// ?! -> negação do positive

// negando o que tiver active -> retorna todos os inactive (era melhor testar e retornar direto os active)
const regExp3 = /^(?!.+[^in]active).+$/gim;
// console.log(text.match(regExp3));


// mais intuitivo:
// usando positive lookahead
const regExp4 = /^(?=.+inactive).+$/gim;
// console.log(text.match(regExp4));

// obs: nesses casos está sendo retornado a linha inteira

// -------------------------------------------------------------------

// positive lookbehind

// ?<=
// checa o que está atrás

const regExp5 = /(?<=ONLINE\s+)\S+.*/gim;
// console.log(text.match(regExp5));

// -------------------------------------------------------------------

// negative lookbehind (não usar)

const regExp6 = /^.+(?<!ONLINE.+)$/gim;
console.log(text.match(regExp6));
