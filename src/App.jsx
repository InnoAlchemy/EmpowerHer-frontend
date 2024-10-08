import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProgramsInitiatives from './pages/Programs&Initiatives';
import GetInvolved from './pages/GetInvolved';
import DiscoverHer from './pages/DiscoverHer';
import InformationContacts from './pages/InformationContact';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/programs-initiatives' element={<ProgramsInitiatives />} />
      <Route path='/get-involved' element={<GetInvolved />} />
      <Route path='/discover-her' element={<DiscoverHer />} />
      <Route path='/contact-us' element={<InformationContacts />} />
    </Routes>
  );
};

export default App;
