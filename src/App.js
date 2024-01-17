import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light') //Tells wheather dark mode is enabled or not.

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextTweakBox" about="About TextTweakBox" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">
      <TextForm heading="Enter Your Text to Analyze" mode={mode}></TextForm>
      {/* <About></About> */}
      
      </div>
      

    </>
  );


}

export default App;
