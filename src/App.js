import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Footer from './components/Footer.jsx';
import getApiClima from './apiClima';

function App() {
  const [data,setData] = useState([]);
  
  useEffect(()=>{
    const ciudades = [getApiClima('Santa Fe'),getApiClima('Buenos Aires'),getApiClima('la rioja')]
    Promise.all(ciudades).then(
      resp => {
        setData(resp)
      }
    )
  },[]);
  
  async function buscar(ciudad){
    let exists = data.filter(x => x.name.toUpperCase() === ciudad.toUpperCase());
    if(ciudad && exists.length === 0){
      try{
        const respuesta = await getApiClima(ciudad)
        setData([...data,respuesta])
      }
      catch(error){
        alert(error)
      }
    }
    document.getElementById('buscador').value = ''
  }
  
  function eliminar(ciudad){
    let resultado = data.filter(x => x.name.toUpperCase() !== ciudad.toUpperCase());
    setData(resultado);
  }

  return (
    <div className="App">
      <SearchBar
        onSearch={(ciudad) => buscar(ciudad)}
      />
      <Cards
        cities={data}
        onClose={(ciudad) => eliminar(ciudad)}
      />
      <Footer/>
    </div>
  );
}

export default App;
