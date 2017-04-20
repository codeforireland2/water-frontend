import React from 'react'
// eslint-disable-next-line
import {Container, Row, Col} from 'styled-bootstrap-grid'

class testnoresult extends React.Component {
  render () {
    return <div className='alert alert-warning result-without-value' style={{}}>
        Es liegen leider keine Werte für diesen Inhaltsstoff vor.
      </div>
  }
}

export default testnoresult
