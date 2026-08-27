"use client";

import { useEffect, useState } from "react";

export default function Timeline() {
  const [events, setEvents] = useState([]);


  useEffect(() => {
    const savedEvents =
      JSON.parse(localStorage.getItem("timelineEvents")) || [];

    setEvents(savedEvents);
  }, []);


  const getIcon=(type)=>{

    if(type==="call"){
      return <i class="fa-solid fa-phone"></i>
    }
    if(type==="text"){
      return <i class="fa-regular fa-comment"></i>
    }
    if(type==="video"){
      return <i class="fa-solid fa-video"></i>
    }

  }

  const formatDate=(date)=>{
    return new Date(date).toLocaleDateString("en-US",{
      month:"long",
      day:"numeric",
      year:"numeric"
    })
  }

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

               

                <h2 className="">

                <span className="text-xl">
                 {getIcon(event.type)}
                </span>
                <span className="font-bold"> {event.type}</span>  with 
                  {event.friendName}
                
                </h2>

               
<span> {formatDate(event.next_due_date)}</span>
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}