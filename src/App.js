import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home';// Import the Add component
import Add from './component/addforest';
import ForestList from './component/list';
import ForestDetail from './component/ForestDetail';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/:id" element={<ForestDetail />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
