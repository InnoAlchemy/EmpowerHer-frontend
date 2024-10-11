import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProgramsInitiatives from './pages/Programs&Initiatives';
import GetInvolved from './pages/GetInvolved';
import DiscoverHer from './pages/DiscoverHer';
import InformationContacts from './pages/InformationContact';
import SignIn from './pages/Auth-Pages/signin';
import SignUp from './pages/Auth-Pages/signup';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/programs-initiatives' element={<ProgramsInitiatives />} />
      <Route path='/get-involved' element={<GetInvolved />} />
      <Route path='/discover-her' element={<DiscoverHer />} />
      <Route path='/contact-us' element={<InformationContacts />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
};

export default App;
