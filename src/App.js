import React from 'react';
import './App.css';
import Header from './components/Header';
import JokeList from './components/JokeList';
import Joke from './components/Joke';

function App() {
  return (
    <div className="App">

      <Header title="Random Jokes"/>
      <Joke punchline="i say your father"/>
      <JokeList />  
    </div>
  );
}

export default App;
