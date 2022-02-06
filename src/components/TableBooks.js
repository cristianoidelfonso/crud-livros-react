function TableBooks() {
  return(
    <div className="livros">
      <h1>Tabela de livros</h1>
      <table className="tabela">
        <thead>
          <tr>
            <th width="17%">ISBN</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th width="7%"></th>
            <th width="9%"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ISBN do livro</td>
            <td>TITLE do livro</td>
            <td>AUTHOR do livro</td>
            <td>
              <button className="botao editar">Editar</button>
            </td>
            <td>
              <button className="botao remover">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableBooks;