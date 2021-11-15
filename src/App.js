import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from './Components/Hero';
import Contents from './Components/Contents';

function App() {
  return (
    <>
    {/* Because Link cannot be used outside Router */}
      <Router>  
        <Navbar/>
        <Routes>
          <Route path="/"  />
        </Routes>
        <Hero/>
        <Contents/>
      </Router>
    </>
  );
}

export default App;
