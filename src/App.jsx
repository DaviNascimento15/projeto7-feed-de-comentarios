import React from 'react';
import FeedDeComentarios from './components/FeedDeComentarios';

function App() {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh',
      backgroundColor: '#eef1f5'
    }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Projeto 3: Feed de Comentários</h1>
        <FeedDeComentarios />
      </div>
    </div>
  );
}

export default App;
