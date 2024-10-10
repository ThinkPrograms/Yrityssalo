import '../css/Index.css'
import { Button } from "antd";
import bg from '../yrityssalo-kuva.png'

const Index = () => {
  return (
    <>
        <img className="bg-image" src={bg} alt="Failed to load" />
        <header className="App-header">
          <div className="Menu">
            <div className='menu-items'>
              <h1 className='menu-title'>Pienyrittäjän rekryopas</h1>
              <b>Tämä opas on suunnattu ensimmäistä työntekijäänsä rekrytoivalle pien- tai mikroyrittäjälle<br/></b>
              <p>Täytä kohdat, jotka koet itsellesi hyödylliseksi<br/><br/></p>
              <div className='padding-0'>
                <p>1. Millaisesta osaamisesta yrityksesi hyötyy?</p>
                <p>2. Miten laadit kiinnostavan työpaikkailmoituksen?</p>
                <p>3. Miten valitset sopivat ehdokkaat haastatteluun?</p>
                <p>4. Kuinka valmistaudun työhaastattelun tekemiseen?</p>
                <p>5. Mitä sisältyy työsopimukseen?</p>
                <p>6. Mitä kuuluu onnistuneeseen perehdytykseen?</p>
              </div>
            </div>
              <div className='menu-buttons'>
                <a href='./Section_1'>
                  <input type="button" className='menu-button' value='1'/>
                </a>
                <a href='./Section_1'>
                  <input type="button" className='menu-button' value='2'/>
                </a>
                <a href='./Section_1'>
                  <input type="button" className='menu-button' value='3'/>
                </a>
                <a href='./Section_1'>
                  <input type="button" className='menu-button' value='4'/>
                </a>
                <a href='./Section_1'>
                  <input type="button" className='menu-button' value='5'/>
                </a>
                <a href='./Section_1'>
                  <input type="button" className='menu-button' value='6'/>
                </a>
              </div>
              <div className='menu-explanation'>
                <p className='exclamation-bubble'>!</p>
                <p className='question-bubble'>?</p>
                <b className='explanation-text'>Vinkki- ja ohjenappien takaa löydät vinkkejä ja <br/>neuvoja, joita voit lisätä tulostettavalle muistilistalle.</b>
              </div>
          </div>
        </header>
    </>
  );
}

export default Index;