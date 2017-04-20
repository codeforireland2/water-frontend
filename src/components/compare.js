import React from 'react'

class compare extends React.Component {
  render () {
    return (
      <button type='button' className='btn btn-warning switch-to-section hidden-xs' data-section='compare'>
        <span className='glyphicon glyphicon-chevron-right' /> Vergleich mit Mineralwasser
      </button>
    )
  }
}

export default compare
