import React from 'react'

class formresults extends React.Component {
  render () {
    return (
      <form className='form-inline form-choose-location-quick'>
        <div className='form-group'>
          <select className='city form-control' />
        </div>
        <div className='form-group select-district'>
          <select className='district form-control' />
        </div>
        <div className='form-group select-street'>
          <select className='streetZone form-control' />
        </div>
      </form>
    )
  }
}

export default formresults
