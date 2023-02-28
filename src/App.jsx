import { HashRouter, Route, Routes } from 'react-router-dom'
import './assets/css/menu.css';
import './assets/css/socialBtn.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Portfolio1 from './components/Portfolio1';
import Portfolio2 from './components/Portfolio2';

function App() {


  return (
    <div className="App">
          <Home/>
          <AboutMe/>
          <Portfolio/>
          <Portfolio1/>
          <Portfolio2/>
          <Contact/>
    
    </div>
  )
}

export default App

