import React from "react";
import { IoMdSettings } from "react-icons/io";

const page = () => {
  return (
    <div className="w-full h-full">
      <p className="text-primary flex gap-2 items-center font-bold text-xl border-b border-accent px-4 py-2">
        <IoMdSettings className="text-primary" />
        <span>Settings </span>
      </p>
    </div>
  );
};

export default page;
