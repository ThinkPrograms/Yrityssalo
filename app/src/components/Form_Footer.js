import useFormContext from "../hooks/useFormContext";

const Form_Footer = () => {
    const {
        page, 
        setPage,
    } = useFormContext()

    const ChangePage = (newPage) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setPage(newPage);
    }

    return (
        <>
        <div className="form-btns">
            <a className="no-decoration" onClick={() => ChangePage(page - 1)}>
              <p className="form-btn">Edellinen</p>
            </a>
            <a className="no-decoration" onClick={() => ChangePage(page + 1)}>
              <p className="form-btn">Seuraava</p>
            </a>
        </div>
        <div className='form-explanation'>
            <p className='help-bubble'>!</p>
            <p className='help-bubble'>?</p>
            <b className='explanation-text'>Vinkki- ja ohjenappien takaa löydät vinkkejä ja <br /> neuvoja, joita voit lisätä tulostettavalle muistilistalle.</b>
        </div>
        </>
    );
};

export default Form_Footer;