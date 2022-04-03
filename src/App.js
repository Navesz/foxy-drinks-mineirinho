
import './App.css';
import Navbar from './components/Navbar';
import LandPage from './components/LandPage'
import Bebidas from './components/Bebidas'
import BebidasSeparadas from './components/BebidasSeparadas'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<LandPage />}
          />
          <Route 
            path='/bebidas' 
            element={<Bebidas />}
          />
          <Route 
            path='/bebidas/:id'
            element={<BebidasSeparadas />}
          />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
