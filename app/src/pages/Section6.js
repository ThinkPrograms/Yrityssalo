import Navbar from "../components/Navbar";
import '../css/Section.css'
import bg from '../yrityssalo-form.png';
import FormFooter from '../components/Form_Footer';

const Section6 = () =>  {
  return (
    <>
      <Navbar selected={6} title={"Perehdytys"}/>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
        <div className="section-form">
          {/* Question -marks here */}

          {/* Exclamation -marks here */}

          {/* Form questions and inputs */}
          <div className="form">
            <b className="form-question">Perehdytys on sinulle erittäin hyödyllinen.<br/>Hyvä perehdytys varmistaa sujuvan työnaloituksen ja säästää aikaasi ja rahaasi.</b>
            <p className="form-question">Perehdytykseen tulee kuulua ainakin:<br/>- Työvälineisiin, työympäristöön ja sen toimintatapoihin tutustuminen.<br/>- Pelastusopastus<br/>- Työterveyshuolto<br/>- Työturvallisuus</p>
            <b className="form-question">Säästät vaivaa tulevaisuudessa, tekemällä perehdytyskansion jo ensimmäisen rekrytoinnin kohdalla.</b>
          </div>
          {/* Previous and next buttons and guidance text thing */}
          <FormFooter currentPage={6}/>
        </div>
      </div>
    </>
  );
}

export default Section6;