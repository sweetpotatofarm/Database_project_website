import React from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Main from './component/Main'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Navbar></Navbar>
        <Main></Main>
      </div>
    );
  }
}

export default App;
