import React from 'react'
import hardnessresults from './hardnessresults'
// eslint-disable-next-line
import {Container, Row, Col} from 'styled-bootstrap-grid'
class resultexplanation extends React.Component {
  render () {
    return (
      <Row className='gauge-bar-container'>
        <Col lg='5' md='5' sm='12' xs='12'>
          <p>Die Wasserhärte gibt an, wie weich oder hart ein Wasser ist. Je mehr Calcium und Magnesium in einem Wasser enthalten sind, desto härter ist es.</p>
          <p>Hartes Wasser kann in Küche und Bad Kalkflecken verursachen. Wegen seinem hohen Calcium- und Magnesiumgehalt ist es gesünder als weiches Wasser.<br />(Calcium: Aufbau von Knochen und Zähnen, Magnesium: Aufbau von Muskeln und Nerven)</p>
        </Col>
        <Col lg='7' md='7' sm='12' xs='12'>
          <div style={{
            paddingRight: 34
          }}>
            <img alt='washer' src='img/haushalt.svg' className='pull-right hidden-xs' />
            <hardnessresults />
            <p><br /></p>

            <svg width='750' height='136' xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 750 136' preserveAspectRatio='xMinYMin meet' className='gauge-bar-img'>
              <defs>
                <pattern patternUnits='userSpaceOnUse' height='6' width='6' y='6' x='6' id='hardness-range-indicator'>
                  <line id='svg_1' y2='0' y1='6' x2='6' x1='0' className='range-indicator-bar' />
                </pattern>
              </defs>
              <g>
                <g id='svg_2' className='gauge-bars' />
                <g id='svg_3' className='gauge-bar-labels' />
                <g id='svg_4' className='gauge-value-indicators'>
                  <rect id='svg_5' fill='url(#hardness-range-indicator)' height='40' width='25' y='64' x='63.5' className='gauge-bar-range-indicator' />
                  <circle id='svg_6' r='13' cy='84' cx='63.5' className='gauge-bar-ball' />
                </g>
              </g>
            </svg>
          </div>
        </Col>
      </Row>
    )
  }
}

export default resultexplanation
