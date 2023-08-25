import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  LabelList,
} from "recharts";
import { MdSettingsVoice } from "react-icons/md";
import { AiOutlineInteraction } from "react-icons/ai";

const data = [
  { name: "1.5 PM", value: 100, info: "The meeting is free" },
  { name: "2.0 PM", value: 100, info: "This time slot not available" },
  { name: "3.0 PM", value: 100, info: "This meeting is free" },
];

const Screen2 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white  w-7/12 p-8 rounded-lg shadow-md space-y-4">
        <div className="flex items-center justify-between bg-gray-200 p-2 rounded-t-lg">
          <h3 className="text-xl flex items-center">
            <p>- See My Availability: Today</p>
            <MdSettingsVoice className="ml-60" />
          </h3>
        </div>
        <hr />
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">Available Until 1 PM</h1>
          <p className="text-gray-600">Would You Like to Create an Event Bar</p>
          <label className="text-gray-600">Coffee with Alan</label>
          <div className="w-full h-48 bg-gray-200 rounded">
            <HorizontalBarChartComponent data={data} />
          </div>
          <hr />
          <div className="space-x-2">
            <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600">
              Create Event
            </button>
            <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-blue-600 mt-2">
              Full Calendar
            </button>
            <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-red-600 mt-2">
              Dismiss
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
};

const HorizontalBarChartComponent = ({ data }) => {
  return (
    <BarChart width={400} height={200} data={data} layout="vertical">
      <XAxis type="number" hide={true} />
      <YAxis type="category" dataKey="name" />
      <Tooltip />
      <Bar dataKey="value" fill="#B0C4DE">
        <LabelList dataKey="info" position="insideRight" angle={360} />
      </Bar>
      <ReferenceLine x={0} stroke="#B0C4DE" strokeDasharray="3 3" />
    </BarChart>
  );
};

export default Screen2;
