// CustomButton.jsx
import React from 'react';

function CustomButton({ content, fun, widthing }) {
  return (
    <button className={`w-${widthing} px-3 py-2 bg-white border-red-700 border rounded-full`} onClick={fun}>
      {content}
    </button>
  );
}

export default CustomButton;
