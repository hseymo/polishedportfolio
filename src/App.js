import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';



function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
      <Header />
      <NavBar /> 
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
      <Footer /> 
      </BrowserRouter>
    </div>
  )
}

export default App;
