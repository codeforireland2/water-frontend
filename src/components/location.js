import React from 'react'
import selectcity from './selectcity'

class location extends React.Component {
  render () {
    return (
      <div className='choose-location'>
        <div className='well choose-location-well'>
          <selectcity />
          <br />
        </div>
        <p><small>Derzeit sind Daten aus dem Stadt- und Landkreis Heilbronn auswählbar.</small></p>
      </div>
    )
  }
}

export default location
