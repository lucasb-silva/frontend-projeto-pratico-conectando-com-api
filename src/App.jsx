import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Api } from './api/api'

function App() {

  const [items, setItems] = useState([])

  async function fetchData() {
    try {
      const data = await Api.personagem.readAll();
      setItems(data);
    } catch (error) {
      toast.error('Erro ao buscar dados');
      console.error('Erro ao buscar dados', error);
    }
  }

  useEffect(function () {
    fetchData()
  }, []);

  const deleteItem = async function (id) {
    try {
      await Api.personagem.delete(id);
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      toast.error('Erro ao deletar item');
      console.error('Erro ao deletar item: ', error);
    }
  };

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ul>
        {items.map(function (item) {
          return (
            <li key={item._id}>
              {item.nome} | | 
              <button onClick={function () { deleteItem(item._id); }}>Deletar</button>
            </li>
          );
        })}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default App
