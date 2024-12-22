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
                <p className='footer-section'>
                <a href="https://toihinsaloon.fi" className='footer-link'>toihinsaloon.fi</a>
                <a href="https://investinsalo.fi" className='footer-link'>investinsalo.fi</a>
                <label className='footer-section-title'>Vapaat toimitilat</label>
                <a href="https://visitsalo.fi" className='footer-link'>visitsalo.fi</a>
                </p>
                <p className='footer-section'>
                    <a href="https://twitter.com" className='footer-link'>Twitter</a>
                    <a href="https://LinkedIn.com" className='footer-link'>LinkedIn</a>
                    <a href="https://Facebook.com" className='footer-link'>Facebook</a>
                    <a href="https://Instagram.com" className='footer-link'>Instagram</a>
                    <a href="https://Youtube.com" className='footer-link'>Youtube</a>
                </p>
            </div>
        </div>
    )
}
export default Footer;