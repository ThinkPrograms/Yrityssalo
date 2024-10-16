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
      <Navbar selected={2}/>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
      
        <div className="section-form">
          {/* Question -marks here */}

          {/* Exclamation -marks here */}

          {/* Form questions and inputs */}
          <div className="form">
            <p className="form-question">Suosituimmat työpaikkojen hakukoneet:</p>
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
          {/* Previous and next buttons and guidance text thing */}
          <FormFooter currentPage={2}/>
        </div>
        
      </div>
    </>
  );
}

export default Section2;