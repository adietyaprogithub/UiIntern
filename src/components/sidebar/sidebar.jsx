import React from "react";
import { FaCoffee, FaPlus } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";

export default function Sidebar() {
  return (
    <div className="text-gray w-6/6 p-10">
      <div className="space-y-5">
        <p className="flex items-center w-full text-black py-2 px-4 rounded transition hover:bg-gray-100 hover:text-black">
          <FaPlus className="mr-2" /> New Item
        </p>
        <p className="flex items-center w-full text-black py-2 px-4 rounded transition hover:bg-gray-100 hover:text-black">
          <FaCoffee className="mr-2" /> Coffee?
        </p>
        <p className="flex items-center w-full text-black py-2 px-4 rounded transition hover:bg-gray-100 hover:text-black">
          <AiFillMail className="mr-2" /> Feedback
        </p>
        <p className="flex items-center w-full text-black py-2 px-4 rounded transition hover:bg-gray-100 hover:text-black">
          <ImPriceTags className="mr-2" />
          Post Grade Price
        </p>
      </div>
    </div>
  );
}
