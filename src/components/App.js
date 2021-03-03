import React, { useEffect, useState } from 'react';
import '.././stylesheets/App.scss';
import Api from '../services/api';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Api().then((data) => setCharacters(data));
  }, []);
  console.log(characters);
  return (
    <div className="App App-header">
      <Header></Header>
      <Footer />
    </div>
  );
}

export default App;
