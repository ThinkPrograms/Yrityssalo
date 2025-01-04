import '../css/Section.css'
import DOMPurify from 'dompurify'

import { Page, Text, View, Document, StyleSheet, PDFViewer, Note } from '@react-pdf/renderer';
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

  const Luo_sivu_1 = () => {
    let content = '\n\n\nVaihe 1 - Osaamisen tarve\n\n'
    content += '1. Millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa: \n\n' + data.osaaminen + '\n\n\n'
    content += '2. Pohdi yrityksen pitkän ja lyhyen aikavälin tavoitteet: \n\n' + data.tavoitteet + '\n\n\n'
    content += '3. Aikatauluta rekrytointi: \n\n' + data.aikataulu + '\n\n\n'
    content += '4. Arvioi budjetti rekrytoinnille: \n\n' + data.budjetti + '\n\n\n'
    return content
  }

  const Luo_sivu_2 = () => {
    let content = 'Vaihe 2 - Työpaikkailmoitus\n\n\n'
    content += '1. Yrityksen sijainti: \n\n' + data.yritys_sijainti + '\n\n\n'

    content += '2. Työpaikan sijainti tai sijainnit: \n\n' + data.tyopaikka_tiedot + data.tyopaikka_sijainti + '\n\n\n'

    content += '6. Yrityksen kuvaus: \n\n' + data.yritys_kuvaus + '\n\n\n'
    content += '3. Työsopimuksen tyyppi: \n\n' + data.tyosopimus_tyyppi + '\n\n\n'
    content += '4. Työaika: \n\n' + data.tyoaika + '\n\n\n'
    content += '5. Tehtävänimike: \n\n' + data.tehtavanimike + '\n\n\n'
    content += '7. Työn kuvaus: \n\n' + data.tyonkuvaus + '\n\n\n'
    content += '8. Ilmoittajan nimi: \n\n' + data.ilmj_nimi + '\n\n\n'
    content += '9. Ilmoittajan puhelinnumero: \n\n' + data.ilmj_puhelin + '\n\n\n'
    content += '10. Hakemusten vastaanotto sähköposti: \n\n' + data.ilmj_sahkoposti + '\n\n\n'
    content += '11. Julkaisuaika: \n\n' + new Intl.DateTimeFormat('fi-FI', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(data.julkaisuaika_alku) + ' - ' + new Intl.DateTimeFormat('fi-FI', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(data.julkaisuaika_loppu) + '\n\n\n'
    content += '12. Yhteyshenkilöt ja heidän yhteystietonsa: \n\n' + data.yhteyshenkilo_yhteystiedot + '\n\n\n'
    return content
  }

  const Luo_sivu_3 = () => {
    let content = 'Vaihe 3 - Hakemusten käsittely\n\n\n'
    content += '1. Milloin olet tavoitettavissa: \n\n' + data.tavoitettavissa + '\n\n\n'
    content += '2. Milloin vastaat hakijoille: \n\n' + data.vastausaika + '\n\n\n'
    content += '3. Luonnostele kutsu haastatteluun: \n\n' + data.kutsu_haastatteluun + '\n\n\n'
    content += '4. Luonnostele vastaus hylätyille hakemuksille: \n\n' + data.vastaus_hylatyille + '\n\n\n'
    return content
  }

  const Luo_sivu_4 = () => {
    let content = 'Vaihe 4 - Haastattelu\n\n\n'
    content += '1. Haastattelutyyppi: \n\n' + data.haastattelutyyppi + '\n\n\n'
    content += '2. Suunnittele haastattelurunko: \n\n' + data.haastattelurunko + '\n\n\n'
    return content
  }

  const Luo_muistilista = () => {
    let muistilista = 'MUISTILISTA\n\n\n'

    if (data.muistilista_1_checked)
      muistilista += 'Tekijän löytäminen on helpompaa kun tiedät, mitä tarvitset. Virherekrytointi on suurin vältettävissä oleva menoerä. \n\n\n'
    if (data.muistilista_2_checked)
      muistilista += 'Varaa rekrytointiin tarpeeksi aikaa. Pidä aikataulusta kiinni. Yleensä pienyrittäjän rekrytointiin kuluu aikaa n. kuukausi, josta työaikaa on n. 2-5 kokonaista työpäivää. \n\n\n'
    if (data.muistilista_3_checked)
      muistilista += 'Vastavalmistunut tai vastaava on aluksi halvempi palkattava, tosin perehdytys vie alkuun siivun tuottavuudesta. Kokenut osaaja taas voi tuoda yritykselle suurempia tuloja nopeammin, mutta on kalliimpi palkattava \n\n\n'
    if (data.muistilista_4_checked)
      muistilista += 'Olethan muistanut jakaa ilmoitustasi sosiaalisessa mediassa. Esim. Facebook, Instagram ja Twitter \n\n\n'
    if (data.muistilista_5_checked)
      muistilista += 'Esittele yrityksesi toimintaa lyhyesti. Tiivistä asiat, jotka saattavat kiinnostaa hakijoitasi. Kerro mitä yrityksesi tarjoaa hakijalle. \n\n\n'
    if (data.muistilista_6_checked)
      muistilista += 'Anna tehtävänimikkeeksi mahdollisimman selkeä ja kuvaava nimi. \n\n\n'
    if (data.muistilista_7_checked)
      muistilista += 'Anna mahdollisimman selkeä kuvaus työn sisällöstä. Älä jaarittele, pidä tekstilohkot lyhyinä. \n\n\n'
    if (data.muistilista_8_checked)
      muistilista += 'Muista mainita mikäli otat vastaan video CV:itä \n\n\n'
    if (data.muistilista_9_checked)
      muistilista += 'Kuvalliset ilmoitukset saavat enemmän huomiota. Valitse sellainen kuva, joka vahvistaa yrityskuvaasi. Videon tekeminen kannattaa, jos sinulla on siihen resursseja. \n\n\n'
    if (data.muistilista_10_checked)
      muistilista += 'Yrityskuvan kannalta on hyvä vastata kaikille hakijoille. \n\n\n'
    if (data.muistilista_11_checked)
      muistilista += 'Yrityskuvan kannalta on kannattavaa luoda hyvä hakijakokemus: Ole täsmällinen. Arvosta hakemuksia. Ole kohtelias. \n\n\n'
    if (data.muistilista_12_checked)
      muistilista += 'Päätä tärkeimmät kysymykset, jotka tulee kysyttyä jokaiselta, vaikka itse haastattelut kulkisivat eri tavoilla. \n\n\n'
    if (data.muistilista_13_checked)
      muistilista += 'Sopimuspohjana voit käyttää vaikka työsuojelu.fi sivulta löytyvää pohjaa. \n\n\n'
    if (data.muistilista_14_checked)
      muistilista += 'Lisää tietoa työturvallisuuslaista löytyy täältä: finlex.fi \n\n\n'
    if (data.muistilista_15_checked)
      muistilista += 'Perehdytyskansio on infopaketti yrityksesi uudelle työntekijälle. Perehdytyskansion pohjan löydät täältä: perehdytysopas.fi\n\n\n'
    
    return muistilista
  }

  const Pages = 
    <>
      {/* 1. Osaamisen tarve */}
      <Page size="A4" style={styles.page} wrap={true}>
        <View style={styles.section}>
          <Text>
            <Text style={{fontSize:'24px'}}>Pien- ja mikroyrittäjän rekrytointiopas</Text>
            {Luo_sivu_1()}
          </Text>
        </View>
      </Page>
      {/* 2. työpaikkailmoitus */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{Luo_sivu_2()}</Text>
        </View>
      </Page>
      {/* 3. Hakemusten käsittely */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{Luo_sivu_3()}</Text>
        </View>
      </Page>
      {/* 4. Haastattelu */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{Luo_sivu_4()}</Text>
        </View>
      </Page>
    {/* Muistilista */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{Luo_muistilista()}</Text>
        </View>
      </Page>
    </>
    return (
      <>
        <img className="bg-image" style={{backgroundColor: '#676767'}} alt="Failed to load" />
        
        <div className="form-finished">
          <PDFViewer width={800} height={1200}>
            <Document>
              {Pages}
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