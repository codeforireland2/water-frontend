import React from 'react'
// eslint-disable-next-line
import {Container, Row, Col} from 'styled-bootstrap-grid'

class testtype extends React.Component {
  render () {
    return (
      <ul className='nav nav-tabs responsive'>
        <li className='nav-li-main'><a data-toggle='tab' data-attribute='natrium'>Natrium</a></li>
        <li className='nav-li-main'><a data-toggle='tab' data-attribute='kalium'>Kalium</a></li>
        <li className='nav-li-main'><a data-toggle='tab' data-attribute='calcium'>Calcium</a></li>
        <li className='nav-li-main'><a data-toggle='tab' data-attribute='magnesium'>Magnesium</a></li>
        <li className='nav-li-main'><a data-toggle='tab' data-attribute='chlorid'>Chlorid</a></li>
        <li className='nav-li-main'><a data-toggle='tab' data-attribute='nitrat'>Nitrat</a></li>
        <li className='nav-li-main'><a data-toggle='tab' data-attribute='sulfat'>Sulfat</a></li>
        <li className='nav-li-main'><a data-toggle='tab' data-attribute='hardness'>Härte</a></li>
        <li className='nav-li-main'><a data-toggle='tab' data-attribute='info'><span className='glyphicon glyphicon-info-sign' /> Fragen und Antworten</a></li>
      </ul>
    )
  }
}

export default testtype
