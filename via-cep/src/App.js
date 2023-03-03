import { FiSearch } from 'react-icons/fi';
import './css/styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um cep..."
        />

        <button className="buttonSearch">
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
