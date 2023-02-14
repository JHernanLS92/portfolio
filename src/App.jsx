import { HashRouter, Route, Routes } from 'react-router-dom'
import './assets/css/index.css';
import AboutMe from './components/AboutMe'
import Contact from './components/Contact';
import Home from './components/Home';
import Menubtn from './components/Menubtn';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Socialbtn from './components/Socialbtn';

function App() {


  return (
    <div className="App">
     <HashRouter>
      <Socialbtn/>
      <Menubtn/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutme' element={<AboutMe/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
     </HashRouter>
    </div>
  )
}

export default App

