import React from 'react'

class modalfadeimprint extends React.Component {
  render () {
    return (
      <div className='modal fade' id='imprintDialog' tabIndex={-1}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>×</button>
              <h4 className='modal-title'>Impressum</h4>
            </div>
            <div className='modal-body'>
              <address>
                IF-Core IT Services GmbH<br />
                Clemenshaller Str. 5<br />
                74254 Offenau<br />
                T. 07136 / 830 26 30<br />
                F. 07136 / 830 26 27<br />
                E-Mail: info{ /* nospam@blockscanners121987.de */ }@if-core.de<br />
                <br />
                HRB 108620 (Amtsgericht Stuttgart)<br />
                USt-IdNr.: DE236085681<br />
                Geschäftsführer: Felix Ebert<br />
              </address>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default modalfadeimprint
