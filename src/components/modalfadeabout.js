import React from 'react'

class modalfadeabout extends React.Component {
  render () {
    return (
      <div className='modal fade' id='aboutDialog' tabIndex={-1}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal'>×</button>
              <h4 className='modal-title'>Über & Impressum</h4>
            </div>
            <div className='modal-body'>
              <div style={{
                maxHeight: 400,
                overflow: 'scroll'
              }}>
                <h4 style={{
                  marginTop: 0
                }}>Wie das Trinkwasser-Tool entstanden ist</h4>
                <p>Trinkwasser gilt als das am besten kontrollierte Lebensmittel in Deutschland. Und trotzdem wissen wir sehr wenig über das Wasser, das bei uns aus dem Hahn kommt. Viele Kommunen veröffentlichen die Untersuchungsergebnisse auf ihren Webseiten. Für den Bürger sind diese Daten abrufbar - aber nicht greifbar. Was bedeutet ein Härtegrad von 9? Sind 200 Milligramm Calcium pro Liter viel oder wenig? Wie mineralreich unser Leitungswasser ist, zeigt sich erst, wenn wir es mit Wasser aus dem Handel vergleichen.</p>
                <p>Das ist für die Region Heilbronn jetzt möglich. Die Idee dazu entstand Ende Februar beim Open Data Day in Heilbronn. Obwohl viele Daten online verfügbar waren, mussten sie zuerst in eine maschinenlesbare Form gebracht werden. Viele Kommunen veröffentlichen nur PDF-Dateien mit den Jahresdurchschnittswerten. Diese sind nicht maschinenlesbar und mussten von der Redaktion übertragen werden.  Um die Anwendung zu programmieren, ist ein einheitlicher Datensatz notwendig. Auf manchen Webseiten der Kommunen waren die gesuchten Informationen über das Trinkwasser auf Unterseiten versteckt, veraltet oder nicht vollständig. Bei vielen Städten und Gemeinden haben wir deshalb per Email die Daten abgefragt. Nur von drei Kommunen kam bisher keine Rückmeldung.</p>
                <p>Überraschend war für uns, wie unterschiedlich das Trinkwasser in der Region zusammengesetzt ist. Teilweise differiert der Mineraliengehalt innerhalb einer Ortschaft sehr stark - nämlich dann, wenn es verschiedene Versorgungsbereiche gibt. Kommunen wie Bad Friedrichshall, Neckarsulm oder Zaberfeld sind in mehrere Gebiete eingeteilt. Dies war in der Phase der Datenerhebung eine besondere Herausforderung. Die Gebiete mussten teilweise noch den Straßen zugeordnet werden, damit der Benutzer auch die korrekten Werte für seine eigene Straße angezeigt bekommt. Zu den Trinkwasserpreisen bietet das Statistische Landesamt einen vollständigen Datensatz für alle Landkreise - für die Trinkwasserqualität gibt es einen solchen öffentlichen Datensatz leider nicht.</p>
                <p>Der dieser Anwendung zugrundliegende Datensatz war deshalb ein aufwändiges Rechercheprojekt. Nicht weniger aufwändig waren für die Entwickler Felix Ebert, Ulrich Stech und Tom Görner Umsetzung und Visualisierung. Eine große Rolle spielten dabei Benutzerfreundlichkeit und Design. Aus trockenen Zahlen sollte eine interaktive Grafik entstehen, durch die der Benutzer einen Zugang zu seinem Trinkwasser bekommt. Für die grafischen Elemente war Heiko Nicht verantwortlich.</p>
                <p>Die Trinkwasser-Anwendung ist eine Beta-Version. Vor allem die Datenerhebung kann nie abgeschlossen werden. Viele Kommunen veröffentlichen bald wieder die aktuellen Jahresmittelwerte - diese sollen auch in unserer Anwendung aktualisiert werden. Wir sind dabei auf die Mitarbeit der Rathäuser angewiesen und haben einen Kontaktbereich eingerichtet. Aufgrund des großen Datensatzes kann es zu fehlerhaften Angaben kommen. Wer Auffälligkeifen entdeckt, kann uns jederzeit kontaktieren. Wir freuen uns auch über Feedback.</p>
                <p>Datensatz und Code der Anwendung sind öffentlich zugänglich und stehen unter einer Open Source-Lizenz.</p>
                <p>Du bist an weiteren Open Data Anwendungen interessiert oder möchtest selbst mitwirken? In Heilbronn treffen wir uns regelmäßig im Rahmen von <a href='http://codefor.de'>Code for Germany</a>, um gemeinsam Open Data Projekten umzusetzen - wir würden uns über deinen Besuch freuen!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default modalfadeabout
