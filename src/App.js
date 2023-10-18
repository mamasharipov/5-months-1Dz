import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './Pages/Main/Main';
import Page from './Pages/Page/Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
