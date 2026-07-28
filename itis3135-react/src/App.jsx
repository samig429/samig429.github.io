import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Contract from "./pages/Contract";
import About from "./pages/About";


function App() {

    return (
        <BrowserRouter>

            <Header />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route 
                    path="/introduction" 
                    element={<Introduction />} 
                />

                <Route 
                    path="/contract" 
                    element={<Contract />} 
                />

                <Route 
                    path="/about" 
                    element={<About />} 
                />

            </Routes>


            <Footer />

        </BrowserRouter>
    );
}

export default App;