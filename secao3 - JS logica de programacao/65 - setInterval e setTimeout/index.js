function returnHour() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(() => {
    console.log(returnHour());
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 10000);



setTimeout(() => {
    console.log('Olá mundo!');
}, 5000);