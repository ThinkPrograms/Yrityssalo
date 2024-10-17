import { useState } from "react";
import Navbar from "../components/Navbar";
import '../css/Section.css';
import bg from '../yrityssalo-form.png';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import { MdOutlineContentCopy, MdQuestionMark, MdPriorityHigh  } from "react-icons/md";
import FormFooter from '../components/Form_Footer';

const Section1 = () =>  {
  const [selectedBox, setCheckedBox] = useState(101);
  const [checked, setChecked] = useState(false);

  const handleChange = (val) => {
    setCheckedBox(val);
  };

  const handleChange2nd = () => {
    setChecked(!checked);
  };

  const text = 'Vaihe 1:\nAikataulu:\nVastuuhenkilöt:\nTarvittavan osaamisen määrittely, työpaikkailmoituksen tekeminen ja jättäminen.\n\nVaihe 2:\nAikataulu:\nVastuuhenkilöt:\nHakemusten vastaanottaminen ja haastattelut.\n\nVaihe 3:\nAikataulu:\nVastuuhenkilöt:\nHakemusten vastaanottaminen ja haastattelut\n\nVaihe 4:\nAikataulu:\nVastuuhenkilöt:\nHaastattelujen toinen kierros ja työntekijän valinta.\n\nVaihe 5:\nAikataulu:\nVastuuhenkilöt:\nPerehdytys.'

  const CopyToClipboard = (val) => {
    if (val !== 'exception') {
      var copyText = document.getElementById(selectedBox.toString());
      navigator.clipboard.writeText(copyText.innerHTML);
    } else {
      navigator.clipboard.writeText(text);
    }
  }


  return (
    <>
      <Navbar selected={1}/>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
        <div className="infobubbles">
          <div className="infobubble">
          <MdPriorityHigh />
            <div className="infobubble-text">
              Ooga booga big text
            </div>
          </div>
          <div className="infobubble">
            <MdPriorityHigh />
            <div className="infobubble-text">
              Ooga booga big text
            </div>
          </div>
        </div>
        <div className="section-form">
          <div className="form">
            <Input question='Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:'/>
            <Input question='Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:'/>

            <div className="form-checkbox-group">
                <Checkbox value={selectedBox === 101} onChange={() => handleChange(101)} label='Esimerkki A'/>
                <Checkbox value={selectedBox === 102} onChange={() => handleChange(102)} label='Esimerkki B'/>
                <Checkbox value={selectedBox === 103} onChange={() => handleChange(103)} label='Esimerkki C'/>
            </div>
            <div className="help-section">
              <MdOutlineContentCopy className="clipboard-icon" onClick={CopyToClipboard} />
              { selectedBox === 101 && <p className="help-text" id="101">Koska yrityksemme tarvitsee uusia asiakkaita, yksi ensivuoden päätavoitteista on uudisasiakashankinta.</p>}
              { selectedBox === 102 && <p className="help-text" id="102">Koska nyt on joulusesonki, tarvitsemme jouluapulaista.</p>}
              { selectedBox === 103 && <p className="help-text" id="103">Tuontantomme on kasvussa.</p>}
            </div>
            <Input question='Aikatauluta rekrytointisi:'/>
            <div className="form-checkbox-group">
              <Checkbox value={checked} onChange={handleChange2nd} label='Esimerkki'/>
            </div>

            { checked && 
              <div className="help-section">
                <MdOutlineContentCopy className="clipboard-icon" onClick={() => CopyToClipboard('exception')} />
                <p className="help-text display-linebreak" id="104">
                  {text}
                </p>
              </div>
            }

            <Input question='Arvioi budjetti rekrytoinnille:'/>
          </div>
          <FormFooter currentPage={1}/>
        
        </div>
        <div className="infobubbles">
          <div className="infobubble">
            <MdQuestionMark />
            <div className="infobubble-text">
              <h2>Ohje:</h2>
              Onko täytettävä tehtävä kokonaan uusi tai jo olemassa oleva?
            </div>
          </div>
          <div className="infobubble">
            <MdQuestionMark />
            <div className="infobubble-text">
              Ooga booga big text
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;