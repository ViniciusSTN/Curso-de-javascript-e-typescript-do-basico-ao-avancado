import React, { Component } from "react";

import { FaPlus } from 'react-icons/fa';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {

  // hoje é possivel inicializar o state sem o constructor, por conta do class fields
  state = {
    novaTarefa: '',
    tarefas: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {tarefas} = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim();

    // se a tarefa já existir
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    })
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  handleEdit = (e, index) => {
    console.log('Edit', index);
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  render() {
    const {novaTarefa, tarefas} = this.state;

    return (
      // className refere-se a class do html
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            // essa key é para o evitar erro no react (tirar e ver o erro no navegador)
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, index)}
                />

                <FaWindowClose
                  className="delete"
                  onClick={(e) => this.handleDelete(e, index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
