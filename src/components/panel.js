import React from 'react'
import panelheading from './panelheading'

class panel extends React.Component {
  render () {
    return (
      <div className='panel-group' id='accordion'>
        <div className='panel panel-default'>
          <panelheading />
          <div id='collapseOne' className='panel-collapse collapse'>
            <div className='panel-body'>
              <p>Im Stadtkreis gibt es etwa 40 Quellen und Brunnen, im Landkreis sind es etwa 130.</p>
              <p>Da das Heilbronner Wasser aber sehr hart und stark mit giftigem Nitrat belastet ist, kauft die Stadt seit 43 Jahren Wasser vom
                Bodensee (Zweckverband Bodensee-Wasserversorgung).</p>
              <p>Zuvor deckte die Stadt den Wasserbedarf über 60 bis 70 Prozent Eigenwasser. Dies hat sich ins Gegenteil gekehrt. Der Anteil an
                Bodenseewasser liegt heute bei 80 bis 85 Prozent.</p>
            </div>
          </div>
        </div>
        <div className='panel panel-default'>
          <panelheading />
          <div id='collapseTwo' className='panel-collapse collapse'>
            <div className='panel-body'>
              <p>Günstiger ist es für die Kommunen, wenn sie ihr Trinkwasser ausschließlich aus eigenen Quellen beziehen.</p>
              <p>Die Gemeinde Jagsthausen beispielsweise versorgt ihre Einwohner zu 100 Prozent mit Eigenwasser.</p>
              <blockquote>
                <p>“Wir haben hier ordentliches Wasser, das zwar hart ist. Aber wir sehen keinen Anlass für eine Beimischung von Fremdwasser, wie
                  es andere Kommunen tun”</p>
                <footer>Bürgermeister Roland Halter</footer>
              </blockquote>
              <p>Beschwerden aus der Gemeinde gäbe es keine, viele Einwohner hätten eine Enthärtungsanlage. Eine Anbindung an Bodenseewasser sei
                im Fall von Jagsthausen mit hohen Investitionskosten verbunden und derzeit kein Thema.</p>
            </div>
          </div>
        </div>
        <div className='panel panel-default'>
          <panelheading />
          <div id='collapseThree' className='panel-collapse collapse'>
            <div className='panel-body'>
              <p>Der Geschmack von Wasser wird durch die in ihm enthaltenen Mineralien bestimmt.</p>
              <p>Wasser mit viel Natrium und Kalium, wird als salziger im Geschmack empfunden. Natriumarmes Wasser - wie das Heilbronner
                Trinkwasser - hingegen schmeckt milder.</p>
              <p>Ein unangenehmer Geschmack kann entstehen, wenn die Rohrleitungen im Gebäude verunreinigt sind. Die Stadtwerke kontrollieren
                die Trinkwasserqualität nur bis zur jeweiligen Haustüre. Im Haus liegt die Verantwortung beim Gebäudeeigentümer.</p>
            </div>
          </div>
        </div>
        <div className='panel panel-default'>
          <panelheading />
          <div id='collapseFour' className='panel-collapse collapse'>
            <div className='panel-body'>
              <p>Überall dort, wo hartes Wasser langsam fließt oder auf über 60 Grad erhitzt wird, setzt sich Kalk ab. In Küche und Bad entstehen
                so Kalkflecken, beim Wäschewaschen ist mehr Waschmittel nötig, manche Haushaltsgeräte müssen regelmäßig entkalkt werden. Dies gilt ab
                einem Wasserhärtegrad von 21.</p>
              <p>In Heilbronn liegt die Obergrenze der Wasserhärte bei 18 Grad. Gesundheitlich birgt hartes Wasser keine Gefahren, im Gegenteil:
                wegen des hohen Calcium- und Magnesiumgehaltes ist es gesünder als weiches Wasser.</p>
            </div>
          </div>
        </div>
        <div className='panel panel-default'>
          <panelheading />
          <div id='collapseFive' className='panel-collapse collapse'>
            <div className='panel-body'>
              <p>Die meisten der Heilbronner Trinkwasserbrunnen befinden sich in der Gesteinsschicht Gipskeuper, der für den sehr hohen
                Magnesium- und Calciumgehalt im Wasser verantwortlich ist. Da diese beiden Mineralien den Härtegrad des Wassers bestimmen, gibt es in
                Heilbronn kein weiches Wasser.</p>
              <p>Das Heilbronner Wasser hat einen Härtegrad von bis zu 28 Grad deutscher Härte, in manchen der 40 Brunnen fließt Wasser mit 30
                Grad deutscher Härte.</p>
            </div>
          </div>
        </div>
        <div className='panel panel-default'>
          <panelheading />
          <div id='collapseSix' className='panel-collapse collapse'>
            <div className='panel-body'>
              <p>Der Geschmack von Wasser wird durch die in ihm enthaltenen Mineralien bestimmt.</p>
              <p>Trinkwasser enthält verschiedene Mengen der Mineralstoffe Calcium und Magnesium - je nachdem ob es sich um Oberflächen-, Grund
                oder Quellwasser handelt.</p>
              <p>Je mehr Calcium und Magnesium im Wasser sind, desto härter ist es.</p>
            </div>
          </div>
        </div>
        <div className='panel panel-default'>
          <panelheading />
          <div id='collapseSeven' className='panel-collapse collapse'>
            <div className='panel-body'>
              <p>Die Einheit °dH (Grad deutscher Härte) ist veraltet, aber in der Praxis nach wie vor gebräuchlich. Neben °dH wird Millimol pro Liter (mmol/l) verwendet.</p>
              <p>Bereiche:</p>
              <ul>
                <li>weich: weniger als 1,5 Millimol Calciumcarbonat je Liter (entspricht weniger als 8,4 Grad deutscher Härte)</li>
                <li>mittel: 1,5 bis 2,5 Millimol Calciumcarbonat je Liter (entspricht 8,4 bis 14 Grad deutscher Härte)</li>
                <li>hart: mehr als 2,5 Millimol Calciumcarbonat je Liter (entspricht mehr als 14 Grad deutscher Härte)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='panel panel-default'>
          <panelheading />
          <div id='collapseEight' className='panel-collapse collapse'>
            <div className='panel-body'>
              <ul>
                <li><a href='http://www.stimme.de/3047311'>Heilbronner Wasser: Reich an Mineralien (Stimme.de, 22.03.2014)</a>
                </li><li><a href='http://www.gesetze-im-internet.de/bundesrecht/trinkwv_2001/gesamt.pdf'>Trinkwasserverordnung</a></li>
                <li><a href='http://www.mlr.baden-wuerttemberg.de/mlr/allgemein/Liste%20d%20Untersuchungsstellen-Trinkw.pdf'>Liste an Laboren zur Untersuchung der Trinkwasserqualität</a></li>
                <li><a href='http://www.umweltbundesamt.de/sites/default/files/medien/378/publikationen/rund_um_das_trinkwasser.pdf'>Broschüre des Umweltbundesamts “Rund um das Trinkwasser”</a></li>
                <li><a href='https://www.stadtwerke-heilbronn.de/index/hsw/hsw_wasser.html'>Stadtwerke Heilbronn, Rubrik Wasser</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='panel panel-default'>
          <panelheading />
          <div id='collapseNine' className='panel-collapse collapse'>
            <div className='panel-body'>
              <ul>
                <li>Heilbronner Versorgungs Gmbh</li>
                <li>Deutsche Gesellschaft für Ernährung</li>
                <li>Bundesinstitut für Risikobewertung</li>
                <li>Webseiten der Gemeinden im Landkreis Heilbronn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default panel
