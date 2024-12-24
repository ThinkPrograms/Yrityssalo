import { MdQuestionMark  } from "react-icons/md";
import { useState } from "react";

const HelpBubble = ({ Yposition, text }) => {
  const [visible, setVisible] = useState(false)

    return (
        <>
          <div className="infobubble bubble-right" style={{ position: "relative", top: Yposition + "rem"}}>
            <MdQuestionMark className="infobubble-icon" onClick={() => setVisible(!visible)}/>
            { visible ? 
            <div className="infobubble-text">
              <h2 className="infobubble-title">Ohje:</h2>
              {text}
            </div>
            :
            <label style={{width: '18.5rem'}}></label>
            }
          </div>
        </>
    );
};

export default HelpBubble;