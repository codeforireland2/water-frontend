import React from 'react'
import formresults from './formresults'
import testtype from './testtype'
import testnoresult from './testnoresult'
import mineralNa from './mineralNa'
import mineralK from './mineralK'
import mineralCa from './mineralCa'
import mineralMg from './mineralMg'
import mineralCl from './mineralCl'
import mineralN from './mineralN'
import mineralSo4 from './mineralSo4'
import compare from './compare'
import gaugeglass from './gaugeglass'
import resultexplanation from './resultexplanation'
import buttoncompare from './buttoncompare'
import mineralwaters from './mineralwaters'
import sectionmap from './sectionmap'
import info from './info'
// eslint-disable-next-line
import { Row, Col} from 'styled-bootstrap-grid'

class results extends React.Component {
  render () {
    return (
      <div className='results' style={{}}>
        <formresults />
        <testtype />
        <testnoresult />
        <div data-comonent='resultvalue' className='result-with-value'>
          <Row>
            <Col lg='12' md='12'>
              <div className='section section-explanation'>
                <Row className='gauge-glass-container'>
                  <Col lg='6' md='6' sm='6' xs='7'>
                    <mineralNa />
                    <mineralK />
                    <mineralCa />
                    <mineralMg />
                    <mineralCl />
                    <mineralN />
                    <mineralSo4 />
                    <br />
                    <p><compare /></p>
                  </Col>
                  <gaugeglass />
                </Row>
                <resultexplanation />
                <p><br /></p>
                <p><buttoncompare /></p>
              </div>
              <mineralwaters />
              <sectionmap />
            </Col>
          </Row>
        </div>
        <info />
      </div>
    )
  }
}

export default results
