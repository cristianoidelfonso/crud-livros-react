import React, { Component } from 'react';
import SimpleStorage from 'react-simple-storage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from "./components/Header";
import TableHome from "./components/TableHome";
import TableBooks from "./components/TableBooks";
import CreateBook from './components/CreateBook';
import NotFound from './components/NotFound';
import Login from './components/Login';

import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

import './App.css';

// console.log(firebase);

class App extends Component {

  state = { 
    isAuthenticated: false,
    livros:[] }
  // state1 = {
  //   livros: [
  //     {
  //       id: 1,
  //       isbn: "978-85-7522-403-8",
  //       titulo: "HTML5 - 2ª Edição",
  //       autor: "Maurício Samy Silva",
  //     },
  //     {
  //       id: 2,
  //       isbn: "978-85-7522-807-4",
  //       titulo: "Introdução ao Pentest",
  //       autor: "Daniel Moreno",
  //     },
  //     {
  //       id: 3,
  //       isbn: "978-85-7522-780-8",
  //       titulo: "Internet das Coisas para Desenvolvedores",
  //       autor: "Ricardo da Silva Ogliari",
  //     },
  //   ],
  // };

  inserirLivro = livro => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro]
    });
  };

  editarLivro = livro => {
    const index = this.state.livros.findIndex(p => p.id === livro.id);
    const livros = this.state.livros 
      .slice(0, index)
      .concat(this.state.livros.slice(index + 1));
    const newLivros = [ ...livros, livro].sort((a, b) => a.id - b.id);
    this.setState({
      livros: newLivros
    });
  };

  removerLivro = livro => {
    if(window.confirm('Remover este livro?')){
      const livros = this.state.livros.filter( p => p.isbn !== livro.isbn);
      this.setState({ livros });
    }
  }

  onLogin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((user) => { this.setState({ isAuthenticated: true }); })
      .catch((error) => console.error(error))
  }

  onLogout = () => {
    signOut(auth)
      .then( () => {this.setState({ isAuthenticated: false });})
      .catch(( error ) => console.log(error))
  }


  render() {
    return (
      <Router>

        <SimpleStorage parent = {this} />

        <Header 
          isAuthenticated={this.state.isAuthenticated} 
          onLogout={this.onLogout}
        />
        
        <Switch>
          
          <Route 
            exact 
            path = "/" 
            render={() => 
              !this.state.isAuthenticated
              ? ( <TableHome livros = {this.state.livros} /> ) 
              : ( <TableBooks livros = {this.state.livros} removerLivro = {this.removerLivro}/> ) 
            } 
          />
          <Route 
            exact 
            path = "/cadastrar" 
            render = {() => (
              <CreateBook
                inserirLivro = { this.inserirLivro }
                livro = {{ id:0, isbn:"", titulo:"", autor:"" }} 
              />
            )} 
          />

          <Route 
            exact 
            path='/login' 
            render={() => 
              !this.state.isAuthenticated
              ? ( <Login onLogin={this.onLogin} /> ) 
              : ( <Redirect to="/" /> )
            }
          
          />
          
          <Route
            exact
            path = "/editar/:isbnLivro"
            render = { props => {
                const livro = this.state.livros.find(
                  livro => livro.isbn === props.match.params.isbnLivro
                );
                if(livro){
                  return(
                    <CreateBook
                      editarLivro = { this.editarLivro }
                      livro = {livro}
                    />
                  );
                }
                else{
                  return <Redirect to="/" />
                }
              }
            }
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
