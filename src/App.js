import React, { Component } from 'react';
import Menu from "./components/Menu";
import TableBooks from "./components/TableBooks";
import './App.css';

class App extends Component {

  state = {
    livros: [
      {
        id: 1,
        isbn: "978-85-7522-403-8",
        titulo: "HTML5 - 2ª Edição",
        autor: "Maurício Samy Silva",
      },
      {
        id: 2,
        isbn: "978-85-7522-807-4",
        titulo: "Introdução ao Pentest",
        autor: "Daniel Moreno",
      },
      {
        id: 3,
        isbn: "978-85-7522-780-8",
        titulo: "Internet das Coisas para Desenvolvedores",
        autor: "Ricardo da Silva Ogliari",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <TableBooks livros={this.state.livros} />
      </div>
    );
  }
}

export default App;
