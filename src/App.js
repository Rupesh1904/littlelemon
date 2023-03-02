
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Section from './Components/Section';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact />
      </Routes>
    </BrowserRouter>
    <BrowserRouter>
      <HeroSection/>
      <Routes>
        <Route path="/Reservation"></Route>
      </Routes>
    </BrowserRouter>
    <BrowserRouter>
      <Section/>
      <Routes>
        <Route path="/Online-Menu"/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
