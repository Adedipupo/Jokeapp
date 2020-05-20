import React from 'react';
import './App.css';
import Header from './components/Header';
import Joke from './components/Joke';
import jokesData from './jokesData';

function App() {
      jokesData.map(joke => <Joke question={joke.question} punchline={joke.punchLine}/>)
  return (
    <div className="App">
      <Header title="Random Jokes Ooops"/>
    </div>
  );
}

export default App;
