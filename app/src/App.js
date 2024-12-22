import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Footer from './components/Footer'
import Form from './pages/Form'
import { FormProvider } from './context/FormContext'
function App() {
    return (
        <>
            <Router>
                <div className="page-container">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/Form" element={ 
                            <>
                                <FormProvider>
                                    <Form />
                                </FormProvider>
                            </>
                        } />
                    </Routes>
                    <Footer/>
                </div>
            </Router>
        </>
    );
}
 
export default App;
