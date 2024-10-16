import Navbar from "../components/Navbar";
import '../css/Section.css'

const Finished = () =>  {
    return (
      <>
        <Navbar />
        <div className="form-btns">
            <a className="no-decoration" href="./Section_6">
              <p className="form-btn">Edellinen</p>
            </a>
            <a className="no-decoration" href="/">
              <p className="form-btn">Tulosta</p>
            </a>
            <a className="no-decoration" href="/">
              <p className="form-btn">Lataa tiedosto</p>
            </a>
          </div>
        <div className='form-explanation'>
            <p className='help-bubble'>!</p>
            <p className='help-bubble'>?</p>
            <b className='explanation-text'>Vinkki- ja ohjenappien takaa löydät vinkkejä ja <br/>neuvoja, joita voit lisätä tulostettavalle muistilistalle.</b>
        </div>
      </>
    )
}

export default Finished;