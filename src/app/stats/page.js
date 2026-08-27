"use client";

import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Cell } from "recharts";

export default function StatPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedEvents =
      JSON.parse(localStorage.getItem("timelineEvents")) || [];

    setEvents(savedEvents);
  }, []);

  const callCount = events.filter(
    (event) => event.type === "call"
  ).length;

  const textCount = events.filter(
    (event) => event.type === "text"
  ).length;

  const videoCount = events.filter(
    (event) => event.type === "video"
  ).length;

  const chartData = [
    {
      name: "Call",
      value: callCount,
    },
    {
      name: "Text",
      value: textCount,
    },
    {
      name: "Video",
      value: videoCount,
    },
  ];

  // Call, Text, Video এর আলাদা color
  const COLORS = ["#3B82F6", "#22C55E", "#A855F7"];

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-5xl mx-auto pt-16">

        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Friendship Analytics
        </h1>

        {/* White Card */}
        <div className="bg-white rounded-md shadow-sm p-5">

          {/* Card Title */}
          <p className="text-xs font-semibold text-gray-600 mb-5">
            By Interaction Type
          </p>

          {/* Pie Chart */}
          <div className="flex justify-center">
            <PieChart width={300} height={220}>
              
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                innerRadius={45}
                outerRadius={65}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8 mt-2">

            {/* Call */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">
                Call
              </span>
            </div>

            {/* Text */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">
                Text
              </span>
            </div>

            {/* Video */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm text-gray-600">
                Video
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}