import React from "react";
import { FaCoffee ,FaPlus } from 'react-icons/fa';
import {AiFillMail} from 'react-icons/ai'
import {ImPriceTags} from 'react-icons/im'

export default function Sidebar() {
  return (
    <div className="bg-gray-300 text-white w-6/6 p-10">
      <div className="space-y-5">
        <button className="flex items-center w-full bg-gray-100 hover:bg-sky-700 text-black py-2 px-4 rounded">
        <FaPlus className="mr-2" /> New Item 
        </button>
        <button className="flex items-center w-full bg-gray-100 hover:bg-sky-700 text-black py-2 px-4 rounded">
          <FaCoffee className="mr-2" /> Coffee?
        </button>
        <button className="flex items-center w-full bg-gray-100 hover:bg-sky-700 text-black py-2 px-4 rounded">
          
          <AiFillMail className="mr-2" /> Feedback
        </button>
        <button className="flex items-center w-full bg-gray-100 hover:bg-sky-700 text-black py-2 px-4 rounded">
        <ImPriceTags className="mr-2" />Post Grade Price
        </button>
      </div>
    </div>
  );
}
