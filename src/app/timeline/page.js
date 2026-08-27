"use client";

import { useEffect, useState } from "react";

export default function Timeline() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedEvents =
      JSON.parse(localStorage.getItem("timelineEvents")) || [];

    setEvents(savedEvents);
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-20">

      <h1 className="text-3xl font-bold mb-8">
        Timeline
      </h1>

      {events.length === 0 ? (
        <p className="text-gray-500">
          No timeline events yet.
        </p>
      ) : (
        <div className="space-y-4">

          {events.map((event) => (
            <div
              key={event.id}
              className="card bg-base-100 shadow-sm"
            >
              <div className="card-body">

                <h2 className="card-title">
                  {event.type}
                </h2>

                <p>
                  {event.friendName}
                </p>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}