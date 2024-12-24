import { MdPriorityHigh  } from "react-icons/md";
import { useState } from "react";

const InfoBubble = ({ Yposition, text, value, onChange, fieldName }) => {
  const [visible, setVisible] = useState(false)

  return (
      <>
        <div className="infobubble bubble-left" style={{ position: "relative", top: Yposition + "rem"}}>
          { visible ?
          <div className="infobubble-text">
            <h2 className="infobubble-title">Vinkki:</h2>
            {text}

            <label className="form-checkbox">
              <input type="checkbox" name={fieldName} checked={value} onChange={onChange} />
              <span className="checkmark" style={{height: '1.8rem', width: '1.8rem'}}></span>
              <p id="checkbox-text" style={{color: "white", fontSize: '1rem', bottom: '0.95rem', lineHeight: '0.9rem', paddingLeft: '0.3rem'}}>Lisää vinkki<br />muistilistaan</p>
            </label>
          </div>
          :
          <label style={{width: '18.5rem'}}></label>
          }
          <MdPriorityHigh className="infobubble-icon" onClick={() => setVisible(!visible)}/>
        </div>
      </>
  );
};

export default InfoBubble;