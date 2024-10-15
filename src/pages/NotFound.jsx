import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <p className="text-2xl font-semibold text-gray-700">Page Not Found</p>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
