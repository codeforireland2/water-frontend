import React from 'react'
import {Container, Row, Col} from 'styled-bootstrap-grid'

class selectlocation extends React.Component {
  render () {
    return (
      <Container className='form-group'>
        <Row>
          <Col smOffset='2' sm='10'>
            <button type='submit' className='btn btn-warning'>
              <span className='glyphicon glyphicon-chevron-right' /> Weiter
            </button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default selectlocation
