import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from '../../components/home/navbar';
import ProfileSidebar from '../../components/profile-sidebar';

const Profile = () => {
  const location = useLocation();
  const { username, membership } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      {/* Content layout with responsive sidebar */}
      <div className="flex flex-col md:flex-row flex-grow pt-16">
        <ProfileSidebar username={username} membership={membership} />

        {/* Render nested routes here */}
        <div className="flex-grow p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
