import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const NotFoundPage = () => {

    useEffect(() => {
        document.title = "Page Not Found";
      }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A40] to-[#502B8C] text-white p-6 text-center">

      <h1 className="text-6xl font-bold mb-4">ERROR 404</h1>
      <p className="text-2xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
        >
        Go Back Home
        </Link>
    </div>
  );
};

export default NotFoundPage;
