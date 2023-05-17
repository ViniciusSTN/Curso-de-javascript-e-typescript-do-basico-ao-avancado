function scope() {
  const form = document.querySelector('.form');
  const result = document.querySelector('.result');
  form.addEventListener('submit', getFormEvent);

  const people = [];
  // form.onsubmit = event => {
  //   event.preventDefault();
  // };
  function getFormEvent(event) {
    event.preventDefault();
    const name = form.querySelector('.name').value;
    const lastName = form.querySelector('.lastName').value;
    const weight = form.querySelector('.weight').value;
    const height = form.querySelector('.height').value;

    people.push({
      name,
      lastName,
      weight,
      height,
    });

    console.log(people)
    result.innerHTML += `<p>${name} / ${lastName} / ${weight} / ${height}</p>`
  }
}
scope();