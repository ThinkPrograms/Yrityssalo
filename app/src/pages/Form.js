import useFormContext from "../hooks/useFormContext";
import FormInputs from './FormInputs'
import Navbar from '../components/Navbar'

const Form = e => {

    const {
        page, 
        setPage,
        data,
        title,
        canSubmit,
    } = useFormContext()

    const content = (
        <div className="page-container">
            <Navbar/>
            <FormInputs/>
        </div>
    )

    return content
}

export default Form