import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Route>
        <Route path='/resume' element={<Resume/>}></Route>
      </Routes>

    </>
  )
}

export default App
