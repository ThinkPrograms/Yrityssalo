import '../css/Footer.css';
import logo from '../yrityssalo-logo.png'

const Footer = () => {
    return (
        <div className="Footer">
            <img className="Footer-logo" src={logo} alt='Failed to load'/>
            <div className='footer-elements'>
                <p className='footer-section'>Joensuunkatu 7<br/>
                24100 Salo<br/>
                044 546 0043<br/>
                Yrityssalo@yrityssalo.fi
                </p>
                <p className='footer-section'>toihinsaloon.fi<br/>
                investinsalo.fi<br/>
                Vapaat toimitilat<br/>
                visitsalo.fi
                </p>
                <p className='footer-section'>Twitter<br/>
                LinkedIn<br/>
                Facebook<br/>
                Instagram<br/>
                Youtube
                </p>
            </div>
        </div>
    )
}
//<input type="button" value='1'/>
export default Footer;