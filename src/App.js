import imageRick from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./Components/Characters";

function App() {
    const [caracters, setCaracters] = useState(null);
    const recAPI = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterAPI = await api.json();
    setCaracters(characterAPI.results);
  };

  return (
    <div className="App">
      <header className="App-header">

        <h1 className="tittle">Rick & Morty</h1>

        {caracters ? (
          <Characters caracters={caracters} setCaracters={setCaracters}/>
        ) : (
          <>
            <img src={imageRick} alt="Rick & Morty" className="img-home"></img>
            <button onClick={recAPI} className="btn-search">Searchs</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
