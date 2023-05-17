// recursividade é uma função que chama a si mesmo (existe um limite)
// funcionará como uma estrutura de repetição
function recursiva(max) {
    if (max > 10) return;
    console.log(max);
    max++;
    recursiva(max);
}

recursiva(0);