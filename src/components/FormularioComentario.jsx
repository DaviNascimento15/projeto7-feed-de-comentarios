import React, { useState } from 'react';

function FormularioComentario({ onEnviar }) {
  const [usuario, setUsuario] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario && comentario) {
      onEnviar({ usuario, texto: comentario });
      setUsuario('');
      setComentario('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px', boxSizing: 'border-box' }}
      />
      <input
        type="text"
        placeholder="Escreva um comentário..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px', boxSizing: 'border-box' }}
      />
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Enviar</button>
    </form>
  );
}

export default FormularioComentario;
