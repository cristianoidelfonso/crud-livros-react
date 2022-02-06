import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 
class CreateBook extends Component {
  state = {
    livro: {
      id: this.props.livro.id,
      isbn: this.props.livro.isbn,
      titulo: this.props.livro.titulo,
      autor: this.props.livro.autor
    },
    redirecionar: false
  };

  handleLivroForm = event => {
    event.preventDefault();

    if(this.props.editarLivro){
      this.props.editarLivro(this.state.livro);
    }
    else{
      this.props.inserirLivro(this.state.livro);
    }
    this.setState({ redirecionar: true });
  };


  render(){
    if(this.state.redirecionar === true){
      return <Redirect to="/" />;
    }

    return(
      <form onSubmit={this.handleLivroForm}>
        <h1>Cadastrar livro</h1>
        <p>
          <label htmlFor="fisbn">
            ISBN: Formato - (<span style={{color: "red"}}>978-85-7522-xxx-x</span>)
          </label>
          <input 
            type="text" 
            autoFocus 
            defaultValue={ this.props.isbn }
            id="fisbn" 
            required 
            pattern="^[0-9]{3}-[0-9]{2}-[0-9]{4}-[0-9]{3,4}-[0-9]{1}$"
            value={ this.state.livro.isbn}
            onChange={event =>
              this.setState({
                livro: {
                  ...this.state.livro, 
                  isbn: event.target.value
                }
              })
            }
          />
        </p>
        <p>
          <label htmlFor="ftitulo">Titulo</label>
          <input 
            type="text"
            defaultValue={this.props.titulo}
            id="ftitulo" 
            required 
            value={ this.state.livro.titulo }
            onChange={event => 
              this.setState({
                livro: {
                  ...this.state.livro,
                  titulo: event.target.value
                }
              })
            }
          />
        </p>
        <p>
          <label htmlFor="fautor">Autor</label>
          <input 
            type="text" 
            defaultValue={ this.state.autor }
            id="fautor" 
            required 
            value={ this.state.livro.autor }
            onChange={event =>
              this.setState({
                livro: {
                  ...this.state.livro,
                  autor: event.target.value
                }
              })
            }
          />
        </p>
        <p>
          <button type="submit" className="botao cadastrar">Cadastrar</button>
        </p>
      </form>
    );
  }
}
export default CreateBook;