import React from 'react';

import './App.css';
import Contact from './Components/Contacts/Contact'
import Skills from './Components/Skills/Skills'
import Navbar from './Components/Navbar/Navbar'
function App() {
  
  return (
    <div className="App">
    <Navbar title="menu " />
    <hr/>
    <Contact/>
    <hr/>
    <Contact name="saifeddine ghouma" tel="+216 50 908 869" email="saifeddinegouma@yahoo.fr"/>
    <hr/>
    <Skills langage="PHP" framwork="Laravel"></Skills>
    
    </div>
  );
}

export default App;
