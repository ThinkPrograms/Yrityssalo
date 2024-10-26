import Navbar from "../components/Navbar";
import '../css/Section.css'
import bg from '../yrityssalo-form.png';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Select from '../components/Select';
import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import FormFooter from '../components/Form_Footer';

const Section4 = () =>  {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const text = 'Miten kuvailisit itseäsi, entä miten muut kuvailisivat sinua?\nMiksi haet tätä työpaikkaa?\nMinkälainen on mielestäsi hyvä työympäristö?\nMitä haluaisit kehittää itsessäsi?\nMikä on suurin saavutuksesi?'
  
  const options = [
    { label: 'Yksilöhaastattelu', value: 'Yksilo' },
    { label: 'Ryhmähaastattelu', value: 'Ryhma' },
    { label: 'Etähaastattelu', value: 'Eta' },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChangeBox = () => {
    setChecked(!checked);
  }

  const CopyToClipboard = (val) => {
      navigator.clipboard.writeText(text);
  }

  return (
    <>
      <Navbar selected={4} title={"Haastattelu"}/>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
        <div className="section-form">
          {/* Question -marks here */}

          {/* Exclamation -marks here */}

          {/* Form questions and inputs */}
          <div className="form">

          <Select
            label="Haastattelutyyppi: "
            options={options}
            value={value}
            onChange={handleChange}
          />

            <Input question='Suunnittele haastattelurunko:'/>
            <div className="form-checkbox-group">
              <Checkbox value={checked} onChange={handleChangeBox} label='Esimerkki kysymyksiä:'/>
            </div>

            { checked && 
              <div className="help-section">
                <MdOutlineContentCopy className="clipboard-icon" onClick={CopyToClipboard} />
                <p className="help-text display-linebreak">
                  {text}
                </p>
              </div>
            }

          </div>
          {/* Previous and next buttons and guidance text thing */}
          <FormFooter currentPage={4}/>
        </div>
      </div>
    </>
  );
}

export default Section4;