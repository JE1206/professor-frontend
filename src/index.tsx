import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();




function LancarNotasFrequencia() {
  const [aulasLecionadas, setAulasLecionadas] = useState('');
  const [aulasAtendidas, setAulasAtendidas] = useState('');
  const [notaP1, setNotaP1] = useState('');
  const [notaP2, setNotaP2] = useState('');

  const handleSubmit = () => {
    preventDefault();
    // Aqui você pode processar os dados ou enviá-los para um backend
    console.log('Aulas Lecionadas:', aulasLecionadas);
    console.log('Aulas Atendidas pelo Aluno:', aulasAtendidas);
    console.log('Nota da P1:', notaP1);
    console.log('Nota da P2:', notaP2);
  };

  return (
    <div>
      <h2>Lançamento de Notas e Frequência</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Aulas Lecionadas:
          <input
            type="number"
            value={aulasLecionadas}
            onChange={(e) => setAulasLecionadas(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Aulas Atendidas pelo Aluno:
          <input
            type="number"
            value={aulasAtendidas}
            onChange={(e) => setAulasAtendidas(e.target.value)}
            required
          />
        </label>
        <br /><br />

        <label>
          Nota da P1:
          <input
            type="number"
            value={notaP1}
            onChange={(e) => setNotaP1(e.target.value)}
            step="0.1"
            min="0"
            max="10"
            required
          />
        </label>
        <br /><br />

        <label>
          Nota da P2:
          <input
            type="number"
            value={notaP2}
            onChange={(e) => setNotaP2(e.target.value)}
            step="0.1"
            min="0"
            max="10"
            required
          />
        </label>
        <br /><br />

        <button type="submit">Lançar Notas e Frequência</button>
      </form>
    </div>
  );
}

export default LancarNotasFrequencia;
function preventDefault() {
  throw new Error('Function not implemented.');
}

