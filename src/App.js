import Home from './home'; 
import Products from './assgn3.js';
import Product from './product.js';
import Profile from './profile.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';


export const cardContext = createContext();

function App() {
  const [globalCount, setGlobalCount] = useState(0);
  const [userDetails, setUserDetails] = useState({});
  const [login, setLogin] = useState(false);
  
  return (
    <cardContext.Provider value={{ globalCount, setGlobalCount, userDetails, setUserDetails, login, setLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </cardContext.Provider>
  );
}

export default App;
