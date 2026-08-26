"use client";

import { useEffect, useState } from "react";

export const Hero = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);


  const onTrackFriends=friends.filter(
    (friends)=>friends.status==='on track'
  )

  return (
    <div className="flex gap-5 mt-5">

      <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-2xl mt-5">
            {friends.length}
          </h2>
          <p className="text-gray-400"> Total Friends</p>

          <div className="justify-end card-actions"></div>
        </div>
      </div>

      <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-2xl mt-5">
            {onTrackFriends.length}
          </h2>
          <p className="text-gray-400"> On Track</p>

          <div className="justify-end card-actions"></div>
        </div>
      </div>

       <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-2xl mt-5">
            {friends.length}
          </h2>
          <p className="text-gray-400">Need Attention</p>

          <div className="justify-end card-actions"></div>
        </div>
      </div>
       <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-2xl mt-5">
            {friends.length}
          </h2>
          <p className="text-gray-400"> Interactions This Month</p>

          <div className="justify-end card-actions"></div>
        </div>
      </div>

    </div>
  );
};