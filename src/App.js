import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './home.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Home menuName1="About Us" menuName2="Gallery"  menuName3="Contact"/>
      </header>
    </div>
  );
}

export default App;
