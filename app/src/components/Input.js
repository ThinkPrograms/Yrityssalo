const Input = ({ question, rowsVal = 9, value, onChange }) => {
    return (
        <>
            <label className="form-question">{question}</label>
            <textarea 
                className="form-input" 
                rows={rowsVal} 
                value={value} 
                onChange={onChange}
            ></textarea>
        </>
    );
};

export default Input;