const Input = ({ question, rowsVal = 9, inputName, value, onChange }) => {
    return (
        <>
            <label className="form-question">{question}</label>
            <textarea 
                className="form-input" 
                name={inputName}
                rows={rowsVal} 
                defaultValue={value} 
                onChange={onChange}
            ></textarea>
        </>
    );
};

export default Input;