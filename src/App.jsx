import React from "react";
import { useState } from "react";
import Card from "./components/card.jsx";

import "./App.css";

function App() {
  const [allCharacters, setAllCharacters] = React.useState({});
  const [mode, setMode] = useState(5);
  const [characters, setCharacters] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [streak, setStreak] = React.useState(0);
  const [clickedCharacters, setClickedCharacters] = React.useState([]);
  const [result, setResult] = React.useState("");

  function getCharacters() {
    fetch(`https://dragonball-api.com/api/characters?page=1&limit=300`)
      .then((res) => res.json())
      .then((data) => {
        setAllCharacters(data.items);
        let newCharacters = [];
        for (let i = 0; i < mode; i++) {
          let randomID = Math.floor(Math.random() * 57) + 1;
          newCharacters.push(data.items[randomID]);
        }
        setCharacters(newCharacters);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  //To get the characters on load
  React.useEffect(() => {
    getCharacters();
  }, []);

  //Resets game
  function reset() {
    setCharacters([]);
    setScore(0);
    setClickedCharacters([]);
    getCharacters();
  }

  function shuffleCharacters() {
    let newOrder = characters;
    for (let i = newOrder.length - 1; i > 0; i--) {
      // Generate a random index lower than the current element
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at indices i and j
      [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    }
  }

  function handleClick(id) {
    setResult(" ");
    console.log("clicked");
    if (clickedCharacters.includes(id)) {
      // game over/reset game
      setResult("You lose!");
      setStreak(0);
      reset();
    } else {
      //update list or win game
      setClickedCharacters((prev) => [...prev, id]);
      setScore((prev) => prev + 1);
      if (score === mode - 1) {
        console.log("You win!");
        setResult("Winner!");
        setStreak((prev) => prev + 1);
        reset();
      }
    }
    shuffleCharacters();
  }

  return (
    <>
      <h1 className="title">Memory Game</h1>
      <p className="rules">
        Click all pictures without clicking the same one twice!
      </p>
      <p className="scoreBoard">Score: {score}</p>
      <p className="'streak">Win Streak {streak}</p>
      <div className="card-container">
        {characters.map((character, index) => (
          <Card key={index} character={character} onClick={handleClick} />
        ))}
      </div>
      <button className="reset" onClick={reset}>
        Get New character
      </button>
      <div className="results">{result && <p>{result}</p>}</div>
    </>
  );
}

export default App;
