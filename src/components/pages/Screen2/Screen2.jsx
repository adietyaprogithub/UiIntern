import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from "recharts";

export default function Screen2() {
  const data = [
    { name: "1.5 PM", value: 100 },
    { name: "2.0 PM", value: 100 },
    { name: "3.0 PM", value: 100 },
  ];

  return (
    <div className="w-3/5 mx-auto bg-white p-2 ml-60 rounded-lg shadow-md">
      <div className="space-y-7">
        <h1 className="text-2xl font-bold">Available Until 1 PM</h1>
        <p className="text-gray-600">Would You Like to Create an Event Bar</p>
        <div className="w-full h-48 bg-gray-200 rounded" >
          <HorizontalBarChartComponent data={data} />
        </div>
        <br />
        <div className="space-y-2 mt-0.5 mb-5">
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600 mt-10 mb-5 ml-4">
            Create Event
          </button>
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600 mt-10 mb-5 ml-4">
            Edit Event
          </button>
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600 mt-2 mb-2 ml-4">
            Full Calendar
          </button>
          <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-red-600 mt-2 mb-2 ml-4">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

const HorizontalBarChartComponent = ({ data }) => {
  return (
    <BarChart width={400} height={200} data={data} layout="vertical">
      <XAxis type="number" hide={true} />
      <YAxis type="category" dataKey="name" />
      <Tooltip />
      <Bar dataKey="value" fill="#B0C4DE" />
      <ReferenceLine x={0} stroke="#B0C4DE" strokeDasharray="3 3" />
    </BarChart>
  );
};
