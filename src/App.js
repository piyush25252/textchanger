// import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setmode] = useState('light');
  const [enable,setenable] = useState("Enable");

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#0a0f38';
      document.body.style.color = 'white';
      setenable("Disable");
      }
      else{
        setmode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        setenable("Enable");
        }
  
  }
  return ( <>
    <Navbar title = "textUtility" mode = {mode} toggleMode = {toggleMode} enable={enable}/>
    <div className="container my-3">
    <Textform/>
    </div>
    </>
  );
}

export default App;
