const elements = [
    {tag: 'p', text: 'Qualquer coisa'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'section', text: 'Frase 3'},
    {tag: 'footer', text: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let tagCreate = document.createElement(tag);
    // tagCreate.innerText = text;
    let textNode = document.createTextNode(text);
    tagCreate.appendChild(textNode);
    div.appendChild(tagCreate);
}

container.appendChild(div);