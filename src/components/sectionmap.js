import React from 'react'
// eslint-disable-next-line
import {Container, Row, Col} from 'styled-bootstrap-grid'

class sectionmap extends React.Component {
  render () {
    return (
      <div className='section section-map' style={{}}>
        <div className='alert alert-warning'>Die Karte steht derzeit nur für die Stadt Heilbronn zur Verfügung und befindet sich noch in einem experimentellen Stadium.</div>
        <p>Die Straßen mit den niedrigsten Werten sind tiefblau, die Straßen mit den höchsten Werten rot eingefärbt.</p>
        <svg className='map-img' style={{
          width: 600,
          height: 600
        }} xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 1170 1170' preserveAspectRatio='xMinYMin meet'>
          <g className='areas' />
          <g className='zones' />
        </svg>
      </div>
    )
  }
}

export default sectionmap
