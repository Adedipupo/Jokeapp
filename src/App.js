import React from 'react';
import './App.css';
import Header from './components/Header';
import Joke from './components/Joke';
import jokesData from './jokesData';

function App() {
   const jokesComponents =   jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchLine}/>)
  return (
    <div className="App">
      <Header title="Random Jokes Ooops"/>
      {jokesComponents}
    </div>
  );
}

export default App;
