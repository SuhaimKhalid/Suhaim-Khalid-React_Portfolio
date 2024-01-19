import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
// import ProjectsPage from './components/ProjectsPage';
// import ContactPage from './components/ContactPage';
import Header from './components/Header';
import HeroSecction from './Components/HeroSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      
      <Header />
      <HeroSecction/>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        {/* <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} /> */}
      </Routes>

    </Router>
  );
}

export default App
