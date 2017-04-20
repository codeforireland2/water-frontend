import React from 'react'
import selectdistrict from './selectdistrict'
import selectstreet from './selectstreet'
import selectlocation from './selectlocation'
import {Col} from 'styled-bootstrap-grid'

class selectcity extends React.Component {
  render () {
    return (
      <form className='form-horizontal form-choose-location' role='form'>
        <div className='form-group select-city'>
          <label htmlFor='city' className='col-sm-2 control-label'>Ort</label>
          <Col sm='10'>
            <select id='city' className='city form-control'>
              <option value>Bitte auswählen</option>
            </select>
          </Col>
        </div>
        <selectdistrict />
        <selectstreet />
        <selectlocation />
      </form>
    )
  }
}

export default selectcity
