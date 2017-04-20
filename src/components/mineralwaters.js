import React from 'react'
import mineralwater from './mineralwater'
import styled from 'styled-components'
// eslint-disable-next-line
import {Container, Row, Col} from 'styled-bootstrap-grid'

const mtContainer = styled.div`
    marginTop: '-32px';
`

// className='section section-compare'
// className='compare-nav'
class mineralwaters extends React.Component {
  render () {
    return (
      <mtContainer>
        <Row>
          <Col lg='5' md='5' sm='5' xs='12' >
            <button type='button' className='btn btn-primary btn-lg btn-block active' data-water='volvic'>Volvic</button>
            <button type='button' className='btn btn-primary btn-lg btn-block' data-water='wueteria'>Wüteria Heiligenquelle</button>
            <button type='button' className='btn btn-primary btn-lg btn-block' data-water='teusser'>Teusser Naturell</button>
            <button type='button' className='btn btn-primary btn-lg btn-block' data-water='vittel'>Vittel</button>
            <button type='button' className='btn btn-primary btn-lg btn-block' data-water='self' style={{
              marginTop: '2em'
            }}>mein Leitungswasser</button>
            <p><br /></p>
          </Col>
          <Col lg='7' md='7' sm='7' xs='12'>
            <mineralwater />
          </Col>
        </Row>
        <p><br /></p>
        <p><br /></p>
        <p><button type='button' className='btn btn-warning switch-to-section' data-section='explanation'><span className='glyphicon glyphicon-chevron-left' /> Zurück</button></p>
        <p><br /></p>
        <p><small>Beispielhaft wurden zwei überregional bekannte Wasser sowie zwei Wasser aus dem Landkreis Heilbronn ausgewählt. Alle vier sind stille Mineralwasser.</small></p>
      </mtContainer>
    )
  }
}

export default mineralwaters
