import React from 'react'
// eslint-disable-next-line
import {Container, Row, Col} from 'styled-bootstrap-grid'

class selectdistrict extends React.Component {
  render () {
    return (
      <div className='form-group select-district' style={{}}>
        <label htmlFor='district' className='col-sm-2 control-label'>Ortsteil</label>
        <Col sm='10'>
          <select id='district' className='district form-control' />
        </Col>
      </div>
    )
  }
}

export default selectdistrict
