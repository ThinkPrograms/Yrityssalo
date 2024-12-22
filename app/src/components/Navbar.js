import '../css/Navbar.css';
import { FaHome, FaCheck } from "react-icons/fa";
import useFormContext from "../hooks/useFormContext";

const Navbar = () => {

    const {
        page, 
        setPage,
        title,
    } = useFormContext()

    return (
        <>
        <div className="navbar">
            <h1 className='title'>{ title[page] }</h1>
            <div className='menu'>
                <div className="menu-elems">
                    <a href="/">
                    <FaHome size='6rem' color='#98CC98'/>
                    </a>
                    <div className="menu-sections">
                        <a className={'menu-section '  + (page === 0 ? 'menu-section-selected' : '')} onClick={() => setPage(0)}>
                            <b className='section-number'>1</b>
                            <p className='section-text'>Osaamisen tarve</p>
                        </a>
                        <a className={'menu-section '  + (page === 1 ? 'menu-section-selected' : '')} onClick={() => setPage(1)}>
                            <b className='section-number'>2</b>
                            <p className='section-text'>Työpaikka-ilmoitus</p>
                        </a>
                        <a className={'menu-section '  + (page === 2 ? 'menu-section-selected' : '')} onClick={() => setPage(2)}>
                            <b className='section-number'>3</b>
                            <p className='section-text'>Hakemusten käsittely</p>
                        </a>
                        <a className={'menu-section '  + (page === 3 ? 'menu-section-selected' : '')} onClick={() => setPage(3)}>
                            <b className='section-number'>4</b>
                            <p className='section-text'>Haastattelu</p>
                        </a>
                        <a className={'menu-section '  + (page === 4 ? 'menu-section-selected' : '')} onClick={() => setPage(4)}>
                            <b className='section-number'>5</b>
                            <p className='section-text'>Sopimus</p>
                        </a>
                        <a className={'menu-section '  + (page === 5 ? 'menu-section-selected' : '')} onClick={() => setPage(5)}>
                            <b className='section-number'>6</b>
                            <p className='section-text'>Perehdytys</p>
                        </a>
                    </div>
                    <a>
                        <FaCheck size='6rem' color={page === 6 ? '#4D82AA' : '#98CC98'} onClick={() => setPage(6)}/>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar;