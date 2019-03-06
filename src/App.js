import React, { Component } from 'react';
import Title from './components/title/title';
import Navbar from './components/navbar/navbar';


class App extends Component {
  render() {
    return (  
      <div className="App">
        <Navbar logo="React"/>
        <Title title="Título da Aplicação"/>
      </div>
    );
  }
}

export default App;
