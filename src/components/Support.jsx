import React, { useState, useRef, memo } from 'react';

const Support = ({ title, button }) => {
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cPasswordRef = useRef(null);

  const handleSupport = () => {
    const email = emailRef.current.value;
    const pass = passwordRef.current.value;
    const cPass = cPasswordRef.current.value;

    if (!email || !pass || !cPass) {
      setError('All fields are required!');
      setSubmitted(false);
      return;
    }

    if (pass !== cPass) {
      setError('Passwords do not match!');
      setSubmitted(false);
      return;
    }

    setError('Submitted successfully!');
    setSubmitted(true);
  };

  return (
    <div className="bg-black p-6 rounded-lg">
      <h2 className="text-3xl text-white font-bold mb-4">{title}</h2>
      {!submitted && (
        <>
          <input
            type="text"
            ref={emailRef}
            placeholder="Email"
            className="w-full pl-5 pr-5 pt-2 pb-2 outline-none mt-3 mb-2 rounded-md"
            required
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            className="w-full pl-5 pr-5 pt-2 pb-2 outline-none mt-3 mb-2 rounded-md"
            required
          />
          <input
            type="password"
            ref={cPasswordRef}
            placeholder="Confirm Password"
            className="w-full pl-5 pr-5 pt-2 pb-2 outline-none mt-3 mb-2 rounded-md"
            required
          />
        </>
      )}
      <p
        id="error"
        className={`mb-4 ${error === 'Submitted successfully!' ? 'text-green-500 text-xl' : 'text-red-500'}`}
      >
        {error}
      </p>
      <textarea
        placeholder="Enter Message"
        className="w-full pt-2 pb-2 pl-3 pr-3 rounded-md mb-4"
        style={{ display: error === 'Submitted successfully!' ? 'block' : 'none' }}
      />
      <button
        onClick={handleSupport}
        className="text-xl text-white bg-orange-600 pl-5 pr-5 pt-2 pb-2 rounded-md hover:bg-orange-700"
      >
        {button}
      </button>
    </div>
  );
};

export default memo(Support);
