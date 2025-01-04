import '../css/Section.css'
import bg from '../yrityssalo-form.png';
import FormFooter from '../components/Form_Footer';
import InfoBubble from "../components/Infobubble";
import useFormContext from '../hooks/useFormContext';

const Section5 = () =>  {
  const {data, handleDataChange} = useFormContext()

  return (
    <>
      <img className="bg-image" src={bg} alt="Failed to load" />
      <div className="section">
        <div className="infobubbles">
          <InfoBubble fieldName='muistilista_13_checked' value={data.muistilista_13_checked} onChange={handleDataChange} Yposition={5} text={<p>Sopimuspohjana voit käyttää vaikka seuraavaa työsuojelu.fi löytyvää pohjaa: <br /><br /><a href='https://tyosuojelu.fi/documents/154017715/168016241/tyosopimus_mallipohja_FI.pdf/c7f72d4a-4736-4223-71ed-cfd01bd620aa/tyosopimus_mallipohja_FI.pdf?t=1719504041415'>Sopimuspohja</a></p>}/>
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
            <FormFooter/>
          </div>
          <label style={{width: '23rem'}}></label>
        </div>
      </>
  );
}

export default Section5;