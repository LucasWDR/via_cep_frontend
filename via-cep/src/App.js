import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './css/styles.css';

function App() {

  const [ input, setInput] = useState('');
  
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um cep..."
          value ={input}
          onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" /* onCLick={handleSearch} */>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>
      <main className='main'>
        <h2>CEP:95538-000</h2>
        <span>Logradouro:-</span>
        <span>Municipio: Itati</span>
        <span>UF: RS</span>
        <span>bairro: bairro fim</span>
      </main>
    </div>
  );
}

export default App;
