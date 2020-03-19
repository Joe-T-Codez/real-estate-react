import React, { Component} from 'react'
import Header from './Header.js'
import Filter from './Filter.js'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
      <Header/>
      <Filter/>
      </div>
    );
  }
}

export default App;
