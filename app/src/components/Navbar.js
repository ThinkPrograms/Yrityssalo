import '../css/Navbar.css';
import { FaHome, FaCheck } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <h1 className='title'>OSAAMISEN TARVE</h1>
            <div className='menu'>
                    {/* <Button size='large' icon={<HomeFilled style={{ fontSize: '5rem'}}/>} style={{ fontSize: '5rem', color: '#98CC98' }}/>  */}
                    <a href="/">
                        <FaHome size='6rem' color='#98CC98'/>
                    </a>

                <div className="menu-sections">
                    <div className='menu-section menu-section-selected'>
                        <b className='section-number'>1</b>
                        <p className='section-text'>Osaamisen tarve</p>
                    </div>
                    <div className='menu-section'>
                        <b className='section-number'>2</b>
                        <p className='section-text'>Työpaikka-ilmoitus</p>
                    </div>
                    <div className='menu-section'>
                        <b className='section-number'>3</b>
                        <p className='section-text'>Hakemusten käsittely</p>
                    </div>
                    <div className='menu-section'>
                        <b className='section-number'>4</b>
                        <p className='section-text'>Haastattelu</p>
                    </div>
                    <div className='menu-section'>
                        <b className='section-number'>5</b>
                        <p className='section-text'>Sopimus</p>
                    </div>
                    <div className='menu-section'>
                        <b className='section-number'>6</b>
                        <p className='section-text'>Perehdytys</p>
                    </div>
                </div>
                    <FaCheck size='6rem' color='#98CC98'/>
                    {/* <Button size='large' icon='1' type='primary' description='Osaamisen tarve' style={{ background: '#98CC98', fontSize: '300%', margin: '2rem' }} />
                    <Button size='large' icon='2' description='Työpaikka-ilmoitus' style={{ background: '#98CC98', fontSize: '300%', margin: '2rem' }} /> */}
            </div>
        </div>
        </>
    )
}
export default Navbar;