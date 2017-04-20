import React from 'react'

class panelheading extends React.Component {
  render () {
    return (
      <div className='panel-heading'>
        <h4 className='panel-title'>
          <a data-toggle='collapse' data-parent='#accordion' href='#collapseNine'> Quellen</a>
        </h4>
      </div>
    )
  }
}

export default panelheading
