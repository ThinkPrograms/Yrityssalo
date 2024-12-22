import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Finished from "./Finished";
import useFormContext from "../hooks/useFormContext";

const FormInputs = () => {
    const { page } = useFormContext()
    const display = {
        0: <Section1/>,
        1: <Section2/>,
        2: <Section3/>,
        3: <Section4/>,
        4: <Section5/>,
        5: <Section6/>,
        6: <Finished/>,
    }

    return display[page]
}

export default FormInputs