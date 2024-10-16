import React from "react";
import Footer from './components/Footer'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";
import Section5 from "./pages/Section5";
import Section6 from "./pages/Section6";
import Finished from "./pages/Finished";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/section_1" element={<Section1 />} />
                    <Route path="/section_2" element={<Section2 />} />
                    <Route path="/section_3" element={<Section3 />} />
                    <Route path="/section_4" element={<Section4 />} />
                    <Route path="/section_5" element={<Section5 />} />
                    <Route path="/section_6" element={<Section6 />} />
                    <Route path="/Finished" element={<Finished />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}
 
export default App;
