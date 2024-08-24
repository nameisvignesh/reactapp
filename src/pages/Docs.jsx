import React from 'react';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="prose">{children}</div>
    </section>
  );
};

const Docs = () => {
  return (
    <div className="flex flex-col items-center justify-around w-full md:w-[80rem] mx-auto">
      <main className="container mx-auto p-4">
        <hr className="border-2 border-orange-100 border-solid w-full mt-5 mb-5" />
        <h2 className="text-3xl text-center text-orange-500 font-semibold mb-4">Documentation</h2>
        <Section id="introduction" title="Introduction">
          <p className='ml-0 md:ml-20'>
            Welcome to the documentation for the <strong>Oldman</strong> web page. This document provides an overview of the website's features, functionality, and instructions for use. <strong>Oldman</strong> is a fictional website designed to showcase a variety of web technologies and design principles.
          </p>
        </Section>
        <Section id="purpose" title="Purpose">
          <p className='ml-0 md:ml-20'>
            The <strong>Oldman</strong> webpage is designed to serve as a portfolio and demonstration site, highlighting key web development skills, including:
          </p>
          <ul className='ml-0 md:ml-20'>
            <li>Responsive design</li>
            <li>Modern web technologies (e.g., Tailwind CSS)</li>
            <li>Integration with external resources (e.g., Google Fonts)</li>
            <li>Best practices in web accessibility and user experience</li>
          </ul>
        </Section>
        <Section id="features" title="Features">
          <h3 className="text-xl font-semibold mb-2 ml-0 md:ml-20">Design and Layout</h3>
          <ul className="ml-0 md:ml-20">
            <li><strong>Header</strong>: Includes the site's navigation menu and logo.</li>
            <li><strong>Main Content Area</strong>: Features a variety of sections demonstrating different design elements and content types.</li>
            <li><strong>Footer</strong>: Contains contact information and additional links.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 ml-0 md:ml-20">Typography</h3>
          <ul className="ml-0 md:ml-20">
            <li><strong>Font Family</strong>: The site uses the Poppins font, imported from Google Fonts.</li>
            <li><strong>Font Weights</strong>: Several weights of Poppins are available, including 100, 400, and 700.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 ml-0 md:ml-20">Responsive Design</h3>
          <p className="ml-0 md:ml-20">
            The site is optimized for various devices, including desktops, tablets, and smartphones. It adjusts its layout based on the screen size to ensure a consistent user experience.
          </p>
          <h3 className="text-xl font-semibold mb-2 ml-0 md:ml-20">Tailwind CSS Integration</h3>
          <ul className='ml-0 md:ml-20'>
            <li><strong>Base Styles</strong>: Applied using Tailwind's <code>@tailwind base</code> directive.</li>
            <li><strong>Components</strong>: Custom components are styled using Tailwind’s utility classes.</li>
            <li><strong>Utilities</strong>: Utilizes Tailwind’s utility classes for layout and styling.</li>
          </ul>
        </Section>
        <Section id="setup" title="Installation and Setup">
          <p className="ml-0 md:ml-20">
            To set up the <strong>Oldman</strong> web page locally, follow these steps:
          </p>
          <ol className='ml-0 md:ml-20'>
            <li><strong>Clone the Repository</strong></li>
            <pre><code>git clone https://github.com/yourusername/oldman-webpage.git cd oldman-webpage</code></pre>
            <li><strong>Install Dependencies</strong></li>
            <pre><code>npm install</code></pre>
            <li><strong>Run the Development Server</strong></li>
            <pre><code>npm run dev</code></pre>
            <li><strong>Open in Browser</strong></li>
            <p className="ml-0 md:ml-20">
              Navigate to <code>http://localhost:3000</code> in your web browser to see the <strong>Oldman</strong> webpage.
            </p>
          </ol>
        </Section>
        <Section id="usage" title="Usage">
          <h3 className="text-xl font-semibold mb-2 ml-0 md:ml-20">Navigation</h3>
          <ul className="ml-0 md:ml-20">
            <li><strong>Home</strong>: Returns to the main page.</li>
            <li><strong>About</strong>: Provides information about the website.</li>
            <li><strong>Contact</strong>: Contains a form for reaching out or requesting more information.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 ml-0 md:ml-20">Customization</h3>
          <p className='ml-0 md:ml-20 font-semibold'>
            To customize the site, you can modify the following files:
          </p>
          <ul className="ml-0 md:ml-20">
            <li><strong><code>src/index.css</code></strong>: Main stylesheet where Tailwind and custom styles are defined.</li>
            <li><strong><code>src/index.html</code></strong>: Main HTML structure of the site.</li>
            <li><strong><code>src/components/</code></strong>: Contains reusable components styled with Tailwind CSS.</li>
          </ul>
        </Section>
        <Section id="contribution" title="Contribution">
          <p className="ml-0 md:ml-20">
            If you would like to contribute to the <strong>Oldman</strong> project, please follow these guidelines:
          </p>
          <ol className='ml-0 md:ml-20'>
            <li>Fork the repository.</li>
            <li>Create a new branch for your feature or fix.</li>
            <li>Submit a pull request with a clear description of your changes.</li>
          </ol>
        </Section>
        <Section id="license" title="License">
          <p className="ml-0 md:ml-20">
            This project is licensed under the <a href="LICENSE" className="text-blue-500">MIT License</a>. See the LICENSE file for details.
          </p>
        </Section>
        <Section id="contact" title="Contact">
          <p className="ml-0 md:ml-20">
            For questions or support, please reach out via email at <a href="mailto:support@oldmanwebpage.com" className="text-blue-500">support@oldmanwebpage.com</a> or visit our <a href="contact.html" className="text-blue-500">contact page</a>.
          </p>
        </Section>
      </main>
    </div>
  );
};

export default Docs;
