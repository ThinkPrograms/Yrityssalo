import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

import '../css/Section.css';
import bg from '../yrityssalo-form.png';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import FormFooter from '../components/Form_Footer';
import HelpBubble from "../components/Helpbubble";
import InfoBubble from "../components/Infobubble";
import useFormContext from '../hooks/useFormContext'

const Section1 = (page) =>  {
  const [selectedBox, setCheckedBox] = useState(101);
  const [checked, setChecked] = useState(false);

  const { data, handleDataChange } = useFormContext()

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
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
        <div className="infobubbles">
          <InfoBubble Yposition={7} text={<p>Tekijän löytäminen on helpompaa kun tiedät, mitä tarvitset. <br /><br />Virherekrytointi on suurin vältettävissä oleva menoerä.</p>}/>
          <InfoBubble Yposition={48} text={<p>Varaa rekrytointiin tarpeeksi aikaa. <br /><br />Pidä aikataulusta kiinni. <br /><br />Yleensä pienyrittäjän rekrytointiin kuluu aikaa n. kuukausi, josta työaikaa on n. 2-5 kokonaista työpäivää.</p>}/>
          <InfoBubble Yposition={52.5} text={<p>Vastavalmistunut tai vastaava on aluksi halvempi palkattava, tosin perehdytys vie alkuun siivun tuottavuudesta. <br /><br />Kokenut osaaja taas voi tuoda yritykselle suurempia tuloja nopeammin, mutta on kalliimpi palkattava</p>}/>
        </div>
        <div className="section-form">
          <div className="form">
            <Input question='Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:' />
            <Input question='Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:' />

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
          <FormFooter/>
        
        </div>
        <div className="infobubbles">
          <HelpBubble Yposition={6.5} text={<p>Onko täytettävä tehtävä kokonaan uusi tai jo olemassa oleva?</p>}/>
          <HelpBubble Yposition={52.5} text={<p>Mieti eri vaiheet ja kuka vastaa mistäkin vaiheesta<br/><br/>Voit kopioida esimerkkivastauksen itsellesi.</p>}/>
          <HelpBubble Yposition={61.5} text={<p>Linkin takaa löydät palkkalaskurin, jolla pystyt arvioimaan palkkakuluja.<br /><br /><b>Palkkalaskuri</b> <br /><br />Voit kopioida esimerkkivastauksen itsellesi.</p>}/>
        </div>
      </div>
    </>
  );
}

export default Section1;