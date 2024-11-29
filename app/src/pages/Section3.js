import Navbar from "../components/Navbar";
import '../css/Section.css'
import bg from '../yrityssalo-form.png';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import FormFooter from '../components/Form_Footer';
import HelpBubble from "../components/Helpbubble";
import InfoBubble from "../components/Infobubble";

const Section3 = () =>  {
  const [selectedBox, setCheckedBox] = useState(101);

  const handleChange = (val) => {
    setCheckedBox(val);
  };

  const CopyToClipboard = (val) => {
    var copyText = document.getElementById(selectedBox.toString());
    navigator.clipboard.writeText(copyText.innerHTML);
  }

  return (
    <>
      <Navbar selected={3} title={"Hakemusten käsittely"}/>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
        <div className="infobubbles">
          <InfoBubble Yposition={7} text={<p>Yrityskuvan kannalta on hyvä vastata kaikille hakijoille.</p>}/>
          <InfoBubble Yposition={48} text={<p>Yrityskuvan kannalta on kannattavaa luoda hyvä hakijakokemus: <br /><br />- Ole täsmällinen. <br />- Arvosta hakemuksia. <br />- Ole kohtelias.</p>}/>
        </div>
        <div className="section-form">
          <div className="form">
            <Input question='Mieti milloin olet tavoitettavissa:' rowsVal='1'/>
            <Input question='Milloin vastaat hakijoille:' rowsVal='1'/>

            <p style={{color: '#4D82AA', marginTop: '5rem', marginBottom: '0', fontWeight: '650'}}>Soittaminen on paras tapa kutsua henkilö haastatteluun!</p>

            <Input question='Luonnostele kutsu haastatteluun:'/>
            <Input question='Luonnostele vastaus hylätyille hakemuksille:'/>

            <div className="form-checkbox-group">
              <Checkbox value={selectedBox === 101} onChange={() => handleChange(101)} label='Esimerkki A'/>
              <Checkbox value={selectedBox === 102} onChange={() => handleChange(102)} label='Esimerkki B'/>
            </div>

            <div className="help-section">
              <MdOutlineContentCopy className="clipboard-icon" onClick={CopyToClipboard} />
              { selectedBox === 101 && <p className="help-text" id="101">Kiitos kiinnostuksestasi työpaikkaa kohtaan. Valitettavasti valinta ei osunut sinuun.</p>}
              { selectedBox === 102 && <p className="help-text" id="102">Hei "Hakijan nimi". Valintakriteerimme ei tällä kertaa täyttynyt kohdallasi, sillä "kerro syy".</p>}
            </div>

          </div>
          {/* Previous and next buttons and guidance text thing */}
          <FormFooter currentPage={3}/>
        </div>
        <div className="infobubbles">
          <HelpBubble Yposition={6.5} text={<p>Varmista että sinulla on aikaa hakijoiden yhteydenotoille. <br /><br />Anna mahdollisimman joustava aikahaarukka koska olet tavoitettavissa ja huolehdi, että pidät siitä kiinni.</p>}/>
          <HelpBubble Yposition={52.5} text={<p>Kerro haastateltavalle kenet hän tapaa, missä ja koska. <br /><br />Kerro myös mitä hänen tulee ottaa mukaan haastatteluun. (esim. todistukset) <br /><br />Voit kopioida esimerkkivastauksen itsellesi.</p>}/>
          <HelpBubble Yposition={61.5} text={<p>Voit kopioida esimerkkivastauksen itsellesi.</p>}/>
        </div>
      </div>
    </>
  );
}

export default Section3;