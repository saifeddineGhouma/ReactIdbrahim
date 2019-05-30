import React from 'react';
import Skills from './Components/Skills/Skills'
import Navbar from './Components/Navbar/Navbar'
import Contacts from'./Components/Contacts/Contacts'
import {Provider} from './Components/context'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
function App() {
  
  return (
  	<Provider>
    <div className="App">
    <Navbar title="Contact liste " />
   <Contacts/>
   
<br/>
    <Skills langage="PHP" framwork="Laravel" experience='3'></Skills>
    <Skills langage="Js" framwork="React " experience='4'></Skills>
    
    </div>
    </Provider>
  );
}

export default App;
