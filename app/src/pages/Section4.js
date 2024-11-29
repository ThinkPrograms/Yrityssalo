import Navbar from "../components/Navbar";
import '../css/Section.css'
import bg from '../yrityssalo-form.png';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Select from '../components/Select';
import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import FormFooter from '../components/Form_Footer';
import HelpBubble from "../components/Helpbubble";
import InfoBubble from "../components/Infobubble";

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
        <div className="infobubbles">
          <InfoBubble Yposition={7} text={<p>Päätä tärkeimmät kysymykset, jotka tulee kysyttyä jokaiselta, vaikka itse haastattelut kulkisivat eri tavoilla.</p>}/>
        </div>
        <div className="section-form">
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
        <div className="infobubbles">
          <HelpBubble Yposition={61.5} text={<p>Kehitä kysymyksiä, jotka luovat keskustelua. (Vältä kyllä ja ei vastauksia) <br /><br />Voit kopioida esimerkkivastauksen itsellesi.</p>}/>
        </div>
      </div>
    </>
  );
}

export default Section4;