const numbers = [1,2,3,4,5,6,7,8,9,10];

for (let i of numbers) {
    if (i === 2) {
        console.log('pulei o 2');
        // pula para a próxima repetição
        continue;
    }

    if (i === 7) {
        console.log('Encontrei o 7');
        // útil para quebrar a repetição quando encontrar um valor e economizar processamento
        break;
    }

    console.log(i);
}