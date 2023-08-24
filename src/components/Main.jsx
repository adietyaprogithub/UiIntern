import React, { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import Screen1 from "./pages/Screen1/Screen1";
import Screen2 from "./pages/Screen2/Screen2";

import Screen3 from "./pages/Scree3/Screen3";

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
    <div className="bg-gray-200 h-screen w-screen flex">
      <Sidebar />
      <div className="flex flex-col flex-grow w-full">
        <div className="bg-grey-200 p-4 shadow-md rounded-md mx-4 mt-4 h-[500px]">
          {screens[activeScreen]}
        </div>
        <div className="flex justify-between mt-4 mx-4">
          <button
            className="px-4 py-2bg-grey-300 text-black rounded hover:bg-blue-600"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="px-4 py-2bg-grey-300 text-black rounded hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
