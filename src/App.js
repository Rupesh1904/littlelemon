import Navigation from './Components/Navbar';
import Header from './Components/Header';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" exact />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
