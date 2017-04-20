import React from 'react'
import panel from './panel'
// eslint-disable-next-line
import {Container, Row, Col} from 'styled-bootstrap-grid'

class info extends React.Component {
  render () {
    return (
      <div className='info-container'>
        <Row>
          <Col lg='6' md='6' sm='12' xs='12'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h4 className='panel-title'>Information zu <span className='zone-id' /></h4>
              </div>
              <div className='panel-body'>
                <p className='zone-year-container'>
                  Die Daten stammen aus dem Jahr <span className='zone-data-year' />
                </p>
                <p>
                  <span className='zone-description' />
                </p>
              </div>
            </div>
            <panel />
          </Col>
        </Row>
      </div>
    )
  }
}

export default info
