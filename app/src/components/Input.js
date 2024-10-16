const Input = ({ question, rowsVal, value, onChange }) => {
    if (rowsVal === undefined) {
        console.log('ooga booga ohohoho')
        rowsVal = 9; // default
    }
    return (
        <>
            <p className="form-question">{question}</p>
            <textarea name="" id="" className="form-input" rows={rowsVal}></textarea>
        </>
    );
};

export default Input;