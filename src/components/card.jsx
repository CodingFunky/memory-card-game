import React from "react";

// async function getRandomPokemon() {
//   const randomID = Math.floor(math.random() * 10) + 1;

//   const response = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${randomId}/`
//   );
//   console.log("render");
//   const data = await response.json();

//   return { name: data.name, image: data.sprites.front_default };
// }

function Card() {
  const randomID = Math.floor(Math.random() * 100) + 1;
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    console.log("fetch");
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomID}/`)
      .then((res) => res.json())
      .then((data) => setPokemon(data.sprites.front_default));
  }, []);
  // console.log(pokemon.sprites.front_default);
  return <div className="card">{<img src={pokemon} alt="" />}</div>;
}

export default Card;
