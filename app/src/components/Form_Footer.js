const Form_Footer = ({ currentPage }) => {
    let prevPage = '/';
    let nextPage = './Finished';
    // Get the previous and next page numbers
    if (currentPage !== 1 && currentPage !== undefined) {
        prevPage = "./Section_" + (currentPage - 1).toString()
    }
    if (currentPage !== 6 && currentPage !== undefined) {
        nextPage = "./Section_" + (currentPage + 1).toString()
    }

    return (
        <>
        <div className="form-btns">
            <a className="no-decoration" href={prevPage}>
              <p className="form-btn">Edellinen</p>
            </a>
            <a className="no-decoration" href={nextPage}>
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