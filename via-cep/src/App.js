import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './css/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input === '') {
      toast('Digite um CEP!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-message',
        autoClose: 2000
      });
    }
  }
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch"
          onClick={handleSearch}
        >
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
      <ToastContainer />
    </div>
  );
}

export default App;
