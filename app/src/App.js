import React from "react";
import Footer from './components/Footer'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Section1 from "./pages/Section1";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/section_1" element={<Section1 />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}
 
export default App;
