
import { HashRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {


  return (
    <div className="App">
     <HashRouter>
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

