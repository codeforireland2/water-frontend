import React from 'react'
// eslint-disable-next-line
import {Container, Row, Col} from 'styled-bootstrap-grid'

class footer extends React.Component {
  render () {
    return (
      <Container className='footer'>
        <a data-toggle='modal' data-target='#contactDialog'><span className='glyphicon glyphicon-envelope' /></a>
        <a data-toggle='modal' data-target='#contactDialog'>Kontakt</a>
        |
        <a data-toggle='modal' data-target='#aboutDialog'><span className='glyphicon glyphicon-question-sign' /></a>
        <a data-toggle='modal' data-target='#aboutDialog'>Über das Projekt</a>
        |
        <a data-toggle='modal' data-target='#attributionDialog'><span className='glyphicon glyphicon-user' /></a>
        <a data-toggle='modal' data-target='#attributionDialog'>Mitwirkende</a>
        |
        <a data-toggle='modal' data-target='#imprintDialog'><span className='glyphicon glyphicon-info-sign' /></a>
        <a data-toggle='modal' data-target='#imprintDialog'>Impressum</a>
      </Container>
    )
  }
}

export default footer
