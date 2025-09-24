import React from "react";

const Footer = () => (
  <footer id="contact" className="bg-violet-700 text-white text-center py-3 mt-12">
    <div className="flex justify-center space-x-6 mb-2">
      {/* Replace src with your own icon URLs */}
      <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
        <img 
          src="/icons/instagram.svg" 
          alt="Instagram" 
          className="w-6 h-6 hover:opacity-80 cursor-pointer" 
        />
      </a>
      <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
        <img 
          src="./assets/linkedin-logo.jpg" 
          alt="LinkedIn" 
          className="w-6 h-6 hover:opacity-80 cursor-pointer" 
        />
      </a>
      <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
        <img 
          src="/icons/github.svg" 
          alt="GitHub" 
          className="w-6 h-6 hover:opacity-80 cursor-pointer" 
        />
      </a>
    </div>
    <p className="text-sm">© {new Date().getFullYear()} SWE IIT Ropar | All Rights Reserved</p>
  </footer>
);

export default Footer;
