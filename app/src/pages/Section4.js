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
import useFormContext from '../hooks/useFormContext'

const Section4 = () =>  {
  const [checked, setChecked] = useState(false);

  const { data, handleDataChange } = useFormContext()

  const text = 'Miten kuvailisit itseäsi, entä miten muut kuvailisivat sinua?\nMiksi haet tätä työpaikkaa?\nMinkälainen on mielestäsi hyvä työympäristö?\nMitä haluaisit kehittää itsessäsi?\nMikä on suurin saavutuksesi?'
  
  const options = [
    { label: 'Yksilöhaastattelu', value: 'Yksilo' },
    { label: 'Ryhmähaastattelu', value: 'Ryhma' },
    { label: 'Etähaastattelu', value: 'Eta' },
  ];

  const handleChangeBox = () => {
    setChecked(!checked);
  }

  const CopyToClipboard = (val) => {
      navigator.clipboard.writeText(text);
  }

  return (
      <>
        <img className="bg-image" src={bg} alt="Failed to load" />
        <div className="section">
          <div className="infobubbles">
            <InfoBubble fieldName='muistilista_12_checked' value={data.muistilista_12_checked} onChange={handleDataChange} Yposition={12} text={<p>Päätä tärkeimmät kysymykset, jotka tulee kysyttyä jokaiselta, vaikka itse haastattelut kulkisivat eri tavoilla.</p>}/>
          </div>
          <div className="section-form">
            <div className="form">

            <Select
              label="Haastattelutyyppi: "
              options={options}
              inputName='haastattelutyyppi'
              value={data.haastattelutyyppi}
              onChange={handleDataChange}
            />

              <Input question='Suunnittele haastattelurunko:' inputName='haastattelurunko' value={data.haastattelurunko} onChange={handleDataChange}/>
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
            <FormFooter/>
          </div>
          <div className="infobubbles">
            <HelpBubble Yposition={12} text={<p>Kehitä kysymyksiä, jotka luovat keskustelua. (Vältä kyllä ja ei vastauksia) <br /><br />Voit kopioida esimerkkivastauksen itsellesi.</p>}/>
          </div>
        </div>
      </>
  );
}

export default Section4;