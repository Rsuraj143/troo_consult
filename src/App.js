
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Team from './Pages/Team';
import Testomonials from './Pages/Testomonials';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/testimonial' element={<Testomonials/>} />
          <Route path='/blogs' element={<Blogs/>}  />
          <Route path='/contact' element={<Contact/>} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
