import { MdPriorityHigh  } from "react-icons/md";
import { useState } from "react";

const InfoBubble = ({ Yposition, text, value, onChange }) => {

  const [selectedBox, setCheckedBox] = useState(false);

  const handleChange = (val) => {
    setCheckedBox(!selectedBox);
  };

  return (
      <>
        <div className="infobubble bubble-left" style={{ position: "relative", top: Yposition + "rem"}}>
          <div className="infobubble-text">
            <h2 className="infobubble-title">Vinkki:</h2>
            {text}

            <label className="form-checkbox">
              <input type="checkbox" checked={selectedBox === true} onChange={handleChange} />
              <span className="checkmark" style={{height: '1.8rem', width: '1.8rem'}}></span>
              <p id="checkbox-text" style={{color: "white", fontSize: '1rem', bottom: '0.95rem', lineHeight: '0.9rem', paddingLeft: '0.3rem'}}>Lisää vinkki<br />muistilistaan</p>
            </label>

          </div>
          <MdPriorityHigh className="infobubble-icon"/>
        </div>
      </>
  );
};

export default InfoBubble;