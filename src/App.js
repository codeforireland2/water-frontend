import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Body from './components/Body'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Body />
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />

        </div>
      </div>
    )
  }
}

export default App
