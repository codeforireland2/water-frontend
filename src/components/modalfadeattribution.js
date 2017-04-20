import React from 'react'

class modalfadeattribution extends React.Component {
  render () {
    return (
      <div className='modal fade' id='attributionDialog' tabIndex={-1}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>×</button>
              <h4 className='modal-title'>Mitwirkende</h4>
            </div>
            <div className='modal-body'>
              <p><strong>Redaktionelle Umsetzung</strong></p>
              <p>
                Vanessa Wormer (<a target='_blank' href='https://twitter.com/remrow'>@remrow</a>)<br />
                Isabelle Müller (<a target='_blank' href='https://twitter.com/isa_mue'>@isa_mue</a>)
              </p>
              <p><strong>Gestaltung</strong></p>
              <p>
                Heiko Nicht (<a target='_blank' href='https://twitter.com/HeikoNicht'>@HeikoNicht</a>)
              </p>
              <p><strong>Programmierung</strong></p>
              <p>
                Felix Ebert (<a target='_blank' href='https://twitter.com/femeb'>@femeb</a>)<br />
                Ulrich Stech<br />
              </p>
              <p><strong>Mitarbeit</strong></p>
              <p>
                Alexander Walther (<a target='_blank' href='https://twitter.com/alexplus_de'>@alexplus_de</a>)<br />
                Tom Görner<br />
                Gerd Hoffmann
              </p>
              <br />
              <p>In Heilbronn treffen wir uns regelmäßig im Rahmen von <a href='http://codefor.de'>Code for Germany</a>, um gemeinsam Open Data Projekten umzusetzen - wir würden uns über deinen Besuch freuen!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default modalfadeattribution
