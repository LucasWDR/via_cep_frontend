import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './css/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    try {
      const response = await api.get(`/address/find-cep/${input}`);
      setCep(response.data);
      setInput("");
    } catch (error) {
      toast('Digite um CEP!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-message',
        autoClose: 2000
      });
      setInput("");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um cep..."
          value={
            input
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')}
          maxLength={9}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch"
          onClick={handleSearch}
        >
          <FiSearch size={25} color="#FFF" />

        </button>
      </div>
      <main className='main'>
        <h2>CEP:{!cep.cep ? "-" : cep.cep}</h2>
        <span>Logradouro:{!cep.publicPlace ? "-" : cep.publicPlace}</span>
        <span>Municipio: {!cep.county ? "-" : cep.county}</span>
        <span>UF:{!cep.uf ? "-" : cep.uf}</span>
        <span>bairro:{!cep.neighborhood ? "-" : cep.neighborhood}</span>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
