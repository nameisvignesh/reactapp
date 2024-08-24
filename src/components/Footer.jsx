import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 w-[95rem] text-white py-4">
      <div className="container mx-auto flex flex-col items-center justify-between px-4">
        <p className="text-sm text-wite">&copy; {new Date().getFullYear()} OldMan. All rights reserved.</p>
        <div className="mt-2">
          <a href="#privacy" className="text-owhite hover:text-orange-500 hover:bg-white mx-2">Privacy Policy</a>
          <a href="#terms" className="text-owhite hover:text-orange-500 hover:bg-white mx-2">Terms of Service</a>
          <a href="#contact" className="text-owhite hover:text-orange-500 hover:bg-white mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
