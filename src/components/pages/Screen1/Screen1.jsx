import React from "react";
import { GrMail } from "react-icons/gr";
import { MdSettingsVoice } from "react-icons/md";
import { AiOutlineInteraction } from "react-icons/ai";

export default function Screen1() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-7/12 p-8 rounded-lg shadow-md space-y-4">
        <div className="flex items-center justify-between bg-gray-200 p-2 rounded-t-lg">
          <h3 className="text-xl flex items-center">
            <GrMail className="mr-3" />
            <p>
              <span className="font-bold">Coffe ?</span> - mail it from Marisa
              Lu
            </p>
            <MdSettingsVoice className="ml-40" />
          </h3>
        </div>
        <hr />
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Marisa Lu</h2>
          <h1 className="text-2xl font-bold">Coffee</h1>
          <p className="text-gray-600">Hey there,</p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
          </p>
          <label>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
          </label>
          <label>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
          </label>
          <h1 className="text-2xl font-bold">Marie</h1>
          <hr />
          <div className="space-x-2">
            <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600">
              Reply
            </button>
            <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600">
              Forward
            </button>
            <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-red-600">
              Delete
            </button>
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <AiOutlineInteraction className="mr-2" /> More actions
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
