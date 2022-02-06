import React, { Component } from 'react';
import Menu from "./components/Menu";
import TableBooks from "./components/TableBooks";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <TableBooks />
      </div>
    );
  }
}

export default App;
