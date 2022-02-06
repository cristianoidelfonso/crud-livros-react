function TableBooks({ livros }) {
  return(
    <div className="livros">
      <h1>Tabela de livros</h1>
      {livros.length === 0 && <h2>Nenhum livro cadastrado!</h2>}
      {livros.length > 0 && (
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
            {livros.map(livro => (
              <tr key={livro.isbn}>
                <td>{livro.isbn}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>
                  <button className="botao editar">Editar</button>
                </td>
                <td>
                  <button className="botao remover">Remover</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableBooks;