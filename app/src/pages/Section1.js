import Navbar from "../components/Navbar";
import '../css/Section.css'
import bg from '../yrityssalo-form.png';

const Section1 = () =>  {
  return (
    <>
      <Navbar/>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
        <div className="section-form">
          {/* Question -marks here */}

          {/* Exclamation -marks here */}

          {/* Form questions and inputs here */}
          <div className="form">
            <p className="form-question">Mieti, millaista osaamista yrityksesi tarvitsee nyt ja tulevaisuudessa:</p>
            <textarea name="" id="" className="form-input" rows='18'></textarea>
            <p className="form-question">Pohdi yrityksen lyhyen ja pitkän aikavälin tavoitteet:</p>
            <textarea name="" id="" className="form-input" rows='18'></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;