import React from "react";

export const OptionCard = ({ onClick, title, description }) =>  {
  return (
    <div onClick={onClick} className=" cursor-pointer relative top-0">
      <div className=" h-5  left-0 top-0 relative bg-[#0041e8] rounded-xl"></div>
      <div className="  h-fit left-0 top-[-15px] relative bg-[#f5f5f5] text-[#0041e8] rounded-xl px-3 py-2">
        <div className=" p-10 my-3 w-80 text-center">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}

