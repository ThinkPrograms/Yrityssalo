import '../css/Section.css'

import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import useFormContext from '../hooks/useFormContext'

const Finished = () =>  {

  const { data } = useFormContext()

  // Styles for pdf
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  console.log(data)
  console.log(data.julkaisuaika_alku)

  const text = data.osaaminen
    return (
      <>
        <img className="bg-image" style={{backgroundColor: '#676767'}} alt="Failed to load" />
        
        <div className="form-finished">
          <PDFViewer width={800} height={1200}>
            <Document>
              <Page size="A4" style={styles.page} wrap={true}>
                <View style={styles.section}>
                  <Text>{text}</Text>
                </View>
              </Page>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>{text}</Text>
                </View>
              </Page>
            </Document>
          </PDFViewer>
          </div>
          <div className="form-btns">
                <a className="no-decoration" href='./'>
                  <p className="form-btn" style={{marginLeft: '0'}}>Alkuun</p>
                </a>
            </div>

            <div className="center-element">
              <div className='form-explanation' style={{width:'38rem'}}>
                  <p className='help-bubble'>!</p>
                  <p className='help-bubble'>?</p>
                  <b className='explanation-text'>Muistithan katsoa vinkki- ja ohjenappien taakse?<br />Sieltä löydät erilaisia vinkkejä ja neuvoja muistilistalle!</b>
              </div>
            </div>
      </>
    )
}

export default Finished;