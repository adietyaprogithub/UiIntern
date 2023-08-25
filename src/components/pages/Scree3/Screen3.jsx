import React from "react";
import GoogleMap from "./GoogleMap";
import { FaDirections } from "react-icons/fa";
import { MdSettingsVoice } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineInteraction } from "react-icons/ai";

export default function Screen3() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white  w-7/12 p-8 p-8 rounded-lg shadow-md space-y-4">
        <div className="bg-gray-200 p-2 rounded-t-lg flex items-center justify-between">
          <h3 className="text-xl flex items-center">
            <ImLocation2 />
            <p>- Philz Cofee : Today</p>
            <MdSettingsVoice className="ml-60" />
          </h3>
        </div>
        <hr />
        <div>
          <GoogleMap />
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Philz Coffee</h1>
          <h2 className="text-xl">Custom-Branded in a Casual Setting</h2>
          <p>Kregaow Park Pune</p>
          <label htmlFor="">Pune Dist Pune</label>
        </div>
        <hr />
        <div className="space-x-2 flex items-center">
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600 flex items-center">
            <FaLocationArrow className="mr-2" /> Get Directions
          </button>
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600">
            Set Details
          </button>
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600">
            Find More Cafes Nearby
          </button>
        </div>
        <div className="flex items-center">
          <label className="flex items-center">
            <AiOutlineInteraction className="mr-2" /> More actions
          </label>
        </div>
        
      </div>
      
    </div>
  );
}
