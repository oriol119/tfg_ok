import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Contact from './pages/Contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='absolute w-full h-full'>
      <BrowserRouter>

        <Navbar/>
        
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Contact />} />
        </Routes>

      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
