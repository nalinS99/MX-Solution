import React, { memo } from "react";

const Button= memo(({ name }) => {
  return (
  
      <button className="bg-secondary text-white px-[20px] py-[12px] rounded-[4px] text-[14px] leading-[14px] font-bold">
        {name}
      </button>
    
  );
});

export default Button;
