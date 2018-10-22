import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import HeaderBanner from './components/HeaderBanner'

class App extends Component {
  render() { 
    return (
      <div className="kanban">
        <Header />
        <HeaderBanner />

        {/* Your kanban board goes here */}
      </div>
    )
  }
}

export default App;
