export default function Characters(props) {
  const { caracters, setCaracters } = props;

  const resetCaracters = () => {
    setCaracters(null) 
  }

  return (
    <div className="caracters">
      <h1>Personajes</h1>
      <span className="ack-home" onClick={resetCaracters}>volver a la home</span>

      <div className="container-characters">
        {caracters.map((caracter, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={caracter.image} alt={caracter.name} />
            </div>
            <div>
              <h3>{caracter.name}</h3>

              <h6>
                
                {caracter.status === "Alive" ? (
                  <>
                    <span className="alive" /> Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-gray">episodios:</span>
                <span>{caracter.episode.length}</span>
              </p>
              <p>
                <span className="text-gray"> Especie:</span>
                <span> {caracter.species}</span> 
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
