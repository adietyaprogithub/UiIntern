import React from "react";
import GoogleMap from "./GoogleMap";
import { ImLocation } from "react-icons/im";
import { FaDirections } from "react-icons/fa";

export default function Screen3() {
  return (
    <div className="max-w-screen-sm mx-auto bg-white md:ml-60 p-6 rounded-lg shadow-md">
      <div className="space-y-7">
        <div className="flex items-center">
          <ImLocation className="text-xl mr-2" />
          <h3 className="text-2xl font-bold">Philz Coffee Location</h3>
        </div>
        <div>
          <GoogleMap />
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Philz Coffee</h1>
          <h2 className="text-xl">Custom-Branded in a Casual Setting</h2>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600">
            Get Directions
          </button>
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600">
            Set Details
          </button>
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600">
            Find More Cafes Nearby
          </button>
        </div>
      </div>
    </div>
  );
}
