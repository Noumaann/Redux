import React from 'react'
import User from './User'
import './App.css';
import HomeContainer from './container/HomeContainer'

function App() {
  return (
    <div className="App">
     <h1>App Component</h1>
     <User data={{name:'Nouman', age:25}}/>







    <HomeContainer/>

    </div>
  
  );
}

export default App;
