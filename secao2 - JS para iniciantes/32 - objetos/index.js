// function factory
function criaPessoa(name, lastName, age) {
  return {
    name,
    lastName,
    age,

    toSpeak() {
      console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`);
    },

    ageIncrement(ages = 0) {
      this.age += ages;
    }
  };
}

const pessoa1 = criaPessoa('Vinicius', 'Santana', 20);
console.log(pessoa1);
pessoa1.toSpeak();
pessoa1.ageIncrement(2);
pessoa1.toSpeak();