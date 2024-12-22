const Checkbox = ({ label, value, onChange }) => {
    return (
        <label className="form-checkbox">
            <input type="checkbox" checked={value} onChange={onChange} />
            <span className="checkmark"></span>
            <p id="checkbox-text">{label}</p>
        </label>
    );
};

export default Checkbox;