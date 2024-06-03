import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Products from './routes/Products';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/service" element={ <Service/>}/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/products" element={ <Products/>}/>
      </Routes>

      
     
      
    </div>
  );
}

export default App;
