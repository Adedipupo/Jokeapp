import React from 'react';
import './App.css';
import Header from './components/Header';
import JokeList from './components/JokeList';

function App() {
  return (
    <div className="App">

      <Header title="Random Jokes"/>
     
      <JokeList />  
    </div>
  );
}

export default App;
