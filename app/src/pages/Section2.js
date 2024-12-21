import Navbar from "../components/Navbar";
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

const Section2 = () =>  {
  const [selectedBox, setCheckedBox] = useState(101);
  const [selectField, setField] = useState('');
  const [selectField2, setField2] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());

  const handleChange = (val) => {
    setCheckedBox(val);
  };

  const handleFieldChange = (event) => {
    setField(event.target.value);
  };

  const handleFieldChange2 = (event) => {
    setField2(event.target.value);
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
      <Navbar selected={2} title={"Työpaikkailmoitus"}/>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
      
        <div className="infobubbles">
          <InfoBubble Yposition={6} text={<p>Olethan muistanut jakaa ilmoitustasi sosiaalisessa mediassa. <br /><br /><b>Facebook <br />Instagram <br />Twitter</b></p>}/>
          <InfoBubble Yposition={16} text={<p>Esittele yrityksesi toimintaa lyhyesti. Tiivistä asiat, jotka saattavat kiinnostaa hakijoitasi. <br /><br />Kerro mitä yrityksesi tarjoaa hakijalle.</p>}/>
          <InfoBubble Yposition={38} text={<p>Anna tehtävänimikkeeksi mahdollisimman selkeä ja kuvaava nimi.</p>}/>
          <InfoBubble Yposition={39} text={<p>Anna mahdollisimman selkeä kuvaus työn sisällöstä. <br /><br />Älä jaarittele, pidä tekstilohkot lyhyinä.</p>}/>
          <InfoBubble Yposition={60} text={<p>Muista mainita mikäli otat vastaan video CV:itä</p>}/>
          <InfoBubble Yposition={93} text={<p>Kuvalliset ilmoitukset saavat enemmän huomiota. <br /><br />Valitse sellainen kuva, joka vahvistaa yrityskuvaasi. <br /><br />Videon tekeminen kannattaa, jos sinulla on siihen resursseja.</p>}/>
        </div>
        <div className="section-form">
          <div className="form">
            <p className="form-question noPadding">Suosituimmat työpaikkojen hakukoneet:</p>
            <div className="form-links">
              <div><a href="https://paikat.te-palvelut.fi/tpt/" className="form-link">TE-palvelut</a></div>
              <div><a href="https://duunitori.fi/" className="form-link">Duunitori</a></div>
              <div><a href="https://www.oikotie.fi/" className="form-link">Oikotie</a></div>
            </div>

            <Input question='Yrityksen sijainti:' rowsVal={1}/>

            <div className="form-checkbox-group">
              <Checkbox value={selectedBox === 101} onChange={() => handleChange(101)} label='Etätyö tai monta sijaintia.'/>
              <Checkbox value={selectedBox === 102} onChange={() => handleChange(102)} label='Työpaikalla on eri sijainti kuin yrityksellä'/>
            </div>

            { selectedBox === 101 && <Input question='Etätyön tiedot tai työpaikan sijainnit:' rowsVal={2}/>}
            { selectedBox === 102 && <Input question='Työpaikan sijainti:' rowsVal={1}/>}

            <Input question='Yrityksen kuvaus:'/>

            <hr className="form-line"/>

            <Select
            label="Työsopimuksen tyyppi:"
            options={options}
            value={selectField}
            onChange={handleFieldChange}
            />

            <Select
            label="Työaika:"
            options={options2}
            value={selectField2}
            onChange={handleFieldChange2}
            />

            <Input question='Tehtävänimike:' rowsVal={1}/>

            <Input question='Työnkuvaus:'/>

            <hr className="form-line"/>

            <Input question='Ilmoittajan nimi:' rowsVal={1}/>
            <Input question='Ilmoittajan puhelin:' rowsVal={1}/>
            <Input question='Hakemusten vastaanotto sähköpostiosoite:' rowsVal={1}/>

            <p className="form-question">Ilmoituksen julkaisuaika:</p>
            <div className="date-group">
              <DatePicker className='date' selected={startDate} onChange={(date) => setStartDate(date)}/>
              <FaArrowRightLong size={'2.5rem'} color="#A09A99"/>
              <DatePicker className='date' selected={EndDate} onChange={(date) => setEndDate(date)}/>
            </div>

            <Input question='Yhteyshenkilöt ja heidän yhteystietonsa:'/>

            <hr className="form-line"/>

            <p className="form-question">Muutaman yleisemmän työnhakusivuston vaatimukset lähetettävän kuvan ja videon suhteen.</p>
            <div className="RunningOutOfNames">
             <img className='mediaImage' src={mediaGuide} alt="Failed to load" />
            </div>
          </div>
          <FormFooter currentPage={2}/>
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