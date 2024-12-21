import Navbar from "../components/Navbar";
import '../css/Section.css'

import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const Finished = () =>  {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos quam enim rerum ipsum deserunt natus minus ex! Impedit eaque quis incidunt ex commodi aspernatur hic illum corporis a voluptates! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos quam enim rerum ipsum deserunt natus minus ex! Impedit eaque quis incidunt ex commodi aspernatur hic illum corporis a voluptates! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos quam enim rerum ipsum deserunt natus minus ex! Impedit eaque quis incidunt ex commodi aspernatur hic illum corporis a voluptates! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos quam enim rerum ipsum deserunt natus minus ex! Impedit eaque quis incidunt ex commodi aspernatur hic illum corporis a voluptates! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos quam enim rerum ipsum deserunt natus minus ex! Impedit eaque quis incidunt ex commodi aspernatur hic illum corporis a voluptates! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos quam enim rerum ipsum deserunt natus minus ex! Impedit eaque quis incidunt ex commodi aspernatur hic illum corporis a voluptates! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur eos quam enim rerum ipsum deserunt natus minus ex! Impedit eaque quis incidunt ex commodi aspernatur hic illum corporis a voluptates!'

    return (
      <>
        <Navbar selected={7} title={"LOPPUTULOSTE"}/>
        <img className="bg-image" style={{backgroundColor: '#676767'}} alt="Failed to load" />
        
        <div className="form-finished">
          <PDFViewer width={800} height={1200} >
            <Document>
              <Page size="A4" style={styles.page}>
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
          <div className="form-btns">
                <a className="no-decoration" href='./Section_6'>
                  <p className="form-btn">Edellinen</p>
                </a>
                <a className="no-decoration" href='./'>
                  <p className="form-btn">Tulosta</p>
                </a>
                <a className="no-decoration" href='./'>
                  <p className="form-btn">Lataa tiedosto</p>
                </a>
            </div>

            <div className="center-element">
              <div className='form-explanation' style={{width:'38rem'}}>
                  <p className='help-bubble'>!</p>
                  <p className='help-bubble'>?</p>
                  <b className='explanation-text'>Muistithan katsoa vinkki- ja ohjenappien taakse?<br />Sieltä löydät erilaisia vinkkejä ja neuvoja muistilistalle!</b>
              </div>
            </div>
        </div>
      </>
    )
}

export default Finished;