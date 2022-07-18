import Header from "./components/header";
import "./App.css";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import "./style.css";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Mercury from "./pages/Mercury";
import MARS from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";
import Planets from "./pages/Plantes";





function App() {
   
    return (
        <div>
       
            <Header/>
            
            <Routes>
            <Route path="/" element={<Planets />} />
      <Route path="Mercury" element={<Mercury />} />
      <Route path="Venus" element={<Venus/>} />
      <Route path="Earth" element={<Earth />} />
      <Route path="Mars" element={<MARS/>} />
      <Route path="Jupiter" element={<Jupiter/>} />
      <Route path="Saturn" element={<Saturn/>} />
      <Route path="Uranus" element={<Uranus/>} />
      <Route path="Neptune" element={<Neptune/>} />
    </Routes>

        </div>
       

    );
}
export default App