
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/ProductPage';
import ProductDetaillPage from './page/ProductDetaillPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id/:num/:page" element={<ProductDetaillPage />} />
      </Routes>
    </div>
  );
}

export default App;
