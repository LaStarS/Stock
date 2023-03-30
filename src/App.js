import Home from './pages/Home';
import './App.css';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Stock from './pages/Stock';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/stocks" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
