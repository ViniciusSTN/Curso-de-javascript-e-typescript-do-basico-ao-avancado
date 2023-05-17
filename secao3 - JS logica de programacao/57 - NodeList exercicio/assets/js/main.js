const paragraphsDiv = document.querySelector('.paragrafos');

// retorna NodeList (parecido com array)
const p = paragraphsDiv.querySelectorAll('p');
console.log(p);

const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;
console.log(bgColorBody);

for (let i of p) {
    // atribuindo style inline (não recomendado)
    i.style.color = bgColorBody;
}

