import React from 'react';

const Card = ({ title, content, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="p-4">
        <p className="text-gray-700 w-[200px]">{content}</p>
      </div>
      {footer && (
        <div className="p-4 border-t border-gray-200 bg-gray-100">
          <p className="text-gray-600">{footer}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
