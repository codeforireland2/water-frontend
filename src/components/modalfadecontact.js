import React from 'react'

class modalfadecontact extends React.Component {
  render () {
    return (
      <div className='modal fade' id='contactDialog' tabIndex={-1}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>×</button>
              <h4 className='modal-title'>Kontakt</h4>
            </div>
            <div className='modal-body'>
              <p>Wir freuen uns über Feedback:</p>
              <p>E-Mail Adresse: wasser{ /* nospam@blockscanners123987.de */ }@opendatalab.de - Vielen Dank!</p>
              <p>Aufgrund der zahlreichen Daten kann es vereinzelt zu fehlerhaften Angaben kommen. Haben Sie einen Fehler entdeckt? Schreiben Sie uns!</p>
              <p>Oder sind Sie Mitarbeiter einer Kommune und möchten Ihre Daten eintragen? Schicken Sie uns einfach Ihre Daten per E-Mail.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default modalfadecontact
