import React, { Component } from "react";

import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {

  // hoje é possivel inicializar o state sem o constructor, por conta do class fields
  state = {
    novaTarefa: '', // inicializa state
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }

  render() {
    const {novaTarefa} = this.state;

    return (
      // className refere-se a class do html
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
