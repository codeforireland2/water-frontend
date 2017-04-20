import React from 'react'
// eslint-disable-next-line
import {Container, Row, Col} from 'styled-bootstrap-grid'

class selectstreet extends React.Component {
  render () {
    return (
      <Col className='form-group select-street' style={{}}>
        <label htmlFor='streetZone' className='col-sm-2 control-label'>Straße</label>
        <Col sm='10'>
          <select id='streetZone' className='streetZone form-control' />
        </Col>
      </Col>
    )
  }
}

export default selectstreet
