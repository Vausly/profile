// src/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Layout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <motion.nav className="fixed w-full bg-black/20 backdrop-blur-sm z-50 py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <span className="font-bold">VAUSLY MEDIA</span>
          </div>
        </div>
      </motion.nav>

      {/* Dynamic Page Content */}
      <div className="pt-20">
        <Outlet /> {/* Render the nested routes */}
      </div>

      {/* Footer */}
      <footer className="py-8 bg-black/40 text-center">
        <p className="text-sm">
          Copyright © 2017-{currentYear} | Page developed by{' '}
          <a href="https://www.vausly.com" className="text-purple-400 hover:text-purple-300 transition">
            Vausly Media
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
