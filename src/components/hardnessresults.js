import React from 'react'

class hardnessresults extends React.Component {
  render () {
    return (
      <table className='table table-gauge-description gauge-description gauge-bar-description'>
        <tbody><tr>
          <th style={{
            border: 'none'
          }}><strong className='highlight'>Wert</strong></th>
          <td style={{
            border: 'none'
          }}><strong className='highlight'><span className='gauge-value' /> °dH</strong></td>
        </tr>
          <tr>
            <th>Restalkalität</th>
            <td><span className='gauge-value-ra' /> °dH</td>
          </tr>
          <tr>
            <th>Bereich</th>
            <td><span className='gauge-value-label' /></td>
          </tr>
          <tr>
            <th>Durchschnitt<br /><small>Region Heilbronn</small></th>
            <td><span className='gauge-average-value' /> °dH</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default hardnessresults
