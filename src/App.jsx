// src/App.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Ensure Navigate is imported
import Home from './pages/Home';
import ProgramsInitiatives from './pages/Programs-&-Initiatives/Programs&Initiatives';
import GetInvolved from './pages/GetInvolved';
import DiscoverHer from './pages/Discover-Her/DiscoverHer';
import InformationContacts from './pages/InformationContact';
import SignIn from './pages/Auth-Pages/signin';
import SignUp from './pages/Auth-Pages/signup';
import Verification from './pages/Auth-Pages/verification';
import PasswordResetRequest from './pages/Auth-Pages/reset-password-request';
import PasswordResetPassword from './pages/Auth-Pages/reset-password-password';
import Approval from './pages/Auth-Pages/approval';
import CheckEmail from './pages/Auth-Pages/check-email';
import RegistrationPage from './pages/Auth-Pages/registration-splash';
import NotFound from './pages/NotFound'; 
import EventDetails from './pages/Programs-&-Initiatives/event-details';
import ArticleDetail from './pages/Discover-Her/discover-her-article-full-page';
import Profile from './pages/Profile/profile';
import ProfileAccount from './pages/Profile/profile-account';
import ProfileTools from './pages/Profile/profile-tools';
import ProfilePosts from './pages/Profile/profile-posts';
import ProfileNotifications from './pages/Profile/profile-notifications';
import ProfileChats from './pages/Profile/profile-chats';
import ProfileView from './pages/Profile/profile-view';
import { UserProvider, useUser } from './Helper-Functions/UserContext';
import { SocketProvider } from './Helper-Functions//socket-context';

const App = () => {
  return (
    <UserProvider>
      <SocketWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/programs-initiatives' element={<ProgramsInitiatives />} />
          <Route path='/programs-initiatives/event-details' element={<EventDetails />} />
          <Route path='/get-involved' element={<GetInvolved />} />
          <Route path='/discover-her' element={<DiscoverHer />} />
          <Route path='/discover-her-article-card-page' element={<ArticleDetail />} />
          <Route path='/contact-us' element={<InformationContacts />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/verification' element={<Verification />} />
          <Route path='/password-reset-request' element={<PasswordResetRequest />} />
          <Route path='/password-reset' element={<PasswordResetPassword />} />
          <Route path='/approval' element={<Approval />} />
          <Route path='/check-email' element={<CheckEmail />} />
          <Route path='/registration-splash' element={<RegistrationPage />} />

          {/* Profile route with nested routes */}
          <Route path='/profile' element={<Profile />}>
            <Route path='profile-account' element={<ProfileAccount />} />
            <Route path='profile-tools' element={<ProfileTools />} />
            <Route path='profile-posts' element={<ProfilePosts />} />
            <Route path='profile-notifications' element={<ProfileNotifications />} />
            <Route path='profile-chats' element={<ProfileChats />} />
            <Route path='profile-view' element={<ProfileView />} />
          </Route>

          <Route path='/not-found' element={<NotFound />} /> 
          <Route path='*' element={<Navigate to='/not-found' replace />} /> 
        </Routes>
      </SocketWrapper>
    </UserProvider>
  );
};

// Create a wrapper component to consume User context and pass userId to SocketProvider
const SocketWrapper = ({ children }) => {
  const { user } = useUser(); // Assuming useUser provides the authenticated user object

  return (
    <SocketProvider userId={user ? user.id : null}>
      {children}
    </SocketProvider>
  );
};

export default App;
