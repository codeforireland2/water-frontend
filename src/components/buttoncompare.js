import React from 'react'

class buttoncompare extends React.Component {
  render () {
    return (
      <button type='button' className='btn btn-warning switch-to-section hidden-md hidden-lg hidden-sm' data-section='compare'>
        <span className='glyphicon glyphicon-chevron-right' /> Vergleich mit Mineralwasser
      </button>
    )
  }
}

export default buttoncompare
