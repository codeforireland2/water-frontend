import React, { Component } from 'react'
import './App.css'
import './static/css/bootstrap.css'
import './static/css/styledbootstrap.css'
import './static/css/bootstrap-cyborg.css'
import './static/css/main.css'
import Body from './components/Body'
// import logo from './logo.svg'

import location from './components/location'
import results from './components/results'
import {Container, Row, Col} from 'styled-bootstrap-grid'

class App extends Component {
  render () {
    return (
      <div className='App'>
        < Body />
        <Container>
          <Row>
            <Col xl='1' lg='2' md='3' sm='12'>
              <location />
            </Col>
            <Col>
              <results />
            </Col>
          </Row>
        </Container>
        <div className='App-header'>
        Header
        </div>
      </div>
    )
  }
}

export default App
