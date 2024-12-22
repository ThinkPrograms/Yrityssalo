const Select = ({ label, value, options, onChange, inputName }) => {
    return (
      <label>
        <p className="form-question" style={{paddingBottom: '0'}}>{label}</p>
        <select className="form-select" name={inputName} value={value} onChange={onChange}>
          {options.map((option, _) => (
            <option key={_} value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

export default Select;