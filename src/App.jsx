import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import GradientWaves from './components/GradientWaves';

function App() {
  return (
    <div className="site-app relative min-h-screen overflow-x-hidden">
      <div className="site-waves fixed inset-0 z-0" aria-hidden="true">
        <GradientWaves
          horizonColor="#171220"
          waveColor="#4D3A73"
          crestColor="#9678C9"
          speed={0.45}
          amplitude={2.2}
          waveScale={0.4}
          waveRatio={0.9}
          swell={35}
          turbulence={60}
          tilt={0.97}
          zoom={1.05}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1.0}
          opacity={1.0}
          mouseInteraction={true}
          parallaxStrength={0.5}
          grain={true}
          grainIntensity={0.02}
        />
      </div>

      <div className="app-content">
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
      </div>
    </div>
  )
}

export default App
