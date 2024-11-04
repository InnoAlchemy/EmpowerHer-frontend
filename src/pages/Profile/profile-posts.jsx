import React, { useState, useEffect } from "react";
import axios from "axios";
import PostImage from "../../assets/posts-image.png";
import { FaRegHeart, FaRegComment, FaUpload, FaPlus } from "react-icons/fa";
import AddPost from "../../components/Add-posts";
import { useUser } from "../../Helper-Functions/UserContext";

const ProfilePosts = ({ showAddButton = true, showTitle = true, imageHeight = "20rem" }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const { user } = useUser();

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/posts/by-user-id/${user.id}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts initially
  useEffect(() => {
    fetchPosts();
  }, [user.id]);

  // Called after a post is created in AddPost to refresh the list
  const handlePostCreated = () => {
    fetchPosts();
  };

  return (
    <div className="flex flex-col space-y-6 p-4 sm:p-6 max-w-[1400px] mx-auto w-full">
      {showTitle && (
        <div className="flex items-center justify-between mt-6">
          <h1 className="font-cabin font-semibold text-[#7A89C2] text-2xl sm:text-3xl lg:text-4xl">
            Posts
          </h1>
          {showAddButton && (
            <button
              onClick={openForm}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#7A89C2] text-[#7A89C2]"
            >
              <FaPlus className="text-lg sm:text-xl" />
            </button>
          )}
        </div>
      )}

      {/* Responsive Posts Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#7A89C240] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={post.media_url || PostImage}
              alt="Post"
              className="w-full object-cover"
              style={{ height: imageHeight }}
            />
            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg mb-2 text-[#7A89C2]">{post.title || "Untitled Post"}</h3>
              <p className="text-sm text-[#00000099]">
                {post.content || "No content available for this post."}
              </p>
              
              {/* Interaction Icons */}
              <div className="flex items-center space-x-4 mt-4 text-[#7A89C2] text-sm">
                <div className="flex items-center space-x-1">
                  <FaRegHeart />
                  <span>12.1k</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaRegComment />
                  <span>200</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaUpload />
                  <span>1k</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && <AddPost onClose={closeForm} onPostCreated={handlePostCreated} />}
    </div>
  );
};

export default ProfilePosts;
