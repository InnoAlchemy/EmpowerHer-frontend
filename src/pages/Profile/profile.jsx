import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from '../../components/home/navbar';
import ProfileSidebar from '../../components/profile-sidebar';
import ProfileViewSidebar from '../../components/profile-view-sidebar';
import { useUser } from "../../Helper-Functions/UserContext";
const Profile = () => {
  const { user } = useUser();
  const location = useLocation();
  const { username, membership, profile_picture } = user;

  // Check if the current route is "/profile/profile-view"
  const isProfileViewRoute = location.pathname === "/profile/profile-view";

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      {/* Content layout with responsive sidebar */}
      <div className="flex flex-col md:flex-row flex-grow pt-16">
        {/* Conditionally render ProfileViewSidebar if on the profile-view route */}
        {isProfileViewRoute ? (
          <ProfileViewSidebar username={username} membership={membership} profile_picture={profile_picture} />
        ) : (
          <ProfileSidebar username={username} membership={membership} profile_picture={profile_picture} />
        )}

        {/* Render nested routes here */}
        <div className="flex-grow p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
