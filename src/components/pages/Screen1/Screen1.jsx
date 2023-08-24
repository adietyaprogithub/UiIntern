import React from "react";

export default function Screen1() {
  return (
    <div className="bg-white w-96 h-full ml-60 mr-56  p-5 rounded-lg shadow-md">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Marisa Lu</h2>
        <h1 className="text-2xl font-bold">Coffee</h1>

        <p className="text-gray-600">Hey there,</p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          laboriosam inventore sit dolore sequi doloremque doloribus, illum
          aspernatur eos velit culpa id ab assumenda ut tempora sapiente fuga,
          ducimus repudiandae.
        </p>
        <h1 className="text-2xl font-bold">Marie</h1>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-grey-300 text-black rounded hover:bg-blue-600">
            Reply
          </button>
          <button className="px-3 py-1 bg-grey-300 text-black rounded hover:bg-blue-600">
            Forward
          </button>
          <button className="px-3 py-1 bg-grey-300 text-black rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
