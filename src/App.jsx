import { HashRouter, Route, Routes } from 'react-router-dom'
import './assets/css/menu.css';
import './assets/css/socialBtn.css'
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
      <Menubtn/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutme' element={<AboutMe/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/skills' element={<Skills/>} />
        </Routes>
        <Socialbtn/>
     </HashRouter>
    </div>
  )
}

export default App

