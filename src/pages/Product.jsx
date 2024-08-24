import React from 'react';
import Card from '../components/Card';

const Product = () => {
  return (
    <>
      <hr className="border-2 border-orange-100 border-solid w-[80%] mt-5 mb-5 mx-auto" />
      <h2 className="text-3xl text-right text-orange-500 font-semibold mb-4">Who Are We?</h2>
      <h2 className="text-2xl text-left font-bold mb-4 ml-[10%] md:ml-[15%] lg:ml-[20%]">Our Cloud Products:</h2>
      <div className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-20 px-4">
        <button className="w-full md:w-auto">
          <Card 
            title={'Orange F0'}
            content={'Its a free plan for beginner and individuals who can have used for their minimal projects cloud storage.'}
            footer={<p>&#36;0</p>}
          />
        </button>
        <button className="w-full md:w-auto">
          <Card 
            title={'Orange S1'}
            content={'Its a basic plan for beginner, individuals, freelancers who can make a simple and minimilistic cloud storage.'}
            footer={<p>&#36;20</p>}
          />
        </button>
        <button className="w-full md:w-auto">
          <Card 
            title={'Tangerine S2'}
            content={'Its a medium plan for entreprenuers, employees, business(small scale) have the large and efficient cloud storage.'}
            footer={<p>&#36;200</p>}
          />
        </button>
        <button className="w-full md:w-auto">
          <Card 
            title={'Mandarin A1'}
            content={'Its a Advance plan for business(large scale), government choose the longivity and large and extendible cloud storage.'}
            footer={<p>&#36;1000</p>}
          />
        </button>
      </div>
    </>
  )
}

export default Product;
