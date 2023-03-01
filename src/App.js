
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
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
    
    </>
  );
}

export default App;
