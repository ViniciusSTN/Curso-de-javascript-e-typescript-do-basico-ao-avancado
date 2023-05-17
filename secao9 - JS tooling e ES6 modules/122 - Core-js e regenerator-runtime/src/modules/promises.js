function promise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Sou a promise');
            resolve();
        }, 2000);
    });
}

export default async function() {
    await promise();
    console.log('Terminou');
}
