import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
// import ProjectsPage from './components/ProjectsPage';
// import ContactPage from './components/ContactPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App
