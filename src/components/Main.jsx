import React, { useState } from "react";
import Screen1 from "./pages/Screen1/Screen1";
import Screen2 from "./pages/Screen2/Screen2";
import Screen3 from "./pages/Scree3/Screen3";
import Sidebar from "./sidebar/sidebar";

export default function Main() {
  const screens = [<Screen1 />, <Screen2 />, <Screen3 />];
  const [activeScreen, setActiveScreen] = useState(0);

  const handlePrev = () => {
    setActiveScreen((prevScreen) =>
      prevScreen === 0 ? screens.length - 1 : prevScreen - 1
    );
  };

  const handleNext = () => {
    setActiveScreen((prevScreen) =>
      prevScreen === screens.length - 1 ? 0 : prevScreen + 1
    );
  };

  return (
    <div>
      <div className="h-screen w-screen flex">
        <div className=" bg-gray-300">
        <div class="text-5xl font-bold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-200">
              Review 
            </span>
          </div>
          <Sidebar position="fixed" left="0" />
          
        </div>

        <div className="flex-grow bg-gray-300 relative">
          {screens[activeScreen]}
        </div>

        <div className="flex flex-col justify-end items-end p-4 bg-gray-300">
          <button
            className="px-4 py-2 bg-gray-400 text-black rounded hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
