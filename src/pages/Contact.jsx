import React from 'react'
import Support from '../components/Support';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
    <hr className="border-2 border-orange-100 border-solid w-[80%] mt-20" />
    <div className="flex flex-col items-center justify-around pl-10 pr-10 pt-16 pb-16 bg-orange-300 rounded-md mt-20">
      <Support 
        title={'Support'}
        button={'Submit'}
      />
      </div>
      <hr className="border-2 border-orange-100 border-solid w-[80%] mt-10 mb-5" />
      <Footer />
    </>
  )
}

export default Contact;