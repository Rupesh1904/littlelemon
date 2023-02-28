
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
   
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
