// --------- forma mais simples --------------------------------

const h1 = document.querySelector('.container h1');
const date = new Date();
h1.innerHTML = date.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

// --------- forma mais complexa --------------------------------

// const h1 = document.querySelector('h1');
// h1.innerHTML = dateCreate();

function dateCreate() {
    const date = new Date();
    const day = date.getDay();
    const dayMonth = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    const dayWeek = returnDay(day);
    const monthYear = returnMonth(month);
    
    return `${dayWeek}, ${dayMonth} de ${monthYear} de ${year}`;
}

function returnDay(day) {
    const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return days[day];
}

function returnMonth(month) {
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return months[month];
}

