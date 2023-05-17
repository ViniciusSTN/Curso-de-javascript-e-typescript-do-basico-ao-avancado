const people = {
    name: 'joão',
    lastName: 'Oliveira',

    // duas formas de resolver o porblema do this

    // ao usar a palavra function o this será modificado e nesse caso irá se referenciar ao objeto document, para resolver isso, basta usar .bind(this) no final da função
    falaNome() {
        document.addEventListener('click', function(e) {
            const el = e.target;

            if (el.classList.contains('btn')) {
                console.log(this.name);
            }
        }.bind(this));
    },

    // ou basta usar uma arrow function, pois ela não altera a palavra this
    falaNome2() {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn')) {
                console.log(this.name);
            }
        });
    }
}

people.falaNome();
people.falaNome2();

