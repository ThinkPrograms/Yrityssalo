import '../css/Navbar.css';
import { FaHome, FaCheck } from "react-icons/fa";

const Navbar = ({ selected }) => {
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
                    <a className={'menu-section '  + (selected === 1 ? 'menu-section-selected' : '')} href='./Section_1'>
                        <b className='section-number'>1</b>
                        <p className='section-text'>Osaamisen tarve</p>
                    </a>
                    <a className={'menu-section '  + (selected === 2 ? 'menu-section-selected' : '')}  href='./Section_2'>
                        <b className='section-number'>2</b>
                        <p className='section-text'>Työpaikka-ilmoitus</p>
                    </a>
                    <a className={'menu-section '  + (selected === 3 ? 'menu-section-selected' : '')} href='./Section_3'>
                        <b className='section-number'>3</b>
                        <p className='section-text'>Hakemusten käsittely</p>
                    </a>
                    <a className={'menu-section '  + (selected === 4 ? 'menu-section-selected' : '')} href='./Section_4'>
                        <b className='section-number'>4</b>
                        <p className='section-text'>Haastattelu</p>
                    </a>
                    <a className={'menu-section '  + (selected === 5 ? 'menu-section-selected' : '')} href='./Section_5'>
                        <b className='section-number'>5</b>
                        <p className='section-text'>Sopimus</p>
                    </a>
                    <a className={'menu-section '  + (selected === 6 ? 'menu-section-selected' : '')} href='./Section_6'>
                        <b className='section-number'>6</b>
                        <p className='section-text'>Perehdytys</p>
                    </a>
                </div>
                <a href="./Finished">
                    <FaCheck size='6rem' color='#98CC98'/>
                </a>
            </div>
        </div>
        </>
    )
}
export default Navbar;