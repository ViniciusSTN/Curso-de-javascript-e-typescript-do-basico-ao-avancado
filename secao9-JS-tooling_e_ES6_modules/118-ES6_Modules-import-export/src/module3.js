// Pode ter uma variável como default por módulo
// OBS

export function sum(x, y) {
    return x + y;
}

const objeto = 'mesa';

// OBS: const não pode ser default no momento em que é criada:
// export const objeto = 'mesa'     // ERRO

// Para resolver isso:
export {objeto as default}
