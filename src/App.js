import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Footer from './components/Footer.jsx';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <SearchBar
        onSearch={(ciudad) => alert(ciudad)}
      />
      <Cards
        cities={data}
      />
      <Footer/>
    </div>
  );
}

export default App;
