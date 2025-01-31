import '../css/Section.css'
import bg from '../yrityssalo-form.png';
import mediaGuide from '../MediaGuide.png';
import Checkbox from '../components/Checkbox';
import FormFooter from '../components/Form_Footer';
import Input from '../components/Input';
import Select from '../components/Select';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaArrowRightLong } from "react-icons/fa6";
import HelpBubble from "../components/Helpbubble";
import InfoBubble from "../components/Infobubble";
import useFormContext from '../hooks/useFormContext'

const Section2 = () =>  {
  const [selectedBox, setCheckedBox] = useState(101);

  const { data, handleDataChange, handleDateChange_start, handleDateChange_end } = useFormContext()

  const handleChange = (val) => {
    setCheckedBox(val);
  };

  const options = [
    { label: 'Määräaikainen', value: 'Maaraaikainen' },
    { label: 'Toistaiseksi voimassaoleva', value: 'Toistaiseksi' },
    { label: 'Harjoittelija', value: 'Harjoittelija' },
  ];
  
  const options2 = [
    { label: 'Kokoaikainen', value: 'Kokoaikainen' },
    { label: 'Osa-aikainen', value: 'Osa-aikainen' },
  ];


  return (
    <>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
      
        <div className="infobubbles">
          <InfoBubble fieldName='muistilista_4_checked' value={data.muistilista_4_checked} onChange={handleDataChange} Yposition={6} text={<p>Olethan muistanut jakaa ilmoitustasi sosiaalisessa mediassa. <br /><br /><b>Facebook <br />Instagram <br />Twitter</b></p>}/>
          <InfoBubble fieldName='muistilista_5_checked' value={data.muistilista_5_checked} onChange={handleDataChange} Yposition={16} text={<p>Esittele yrityksesi toimintaa lyhyesti. Tiivistä asiat, jotka saattavat kiinnostaa hakijoitasi. <br /><br />Kerro mitä yrityksesi tarjoaa hakijalle.</p>}/>
          <InfoBubble fieldName='muistilista_6_checked' value={data.muistilista_6_checked} onChange={handleDataChange} Yposition={38} text={<p>Anna tehtävänimikkeeksi mahdollisimman selkeä ja kuvaava nimi.</p>}/>
          <InfoBubble fieldName='muistilista_7_checked' value={data.muistilista_7_checked} onChange={handleDataChange} Yposition={39} text={<p>Anna mahdollisimman selkeä kuvaus työn sisällöstä. <br /><br />Älä jaarittele, pidä tekstilohkot lyhyinä.</p>}/>
          <InfoBubble fieldName='muistilista_8_checked' value={data.muistilista_8_checked} onChange={handleDataChange} Yposition={60} text={<p>Muista mainita mikäli otat vastaan video CV:itä</p>}/>
          <InfoBubble fieldName='muistilista_9_checked' value={data.muistilista_9_checked} onChange={handleDataChange} Yposition={93} text={<p>Kuvalliset ilmoitukset saavat enemmän huomiota. <br /><br />Valitse sellainen kuva, joka vahvistaa yrityskuvaasi. <br /><br />Videon tekeminen kannattaa, jos sinulla on siihen resursseja.</p>}/>
        </div>
        <div className="section-form">
          <div className="form">
            <p className="form-question noPadding">Suosituimmat työpaikkojen hakukoneet:</p>
            <div className="form-links">
              <div><a href="https://paikat.te-palvelut.fi/tpt/" className="form-link">TE-palvelut</a></div>
              <div><a href="https://duunitori.fi/" className="form-link">Duunitori</a></div>
              <div><a href="https://www.oikotie.fi/" className="form-link">Oikotie</a></div>
            </div>

            <Input question='Yrityksen sijainti:' rowsVal={1} inputName='yritys_sijainti' value={data.yritys_sijainti} onChange={handleDataChange}/>

            <div className="form-checkbox-group">
              <Checkbox value={selectedBox === 101} onChange={() => handleChange(101)} label='Etätyö tai monta sijaintia.'/>
              <Checkbox value={selectedBox === 102} onChange={() => handleChange(102)} label='Työpaikalla on eri sijainti kuin yrityksellä'/>
            </div>

            { selectedBox === 101 && <Input question='Etätyön tiedot tai työpaikan sijainnit:' rowsVal={2} inputName='tyopaikka_tiedot' value={data.tyopaikka_tiedot} onChange={handleDataChange}/>}
            { selectedBox === 102 && <Input question='Työpaikan sijainti:' rowsVal={1} inputName='tyopaikka_sijainti' value={data.tyopaikka_sijainti} onChange={handleDataChange}/>}

            <Input question='Yrityksen kuvaus:' inputName='yritys_kuvaus' value={data.yritys_kuvaus} onChange={handleDataChange}/>

            <hr className="form-line"/>

            <Select
            label="Työsopimuksen tyyppi:"
            options={options}
            inputName='tyosopimus_tyyppi'
            value={data.tyosopimus_tyyppi}
            onChange={handleDataChange}
            />

            <Select
            label="Työaika:"
            options={options2}
            inputName='tyoaika'
            value={data.tyoaika}
            onChange={handleDataChange}
            />

            <Input question='Tehtävänimike:' rowsVal={1} inputName='tehtavanimike' value={data.tehtavanimike} onChange={handleDataChange}/>

            <Input question='Työnkuvaus:' inputName='tyonkuvaus' value={data.tyonkuvaus} onChange={handleDataChange}/>

            <hr className="form-line"/>

            <Input question='Ilmoittajan nimi:' rowsVal={1} inputName='ilmj_nimi' value={data.ilmj_nimi} onChange={handleDataChange}/>
            <Input question='Ilmoittajan puhelin:' rowsVal={1} inputName='ilmj_puhelin' value={data.ilmj_puhelin} onChange={handleDataChange}/>
            <Input question='Hakemusten vastaanotto sähköpostiosoite:' rowsVal={1} inputName='ilmj_sahkoposti' value={data.ilmj_sahkoposti} onChange={handleDataChange}/>

            <p className="form-question">Ilmoituksen julkaisuaika:</p>
            <div className="date-group">
              <DatePicker className='date' name='julkaisuaika_alku' selected={data.julkaisuaika_alku} onChange={handleDateChange_start}/>
              <FaArrowRightLong size={'2.5rem'} color="#A09A99"/>
              <DatePicker className='date' name='julkaisuaika_loppu' selected={data.julkaisuaika_loppu} onChange={handleDateChange_end}/>
            </div>

            <Input question='Yhteyshenkilöt ja heidän yhteystietonsa:' inputName='yhteyshenkilo_yhteystiedot' value={data.yhteyshenkilo_yhteystiedot} onChange={handleDataChange}/>

            <hr className="form-line"/>

            <p className="form-question">Muutaman yleisemmän työnhakusivuston vaatimukset lähetettävän kuvan ja videon suhteen.</p>
            <div className="RunningOutOfNames">
             <img className='mediaImage' src={mediaGuide} alt="Failed to load" />
            </div>
          </div>
          <FormFooter/>
        </div>
        <div className="infobubbles">
          <HelpBubble Yposition={13} text={<p>Valitsemalla toisen sijaintivaihtoehdon, saat auki tarkentavia kenttiä.</p>}/>
          <HelpBubble Yposition={75} text={<p>Kerro mitä odotat työnhakijalta: <br />- osaaminen <br />- työkokemus <br />- koulutus  <br />- muut vaatimukset (esim. lupakortit) <br /><br />Erittele mitä vaadit ja mitä katsot eduksi. </p>}/>
          <HelpBubble Yposition={98} text={<p>Mistä mihin asti ilmoituksesi on esillä.</p>}/>
        </div>
      </div>
    </>
  );
}

export default Section2;