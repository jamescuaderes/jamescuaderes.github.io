import React from 'react';
import './App.css';
import ColoredButton from './Components/Common/ColoredButton';
import Header from './Components/Common/Header';
import {Button} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <ColoredButton color='danger' message='Press to show an alert'></ColoredButton>
        <a
          className="App-link"
          href="https://jamescuaderes.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          My current website
        </a>
      </header>
    </div>
    
  );
}

export default App;
