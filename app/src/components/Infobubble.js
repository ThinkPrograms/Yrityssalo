import { MdPriorityHigh  } from "react-icons/md";

const InfoBubble = ({ Yposition, text, value, onChange }) => {
    return (
        <>
          <div className="infobubble bubble-left" style={{ position: "relative", top: Yposition + "rem"}}>
            <div className="infobubble-text">
              <h2 className="infobubble-title">Vinkki:</h2>
              {text}
            </div>
            <MdPriorityHigh className="infobubble-icon"/>
          </div>
        </>
    );
};

export default InfoBubble;