"use client";

import { useEffect, useState } from "react";
import { useParams ,useRouter} from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FriendsDetails() {
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedFriend = data.find(
          (item) => String(item.id) === String(id)
        );

        setFriend(selectedFriend || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading friend:", error);
        setLoading(false);
      });
  }, [id]);

  const handleTimeline = (type) => {
   
    if (!friend) {
      return;
    }


    const existingEvents =
      JSON.parse(localStorage.getItem("timelineEvents")) || [];

    
    const newEvent = {
      id: Date.now(),
      type: type,
      friendName: friend.name,
      next_due_date: friend.next_due_date,
    };

    
    const updatedEvents = [newEvent, ...existingEvents];

 
    localStorage.setItem(
      "timelineEvents",
      JSON.stringify(updatedEvents)
    );

    // Toast notification
    toast.success(`${type} added to timeline!`);
    router.push('/timeline')
    console.log(updatedEvents);
  };


  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (!friend) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">
          Friend not found
        </h2>

        <p className="text-gray-500 mt-2">
          No friend found with ID: {id}
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        draggable
      />

      <div className="grid grid-cols-2 gap-10 mt-20">

        {/* ================= LEFT SIDE ================= */}

        <div className="ml-140">

          {/* Friend Card */}

          <div className="card bg-base-100 w-96 shadow-sm">

            <figure>
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-32 h-32 rounded-full object-cover"
              />
            </figure>

            <div className="card-body">

              <h2 className="card-title">
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
          </div>


          {/* Snooze */}

          <div className="card bg-base-100 w-96 shadow-sm mt-5 mb-5">

            <div className="card-body">

              <p className="font-bold">
                <i className="fa-regular fa-bell"></i>{" "}
                Snooze 2 weeks
              </p>

            </div>

          </div>


          {/* Archive */}

          <div className="card bg-base-100 w-96 shadow-sm mt-5 mb-5">

            <div className="card-body">

              <p className="font-bold">
                <i className="fa-solid fa-box-archive"></i>{" "}
                Archive
              </p>

            </div>

          </div>


          {/* Delete */}

          <div className="card bg-base-100 w-96 shadow-sm mt-5 mb-5">

            <div className="card-body">

              <p className="font-bold text-red-500">
                <i className="fa-solid fa-trash"></i>{" "}
                Delete
              </p>

            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div>

          {/* Stats */}

          <section className="flex gap-5">

            {/* Days Since Contact */}

            <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">

              <div className="card-body">

                <h2 className="font-bold text-2xl mt-5">
                  {friend.days_since_contact}
                </h2>

                <p className="text-gray-400">
                  On Track
                </p>

              </div>

            </div>


            {/* Goal */}

            <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">

              <div className="card-body">

                <h2 className="font-bold text-2xl mt-5">
                  {friend.goal}
                </h2>

                <p className="text-gray-400">
                  Goal Days
                </p>

              </div>

            </div>


            {/* Next Due Date */}

            <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">

              <div className="card-body">

                <h2 className="font-bold text-2xl mt-5">
                  {friend.next_due_date}
                </h2>

                <p className="text-gray-400">
                  Goal Days
                </p>

              </div>

            </div>

          </section>


          {/* Relationship Goal */}

          <div className="card w-150 bg-base-100 card-sm shadow-sm mt-5">

            <div className="card-body">

              <div className="flex justify-between items-center">

                <h2 className="card-title">
                  Relationship Goal
                </h2>

                <button className="btn">
                  Edit
                </button>

              </div>

              <p>
                Connect every{" "}
                <span className="font-bold">
                  30 days
                </span>
              </p>

            </div>

          </div>


          {/* Quick Check-In */}

          <div className="card w-150 bg-base-100 card-sm shadow-sm mt-5">

            <div className="card-body">

              <h2 className="card-title">
                Quick Check-In
              </h2>


              <div className="flex gap-3">

                {/* ================= CALL ================= */}

                <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">

                  <div className="card-body">

                    <h2 className="font-bold text-2xl mt-5 flex justify-center items-center">

                      <i className="fa-solid fa-phone"></i>

                    </h2>

                    <button
                      className="text-gray-400 text-center text-lg"
                      onClick={() => handleTimeline("call")}
                    >
                      Call
                    </button>

                  </div>

                </div>


                {/* ================= TEXT ================= */}

                <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">

                  <div className="card-body">

                    <h2 className="font-bold text-2xl mt-5 flex justify-center items-center">

                      <i className="fa-solid fa-message"></i>

                    </h2>

                    <button
                      className="text-gray-400 text-center text-lg"
                      onClick={() => handleTimeline("text")}
                    >
                      Text
                    </button>

                  </div>

                </div>


                {/* ================= VIDEO ================= */}

                <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">

                  <div className="card-body">

                    <h2 className="font-bold text-2xl mt-5 flex justify-center items-center">

                      <i className="fa-solid fa-video"></i>

                    </h2>

                    <button
                      className="text-gray-400 text-center text-lg"
                      onClick={() => handleTimeline("video")}
                    >
                      Video
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}