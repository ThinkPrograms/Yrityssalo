import '../css/Section.css'
import bg from '../yrityssalo-form.png';
import FormFooter from '../components/Form_Footer';
import HelpBubble from "../components/Helpbubble";
import InfoBubble from "../components/Infobubble";
import useFormContext from '../hooks/useFormContext';
const Section6 = () =>  {
  const {data, handleDataChange} = useFormContext()

  return (
      <>
        <img className="bg-image" src={bg} alt="Failed to load" />
        <div className="section">
          <div className="infobubbles">
            <InfoBubble fieldName='muistilista_14_checked' value={data.muistilista_14_checked} onChange={handleDataChange} Yposition={7} text={<p>Lisää tietoa työturvallisuuslaista: <br /><br /><b>Työturvallisuus</b></p>}/>
            <InfoBubble fieldName='muistilista_15_checked' value={data.muistilista_15_checked} onChange={handleDataChange} Yposition={12} text={<p>Perehdytyskansio on infopaketti yrityksesi uudelle työntekijälle. <br /><br />Perehdytyskansion pohjan löydät täältä: <br /><br /><b>Perehdytyspohja</b></p>}/>
          </div>
          <div className="section-form">
            <div className="form">
              <b className="form-question noPadding">Perehdytys on sinulle erittäin hyödyllinen.<br/>Hyvä perehdytys varmistaa sujuvan työnaloituksen ja säästää aikaasi ja rahaasi.</b>
              <p className="form-question">Perehdytykseen tulee kuulua ainakin:<br/>- Työvälineisiin, työympäristöön ja sen toimintatapoihin tutustuminen.<br/>- Pelastusopastus<br/>- Työterveyshuolto<br/>- Työturvallisuus</p>
              <b className="form-question noPadding">Säästät vaivaa tulevaisuudessa, tekemällä perehdytyskansion jo ensimmäisen rekrytoinnin kohdalla.</b>
            </div>
            {/* Previous and next buttons and guidance text thing */}
            <FormFooter/>
          </div>
          <div className="infobubbles">
            <HelpBubble Yposition={7} text={<p>Mieti kuka vastaa perehdytyksestä</p>}/>
            <HelpBubble Yposition={17.5} text={<p>Perehdytys on työturvallisuuslain nojalla pakollinen toteuttaa.</p>}/>
          </div>
        </div>
      </>
  );
}

export default Section6;