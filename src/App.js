
import {BrowserRouter,Routes, Route, Router,} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Section from './Components/Section';
import Card from './Components/Cards';


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
        <Route path="/Reservation" ></Route>
      </Routes>
    </BrowserRouter>
    <BrowserRouter>
      <Section/>
      <Routes>
        <Route path="/Online-Menu"/>
      </Routes>
    </BrowserRouter>
    <BrowserRouter>
      <Card/>
      <Routes>
        <Route path="/card1" />
        <Route path="/card2" />
        <Route path="/card3" />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
