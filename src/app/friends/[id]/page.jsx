"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function FriendsDetails() {
  const [friend, setFriend] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedFriend = data.find(
          (friend) => String(friend.id) === String(id)
        );

        setFriend(selectedFriend);
      });
  }, [id]);

  if (!friend) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-10">

      <div>
        <h1>Id: {id}</h1>

         <div>
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





<div className="card bg-base-100 w-96 shadow-sm mt-5 mb-5">
 
  <div className="card-body">
    
    <p className="font-bold "><i class="fa-regular fa-bell"></i> snooze 2 weeks</p>
    
  </div>
</div>



<div className="card bg-base-100 w-96 shadow-sm mt-5 mb-5">
 
  <div className="card-body">
    
    <p className="font-bold "><i class="fa-solid fa-box-archive"></i> Archive</p>
    
  </div>
</div>



<div className="card bg-base-100 w-96 shadow-sm mt-5 mb-5">
 
  <div className="card-body">
    
    <p className="font-bold text-red-500 "><i class="fa-solid fa-trash"></i>Delete</p>
    
  </div>
</div>
      </div>

      </div>





      <div>

<section className="flex gap-5">

    <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-2xl mt-5">
            {friend.days_since_contact}
          </h2>
          <p className="text-gray-400"> On Track</p>

          <div className="justify-end card-actions"></div>
        </div>
      </div>



 <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-2xl mt-5">
            {friend.goal}
          </h2>
          <p className="text-gray-400"> Goal Days</p>

          <div className="justify-end card-actions"></div>
        </div>
      </div>


       <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-2xl mt-5">
            {friend.next_due_date}
          </h2>
          <p className="text-gray-400"> Goal Days</p>

          <div className="justify-end card-actions"></div>
        </div>
      </div>
</section>
    


 <div className="card w-150 bg-base-100 card-sm shadow-sm mt-5">
  <div className="card-body">
   <div className="flex"> <h2 className="card-title">Relationship Goal</h2>
     <button className="btn ml-90">Buy Now</button></div>
    <p>Connect every <span className="font-bold">30 days </span></p>
    <div className="justify-end card-actions">
     
    </div>
  </div>
</div>




 <div className="card w-150 bg-base-100 card-sm shadow-sm mt-5">
  <div className="card-body">
   <h2 className="card-title">Quick Check-In</h2>
     
   <div className="flex">

     <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-2xl mt-5 flex justify-center items-center">
            <i class="fa-solid fa-phone"></i>
          </h2>
          <p className="text-gray-400 text-center text-lg">call</p>

          <div className="justify-end card-actions"></div>
        </div>
      </div>


      <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h2 className="font-bold text-2xl mt-5 flex justify-center items-center">
           <i class="fa-solid fa-message"></i>
          </h2>
          <p className="text-gray-400 text-center text-lg">Text</p>

          <div className="justify-end card-actions"></div>
        </div>
      </div>



      <div className="card w-48 h-30 bg-base-100 card-xs shadow-sm">
        <div className="card-body">
          <h1 className="font-bold text-2xl mt-5 flex justify-center items-center">
            <i class="fa-solid fa-video"></i>
          </h1>
          <h2 className="text-gray-400 font-bold  text-center text-lg ">Video</h2>

          <div className="justify-end card-actions"></div>
        </div>
      </div>



   </div>
   
  </div>
</div>
      </div>





     
    </div>
  );
}