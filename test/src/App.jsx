import React from 'react';
import "./App.css"
// import "./components/User.js"
import User from './components/User';
import {useState, useEffect, useRef} from "react";


function App(){

  const inputReference = useRef();
  const numeReference = useRef();

  function showInput(){
    console.log(inputReference.currentValue);
  }

  function showName(){
    console.log(numeReference.current);
  }
  return(<div className="clasamea">
      const inputReference = useRef();
      <input ref= {inputReference}></input>
      <button onClick={showInput}>Apasa-ma ca sa vezi inputul </button>
     </div>)

  
  // return (<div className="clasamea">
  //   <p className="copilul">Paragraf cod</p>
  //   {isLoggedIn && <button>Login</button>}
  //   {!isLoggedIn && <button>Loged out</button>}
  //   {isLoggedIn && <p claseName = "textul_meu" style={myStyle}>foearte mult test stilizat</p>}
  //   <User nume="Adi" facultate="ACS"  userSpeacial ={true}/>
  //   <User nume="Mimi" facultate="ETTI"/>
  //   <User nume ="Fabian" facultate="ceva"/>
  //   <User nume ="Stefan" facultate="Socului"/>
  // </div>)
} 
export default App;