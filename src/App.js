import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  const [mode, setMode] = useState("white"); //Tells wheather dark mode is enabled or not.

  const toggleMode = () => {
    if (mode === "white") {
      setMode("#212529");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("white");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
  <Router>
      <Navbar 
                title="TextTweakBox"
                about="About TextTweakBox"
                mode={mode}
                toggleMode={toggleMode}/>
      {/* <TextForm heading="Enter Your Text to Analyze" mode={mode} /> */}
      <div>

          <Routes>
            {/* exact path checks the exact path eg /users --> component1 and /user/home --> component2 so to avoid error */}
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm heading="Enter Your Text to Analyze" mode={mode} />
              }
            />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
