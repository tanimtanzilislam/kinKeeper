"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>

      <div className="text-left mb-5 mt-5">
        <h2 className="font-bold">Your Friends</h2>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            className="card bg-base-100 w-full gap-5 cursor-pointer"
            href={`/friends/${friend.id}`}
          >
            <figure>
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-20 h-20 rounded-full object-cover mt-10"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title items-center">
                {friend.name}
              </h2>

              <p className="text-gray-500">
                {friend.days_since_contact} days ago
              </p>

              <div>
                {friend.status === "overdue" ? (
                  <button className="btn btn-error rounded-full min-h-0 h-auto px-3 py-1">
                    Overdue
                  </button>
                ) : friend.status === "almost due" ? (
                  <button className="btn btn-warning rounded-full min-h-0 h-auto px-3 py-1">
                    Almost Due
                  </button>
                ) : friend.status === "on track" ? (
                  <button className="btn btn-neutral rounded-full min-h-0 h-auto px-3 py-1">
                    On Track
                  </button>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};