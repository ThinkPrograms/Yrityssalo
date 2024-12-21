import Navbar from "../components/Navbar";
import '../css/Section.css'
import bg from '../yrityssalo-form.png';
import FormFooter from '../components/Form_Footer';
import InfoBubble from "../components/Infobubble";

const Section5 = () =>  {
  return (
    <>
      <Navbar selected={5} title={"Sopimus"}/>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
        <div className="infobubbles">
          <InfoBubble Yposition={5} text={<p>Sopimuspohjana voit käyttää vaikka seuraavaa työsuojelu.fi löytyvää pohjaa: <br /><br /><b>Sopimuspohja</b></p>}/>
        </div>
        <div className="section-form">
          <div className="form">
            <p className="form-question noPadding">
              Työsopimus voi olla kirjallinen, suullinen tai sähköinen.
              <b> On suositeltavaa tehdä kirjallisesti</b>
              , jotta sovitut asiat voidaan tarvittaessa tarkistaa.
              </p>

              <p className="form-question noPadding">
                Ota tehdessä huomioon
                <b> työsopimuslain, työaikalain ja vuosilomalain säännökset, sekä työehtosopimuksen määräykset.</b>
              </p>

              <p className="form-question noPadding">
                Mikäli allekirjoitetussa sopimuksessa on sovittu edellämainittujen vastaisia asioita, ne
                <b> eivät </b>
                ole päteviä.
              </p>

              <p className="form-question noPadding">
                <b>Työsopimuksen kesto on sovittava. </b>
                Se voi olla toistaiseksi voimassa oleva tai määräaikainen.
              </p>

              <b className="form-question" style={{fontSize: '1rem'}}>
                Palkattavan henkilön ollessa 14 vuotias, sopimuksen tekee huoltaja. Sitä nuorempi saa työskennellä vain työsuojeluviranomaisen poikkeusluvalla.
              </b>
            </div>
            {/* Previous and next buttons and guidance text thing */}
            <FormFooter currentPage={5}/>
          </div>
          <label style={{width: '23rem'}}></label>
        </div>
      </>
  );
}

export default Section5;