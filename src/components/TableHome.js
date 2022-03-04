import React from 'react';

const TableHome = ({ livros }) => {
  return (
    <div className="livros">
      <h1>Table de Livros</h1>
      { livros.length === 0 && <h2>Nenhum livro cadastrado.</h2>}

      { livros.length > 0 && (
        <table className="tabela">
          <thead>
            <tr>
              <th width="27%">ISBN</th>
              <th>TÍTULO</th>
              <th>AUTOR</th>
            </tr>
          </thead>
          <tbody>
            { livros.map((livro) => (
              <tr key={livro.isbn}>
                <td>{ livro.isbn }</td>
                <td>{ livro.titulo }</td>
                <td>{ livro.autor }</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default TableHome;