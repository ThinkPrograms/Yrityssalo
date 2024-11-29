import { MdQuestionMark  } from "react-icons/md";

const HelpBubble = ({ Yposition, text, value, onChange }) => {
    return (
        <>
          <div className="infobubble bubble-right" style={{ position: "relative", top: Yposition + "rem"}}>
            <MdQuestionMark className="infobubble-icon"/>
            <div className="infobubble-text">
              <h2 className="infobubble-title">Ohje:</h2>
              {text}
            </div>
          </div>
        </>
    );
};

export default HelpBubble;