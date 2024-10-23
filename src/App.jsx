import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Ensure Navigate is imported
import Home from './pages/Home';
import ProgramsInitiatives from './pages/Programs-&-Initiatives/Programs&Initiatives';
import GetInvolved from './pages/GetInvolved';
import DiscoverHer from './pages/DiscoverHer';
import InformationContacts from './pages/InformationContact';
import SignIn from './pages/Auth-Pages/signin';
import SignUp from './pages/Auth-Pages/signup';
import Verification from './pages/Auth-Pages/verification';
import PasswordResetRequest from './pages/Auth-Pages/reset-password-request';
import PasswordResetPassword from './pages/Auth-Pages/reset-password-password';
import Approval from './pages/Auth-Pages/approval';
import CheckEmail from './pages/Auth-Pages/check-email';
import RegistrationPage from './pages/Auth-Pages/registration-splash';
import NotFound from './pages/NotFound'; // Import your NotFound component
import EventDetails from './pages/Programs-&-Initiatives/event-details';

const App = () => {
  return (
    
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/programs-initiatives' element={<ProgramsInitiatives />} />
      <Route path='/programs-initiatives/event-details' element={<EventDetails />} />
      <Route path='/get-involved' element={<GetInvolved />} />
      <Route path='/discover-her' element={<DiscoverHer />} />
      <Route path='/contact-us' element={<InformationContacts />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/verification' element={<Verification />} />
      <Route path='/password-reset-request' element={<PasswordResetRequest />} />
      <Route path='/password-reset' element={<PasswordResetPassword />} />
      <Route path='/approval' element={<Approval />} />
      <Route path='/check-email' element={<CheckEmail />} />
      <Route path='/registration-splash' element={<RegistrationPage />} />
      <Route path='/not-found' element={<NotFound />} /> 
      <Route path='*' element={<Navigate to='/not-found' replace />} /> 
    </Routes>
  );
};

export default App;
