import React from 'react'

class resultdata extends React.Component {
  render () {
    return (
      <ul className='gauge-description gauge-glass-description pull-right list-unstyled' style={{
        maxWidth: 200
      }}>
        <li className='highlight'><strong>Wert: <span className='gauge-value' /> mg/l</strong></li>
        <li>Grenzwert: <span className='gauge-legal-limit' /></li>
        <li>Durchschnitt: <span className='gauge-average-value' /> mg/l<br /><small>(Region Heilbronn, rote Linie)</small></li>
        <li className='gauge-daily-dosis-container'>Tagesbedarf: <span className='gauge-daily-dosis'>~</span></li>
      </ul>
    )
  }
}

export default resultdata
