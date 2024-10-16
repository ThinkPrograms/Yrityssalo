const Select = ({ label, value, options, onChange }) => {
    return (
      <label>
        <p className="form-question" style={{paddingBottom: '0'}}>{label}</p>
        <select className="form-select" value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

export default Select;