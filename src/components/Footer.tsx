import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black/40 text-center">
      <p className="text-sm">
        Copyright © 2017-{currentYear} | Page developed by{' '}
        <a href="https://www.vausly.com" className="text-purple-400 hover:text-purple-300 transition">
          Vausly Media
        </a>
      </p>
    </footer>
  );
};

export default Footer;
