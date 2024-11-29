import Navbar from "../components/Navbar";
import '../css/Section.css'
import bg from '../yrityssalo-form.png';
import FormFooter from '../components/Form_Footer';
import HelpBubble from "../components/Helpbubble";
import InfoBubble from "../components/Infobubble";

const Section6 = () =>  {
  return (
    <>
      <Navbar selected={6} title={"Perehdytys"}/>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
        <div className="infobubbles">
          <InfoBubble Yposition={7} text={<p>Lisää tietoa työturvallisuuslaista: <br /><br /><b>Työturvallisuus</b></p>}/>
          <InfoBubble Yposition={7} text={<p>Perehdytyskansio on infopaketti yrityksesi uudelle työntekijälle. <br /><br />Perehdytyskansion pohjan löydät täältä: <br /><br /><b>Perehdytyspohja</b></p>}/>
        </div>
        <div className="section-form">
          <div className="form">
            <b className="form-question">Perehdytys on sinulle erittäin hyödyllinen.<br/>Hyvä perehdytys varmistaa sujuvan työnaloituksen ja säästää aikaasi ja rahaasi.</b>
            <p className="form-question">Perehdytykseen tulee kuulua ainakin:<br/>- Työvälineisiin, työympäristöön ja sen toimintatapoihin tutustuminen.<br/>- Pelastusopastus<br/>- Työterveyshuolto<br/>- Työturvallisuus</p>
            <b className="form-question">Säästät vaivaa tulevaisuudessa, tekemällä perehdytyskansion jo ensimmäisen rekrytoinnin kohdalla.</b>
          </div>
          {/* Previous and next buttons and guidance text thing */}
          <FormFooter currentPage={6}/>
        </div>
        <div className="infobubbles">
          <HelpBubble Yposition={61.5} text={<p>Mieti kuka vastaa perehdytyksestä</p>}/>
          <HelpBubble Yposition={61.5} text={<p>Perehdytys on työturvallisuuslain nojalla pakollinen toteuttaa.</p>}/>
        </div>
      </div>
    </>
  );
}

export default Section6;