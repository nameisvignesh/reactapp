import React from 'react';

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mt-5 p-4">
        <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r to-orange-500 from-red-600 bg-clip-text cursor-pointer mb-4 md:mb-0">
          OldMan_
        </h1>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 ml-0 md:ml-60">
          <li><a className='hover:border-b-2 border-solid border-orange-500' href="/Home">Home</a></li>
          <li><a className='hover:border-b-2 border-solid border-orange-500' href="/Docs">Docs</a></li>
          <li><a className='hover:border-b-2 border-solid border-orange-500' href="/Product">Products</a></li>
          <li><a className='hover:border-b-2 border-solid border-orange-500' href="/Contact">Contact</a></li>
        </ul>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-4 md:mt-0 text-lg mx-auto md:ml-56 md:mr-56">
        <button className="text-white text-xl pl-5 pr-5 pt-1 pb-1 bg-orange-500 hover:bg-orange-600 rounded-md">Sign Up</button>
        <button className="text-white text-xl pl-5 pr-5 pt-1 pb-1 bg-orange-500 hover:bg-orange-600 rounded-md">Log In</button>
      </div>
      </div>
      <hr className="border-2 border-orange-100 border-solid w-[80%] mt-5 mb-5 mx-auto" />
      <div className='flex flex-col items-center justify-center w-full md:w-[88rem] mx-auto px-4'>
        <section id="about" className="mb-8 w-full">
          <h2 className="text-3xl text-orange-500 font-semibold mb-4 text-center md:text-left">Who Are We?</h2>
          <div className="prose">
            <h3 className="text-xl font-semibold mt-4">Overview</h3>
            <p>
              <strong>Oldman</strong> is a sophisticated web page designed to serve as both a portfolio and a demonstration of modern web development practices. The site showcases a variety of features and design principles, focusing on responsiveness, integration with external resources, and the effective use of contemporary web technologies.
            </p>

            <h3 className="text-xl font-semibold mt-4">Mission</h3>
            <p>
              The mission of <strong>Oldman</strong> is to provide a clear and engaging example of how to build a high-quality, responsive, and accessible web page. It aims to demonstrate:
            </p>
            <ul>
              <li><strong>Best Practices in Web Design</strong>: Utilizing Tailwind CSS for styling, integrating Google Fonts, and applying responsive design techniques.</li>
              <li><strong>Modern Web Technologies</strong>: Showcasing how to use and integrate tools like Tailwind CSS, React, and other front-end technologies.</li>
              <li><strong>User Experience and Accessibility</strong>: Ensuring that the website is accessible to all users and provides a seamless experience across various devices.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Features</h3>
            <p>
              <strong>Oldman</strong> incorporates several key features to enhance user experience and functionality:
            </p>
            <ul>
              <li><strong>Responsive Design</strong>: The site is designed to adapt to different screen sizes, ensuring a consistent experience on desktops, tablets, and smartphones.</li>
              <li><strong>Custom Styling</strong>: Using Tailwind CSS for utility-first styling, which allows for flexible and maintainable design adjustments.</li>
              <li><strong>Typography</strong>: Integration of the Poppins font from Google Fonts to provide a modern and clean look.</li>
              <li><strong>Navigation and Layout</strong>: A clear and intuitive navigation structure, along with well-organized content sections, to help users easily find information.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Development</h3>
            <p>
              <strong>Oldman</strong> is built using the latest web technologies:
            </p>
            <ul>
              <li><strong>React</strong>: The core framework for building the user interface, providing a component-based architecture and efficient rendering.</li>
              <li><strong>Tailwind CSS</strong>: A utility-first CSS framework used for styling, enabling rapid design and customization.</li>
              <li><strong>Google Fonts</strong>: Used for typography to enhance the visual appeal of the site.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Contributors</h3>
            <p>
              The <strong>Oldman</strong> project is maintained by a team of dedicated developers who are passionate about web design and development. Contributions from the community are welcome, and we encourage anyone interested to get involved.
            </p>

            <h3 className="text-xl font-semibold mt-4">Future Plans</h3>
            <p>
              Future updates for <strong>Oldman</strong> may include:
            </p>
            <ul>
              <li><strong>Enhanced Features</strong>: Adding more interactive elements and advanced functionalities.</li>
              <li><strong>Performance Improvements</strong>: Optimizing the site for better speed and efficiency.</li>
              <li><strong>Content Updates</strong>: Regularly refreshing content to keep the site relevant and engaging.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
