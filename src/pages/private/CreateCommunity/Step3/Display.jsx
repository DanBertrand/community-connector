import React from "react";

const Display = ({ hostings }) => {
  const carparks = hostings.filter((h) => h.type === "carpark");
  const campsites = hostings.filter((h) => h.type === "campsite");
  const rooms = hostings.filter((h) => h.type === "room");

  return (
    <>
      <div>
        {carparks.map((c, index) => (
          <span key={index}>{c.title}</span>
        ))}
      </div>
      <div>
        {campsites.map((c, index) => (
          <span key={index}>{c.title}</span>
        ))}
      </div>
      <div>
        {rooms.map((c, index) => (
          <span key={index}>{c.title}</span>
        ))}
      </div>
    </>
  );
};

export default Display;
