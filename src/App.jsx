
import { HashRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import Home from './components/Home'


function App() {


  return (
    <div className="App">
     <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
     </HashRouter>
    </div>
  )
}

export default App

