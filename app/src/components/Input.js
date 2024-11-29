const Input = ({ question, rowsVal = 9, value, onChange }) => {
    return (
        <>
            <p className="form-question">{question}</p>
            <textarea name="" id="" className="form-input" rows={rowsVal}></textarea>
        </>
    );
};

export default Input;