import React, { useState } from 'react';
import FormularioComentario from './FormularioComentario';
import ListaComentarios from './ListaComentarios';

function FeedDeComentarios() {
  const [comentarios, setComentarios] = useState([
    { usuario: 'Ana', texto: 'React é incrível!' },
    { usuario: 'João', texto: 'Muito bom esse projeto!' },
  ]);

  const adicionarComentario = (novoComentario) => {
    setComentarios([...comentarios, novoComentario]);
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '0 auto',
      border: '1px solid #aaa',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ textAlign: 'center' }}>Feed de Comentários</h2>
      <FormularioComentario onEnviar={adicionarComentario} />
      <ListaComentarios comentarios={comentarios} />
    </div>
  );
}

export default FeedDeComentarios;
