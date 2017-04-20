import React from 'react'
import location from './location'
import intro from './intro'
import results from './results'
import footer from './footer'
import {Container, Row, Col} from 'styled-bootstrap-grid'

class Body extends React.Component {
  // constructor (props) {    super(props)  }

  render () {
    return (
      <Container>
        <Row>
          <Col xl='1' lg='2' md='3' sm='12'>
            <location> Location </location>
            <intro> Intro </intro>
            <results> Results </results>
            <footer> footer </footer>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Body
