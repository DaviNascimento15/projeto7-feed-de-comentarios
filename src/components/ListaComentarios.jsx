import React from 'react';

function ListaComentarios({ comentarios }) {
  return (
    <div>
      <h3>Comentários:</h3>
      {comentarios.map((c, index) => (
        <p key={index}>
          <strong>{c.usuario}:</strong> {c.texto}
        </p>
      ))}
    </div>
  );
}

export default ListaComentarios;
